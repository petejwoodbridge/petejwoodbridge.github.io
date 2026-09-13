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

## Publish it on GitHub Pages

The repo is set up to deploy itself. Push this folder to an empty GitHub repo:

```bash
git push -u origin main
```

The remote is already pointed at `github.com/petejwoodbridge/site`, which publishes to
`https://petejwoodbridge.github.io/site/`. The repo name becomes part of the address, so if you would rather
it read `/petewoodbridge/`, rename the repo in Settings first and update the remote. Naming the repo
`petejwoodbridge.github.io` instead drops the sub-path entirely and serves from the root.

That is it. The workflow switches Pages on by itself the first time it runs, so there is nothing to
click in Settings. Every later push to `main` rebuilds and republishes.

Watch the first run under the repo's **Actions** tab. It takes a couple of minutes; the published address
appears on the `deploy` job when it finishes, and also under Settings → Pages. The workflow in
`.github/workflows/deploy.yml` reads the real published URL from your Pages settings and feeds it into the
build, so canonical tags, the sitemap and social cards always match where the site actually lives.

Because the site sits on a sub-path rather than a domain root, every internal link and asset is written
through the `u()` helper in `src/lib/url.ts`.
**If you add a link or an image, wrap its path in `u()`** or it will break once published:

```astro
<a href={u("/work")}>Work</a>
<img src={u("/img/thing.webp")} alt="" />
```

External URLs are left alone.

### Making the repo private later

GitHub Pages only publishes from a public repo on a free account. To keep the code private with the site
still public, either:

- **Upgrade to GitHub Pro** (about £4/month), then flip the repo to private in Settings. Nothing else changes;
  this workflow keeps working.
- **Or move hosting to [Cloudflare Pages](https://pages.cloudflare.com)**, which deploys from a private GitHub
  repo for free and has no bandwidth cap, which suits a site carrying this much video. Connect the repo, set
  the build command to `npm run build` and the output directory to `dist`, and set `SITE_URL` in the project's
  environment variables. `BASE_PATH` stays `/`, so the `u()` helper becomes a no-op.

A site that nobody can view without permission needs a GitHub Enterprise Cloud organisation, or Cloudflare
Access in front of Cloudflare Pages. Either way Google cannot index it, so it is a trade against being found.

### Moving to your own domain later

Add the domain in Settings → Pages, and GitHub will commit a `CNAME` file. The base path becomes `/`, the
`u()` helper turns into a no-op, and everything keeps working. Nothing else needs changing.

## Things to fill in

- **Your photo.** Save a portrait as `public/img/pete.jpg` (portrait orientation works best). It appears on
  the homepage and About page automatically on the next build.
- **Email.** Set `email` in `src/data/site.ts` to show an email button on the Contact page. Empty hides it.

## Getting it into Google

Everything mechanical is already done: a generated `sitemap-index.xml`, a `robots.txt` pointing at it,
canonical tags, `JSON-LD` structured data (Person, WebSite, CreativeWork, BreadcrumbList), per-page titles,
descriptions and social cards, and a `.nojekyll` file so GitHub Pages serves the build output correctly.

Once it is live, do these two things, which only you can do:

1. Go to [Google Search Console](https://search.google.com/search-console), add the site as a URL-prefix
   property using the exact published address, and verify it.
2. Submit `sitemap-index.xml` there, then use **URL Inspection → Request indexing** on the homepage.

Indexing normally takes a few days to a couple of weeks. Links to the site from your LinkedIn profile and
from Dreamlab will speed it up considerably.

## Where the content lives

| File | What |
|---|---|
| `src/data/site.ts` | Name, role, links, nav, client and funder lists |
| `src/data/work.ts` | The 15 work pages (8 main + 7 second tier): copy, links, press, video and card assets |
| `src/data/experiments.json` | The 83 experiments, generated from the content archive |
| `src/data/press.json` | The 41 press entries behind `/press` |
| `src/pages/index.astro` | Homepage copy (hero, intro, stats, pillars, "Now") |
| `src/pages/about.astro` | About copy and the roles timeline |
| `src/pages/contact.astro` | Contact page |
| `src/pages/work/[slug].astro` | Template for every work page |
| `src/pages/experiments.astro` | Experiments grid and detail panels |
| `src/pages/press.astro` | Press list. Not in the navigation, not in the sitemap, marked `noindex` |
| `src/components/Seo.astro` | Titles, canonical tags, social cards, structured data |
| `src/lib/url.ts` | The `u()` base-path helper |
| `src/styles/global.css` | Design system: colours, type, components |

## Adding a work page

Add an object to the `projects` array in `src/data/work.ts` (copy an existing one). Give it `tier: "more"` to
put it in the second row on the Work page. Put its background video at `public/video/<slug>.mp4` with a poster
`public/video/<slug>.jpg`, a 6-second hover loop at `public/video/<slug>-card.mp4`, and a card image at
`public/img/card-<slug>.webp`. The page is generated at `/work/<slug>` automatically.

## Video

Source footage lives outside this repo, in `../content-archive/assets/background-videos/`. The web versions in
`public/video/` were made with ffmpeg (H.264, muted, `faststart`): page backgrounds at 720p or 1080p, hover
loops at 640×360, experiment loops at 960×540. The scripts that produced them are in `../content-archive/tools/`.

Videos never autoload on a metered connection or when the visitor prefers reduced motion, and each one sits
behind a still poster frame so the page is readable before any video arrives.

## Responsive

Checked for layout overflow and console errors at 375, 390, 430, 768, 834, 1024, 1280, 1440 and 1920 pixels
wide. Below 800px the navigation collapses into a full-screen menu, and card videos play on scroll rather
than on hover.
