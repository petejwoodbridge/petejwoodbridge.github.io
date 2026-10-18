// Runs in the deploy workflow after the build and before the deploy. Works out which pages are
// new or changed by comparing the freshly built sitemap against the one still live, and writes an
// IndexNow request body for the deploy job to send once the new site is up.
//
// "Changed" means a new URL or a new lastmod. lastmod is the page's last commit date (see
// astro.config.mjs), so a second change to the same page on the same day is not resubmitted.
// If the live sitemap can't be read (first deploy, outage), every URL is submitted.
//
// Usage: node scripts/indexnow.mjs <site-url>   → prints the JSON body, or nothing if no changes.
import { readdirSync, readFileSync } from "node:fs";

const site = new URL(process.argv[2] || "https://petewoodbridge.com/");
const base = site.href.replace(/\/?$/, "/");

/** The IndexNow key file in public/: a hex name whose contents are the same key. */
const keyFile = readdirSync("public").find(
  (f) => /^[0-9a-f]{8,128}\.txt$/i.test(f) && readFileSync(`public/${f}`, "utf8").trim() === f.slice(0, -4),
);
if (!keyFile) {
  console.error("[indexnow] No key file in public/, skipping.");
  process.exit(0);
}

/** url → lastmod for every <url> in the given sitemap XML. */
const entries = (xml) =>
  new Map(
    [...xml.matchAll(/<url>(.*?)<\/url>/gs)].map(([, u]) => [
      u.match(/<loc>([^<]+)<\/loc>/)[1],
      u.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1] ?? "",
    ]),
  );

const built = new Map();
for (const f of readdirSync("dist").filter((f) => /^sitemap-\d+\.xml$/.test(f))) {
  for (const [url, lastmod] of entries(readFileSync(`dist/${f}`, "utf8"))) built.set(url, lastmod);
}

let live = null;
try {
  const index = await (await fetch(new URL("sitemap-index.xml", base), { cache: "no-store" })).text();
  live = new Map();
  for (const [, loc] of index.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const res = await fetch(loc, { cache: "no-store" });
    if (!res.ok) throw new Error(`${loc}: HTTP ${res.status}`);
    for (const [url, lastmod] of entries(await res.text())) live.set(url, lastmod);
  }
} catch (err) {
  console.error(`[indexnow] Couldn't read the live sitemap (${err.message}), submitting every URL.`);
  live = null;
}

const urlList = [...built].filter(([url, lastmod]) => !live || live.get(url) !== lastmod).map(([url]) => url);
console.error(`[indexnow] ${urlList.length} of ${built.size} URL(s) new or changed.`);
for (const url of urlList) console.error(`  ${url}`);

if (urlList.length) {
  console.log(
    JSON.stringify({
      host: site.host,
      key: keyFile.slice(0, -4),
      keyLocation: new URL(keyFile, base).href,
      urlList,
    }),
  );
}
