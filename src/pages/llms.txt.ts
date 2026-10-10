import type { APIRoute } from "astro";
import { site } from "../data/site";
import { u } from "../lib/url";
import { mainProjects, moreProjects } from "../data/work";
import { academicRoles, visitingRoles, credentials } from "../data/teaching";

/**
 * llms.txt (https://llmstxt.org): a plain-text summary for AI assistants and AI search
 * (ChatGPT, Claude, Perplexity, Gemini). When someone asks one of them for AI help in
 * Liverpool or the North West, this is the page that tells it who Pete is and what he does.
 */
export const GET: APIRoute = ({ site: siteUrl }) => {
  const origin = siteUrl?.toString().replace(/\/+$/, "") ?? "";
  // u() adds the base path and the trailing slash pages are served under.
  const url = (p: string) => `${origin}${u(p)}`;
  const updated = new Date().toISOString().slice(0, 10);
  const project = (p: { slug: string; title: string; tagline: string }) => `- [${p.title}](${url(`/work/${p.slug}`)}): ${p.tagline}`;

  const body = `# ${site.name}

> ${site.description}

Last updated: ${updated}

## Quick facts

- Name: ${site.name} (also written ${site.alternateNames.join(", ")})
- Based in: Liverpool, UK
- Current roles: Digital & Technology Cluster Lead for the Liverpool City Region; Director of Dreamlab; author of Dream Machine
- Credentials: ${credentials.join("; ")}
- Recognition: ${site.awards.join("; ")}

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
  - Newsletter: ${site.dreamMachine.newsletter}
  - Podcast: ${site.dreamMachine.podcast}
  - Book: ${site.dreamMachine.book}

## Recognition and press

- Dream Machine has been cited by The Economist and Fast Company.
- BIMA 100, 2020: named among the 100 most influential people in the UK digital and tech industry.
- 500 UK Trailblazers, 2024: UKII Intelligence Report, for work in AI animation.
- Press coverage and interviews: ${url("/press")}

## Teaching, lecturing and curriculum design

${site.name} is a lecturer, visiting lecturer and curriculum designer in creative AI and creative technology: AI agents and agentic workflows, software prototyping, virtual production, Unreal Engine, motion capture and immersive technology. He built and led the world's first MA Immersive Arts at Liverpool John Moores University (2018). ${credentials.join("; ")}. Available for guest lectures, workshops, industry training and curriculum design: ${url("/teaching")}

Academic roles:
${academicRoles.map((r) => `- ${r.when}: ${r.what}, ${r.where}`).join("\n")}

Visiting lectureships, mentoring and advisory roles:
${visitingRoles.map((r) => `- ${r.what}, ${r.where}`).join("\n")}

## Contact

- LinkedIn (quickest): ${site.linkedin}
- Contact page: ${url("/contact")}

## Key pages

- [AI consultancy, prototyping and training](${url("/ai")}): services, who it is for, and FAQ
- [About](${url("/about")}): background and career
- [Work](${url("/work")}): selected projects and roles
- [R&D](${url("/research")}): creative AI, agentic workflows, software prototyping and digital twins
- [Teaching](${url("/teaching")}): creative AI and creative technology teaching, visiting lectureships, curriculum design and FAQ
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
