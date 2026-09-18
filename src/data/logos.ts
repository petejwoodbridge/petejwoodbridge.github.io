// Client and funder marks for the ticker. Each PNG is a white-on-transparent
// mark at 2x, trimmed to its ink and scaled to even optical weight, so the row
// reads evenly rather than matching bounding boxes. Regenerate via tools/logos.
export interface Logo { name: string; file: string; w: number; h: number }
export const logos: Logo[] = [
  { name: "BBC", file: "/img/logos/bbc.png", w: 128, h: 37 },
  { name: "ITV", file: "/img/logos/itv.png", w: 88, h: 44 },
  { name: "Aardman", file: "/img/logos/aardman.png", w: 190, h: 36 },
  { name: "Google", file: "/img/logos/google.png", w: 43, h: 44 },
  { name: "Intel", file: "/img/logos/intel.png", w: 110, h: 44 },
  { name: "Apple", file: "/img/logos/apple.png", w: 36, h: 44 },
  { name: "BT", file: "/img/logos/bt.png", w: 44, h: 44 },
  { name: "Red Bull", file: "/img/logos/redbull.png", w: 77, h: 44 },
  { name: "NHS", file: "/img/logos/nhs.png", w: 108, h: 44 },
  { name: "IBM", file: "/img/logos/ibm.png", w: 117, h: 44 },
  { name: "Epic Games", file: "/img/logos/epicgames.png", w: 38, h: 44 },
  { name: "Sony", file: "/img/logos/sony.png", w: 190, h: 34 },
  { name: "Warner Bros.", file: "/img/logos/warner.png", w: 43, h: 44 },
  { name: "United Nations", file: "/img/logos/unitednations.png", w: 52, h: 44 },
  { name: "Meta", file: "/img/logos/meta.png", w: 66, h: 44 },
  { name: "Dolby", file: "/img/logos/dolby.png", w: 63, h: 44 },
  { name: "ARRI", file: "/img/logos/arri.png", w: 139, h: 41 },
  { name: "McLaren", file: "/img/logos/mclaren.png", w: 190, h: 30 },
  { name: "Kia", file: "/img/logos/kia.png", w: 171, h: 41 },
  { name: "The FA", file: "/img/logos/thefa.png", w: 179, h: 42 },
  { name: "Sport England", file: "/img/logos/sportengland.png", w: 136, h: 44 },
  { name: "Virgin", file: "/img/logos/virgin.png", w: 50, h: 44 },
  { name: "UKRI", file: "/img/logos/ukri.png", w: 151, h: 44 },
  { name: "Digital Catapult", file: "/img/logos/digitalcatapult.png", w: 113, h: 44 },
];
