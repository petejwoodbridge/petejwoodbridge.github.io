export const site = {
  name: "Pete Woodbridge",
  // People search for both forms, and the older press coverage uses "Peter".
  // These feed the structured data so search engines treat them as the same person.
  alternateNames: ["Peter Woodbridge", "Pete J Woodbridge", "Peter J Woodbridge"],
  role: "Digital & Technology Cluster Lead, Liverpool City Region",
  shortRole: "Creative technologist & innovation leader",
  jobTitles: [
    "Creative Technologist",
    "Innovation Leader",
    "AI & Software Prototyping Lead",
    "Digital & Technology Cluster Lead, Liverpool City Region",
    "Innovation Director",
    "R&D Lead",
    "Creative Producer",
  ],
  location: "Liverpool, UK",
  // Where the work actually happens. Used for location signals in structured data.
  areasServed: ["Liverpool", "Liverpool City Region", "Manchester", "North West England", "United Kingdom"],
  description:
    "Pete Woodbridge is a creative technologist and innovation leader in Liverpool, working in creative AI, agentic workflows and software prototyping. He builds tools and prototypes, and builds the programmes, labs and clusters that let other innovators do the same. Digital & Technology Cluster Lead for the Liverpool City Region.",
  // The things people actually search for when they need this kind of work.
  expertise: [
    "Innovation strategy",
    "Innovation leadership",
    "Cluster development",
    "R&D programmes",
    "Creative AI",
    "AI agents & agentic workflows",
    "Software prototyping",
    "AI-augmented production workflows",
    "Digital twins",
    "Geospatial & realtime data",
    "Data visualisation",
    "Creative technology",
    "Virtual production",
    "In-camera VFX (ICVFX)",
    "Realtime production",
    "Immersive experiences",
    "Projection mapping",
    "Interactive installations",
    "Unreal Engine",
    "Games engines",
    "Motion capture",
    "Volumetric capture",
    "Mixed reality",
    "Augmented reality",
    "Experiential technology",
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
    {
      label: "About",
      href: "/about",
      // The parent stays clickable; the first child repeats it, because people
      // hovering a menu do not always think to click the heading.
      children: [
        { label: "About", href: "/about" },
        { label: "Speaking", href: "/speaking" },
        { label: "Press", href: "/press" },
        { label: "R&D", href: "/research" },
        { label: "Events", href: "/events" },
        { label: "Teaching", href: "/teaching" },
      ],
    },
    { label: "Contact", href: "/contact" },
  ] as { label: string; href: string; children?: { label: string; href: string }[] }[],
  clients: [
    "BBC", "ITV", "Aardman", "Google", "Intel", "Apple", "BT", "Red Bull", "NHS", "IBM", "Epic Games",
    "Sony", "Warner", "United Nations", "Meta", "Dolby", "ARRI", "McLaren", "Kia", "Monster", "Costa",
    "The FA", "Sport England", "Virgin", "JISC", "Granada TV",
  ],
  funders: ["AHRC", "UKRI", "EPSRC", "Innovate UK", "Arts Council England", "Heritage Lottery Fund", "Digital Catapult", "CoSTAR", "UNDP", "HEFCE", "JISC"],
};
