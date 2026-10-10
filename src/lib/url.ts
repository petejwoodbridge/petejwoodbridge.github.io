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
  const v = MEDIA.test(path) ? version(path) : "";
  return `${BASE}${path}${v ? `?v=${v}` : ""}` || "/";
}

/** The same asset with another extension, versioned for its own contents: `a.jpg?v=…` → `a.webp?v=…`. */
export function withExt(url: string, ext: string): string {
  return u(url.split("?")[0].slice(BASE.length).replace(/\.\w+$/, ext));
}
