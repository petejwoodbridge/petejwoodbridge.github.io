export const site = {
  name: "Pete Woodbridge",
  // People search for both forms, and the older press coverage uses "Peter".
  // These feed the structured data so search engines treat them as the same person.
  alternateNames: ["Peter Woodbridge", "Pete J Woodbridge", "Peter J Woodbridge"],
  role: "Digital & Technology Cluster Lead, Liverpool City Region",
  shortRole: "Creative Technologist",
  jobTitles: [
    "Creative Technologist",
    "Digital & Technology Cluster Lead, Liverpool City Region",
    "Innovation Director",
    "Creative Producer",
  ],
  location: "Liverpool, UK",
  // Where the work actually happens. Used for location signals in structured data.
  areasServed: ["Liverpool", "Liverpool City Region", "Manchester", "North West England", "United Kingdom"],
  description:
    "Pete Woodbridge is a creative technologist in Liverpool working across creative AI, virtual production, immersive experiences and realtime technology. Digital & Technology Cluster Lead for the Liverpool City Region, and director of the Dreamlab R&D collective.",
  // The things people actually search for when they need this kind of work.
  expertise: [
    "Creative technology",
    "Creative AI",
    "Virtual production",
    "In-camera VFX (ICVFX)",
    "Immersive experiences",
    "Projection mapping",
    "Interactive installations",
    "Realtime production",
    "Unreal Engine",
    "Motion capture",
    "Volumetric capture",
    "Mixed reality",
    "Augmented reality",
    "Games engines",
    "Experiential technology",
    "Innovation strategy",
    "Research and development",
    "Creative industries policy",
  ],
  // TODO: add the email address you want on the contact page. Leave empty to hide the email button.
  email: "",
  // Portrait shown on the homepage and About page. Set to "" to hide it.
  portrait: "/img/pete.jpg",
  // Where else you exist online. Used for search-engine structured data (sameAs).
  profiles: [
    "https://www.linkedin.com/in/petewoodbridge/",
    "https://musicfutures.co.uk/",
    "https://dreamlab.org.uk/",
  ],
  linkedin: "https://www.linkedin.com/in/petewoodbridge/",
  dreamlab: "https://dreamlab.org.uk/",
  dreamMachine: {
    newsletter: "https://www.linkedin.com/newsletters/dream-machine-creative-ai-7379776527871381505/",
    podcast: "https://open.spotify.com/show/2ptbLwVWeyO7ooPGHoYTqk?si=75397e5f7d7246e2",
    book: "https://www.amazon.co.uk/dp/B0H44ZSGP2/",
  },
  nav: [
    { label: "Work", href: "/work" },
    { label: "Experiments", href: "/experiments" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  clients: [
    "BBC", "ITV", "Aardman", "Google", "Intel", "Apple", "BT", "Red Bull", "NHS", "IBM", "Epic Games",
    "Sony", "Warner", "United Nations", "Meta", "Dolby", "ARRI", "McLaren", "Kia", "Monster", "Costa",
    "The FA", "Sport England", "Virgin", "JISC", "Granada TV",
  ],
  funders: ["AHRC", "UKRI", "Innovate UK", "Arts Council England", "Heritage Lottery Fund", "Digital Catapult", "UNDP", "HEFCE", "JISC"],
};
