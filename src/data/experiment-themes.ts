/**
 * The themes an experiment can carry (`themes` in experiments.json), in the order the filter shows them.
 * Every experiment has at least one; most have one, a few have two.
 */
export const experimentThemes = [
  { key: "ai", label: "AI" },
  { key: "twins", label: "Digital twins" },
  { key: "xr", label: "Immersive & XR" },
  { key: "vp", label: "Virtual production" },
  { key: "music", label: "Music & sound" },
  { key: "teaching", label: "Teaching & research" },
  { key: "hacks", label: "Hacks & fun" },
] as const;

export type ExperimentThemeKey = (typeof experimentThemes)[number]["key"];
