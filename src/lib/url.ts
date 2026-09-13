/**
 * Prefix a root-relative path with the site's base path.
 *
 * Served from a domain root (a custom domain, or a `<user>.github.io` repo) the base is "/"
 * and this is a no-op. Served from a GitHub Pages project repo the base is "/<repo>", and every
 * internal link and asset needs that prefix or it 404s.
 *
 * Use it for every internal href and every asset src. Leave external URLs alone.
 */
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, "");

export function u(path: string): string {
  if (!path) return path;
  if (/^([a-z]+:)?\/\//i.test(path) || path.startsWith("mailto:") || path.startsWith("tel:")) return path;
  if (path.startsWith("#")) return path;
  if (!path.startsWith("/")) return path;
  return `${BASE}${path}` || "/";
}
