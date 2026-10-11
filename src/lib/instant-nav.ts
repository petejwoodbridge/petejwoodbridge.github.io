// Makes clicking between pages feel instant, including the first visit to a page.
//
// Astro's own prefetch only fetched the HTML, so a first visit still swapped in a dark hero
// and waited on the poster image. And GitHub Pages marks everything stale after 10 minutes,
// so even a prefetched page went back to the network on click. Here each page is "warmed"
// once: its HTML is kept in memory and its above-the-fold images (the ones marked
// loading="eager") are downloaded and decoded. The router is then handed the copy in memory,
// so a warmed page swaps in complete, with no network wait.
//
// A page is warmed when the pointer rests on a link, a finger touches it, or it takes keyboard
// focus, and the main nav pages are warmed one at a time once the current page is idle.

type Page = { html: string; images: Promise<unknown> } | null;

const pages = new Map<string, Promise<Page>>();
let parser: DOMParser | undefined;
const parse = (html: string) => (parser ??= new DOMParser()).parseFromString(html, "text/html");

const conn = (navigator as any).connection;
// Data saver or a slow connection: no background warming, only links the visitor reaches for.
const frugal = () => conn?.saveData === true || /(^|-)2g|3g/.test(conn?.effectiveType ?? "");

/** The page key for a link, or null if it is not a same-site page the router would handle. */
function keyFor(a: HTMLAnchorElement): string | null {
  if (a.target && a.target !== "_self") return null;
  if (a.hasAttribute("download") || a.dataset.astroReload != null || a.dataset.astroPrefetch === "false") return null;
  const url = new URL(a.href, location.href);
  if (url.origin !== location.origin) return null;
  if (url.pathname === location.pathname) return null;
  // Files (feeds, llms.txt, images) are not pages.
  if (/\.[a-z0-9]+$/i.test(url.pathname) && !url.pathname.endsWith(".html")) return null;
  return url.origin + url.pathname + url.search;
}

function loadImage(src: string, high: boolean) {
  const img = new Image();
  (img as any).fetchPriority = high ? "high" : "low";
  img.src = src;
  return img.decode().catch(() => {});
}

function warm(key: string, high: boolean): Promise<Page> {
  let page = pages.get(key);
  if (page) return page;
  page = fetch(key, { priority: high ? "high" : "low" } as RequestInit)
    .then(async (res) => {
      // A redirect or anything that is not HTML goes back to the router's normal path.
      if (!res.ok || res.redirected || !(res.headers.get("content-type") ?? "").includes("text/html")) return null;
      const html = await res.text();
      const doc = parse(html);
      const srcs = [...doc.querySelectorAll<HTMLImageElement>("main img[loading=eager]")]
        .map((img) => img.getAttribute("src"))
        .filter((s): s is string => !!s)
        .map((s) => new URL(s, key).href);
      return { html, images: Promise.all(srcs.map((s) => loadImage(s, high))) };
    })
    .catch(() => null);
  pages.set(key, page);
  // A failed warm can be tried again on the next hover.
  page.then((p) => {
    if (!p) pages.delete(key);
    else p.images.then(() => ready.add(key));
  });
  return page;
}
/** Pages whose HTML and hero images are fully in memory. */
const ready = new Set<string>();

// The page being left may still be streaming its background and card videos, which starves the
// next page of bandwidth. Once a click commits to leaving, cut those downloads off.
function stopVideos() {
  document.querySelectorAll<HTMLVideoElement>("main video").forEach((v) => {
    if (!v.currentSrc) return;
    v.pause();
    v.removeAttribute("src");
    v.querySelectorAll("source").forEach((s) => s.remove());
    v.load();
  });
}

// ---- intent: pointer rest, touch, focus ----
let hoverTimer: ReturnType<typeof setTimeout> | undefined;
const linkFrom = (e: Event) => (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;

document.addEventListener("pointerover", (e) => {
  if ((e as PointerEvent).pointerType === "touch") return;
  const a = linkFrom(e);
  clearTimeout(hoverTimer);
  if (!a) return;
  const key = keyFor(a);
  // A short rest, so sweeping the mouse across a grid of cards does not warm every one.
  if (key) hoverTimer = setTimeout(() => warm(key, true), 50);
}, { passive: true });

for (const type of ["touchstart", "mousedown", "focusin"] as const) {
  document.addEventListener(type, (e) => {
    const a = linkFrom(e);
    const key = a && keyFor(a);
    if (key) warm(key, true);
  }, { passive: true, capture: true });
}

// ---- hand the warmed copy to the router ----
document.addEventListener("astro:before-preparation", (e: any) => {
  if (e.formData) return;
  const to = e.to as URL;
  const key = to.origin + to.pathname + to.search;
  const fallback = e.loader as () => Promise<void>;
  e.loader = async () => {
    if (!ready.has(key)) stopVideos();
    const page = await warm(key, true);
    if (!page || e.signal.aborted) return fallback();
    const doc = parse(page.html);
    doc.querySelectorAll("noscript").forEach((el) => el.remove());
    // Stylesheets this page does not have yet still need the router's own preload, or the
    // new page would paint unstyled for a moment.
    const newSheet = [...doc.querySelectorAll("head link[rel=stylesheet]")].some(
      (l) => !document.querySelector(`link[rel=stylesheet][href="${l.getAttribute("href")}"]`)
    );
    if (newSheet || !doc.querySelector('[name="astro-view-transitions-enabled"]')) return fallback();
    e.newDocument = doc;
    // Give the hero image a moment to finish so the page arrives whole, but never hold
    // the click for long: on a slow image the page swaps in and the image fades up after.
    await Promise.race([page.images, new Promise((r) => setTimeout(r, 300))]);
  };
});

// ---- background: the main nav pages, one at a time, once the page is idle ----
let queued = false;
function warmNav() {
  if (queued || frugal()) return;
  queued = true;
  const keys = [...document.querySelectorAll<HTMLAnchorElement>("[data-nav] a[href], [data-menu-panel] a[href]")]
    .map(keyFor)
    .filter((k): k is string => !!k);
  const next = () => {
    const key = keys.shift();
    if (!key) return;
    warm(key, false).then((p) => p?.images).finally(() => idle(next));
  };
  next();
}
function idle(fn: () => void) {
  if ("requestIdleCallback" in window) (window as any).requestIdleCallback(fn, { timeout: 3000 });
  else setTimeout(fn, 300);
}
if (document.readyState === "complete") idle(warmNav);
else window.addEventListener("load", () => setTimeout(() => idle(warmNav), 1500), { once: true });
