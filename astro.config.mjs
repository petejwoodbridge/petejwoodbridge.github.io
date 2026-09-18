// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

/**
 * The public URL of the site. Canonical tags, the sitemap and social share cards
 * are all built from this, so it must match the real domain once it is live.
 * Set SITE_URL in your host's environment (Netlify/Vercel/Cloudflare) or edit the fallback below.
 */
const SITE_URL = process.env.SITE_URL || "https://petejwoodbridge.github.io";

/**
 * The sub-path the site is served from. "/" for a custom domain or a `<user>.github.io` repo;
 * "/<repo>" for a GitHub Pages project repo. The deploy workflow sets this automatically.
 */
const BASE_PATH = process.env.BASE_PATH || "/";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: "ignore",
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
      lastmod: new Date(),
      serialize(item) {
        // Strip trailing slashes so sitemap URLs match the canonical tags exactly.
        const u = new URL(item.url);
        const path = u.pathname.replace(/\/+$/, "") || "/";
        u.pathname = path;
        item.url = u.toString();

        if (path === "/") item.priority = 1.0;
        else if (path === "/work" || path === "/about") item.priority = 0.9;
        else if (path.startsWith("/work/")) item.priority = 0.8;
        else item.priority = 0.7;
        return item;
      },
    }),
  ],
  // "hover" rather than "viewport": the work pages carry a lot of links, and prefetching
  // every one of them on sight competed with the video and images for bandwidth.
  // Hover (and touchstart) still makes a click feel instant without the bulk download.
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
  build: { inlineStylesheets: "auto" },
  compressHTML: true,
});
