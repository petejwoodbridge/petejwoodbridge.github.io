import { createHash } from "node:crypto";
import { u } from "../lib/url";
import experiments from "./experiments.json";

/**
 * What the experiments dialog shows, keyed by slug and served as /experiments.json.
 *
 * The page used to carry 80 hidden dialogs (about two thirds of its HTML). It now has one,
 * filled from this file when it first opens. Keys are short and empty fields are left out to
 * keep the download small; media URLs go through u() so they keep their `?v=` hashes.
 */
export type ExperimentDialog = {
  t: string; // title
  m?: string; // meta (eyebrow)
  b?: string; // blurb
  h?: string; // body HTML
  x?: string; // external "Open" link
  l?: [string, string][]; // links: [label, url]
  v?: string; // full video
  p?: string; // video poster
  i?: string; // still image, when there is no video
};

const dialogs: Record<string, ExperimentDialog> = {};
for (const e of experiments) {
  const d: ExperimentDialog = { t: e.title };
  if (e.meta) d.m = e.meta;
  if (e.blurb) d.b = e.blurb;
  if (e.html) d.h = e.html;
  if (e.external) d.x = e.external;
  if (e.links.length) d.l = e.links.map((l) => [l.label, l.url] as [string, string]);
  if (e.video) {
    d.v = u(e.video);
    if (e.poster) d.p = u(e.poster);
  } else if (e.image ?? e.thumb) {
    d.i = u((e.image ?? e.thumb) as string);
  }
  dialogs[e.slug] = d;
}

export const experimentDialogsJson = JSON.stringify(dialogs);
/** Short hash of the payload, so a changed file gets a new URL (GitHub Pages caches for 10 minutes). */
export const experimentDialogsVersion = createHash("sha1").update(experimentDialogsJson).digest("hex").slice(0, 8);
