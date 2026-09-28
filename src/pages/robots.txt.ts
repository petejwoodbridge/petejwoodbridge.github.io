import type { APIRoute } from "astro";

/** Generated so the sitemap URL always matches the configured domain. */
export const GET: APIRoute = ({ site }) => {
  const origin = site?.toString().replace(/\/+$/, "") ?? "";
  const path = import.meta.env.BASE_URL.replace(/\/+$/, "");
  // AI search and assistant crawlers are welcomed by name: being quotable by them is
  // how people asking an AI "who can help us with AI in Liverpool?" find this site.
  const aiBots = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "Claude-User", "PerplexityBot", "Perplexity-User", "Google-Extended", "Applebot-Extended", "Bingbot", "CCBot"];
  const body = `User-agent: *
Allow: /

${aiBots.map((b) => `User-agent: ${b}`).join("\n")}
Allow: /
Disallow: ${path}/video/

# Large media files do not need crawling
Disallow: ${path}/video/

Sitemap: ${origin}${path}/sitemap-index.xml
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
