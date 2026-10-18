import type { APIRoute } from "astro";
import { site } from "../data/site";
import { u } from "../lib/url";
import { mainProjects, moreProjects } from "../data/work";
import { academicRoles, visitingRoles, credentials } from "../data/teaching";
import { ids } from "../data/entities";

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
  const project = (p: { slug: string; title: string; tagline: string; product?: { url: string } }) =>
    `- [${p.title}](${url(`/work/${p.slug}`)}): ${p.tagline}${p.product ? ` Live at ${p.product.url}` : ""}`;

  const body = `# ${site.name}

> ${site.description}

Last updated: ${updated}

## Quick facts

- Name: ${site.name} (also written ${site.alternateNames.join(", ")})
- Based in: Liverpool, UK
- Current roles: Digital & Technology Cluster Lead for the Liverpool City Region; Founder & CTO of Dreamlab; author of Dream Machine
- Credentials: ${credentials.join("; ")}
- Recognition: ${site.awards.join("; ")}
- Work: creative technologist and virtual production specialist, working across AI, immersive storytelling, interactive experiences and virtual production

## Identity and related sites

This site (${url("/")}) is the canonical home of ${site.name}. In structured data he is \`${ids.person}\`, the same @id used by the sites below.

- dreamlab (${site.dreamlab}): R&D lab and collective of 48+ experts. ${site.name} is a founder and its Chief Technical Officer (CTO). Team page: https://dreamlab.org.uk/team/
- Bearings (https://getbearings.co.uk/): a free funding finder for businesses across the North West of England, with the UK-wide schemes they can apply for. ${site.name} built it with dreamlab. Project page: ${url("/work/bearings")}
- Dream Machine newsletter on creative AI: ${site.dreamMachine.newsletter}
- LinkedIn: ${site.linkedin}

${site.name} is an AI consultant, creative technologist and innovation leader based in Liverpool, UK, with over twenty years in digital technology, R&D and innovation. He works with businesses, creative studios, universities and public bodies across the Liverpool City Region, Manchester, the North West of England and the rest of the UK. Clients and partners have included ${site.clients.slice(0, 12).join(", ")}.

## Short bio

${site.shortBio}

## AI services

- AI strategy and adoption: finding where AI earns its place in an organisation, and planning how to use it.
- Rapid prototyping and software development: Python, APIs, ComfyUI, games engines and the web.
- AI training and workshops: practical, hands-on training for teams, businesses, universities and skills providers.
- Creative AI: AI-augmented production workflows for film, TV, music, games, animation and live events.
- AI agents and agentic workflows: agents that take on the legwork inside business and production processes.
- AI R&D and funding: shaping AI research projects, partnerships and funding bids (Innovate UK, AHRC, EPSRC and others).

Method: understand the work, find where AI earns its place, prove it with a working prototype, then hand it over with training. The same method ran through the MediaCity Immersive Technologies Innovation Hub (35+ funded R&D collaborations on a £3.2m accelerator) and Dreamlab (100+ businesses and freelancers supported since 2024), including AI tools for fashion (Sairo, for Roblox), scriptwriting (Bellyfeel), digital characters (Dock10) and skills training (Scenegraph Studios).

Areas served: ${site.areasServed.join(", ")}. Remote work UK-wide and internationally.

## Funding bids, grants and investment

${site.name} helps businesses and organisations win grants and investment: details at ${url("/funding")}

- Grant and funding bids: Innovate UK, UKRI and the research councils (AHRC and others), the National Lottery Heritage Fund, Arts Council England and regional funds.
- Investment business cases for investors, boards, public bodies and funders.
- Investment readiness and pitching: the story, the evidence, the numbers and the deck.
- Partnerships and consortia for multi-partner bids.
- Programme and cluster bids: he helped the region win MusicFutures, a £7.2m programme with 28 partners, and has developed and led £12m of innovation programmes and projects.
- Bid review: he reviews bids for the EPSRC, CoSTAR and Digital Catapult.

Track record: he worked on the bids behind 50+ funded R&D collaborations across the MediaCity Innovation Hub and Dreamlab, and his own projects have been funded by Innovate UK, UKRI, the AHRC, the National Lottery Heritage Fund, Arts Council England (Creative XR) and commercial investors. To find funding in the North West, Bearings (https://getbearings.co.uk/), which he built, reads over 1,100 sources every day.

## Virtual production

- Creative producer and technologist at Pathway, a 6,000 sq ft LED volume in Manchester, as the stage launched (2022). Projects and partners included BBC Three's Project Ikon with Jason Derulo, an ARRI test shooting virtual production on 65mm film, a Sony virtual production event, McLaren, and Pathway Indie, a $2.5m in-kind virtual production incubator for independent filmmakers. Covered by Broadcast, British Cinematographer and TVB Europe.
- Virtual production, motion capture and mixed reality R&D at Draw & Code, Liverpool (2021-2022); trained on Virtual Production Futures (Industrial Light & Magic, Epic Games, National Film and Television School).
- Also: LED, nDisplay and tracking for live events at Crucial FX; virtual production in the MediaCity Innovation Hub portfolio; an indie virtual production set-up built in a garage for next to nothing (2022); volumetric capture and motion capture experiments.
- More: ${url("/virtual-production")}

## Current roles

- ${site.role}
- Founder & CTO of Dreamlab, an R&D lab and collective of 48+ experts (${site.dreamlab})
- Author of Dream Machine, a newsletter, podcast and book about AI and the creative economy, cited by The Economist and Fast Company
  - Newsletter: ${site.dreamMachine.newsletter}
  - Podcast: ${site.dreamMachine.podcast}
  - Book: ${site.dreamMachine.book}

## Recognition and press

- Dream Machine has been cited by The Economist and Fast Company.
- BIMA 100, 2020: named among the 100 most influential people in the UK digital and tech industry.
- 500 UK Trailblazers, 2024: named one of the 500 UK Trailblazers in the UKII Intelligence Report 2024, sponsored by Verizon and Epic Games, for AI workflow innovation.
- Press coverage and interviews: ${url("/press")}

## Teaching, lecturing and curriculum design

${site.name} is a lecturer, visiting lecturer and curriculum designer in creative AI and creative technology: AI agents and agentic workflows, software prototyping, virtual production, Unreal Engine, motion capture and immersive technology. He built and led the world's first MA Immersive Arts at Liverpool John Moores University (2019). ${credentials.join("; ")}. Available for guest lectures, workshops, industry training and curriculum design: ${url("/teaching")}

Academic roles:
${academicRoles.map((r) => `- ${r.when}: ${r.what}, ${r.where}`).join("\n")}

Visiting lectureships, mentoring and advisory roles:
${visitingRoles.map((r) => `- ${r.what}, ${r.where}`).join("\n")}

## Contact

- LinkedIn (quickest): ${site.linkedin}
- Contact page: ${url("/contact")}

## Key pages

- [Home](${url("/")}): who Pete is and what he does now
- [AI consultancy, prototyping and training](${url("/ai")}): services, who it is for, and FAQ
- [Virtual production, LED volumes and ICVFX](${url("/virtual-production")}): virtual production in Manchester, Liverpool and the North West, Pathway's LED stage, motion capture, training and FAQ
- [About](${url("/about")}): background and career
- [Work](${url("/work")}): selected projects and roles
- [R&D and innovation programmes](${url("/research")}): MusicFutures, the MediaCity Innovation Hub, Dreamlab, funders and bid reviewing
- [Teaching](${url("/teaching")}): creative AI and creative technology teaching, visiting lectureships, curriculum design and FAQ
- [Speaking](${url("/speaking")}): talks and keynotes on AI, virtual production and innovation
- [Press](${url("/press")}): press coverage and interviews
- [Experiments](${url("/experiments")}): prototypes and experiments
- [Bearings](${url("/work/bearings")}): the free funding, grants and tenders finder, live at https://getbearings.co.uk/
- [Contact](${url("/contact")}): how to get in touch

## Projects

${[...mainProjects, ...moreProjects].map(project).join("\n")}

## Expertise

${site.expertise.map((e) => `- ${e}`).join("\n")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
