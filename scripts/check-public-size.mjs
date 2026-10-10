// Runs before every build (npm "prebuild"). Everything in public/ is copied into dist/ as is,
// and GitHub Pages rejects files over 100 MB and sites over 1 GB, so a stray master render
// can break the deploy. Anything over the limit below fails the build with a list.
//
// Source renders named like "clip (1080p).mp4" are git-ignored (see .gitignore), so they never
// reach CI, but a local build would still copy them into dist/. They only get a warning.
import { readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = "public";
const LIMIT_MB = 20;
const SOURCE_RENDER = / \(\d+p\)\.mp4$/i;

/** Every file under `dir`, recursively. */
function* walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else if (entry.isFile()) yield path;
  }
}

const mb = (bytes) => `${(bytes / 1024 / 1024).toFixed(1)} MB`;
const tooBig = [];
const renders = [];

for (const path of walk(ROOT)) {
  const name = relative(".", path).replace(/\\/g, "/");
  const { size } = statSync(path);
  if (SOURCE_RENDER.test(name)) renders.push({ name, size });
  else if (size > LIMIT_MB * 1024 * 1024) tooBig.push({ name, size });
}

if (renders.length) {
  console.warn(`\n[check-public-size] ${renders.length} source render(s) in public/. They are git-ignored, but this build will copy them into dist/. Move them out of public/:`);
  for (const f of renders) console.warn(`  ${f.name}  (${mb(f.size)})`);
}

if (tooBig.length) {
  console.error(`\n[check-public-size] ${tooBig.length} file(s) in public/ over ${LIMIT_MB} MB. Compress them or move them out of public/:`);
  for (const f of tooBig) console.error(`  ${f.name}  (${mb(f.size)})`);
  console.error("");
  process.exit(1);
}
