import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";

/**
 * Prefix a root-relative path with the site's base path.
 *
 * Served from a domain root (a custom domain, or a `<user>.github.io` repo) the base is "/"
 * and this is a no-op. Served from a GitHub Pages project repo the base is "/<repo>", and every
 * internal link and asset needs that prefix or it 404s.
 *
 * Use it for every internal href and every asset src. Leave external URLs alone.
 *
 * Page paths get a trailing slash ("/work" → "/work/", "/ai#faq" → "/ai/#faq"). GitHub Pages
 * serves every page as a folder index and 301-redirects the bare form, so linking to the
 * slash form saves a hop and keeps links, canonicals and the sitemap in agreement.
 *
 * Videos and images also get a short hash of the file as `?v=…`. Recutting a loop keeps its
 * filename, and without a new URL browsers keep playing the copy they cached.
 */
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, "");
const MEDIA = /\.(mp4|webm|jpe?g|png|webp|avif|gif)$/i;
const versions = new Map<string, string>();

function version(path: string): string {
  let v = versions.get(path);
  if (v === undefined) {
    try {
      v = createHash("sha1").update(readFileSync(`public${path}`)).digest("hex").slice(0, 8);
    } catch {
      // A missing file is almost always a typo in a src; say so at build time.
      console.warn(`[url] u(): no such file public${path}`);
      v = "";
    }
    versions.set(path, v);
  }
  return v;
}

export function u(path: string): string {
  if (!path) return path;
  if (/^([a-z]+:)?\/\//i.test(path) || path.startsWith("mailto:") || path.startsWith("tel:")) return path;
  if (path.startsWith("#")) return path;
  if (!path.startsWith("/")) return path;
  // Split off any ?query or #hash so the tests below look at the path alone.
  const cut = path.search(/[?#]/);
  let pathname = cut === -1 ? path : path.slice(0, cut);
  const rest = cut === -1 ? "" : path.slice(cut);
  if (MEDIA.test(pathname)) {
    // An explicit ?query wins; a #fragment (e.g. "#t=0.1") still gets the version before it.
    const v = rest.startsWith("?") ? "" : version(pathname);
    return `${BASE}${pathname}${v ? `?v=${v}` : ""}${rest}`;
  }
  // A page (no file extension): give it the trailing slash GitHub Pages would redirect to.
  if (!pathname.endsWith("/") && !/\.[a-z0-9]+$/i.test(pathname.slice(pathname.lastIndexOf("/")))) pathname += "/";
  return `${BASE}${pathname}${rest}` || "/";
}

/** The same asset with another extension, versioned for its own contents: `a.jpg?v=…` → `a.webp?v=…`. */
export function withExt(url: string, ext: string): string {
  return u(url.split(/[?#]/)[0].slice(BASE.length).replace(/\.\w+$/, ext));
}
