export const site = {
  name: "Pete Woodbridge",
  // People search for both forms, and the older press coverage uses "Peter".
  // These feed the structured data so search engines treat them as the same person.
  alternateNames: ["Peter Woodbridge", "Pete J Woodbridge", "Peter J Woodbridge"],
  role: "Digital & Technology Cluster Lead, Liverpool City Region",
  shortRole: "Creative technologist & innovation leader",
  // The four that matter most, in order. A long list dilutes the signal.
  jobTitles: [
    "AI Consultant",
    "Creative Technologist",
    "Innovation Leader",
    "Digital & Technology Cluster Lead, Liverpool City Region",
  ],
  location: "Liverpool, UK",
  // Where the work actually happens. Used for location signals in structured data.
  areasServed: ["Liverpool", "Liverpool City Region", "Manchester", "North West England", "United Kingdom"],
  description:
    "Pete Woodbridge is an AI consultant, creative technologist and innovation leader in Liverpool, working in creative AI, AI agents, agentic workflows and software prototyping, and helping businesses across the North West adopt AI. He builds tools and prototypes, and builds the programmes, labs and clusters that let other innovators do the same. Digital & Technology Cluster Lead for the Liverpool City Region.",
  // Third-person bio for event programmes and press. Shown on /speaking and /press, and in llms.txt.
  // Only facts already on the site; keep it around 75 words.
  shortBio:
    "Pete Woodbridge is a Liverpool-based AI consultant and creative technologist, and Digital & Technology Cluster Lead for the Liverpool City Region. He writes Dream Machine, a book, newsletter and podcast on AI and the next creative economy, cited by The Economist and Fast Company, and directs the R&D lab Dreamlab. He has worked with the BBC, Aardman, Google and Epic Games, and was named in the BIMA 100 and the 500 UK Trailblazers for AI workflow innovation.",
  // The <meta name="description"> for the homepage. The description above is too long for a
  // search snippet (Google cuts at about 155-160 characters), so pages get this one instead.
  metaDescription:
    "Pete Woodbridge, AI consultant and creative technologist in Liverpool: AI strategy, agents, prototyping and AI training across Manchester and the North West.",
  // The things people actually search for when they need this kind of work.
  expertise: [
    "AI consultancy & strategy",
    "AI adoption for businesses",
    "AI training & workshops",
    "Creative AI",
    "Generative AI",
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
    "Innovation strategy",
    "Innovation leadership",
    "Cluster development",
    "R&D programmes",
    "Research and development",
    "Creative industries policy",
  ],
  // TODO: add the email address you want on the contact page. Leave empty to hide the email button.
  email: "",
  // Portrait shown on the homepage and About page. Set to "" to hide it.
  portrait: "/img/pete.jpg",
  // Where else Pete himself exists online. Used for search-engine structured data (sameAs),
  // which means "this is the same person", so organisation sites do not belong here.
  profiles: [
    "https://www.linkedin.com/in/petewoodbridge/",
  ],
  // Organisations Pete works or has worked with. Structured data `affiliation`.
  affiliations: [
    { name: "Dreamlab", url: "https://dreamlab.org.uk/", role: "Director" },
    { name: "MusicFutures", url: "https://musicfutures.co.uk/", role: "R&D & Innovation Lead (past)" },
  ],
  // Structured data `award`.
  awards: ["BIMA 100 (2020)", "UKII Intelligence Report: 500 UK Trailblazers (2024)"],
  linkedin: "https://www.linkedin.com/in/petewoodbridge/",
  dreamlab: "https://dreamlab.org.uk/",
  dreamMachine: {
    newsletter: "https://www.linkedin.com/newsletters/dream-machine-creative-ai-7379776527871381505/",
    podcast: "https://open.spotify.com/show/2ptbLwVWeyO7ooPGHoYTqk?si=75397e5f7d7246e2",
    book: "https://www.amazon.co.uk/dp/B0H44ZSGP2/",
  },
  nav: [
    { label: "Work", href: "/work" },
    { label: "AI", href: "/ai" },
    {
      label: "About",
      href: "/about",
      // The parent stays clickable; the first child repeats it, because people
      // hovering a menu do not always think to click the heading.
      children: [
        { label: "About", href: "/about" },
        { label: "Events", href: "/events" },
        { label: "R&D", href: "/research" },
        { label: "Experiments", href: "/experiments" },
        { label: "Speaking", href: "/speaking" },
        { label: "Press", href: "/press" },
        { label: "Teaching", href: "/teaching" },
      ],
    },
    { label: "Contact", href: "/contact" },
  ] as { label: string; href: string; children?: { label: string; href: string }[] }[],
  // The full list. The ticker shows only those with a usable mark (see
  // data/logos.ts); Costa, Monster, JISC and Granada TV have no obtainable
  // logo yet, so they live here and in the About copy only.
  clients: [
    "BBC", "ITV", "Aardman", "Google", "Intel", "Apple", "BT", "Red Bull", "NHS", "IBM", "Epic Games",
    "Sony", "United Nations", "Meta", "Dolby", "ARRI", "McLaren", "Kia", "Monster", "Costa",
    "The FA", "Sport England", "Virgin", "JISC", "Granada TV",
  ],
  funders: ["AHRC", "UKRI", "EPSRC", "Innovate UK", "Arts Council England", "Heritage Lottery Fund", "Digital Catapult", "CoSTAR", "UNDP", "HEFCE", "JISC"],
};
