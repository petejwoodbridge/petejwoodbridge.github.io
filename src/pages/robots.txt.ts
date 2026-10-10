import type { APIRoute } from "astro";

/** Generated so the sitemap URL always matches the configured domain. */
export const GET: APIRoute = ({ site }) => {
  const origin = site?.toString().replace(/\/+$/, "") ?? "";
  const path = import.meta.env.BASE_URL.replace(/\/+$/, "");
  // AI search and assistant crawlers are welcomed by name: being quotable by them is
  // how people asking an AI "who can help us with AI in Liverpool?" find this site.
  const aiBots = [
    "GPTBot", "OAI-SearchBot", "ChatGPT-User",
    "ClaudeBot", "Claude-Web", "Claude-SearchBot", "Claude-User",
    "PerplexityBot", "Perplexity-User",
    "Google-Extended", "Applebot-Extended", "Bingbot",
    "Meta-ExternalAgent", "Amazonbot", "DuckAssistBot", "CCBot",
  ];
  // Only the clips themselves are kept out, and only for the general group: /video/ also
  // holds the poster images, which are worth indexing. A named group replaces "*" entirely
  // for that bot, so the AI crawlers below may fetch everything.
  const body = `User-agent: *
Allow: /
Disallow: ${path}/*.mp4$

${aiBots.map((b) => `User-agent: ${b}`).join("\n")}
Allow: /

Sitemap: ${origin}${path}/sitemap-index.xml
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
