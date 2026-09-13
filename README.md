# Pete Woodbridge — website

A video-first portfolio site built with [Astro](https://astro.build). Static output, no server needed.

## Run it

```bash
npm install
npm run dev       # local dev server at http://localhost:4321
npm run build     # production build into dist/
npm run preview   # serve the built site locally
```

Requires Node 22+.

## Deploy

`npm run build` produces a plain static site in `dist/`. Drag that folder onto Netlify, or connect the repo to
Netlify / Vercel / Cloudflare Pages with build command `npm run build` and output directory `dist`.
Set `site` in `astro.config.mjs` to the final domain so share images and canonical URLs are correct.

## Things to fill in

- **Your photo.** Save a portrait as `public/img/pete.jpg` (portrait orientation works best). It appears on the
  homepage and About page automatically on the next build.
- **Email.** Set `email` in `src/data/site.ts` to show an email button on the Contact page. Leave empty to hide it.
- **Domain.** Set `url` in `src/data/site.ts` and `site` in `astro.config.mjs`.

## Where the content lives

| File | What |
|---|---|
| `src/data/site.ts` | Name, role, links, nav, client and funder lists |
| `src/data/work.ts` | The 15 work pages (8 main + 7 second tier): copy, links, press, video and card assets |
| `src/data/experiments.json` | The 83 experiments (generated from the old site archive by `../content-archive/tools/`) |
| `src/pages/index.astro` | Homepage copy (hero, intro, stats, pillars, "Now") |
| `src/pages/about.astro` | About copy and the roles timeline |
| `src/pages/contact.astro` | Contact page |
| `src/pages/work/[slug].astro` | Template for every work page |
| `src/pages/experiments.astro` | Experiments grid and detail panels |
| `src/styles/global.css` | Design system: colours, type, components |

## Adding a work page

Add an object to the `projects` array in `src/data/work.ts` (copy an existing one). Give it `tier: "more"` to put it
in the second row on the Work page. Put its background video at `public/video/<slug>.mp4` with a poster
`public/video/<slug>.jpg`, a 6-second hover loop at `public/video/<slug>-card.mp4`, and a card image at
`public/img/card-<slug>.webp`. The page is generated at `/work/<slug>` automatically.

## Video

All source footage is in `../content-archive/assets/background-videos/`. Web versions in `public/video/` were made
with ffmpeg (H.264, muted, `faststart`): page backgrounds at 720p or 1080p, hover loops at 640×360, experiments
loops at 960×540. The scripts that produced them are in `../content-archive/tools/`.
