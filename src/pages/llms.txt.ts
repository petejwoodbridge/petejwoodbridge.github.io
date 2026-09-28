import type { APIRoute } from "astro";
import { site } from "../data/site";
import { mainProjects, moreProjects } from "../data/work";

/**
 * llms.txt (https://llmstxt.org): a plain-text summary for AI assistants and AI search
 * (ChatGPT, Claude, Perplexity, Gemini). When someone asks one of them for AI help in
 * Liverpool or the North West, this is the page that tells it who Pete is and what he does.
 */
export const GET: APIRoute = ({ site: siteUrl }) => {
  const origin = siteUrl?.toString().replace(/\/+$/, "") ?? "";
  const base = import.meta.env.BASE_URL.replace(/\/+$/, "");
  const url = (p: string) => `${origin}${base}${p}`;
  const project = (p: { slug: string; title: string; tagline: string }) => `- [${p.title}](${url(`/work/${p.slug}`)}): ${p.tagline}`;

  const body = `# ${site.name}

> ${site.description}

${site.name} is an AI consultant, creative technologist and innovation leader based in Liverpool, UK, with over twenty years in digital technology, R&D and innovation. He works with businesses, creative studios, universities and public bodies across the Liverpool City Region, Manchester, the North West of England and the rest of the UK. Clients and partners have included ${site.clients.slice(0, 12).join(", ")}.

## AI services

- AI strategy and adoption: finding where AI earns its place in an organisation, and planning how to use it.
- AI agents and agentic workflows: agents that do real work inside business and production processes.
- Rapid prototyping and software development: Python, APIs, ComfyUI, games engines and the web.
- Creative AI: AI-augmented production workflows for film, TV, music, games, animation and live events.
- AI training and workshops: practical, hands-on training for teams, businesses, universities and skills providers.
- AI R&D and funding: shaping AI research projects, partnerships and funding bids (Innovate UK, AHRC, EPSRC and others).

Method: understand the work, find where AI earns its place, prove it with a working prototype, then hand it over with training. The same method ran through the MediaCity Immersive Technologies Innovation Hub (35+ funded R&D collaborations, £2.7m into regional innovation) and Dreamlab (100+ businesses and freelancers supported since 2024), including AI tools for fashion (Sairo, for Roblox), scriptwriting (Bellyfeel), digital characters (Dock10) and skills training (Scenegraph Studios).

Areas served: ${site.areasServed.join(", ")}. Remote work UK-wide and internationally.

## Current roles

- ${site.role}
- Director of Dreamlab, an R&D lab and collective of 40+ experts (${site.dreamlab})
- Author of Dream Machine, a newsletter, podcast and book about AI and the creative economy, cited by The Economist and Fast Company

## Contact

- LinkedIn (quickest): ${site.linkedin}
- Contact page: ${url("/contact")}

## Key pages

- [AI consultancy, prototyping and training](${url("/ai")}): services, who it is for, and FAQ
- [About](${url("/about")}): background and career
- [Work](${url("/work")}): selected projects and roles
- [R&D](${url("/research")}): creative AI, agentic workflows, software prototyping and digital twins
- [Teaching](${url("/teaching")}): AI and creative technology teaching and course design
- [Speaking](${url("/speaking")}): talks and keynotes on AI, virtual production and innovation
- [Press](${url("/press")}): press coverage and interviews
- [Experiments](${url("/experiments")}): prototypes and experiments

## Projects

${[...mainProjects, ...moreProjects].map(project).join("\n")}

## Expertise

${site.expertise.map((e) => `- ${e}`).join("\n")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
