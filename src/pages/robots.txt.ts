import type { APIRoute } from "astro";

/** Generated so the sitemap URL always matches the configured domain. */
export const GET: APIRoute = ({ site }) => {
  const origin = site?.toString().replace(/\/+$/, "") ?? "";
  const path = import.meta.env.BASE_URL.replace(/\/+$/, "");
  const body = `User-agent: *
Allow: /

# Large media files do not need crawling
Disallow: ${path}/video/

Sitemap: ${origin}${path}/sitemap-index.xml
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
