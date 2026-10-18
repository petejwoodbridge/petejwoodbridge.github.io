// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { execSync } from "node:child_process";

/**
 * The public URL of the site. Canonical tags, the sitemap and social share cards
 * are all built from this, so it must match the real domain once it is live.
 * Set SITE_URL in your host's environment (Netlify/Vercel/Cloudflare) or edit the fallback below.
 * Always https: GitHub Pages reports the origin as http:// until HTTPS is enforced, and a
 * build in that window would otherwise send http canonicals and sitemap URLs to Google.
 */
const SITE_URL = (process.env.SITE_URL || "https://petewoodbridge.com").replace(/^http:\/\/(?!localhost)/, "https://");

/**
 * The sub-path the site is served from. "/" for a custom domain or a `<user>.github.io` repo;
 * "/<repo>" for a GitHub Pages project repo. The deploy workflow sets this automatically.
 */
const BASE_PATH = process.env.BASE_PATH || "/";

/**
 * Sitemap lastmod: the date of the last commit to a page's own source and the data it renders
 * from. Shared layout and SEO components are left out on purpose, so a footer tweak does not
 * tell crawlers that every page changed. Needs full git history (fetch-depth: 0 in the deploy
 * workflow); without git, pages simply go out with no lastmod.
 */
const PAGE_DATA = {
  "/": ["src/pages/index.astro", "src/data/work.ts"],
  "/work/": ["src/pages/work/index.astro", "src/data/work.ts"],
  "/experiments/": ["src/pages/experiments.astro", "src/data/experiments.json"],
  "/events/": ["src/pages/events.astro", "src/data/events.json"],
  "/speaking/": ["src/pages/speaking.astro", "src/data/speaking.json"],
  "/press/": ["src/pages/press.astro", "src/data/press.json"],
  "/teaching/": ["src/pages/teaching.astro", "src/data/teaching.ts"],
};
function sourcesFor(path) {
  if (PAGE_DATA[path]) return PAGE_DATA[path];
  if (/^\/work\/[^/]+\/$/.test(path)) return ["src/pages/work/[slug].astro", "src/data/work.ts"];
  if (/^\/experiments\/[^/]+\/$/.test(path)) return ["src/pages/experiments/[slug].astro", "src/data/experiments.json"];
  return [`src/pages${path.replace(/\/$/, "")}.astro`];
}
const gitDates = new Map();
function lastCommitDate(files) {
  const key = files.join("|");
  if (!gitDates.has(key)) {
    let date;
    try {
      date = execSync(`git log -1 --format=%cs -- ${files.map((f) => `"${f}"`).join(" ")}`, { encoding: "utf8" }).trim();
    } catch {}
    gitDates.set(key, date || undefined);
  }
  return gitDates.get(key);
}

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  // GitHub Pages serves each page as a folder index and 301-redirects "/about" to "/about/",
  // so the slash form is the real URL. Links, canonicals and the sitemap all use it.
  trailingSlash: "always",
  // Stable asset filenames, deliberately not content-hashed.
  //
  // GitHub Pages serves EVERYTHING with Cache-Control: max-age=600, hashed assets
  // included, so content hashing buys no extra caching here. What it does buy is a
  // 10-minute window after any CSS change where a browser holding the previous
  // index.html asks for a hash that no longer exists, gets a 404, and renders the
  // site with no styles at all. Stable names turn that failure into "styles are up
  // to 10 minutes stale", which is a far better way to be wrong.
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: "_astro/[name][extname]",
          entryFileNames: "_astro/[name].js",
          chunkFileNames: "_astro/[name].js",
        },
      },
    },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404"),
      changefreq: "monthly",
      // lastmod is the page's last commit (see lastCommitDate), never the build date: stamping
      // every URL with the build date tells crawlers everything changed.
      serialize(item) {
        // Sitemap URLs keep their trailing slash, matching the canonical tags exactly.
        const path = new URL(item.url).pathname;
        const lastmod = lastCommitDate(sourcesFor("/" + path.slice(BASE_PATH.replace(/\/?$/, "/").length)));
        if (lastmod) item.lastmod = lastmod;
        if (path === "/") item.priority = 1.0;
        else if (path === "/work/" || path === "/about/" || path === "/ai/") item.priority = 0.9;
        else if (path.startsWith("/work/") || path === "/teaching/" || path === "/virtual-production/") item.priority = 0.8;
        // One page per experiment: worth indexing, but below the main pages.
        else if (path.startsWith("/experiments/") && path !== "/experiments/") item.priority = 0.5;
        else item.priority = 0.7;
        return item;
      },
    }),
  ],
  // Astro's prefetch is off: src/lib/instant-nav.ts does the job instead. It keeps each page in
  // memory with its hero image already decoded, so a click swaps in a finished page rather than
  // fetching the HTML again and then waiting on the poster.
  prefetch: false,
  build: { inlineStylesheets: "auto" },
  compressHTML: true,
});
