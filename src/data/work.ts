export interface Link { label: string; url: string }
export interface LinkGroup { title: string; items: Link[] }
export interface Project {
  slug: string;
  title: string;
  org: string;
  orgUrl: string;
  role: string;
  period: string;
  tagline: string;
  intro: string;
  body: string[]; // HTML paragraphs, links preserved from the original site
  groups?: LinkGroup[];
  press?: Link[];
  tags: string[];
  video: string;
  poster: string;
  card: string;
  cardVideo: string;
  size: "lg" | "md";
  tier?: "main" | "more";
  /** Short label for the card, so every card's role line is a similar length. */
  cardRole?: string;
  /** A few recognisable names from that role, best known first. */
  clients?: string[];
}

export const projects: Project[] = [
  {
    slug: "musicfutures",
    title: "MusicFutures",
    org: "MusicFutures Creative Cluster",
    orgUrl: "https://musicfutures.co.uk/",
    role: "R&D & Innovation Lead",
    period: "2025 – 2026",
    tagline: "Building a £7.2 million programme so that artists, researchers and companies across the Liverpool City Region could get on and innovate.",
    intro:
      "MusicFutures is a £7.2m research and business innovation programme funded by the Arts and Humanities Research Council and UK Research and Innovation. I helped the region win it, then helped build the machinery that hands that money and support to other people.",
    body: [
      "MusicFutures brings together artists, researchers, entrepreneurs, SMEs and industry partners to position the Liverpool City Region as a global hub for music innovation. It was awarded £6.75m of AHRC funding plus industry co-investment over five years from 2025, working with 27 regional and national partners across universities, industry and regional stakeholders.",
      "My role sat at the centre of it: innovation strategy, technical research and development, funding programmes and cross-sector collaboration. The emphasis throughout was creative technology, immersive experiences, realtime production and AI-driven workflows, and how the next generation of music experiences gets made, distributed and paid for.",
      "Alongside the programme I led data-mapping research into the UK creative industries. The headline finding, that Liverpool is the UK's most musical big-city economy with an AI sector rapidly catching up, was covered by the <a href=\"https://news.liverpool.ac.uk/2026/08/04/liverpool-is-uks-most-musical-big-city-economy-with-ai-sector-rapidly-catching-up/\" target=\"_blank\" rel=\"noopener\">University of Liverpool</a>, <a href=\"https://www.insidermedia.com/news/north-west/one-in-five-creative-businesses-in-the-lcr-operate-in-music-report\" target=\"_blank\" rel=\"noopener\">Insider Media</a> and <a href=\"https://www.thebusinessdesk.com/northwest/news/2176917-liverpool-city-region-setting-pace-in-fast-expanding-music-and-ai-sectors\" target=\"_blank\" rel=\"noopener\">The Business Desk</a>.",
    ],
    groups: [
      { title: "Find out more", items: [
        { label: "MusicFutures", url: "https://musicfutures.co.uk/" },
        { label: "MusicFutures on LinkedIn", url: "https://www.linkedin.com/company/musicfuturesuk/" },
        { label: "Liverpool is the UK's most musical big city economy", url: "https://musicfutures.co.uk/liverpool-is-uks-most-musical-big-city-economy/" },
      ] },
    ],
    press: [
      { label: "University of Liverpool: most musical big-city economy", url: "https://news.liverpool.ac.uk/2026/08/04/liverpool-is-uks-most-musical-big-city-economy-with-ai-sector-rapidly-catching-up/" },
      { label: "Insider Media: one in five creative businesses in the LCR operate in music", url: "https://www.insidermedia.com/news/north-west/one-in-five-creative-businesses-in-the-lcr-operate-in-music-report" },
      { label: "The Business Desk: LCR setting the pace in music and AI", url: "https://www.thebusinessdesk.com/northwest/news/2176917-liverpool-city-region-setting-pace-in-fast-expanding-music-and-ai-sectors" },
    ],
    tags: ["Innovation strategy", "R&D programmes", "Music tech", "AI workflows"],
    video: "/video/musicfutures.mp4",
    poster: "/video/musicfutures.jpg",
    card: "/img/card-musicfutures.webp",
    cardVideo: "/video/musicfutures-card.mp4",
    cardRole: "Innovation Lead",
    clients: ["AHRC", "UKRI", "University of Liverpool"],
    size: "lg",
  },
  {
    slug: "dreamlab",
    title: "Dreamlab",
    org: "Dreamlab",
    orgUrl: "https://dreamlab.org.uk/",
    role: "Director",
    period: "2024 – present",
    tagline: "A lab and collective of 40+ experts, built so that independent innovators have somewhere to develop future media, AI and realtime work.",
    intro:
      "Dreamlab is a research and development lab and collective based across MediaCity, Manchester, Liverpool and Cumbria. I direct it. It exists to give independent studios, freelancers and innovators the room, kit and collaborators to push the boundaries of media, which is far harder to come by on your own.",
    body: [
      "The lab grew out of the MediaCity innovation programme and now supports innovation projects, IP development and initiatives across games, film and TV, music, animation, health, education and the creator economy. Our team of <a href=\"https://dreamlab.org.uk/team/\" target=\"_blank\" rel=\"noopener\">40+ experts</a> covers games-engine development in Unreal, Unity and the web; software architecture and deployment; AI product development across animation, 3D and sound; realtime and AI content workflows for film, TV, VFX and animation; immersive experiences and live-events technology; virtual production; 3D art; sensor-based and playable media; and training.",
      "Since launching in June 2024 the lab has assisted over 100 businesses and freelancers, helping them shape commercially viable innovations, win new work and solve day-to-day technical and market challenges. It is, arguably, the most diverse tech lab in any university in the UK, and it has hosted the Department for Science, Innovation and Technology more than once.",
      "It started somewhere much smaller. In 2022 I spent evenings and weekends turning the garage at home into an indie virtual production set-up, built for next to nothing with a projector, trackers and kit from my filmmaking days. The point was the same then as now: make this technology affordable and accessible for smaller organisations.",
    ],
    groups: [
      { title: "Things people in the lab have made", items: [
        { label: "Krygon Studios at the MSG Sphere, Las Vegas", url: "https://www.linkedin.com/feed/update/urn:li:activity:7241016240960344064/" },
        { label: "Dock10: affordable digital characters", url: "https://www.dock10.co.uk/" },
        { label: "PlayXD: mixed reality game with Meta", url: "https://playxd.co.uk/games/primal-rumble%C2%AE-coming-soon" },
        { label: "Sairo: fashion AI tools for Roblox", url: "https://www.sairo.uk/work" },
        { label: "Byron's Lab: AI and sustainable programming", url: "https://www.instagram.com/byronsbulb/" },
        { label: "Scenegraph Studios: AI Metahumans for skills training", url: "https://scenegraphstudios.com/products/pxl-persona/" },
        { label: "Bellyfeel: AI scriptwriting tools", url: "https://bellyfeel.co.uk/" },
        { label: "Emotional Health Hub: mental health app for children", url: "https://www.linkedin.com/posts/the-emotional-health-hub_motioncapture-innovationaccelerators-mentalhealthtech-activity-7275106281265197056-Fi_h" },
        { label: "Piing: games for crowds of up to 100,000", url: "https://www.piing.events/" },
        { label: "Captive Devices: high-end facial mocap", url: "https://www.linkedin.com/company/captivedevices/" },
        { label: "Microcosm: low-cost spatial speaker system", url: "https://www.microcosmaudio.com/" },
      ] },
      { title: "Dreamlab", items: [
        { label: "dreamlab.org.uk", url: "https://dreamlab.org.uk/" },
        { label: "The team", url: "https://dreamlab.org.uk/team/" },
        { label: "Dreamlab on LinkedIn", url: "https://www.linkedin.com/company/thedreamlabuk/" },
        { label: "Work with the lab", url: "https://dreamlab.org.uk/contact/" },
        { label: "The lab space at MediaCity", url: "https://www.mediacityuk.co.uk/dreamlab/" },
      ] },
    ],
    tags: ["Creative AI", "Realtime production", "Software", "R&D lab"],
    video: "/video/dreamlab.mp4",
    poster: "/video/dreamlab.jpg",
    card: "/img/card-dreamlab.webp",
    cardVideo: "/video/dreamlab-card.mp4",
    cardRole: "Director",
    clients: ["Meta", "Roblox", "Dock10", "MSG Sphere"],
    size: "md",
  },
  {
    slug: "mediacity",
    title: "MediaCity Innovation Hub",
    org: "MediaCity Immersive Technologies Innovation Hub",
    orgUrl: "https://www.mediacityuk.co.uk/immersive-technologies-innovation-hub/",
    role: "R&D Innovation Director",
    period: "2023 – 2025",
    tagline: "Backing other people's innovation: 35+ funded R&D collaborations and over £2.7m into regional companies, within a year.",
    intro:
      "MediaCity is the biggest concentration of creative, media and tech businesses outside London: home to the BBC, ITV, Dock10, the University of Salford and 250+ businesses. I directed R&D and innovation for its Immersive Technologies Innovation Hub, a £3.2m accelerator. The job was not to build the work myself, but to find the people with the good idea and get them funded, supported and shipped.",
    body: [
      "The hub supports a community of businesses shaping the future of media: immersive experiences, virtual production, sound and gaming technology. My job was to identify and support innovation across a portfolio of projects. Within a year we had built a portfolio of over 35 collaborative projects with the Manchester creative and tech community, with combined public and private investment of over £2.7m going directly into innovation and regional SMEs, alongside hundreds of business assists.",
      "Alongside the portfolio I ran community and talent development: events, hacks and labs with partners including Manchester Animation Festival, Beyond Conference, Creative UK, FutureEverything and Oxford Innovation, from virtual production film hacks to ComfyUI AI jams.",
      "The thing I am proudest of is the <a href=\"https://www.mediacityuk.co.uk/dreamlab/\" target=\"_blank\" rel=\"noopener\">DreamLab</a> collective and lab space we created there, bringing businesses, freelancers, research and innovation talent together in one place to help Greater Manchester navigate a future where creativity and technology collide. Our AI work was featured in the <a href=\"https://www.linkedin.com/feed/update/urn:li:activity:7141426196197564417/\" target=\"_blank\" rel=\"noopener\">500 UK Trailblazers</a> report from Verizon, supported by Epic Games.",
    ],
    groups: [
      { title: "Businesses supported", items: [
        { label: "Dock10", url: "https://www.dock10.co.uk/" },
        { label: "Realtime", url: "https://realtimeuk.com/" },
        { label: "Rezzil", url: "https://rezzil.com/" },
        { label: "Corporation Pop", url: "https://corporationpop.co.uk/" },
        { label: "Krygon Studios", url: "https://www.krygonstudios.com/" },
        { label: "Scenegraph Studios", url: "https://scenegraphstudios.com/" },
        { label: "Salsa Sound", url: "https://www.salsasound.com/" },
        { label: "MyManu", url: "https://mymanu.com/" },
        { label: "MK-V", url: "https://www.mk-v.com/" },
        { label: "PlayXD", url: "https://playxd.co.uk/" },
        { label: "AIX", url: "https://www.aix.live/" },
        { label: "Xpllor", url: "https://www.linkedin.com/in/chrisguerin77/" },
        { label: "FeedAR", url: "https://www.feedar.io/" },
        { label: "Immersify Education", url: "https://immersifyeducation.com/" },
        { label: "Supermassive", url: "https://www.supermassive.uk/about/" },
        { label: "Sparkle Street", url: "https://www.sparklestreet.net/" },
        { label: "Toasted Productions", url: "https://www.toastedproductions.com/" },
        { label: "Byron's Labs", url: "https://www.linkedin.com/in/byronslabs/" },
        { label: "Cold Star Media", url: "https://www.coldstarmedia.com/" },
        { label: "Safety Catch", url: "https://safetycatch.co.uk/" },
        { label: "Bellyfeel", url: "https://bellyfeel.co.uk/" },
        { label: "The Emotional Health Hub", url: "https://www.theemotionalhealthhub.com/" },
        { label: "Fuzzy Duck", url: "https://fuzzyduck.co.uk/" },
        { label: "Olympia London", url: "https://www.olympia.london/" },
      ] },
      { title: "Events, hacks and labs", items: [
        { label: "Manchester Animation Festival: Animating Tomorrow", url: "https://www.manchesteranimationfestival.co.uk/animating-tomorrow-gallery/" },
        { label: "Beyond Conference", url: "https://beyondconference.org/" },
        { label: "Creative UK: Future Format games funding", url: "https://www.linkedin.com/posts/mitih_futureformat-games-funding-activity-7201903703295967234-A-b-" },
        { label: "FutureEverything: Cultural Accelerator", url: "https://futureeverything.org/portfolio/entry/cultural-accelerator/" },
        { label: "Oxford Innovation: Outside In, Inside Out", url: "https://www.mediacityuk.co.uk/newsroom/outside-in-inside-out-for-greater-manchesters-immersive-technologies-pioneers/" },
        { label: "VP Film Hack (video)", url: "https://vimeo.com/1016761443/d2efddae6f" },
        { label: "Virtual Production 2.0", url: "https://www.linkedin.com/posts/petewoodbridge_virtualproduction-activity-7165988828300701696-op7A" },
        { label: "Creative AI Jam", url: "https://www.linkedin.com/posts/mitih_aijam-mediacityuk-aiineducation-activity-7153443199124955137-r6cF" },
        { label: "Animating Tomorrow (video)", url: "https://vimeo.com/927494971" },
        { label: "Interactive Hack", url: "https://www.linkedin.com/posts/mediacityuk1_immersivetechnology-mediacityuk-mediacityinnovation-activity-7220067421632561155-KSKL" },
        { label: "ComfyUI AI Hack", url: "https://www.linkedin.com/posts/mitih_rundiffusion-comfui-fashion-activity-7197000476502958080-HBIw" },
        { label: "NVIDIA GTC dev contest", url: "https://www.linkedin.com/posts/mitih_nvidiaai-gtc24-devcontest-activity-7159288668770222080-_f-W" },
        { label: "Microsoft with Immersive Liverpool", url: "https://www.meetup.com/immersive-liverpool/events/298664941/" },
      ] },
      { title: "Find out more", items: [
        { label: "MediaCity Innovation", url: "https://www.mediacityuk.co.uk/immersive-technologies-innovation-hub/" },
        { label: "The hub on LinkedIn", url: "https://www.linkedin.com/company/mitih/" },
        { label: "DreamLab at MediaCity", url: "https://www.mediacityuk.co.uk/dreamlab/" },
        { label: "The Dreamlab team", url: "https://www.linkedin.com/feed/update/urn:li:activity:7245075867633094658" },
        { label: "DSIT visit", url: "https://www.linkedin.com/posts/danielmktb_applearkit-animation-salfordmediacity-activity-7232360350900248577-7rEF" },
      ] },
    ],
    tags: ["Innovation leadership", "Accelerator", "Immersive", "Virtual production", "AI"],
    video: "/video/mediacity.mp4",
    poster: "/video/mediacity.jpg",
    card: "/img/card-mediacity.webp",
    cardVideo: "/video/mediacity-card.mp4",
    cardRole: "Innovation Director",
    clients: ["BBC", "ITV", "NVIDIA", "Microsoft", "Dock10"],
    size: "md",
  },
  {
    slug: "crucial-fx",
    title: "Crucial FX",
    org: "Crucial FX",
    orgUrl: "https://crucial-fx.com/",
    role: "Creative Technologist",
    period: "2023",
    tagline: "Playable, projection-mapped and interactive experiences for the world's biggest brands.",
    intro:
      "Crucial FX build immersive experiences, projection mapping, interactive installations and creative technology for top brands. I worked there as a creative technologist, programming interactive technology for live events and experiences.",
    body: [
      "The work covered AV design and development across software and hardware: Notch, Disguise, Ventuz, Unreal Engine, nDisplay, OptiTrack tracking, large-scale LED and projection mapping. It is the sharp end of live experience, where the render has to hold up in front of a crowd.",
      "Projects included brand and experiential work with <a href=\"https://crucial-fx.com/pulse/crucial-fx-deliver-monster-brand-launch-video-shoot/\" target=\"_blank\" rel=\"noopener\">Monster</a>, <a href=\"https://www.linkedin.com/posts/duncan-morris-0aa0877_immersive-interactivetechnology-projectionmapping-activity-7196416691382243330-XoQ9\" target=\"_blank\" rel=\"noopener\">IBM</a>, <a href=\"https://crucial-fx.com/pulse/crucial-fx-deliver-immersive-projection-experience-with-innovative-digital-tennis-game/\" target=\"_blank\" rel=\"noopener\">Kia</a>, <a href=\"https://www.linkedin.com/posts/crucial-fx_costa-infinity-booth-activity-7161287418946473984-aPu-\" target=\"_blank\" rel=\"noopener\">Costa</a> and <a href=\"https://www.linkedin.com/posts/crucial-fx_sterling-hexagon-game-activity-7000466956143210496-dPxh\" target=\"_blank\" rel=\"noopener\">Sterling</a>.",
      "The one I had the most fun on was <a href=\"https://crucial-fx.com/pulse/meet-qube-smash-an-original-mixed-reality-immersive-football-game/\" target=\"_blank\" rel=\"noopener\">Qube Smash</a>: an original mixed-reality football game that combines tracking, realtime games engines and an immersive space into an out-of-this-world playable sports experience.",
    ],
    groups: [
      { title: "Projects", items: [
        { label: "Monster brand launch", url: "https://crucial-fx.com/pulse/crucial-fx-deliver-monster-brand-launch-video-shoot/" },
        { label: "IBM interactive projection", url: "https://www.linkedin.com/posts/duncan-morris-0aa0877_immersive-interactivetechnology-projectionmapping-activity-7196416691382243330-XoQ9" },
        { label: "Kia immersive digital tennis game", url: "https://crucial-fx.com/pulse/crucial-fx-deliver-immersive-projection-experience-with-innovative-digital-tennis-game/" },
        { label: "Costa Infinity Booth", url: "https://www.linkedin.com/posts/crucial-fx_costa-infinity-booth-activity-7161287418946473984-aPu-" },
        { label: "Sterling Hexagon game", url: "https://www.linkedin.com/posts/crucial-fx_sterling-hexagon-game-activity-7000466956143210496-dPxh" },
        { label: "Qube Smash: playable sports experiences", url: "https://crucial-fx.com/pulse/meet-qube-smash-an-original-mixed-reality-immersive-football-game/" },
      ] },
      { title: "Crucial FX", items: [
        { label: "crucial-fx.com", url: "https://crucial-fx.com/" },
        { label: "Crucial FX on LinkedIn", url: "https://www.linkedin.com/company/crucial-fx/" },
      ] },
    ],
    tags: ["Live events", "Projection mapping", "Notch & Disguise", "Unreal Engine", "Playable media"],
    video: "/video/crucial-fx.mp4",
    poster: "/video/crucial-fx.jpg",
    card: "/img/card-crucial-fx.webp",
    cardVideo: "/video/crucial-fx-card.mp4",
    cardRole: "Creative Technologist",
    clients: ["IBM", "Kia", "Costa", "Monster"],
    size: "lg",
  },
  {
    slug: "pathway",
    title: "Pathway Studios",
    org: "Pathway",
    orgUrl: "https://www.pathwayxr.studio/",
    role: "Creative Producer & Technologist",
    period: "2022",
    tagline: "Realtime content, in-camera VFX and innovation on a 6,000 sq ft LED volume in Manchester.",
    intro:
      "Pathway is a production and innovation lab in Manchester dedicated to realtime content creation with LED volumes and in-camera VFX. I worked there as a creative producer and technologist as the stage launched.",
    body: [
      "The facility and crew offer development and production, pre-visualisation, virtual art design and more, and innovate in areas such as machine learning and motion capture. I worked across production and R&D, and on the training and incubator programmes that grew around the stage.",
      "Partners and projects included BBC Three (Jason Derulo's <a href=\"https://www.youtube.com/watch?v=hdS1wEXzQY8&t=27s\" target=\"_blank\" rel=\"noopener\">Project Ikon</a>), ITV, a <a href=\"https://britishcinematographer.co.uk/pathway-partners-in-manchester-with-sony-for-virtual-production-special-event/\" target=\"_blank\" rel=\"noopener\">Sony</a> virtual production event, <a href=\"https://www.linkedin.com/feed/update/urn:li:activity:7195789184031162368/\" target=\"_blank\" rel=\"noopener\">McLaren</a>, advertising projects with <a href=\"https://www.tagww.com/\" target=\"_blank\" rel=\"noopener\">TAG</a>, <a href=\"https://www.thegatefilms.com/\" target=\"_blank\" rel=\"noopener\">Gate Films</a> and <a href=\"https://www.campaignlive.co.uk/article/national-energy-action-warm-country-twice-collective/1808835\" target=\"_blank\" rel=\"noopener\">National Energy Action</a>, an ARRI test shooting <a href=\"https://britishcinematographer.co.uk/virtual-production-on-65mm-film-pathway-reveals-innovative-test-film/\" target=\"_blank\" rel=\"noopener\">virtual production on 65mm film</a>, <a href=\"https://www.linkedin.com/posts/storyfuturesacademy_abertay-university-leads-groundbreaking-real-time-activity-7089929487303233536-_7Cr\" target=\"_blank\" rel=\"noopener\">5G innovation projects</a>, and work with <a href=\"https://www.hurricanefilms.net/\" target=\"_blank\" rel=\"noopener\">Hurricane Films</a>, <a href=\"https://www.3minuteswest.com/\" target=\"_blank\" rel=\"noopener\">Three Minutes West</a> and <a href=\"https://www.redbull.com/gb-en/collections/films\" target=\"_blank\" rel=\"noopener\">Red Bull</a>.",
      "We also launched <a href=\"https://www.pathwayxr.studio/indie-incubator\" target=\"_blank\" rel=\"noopener\">Pathway Indie</a>, a £2m virtual production incubator for independent filmmakers, and delivered training programmes for universities and industry.",
    ],
    groups: [
      { title: "Projects and partners", items: [
        { label: "BBC Three: Project Ikon with Jason Derulo", url: "https://www.youtube.com/watch?v=hdS1wEXzQY8&t=27s" },
        { label: "Sony virtual production event", url: "https://britishcinematographer.co.uk/pathway-partners-in-manchester-with-sony-for-virtual-production-special-event/" },
        { label: "McLaren", url: "https://www.linkedin.com/feed/update/urn:li:activity:7195789184031162368/" },
        { label: "TAG", url: "https://www.tagww.com/" },
        { label: "Gate Films", url: "https://www.thegatefilms.com/" },
        { label: "National Energy Action: Warm This Winter", url: "https://www.campaignlive.co.uk/article/national-energy-action-warm-country-twice-collective/1808835" },
        { label: "ARRI: virtual production on 65mm film", url: "https://britishcinematographer.co.uk/virtual-production-on-65mm-film-pathway-reveals-innovative-test-film/" },
        { label: "5G innovation projects", url: "https://www.linkedin.com/posts/storyfuturesacademy_abertay-university-leads-groundbreaking-real-time-activity-7089929487303233536-_7Cr" },
        { label: "Hurricane Films", url: "https://www.hurricanefilms.net/" },
        { label: "Three Minutes West", url: "https://www.3minuteswest.com/" },
        { label: "Red Bull Films", url: "https://www.redbull.com/gb-en/collections/films" },
        { label: "Pathway Indie incubator", url: "https://www.pathwayxr.studio/indie-incubator" },
        { label: "Pathway Virtual Production, Manchester", url: "https://www.pathwayxr.studio/" },
      ] },
    ],
    press: [
      { label: "British Cinematographer: Focus on Virtual Production, Volume 2", url: "https://britishcinematographer.co.uk/focus-on-guide-virtual-production-2/" },
      { label: "TVB Europe: Virtual production finds a Pathway in Manchester", url: "https://www.tvbeurope.com/production-post/virtual-production-finds-a-pathway-in-manchester" },
      { label: "British Cinematographer: Pathway launches Manchester innovation lab", url: "https://britishcinematographer.co.uk/pathway-launches-manchester-based-virtual-production-innovation-lab/" },
      { label: "Broadcast: Pathway opens Manchester virtual production facility", url: "https://www.broadcastnow.co.uk/tech/pathway-opens-manchester-virtual-production-facility/5177193.article" },
      { label: "Broadcast: £2m virtual production incubator", url: "https://www.broadcastnow.co.uk/tech/pathway-launches-2m-virtual-production-innovation-incubator/5177667.article" },
      { label: "British Cinematographer: incubator to kickstart a creative rebellion", url: "https://britishcinematographer.co.uk/pathway-opens-2-5m-in-kind-incubator-to-kickstart-creative-rebellion-in-virtual-production/" },
    ],
    tags: ["Virtual production", "ICVFX", "LED volume", "Producing", "Training"],
    video: "/video/pathway.mp4",
    poster: "/video/pathway.jpg",
    card: "/img/card-pathway.webp",
    cardVideo: "/video/pathway-card.mp4",
    cardRole: "Creative Producer",
    clients: ["BBC", "Sony", "McLaren", "ARRI", "Red Bull"],
    size: "lg",
  },
  {
    slug: "draw-and-code",
    title: "Draw & Code",
    org: "Draw & Code",
    orgUrl: "https://drawandcode.com/",
    role: "Senior R&D Creative Technologist",
    period: "2021 – 2022",
    tagline: "Mocap, volumetric capture, virtual production and hardware R&D with Liverpool's immersive specialists.",
    intro:
      "Draw & Code are immersive tech pioneers with over 130 projects for clients including Sony, Warner, Mercedes, Nokia, Google and Liverpool Football Club. I worked with them to develop new ideas, processes and products in mixed reality and virtual production, and to set up new areas of expertise in the growing studio.",
    body: [
      "That meant experiences and innovations using motion capture, tracking, virtual production, projection mapping, prototype development and technical art, mainly in Unreal Engine and Unity, with systems and pipelines built around them.",
      "Projects included exploring the future of immersive live music with <a href=\"https://drawandcode.com/news/kokoverse-at-sxsw-dolby-house/\" target=\"_blank\" rel=\"noopener\">KOKO, Unity and Dolby Atmos</a> at SXSW; hardware and pipeline support for a <a href=\"https://www.entaingroup.com/news-insights/latest-news/2022/entain-launches-global-innovation-hub-ennovate/\" target=\"_blank\" rel=\"noopener\">multimillion-pound mixed reality location-based experience with Entain</a>; motion capture pipelines for games projects with Avalon and commercial work such as <a href=\"https://www.meta.com/en-gb/experiences/taskmaster-vr/6997166963639073/\" target=\"_blank\" rel=\"noopener\">Taskmaster VR</a>; and R&D on <a href=\"https://fanport.drawandcode.com/\" target=\"_blank\" rel=\"noopener\">Fanport</a>, a new immersive fan-experience product.",
      "Through the studio I was also part of <a href=\"https://www.youtube.com/watch?v=PDJFI6rv8zY&list=PLA_Siwu3uT3O4kSIKQMaFuCpMAzVYwG-1\" target=\"_blank\" rel=\"noopener\">Virtual Production Futures</a>, the intensive accelerator run by Industrial Light & Magic, the National Film and Television School and Epic Games.",
    ],
    groups: [
      { title: "Projects", items: [
        { label: "Kokoverse at SXSW with KOKO, Unity and Dolby", url: "https://drawandcode.com/news/kokoverse-at-sxsw-dolby-house/" },
        { label: "Entain Ennovate mixed reality LBE", url: "https://www.entaingroup.com/news-insights/latest-news/2022/entain-launches-global-innovation-hub-ennovate/" },
        { label: "Taskmaster VR", url: "https://www.meta.com/en-gb/experiences/taskmaster-vr/6997166963639073/" },
        { label: "Fanport", url: "https://fanport.drawandcode.com/" },
        { label: "Virtual Production Futures (ILM, NFTS, Epic Games)", url: "https://www.youtube.com/watch?v=PDJFI6rv8zY&list=PLA_Siwu3uT3O4kSIKQMaFuCpMAzVYwG-1" },
        { label: "drawandcode.com", url: "https://drawandcode.com/" },
      ] },
    ],
    tags: ["Motion capture", "Volumetric", "Mixed reality", "Unreal & Unity", "R&D"],
    video: "/video/draw-and-code.mp4",
    poster: "/video/draw-and-code.jpg",
    card: "/img/card-draw-and-code.webp",
    cardVideo: "/video/draw-and-code-card.mp4",
    cardRole: "Senior R&D Technologist",
    clients: ["Google", "Sony", "Warner", "Dolby", "Meta"],
    size: "md",
  },
  {
    slug: "room",
    title: "TMRW Foundation",
    org: "TMRW Foundation",
    orgUrl: "https://www.tmrw.com/",
    role: "Product Director",
    period: "2020 – 2021",
    tagline: "Product Director on Room: a browser-based 3D experience platform and a brand-new games engine, built for real people on the web. No goggles necessary.",
    intro:
      "Room is a web-based 3D experience platform for immersive events and experiences, built on a new RealityOS engine using WebGL and WebAssembly, and led by Crytek and CryEngine founder Cevat Yerli and a team of rockstars.",
    body: [
      "As Product Director I led and worked with teams of developers and engineers across games engine, front end, back end and infrastructure, plus UX designers and 3D artists, on software and experiences using WebGL, AI and more. I supported the roadmap for a bespoke games engine alongside the interactive features, products and patented applications built on top of it.",
      "Room launched at SXSW in 2021 and went live globally in 2022. Best of all, it works directly in the browser: <a href=\"https://room3d.com/\" target=\"_blank\" rel=\"noopener\">try it</a>.",
    ],
    groups: [
      { title: "Find out more", items: [
        { label: "TMRW Foundation", url: "https://www.tmrw.com/" },
        { label: "Room", url: "https://room3d.com/" },
        { label: "New Straits Times: video meetings in virtual rooms", url: "https://www.nst.com.my/lifestyle/bots/2021/03/675307/tech-video-meetings-virtual-rooms-will-make-likes-zoom-seem-old-school" },
        { label: "Tech.eu: Room goes live", url: "https://tech.eu/2022/10/10/bringing-teams-together-again-3d-video-communications-platform-room-goes-live-launches-their-founders-plan" },
      ] },
    ],
    tags: ["Product", "3D web", "Games engine", "Leadership"],
    video: "/video/room.mp4",
    poster: "/video/room.jpg",
    card: "/img/card-room.webp",
    cardVideo: "/video/room-card.mp4",
    cardRole: "Product Director",
    clients: ["Crytek", "SXSW"],
    size: "lg",
  },
  {
    slug: "xlab-ljmu",
    title: "XLab & MA Immersive Arts",
    org: "Liverpool John Moores University",
    orgUrl: "https://www.ljmu.ac.uk/research/centres-and-institutes/institute-of-art-and-technology/expertise/experimental-technologies-lab",
    role: "Co-Director, Experimental Technologies Lab · Programme Leader, MA Immersive Arts",
    period: "2018 – 2020",
    tagline: "Co-designing the future at the intersection of art, games, media, performance and technology, and launching the world's first MA in Immersive Arts.",
    intro:
      "At LJMU I co-directed the Experimental Technologies Lab (XLab) in the Institute of Art and Technology with Dr Mark Wright, and developed and led the MA Immersive Arts, a first of its kind, at the Liverpool Screen School.",
    body: [
      "The <a href=\"https://www.ljmu.ac.uk/research/centres-and-institutes/institute-of-art-and-technology/expertise/experimental-technologies-lab\" target=\"_blank\" rel=\"noopener\">Experimental Technologies Lab</a> grew out of four years of research at FACTLab, a collaboration with Liverpool's <a href=\"https://www.fact.co.uk/\" target=\"_blank\" rel=\"noopener\">FACT</a>. Researchers, artists and technologists produce projects together as teams, using a methodology of active co-design: diverse people invited to explore creative technology through hands-on experimentation with electronics, immersive and interactive media and fabrication. Since 2015 the lab welcomed over 4,500 visitors, working across the <a href=\"https://twitter.com/ljmufablab\" target=\"_blank\" rel=\"noopener\">Liverpool Fab Lab</a>, <a href=\"https://www.ljmu.ac.uk/about-us/faculties/faculty-of-engineering-and-technology/live-lab\" target=\"_blank\" rel=\"noopener\">LiveLab</a> and the X-Gallery, with an immersive projection room, room-scale multiplayer VR, mixed reality headsets, holographic displays, 3D scanning, 8K stereoscopic 360 cameras, digital fabrication and more.",
      "The <a href=\"https://www.ljmu.ac.uk/study/courses/postgraduates/immersive-arts\" target=\"_blank\" rel=\"noopener\">MA Immersive Arts</a> was designed so students would explore and experiment with augmented reality, mixed reality, projection mapping, holographics, future screens and virtual reality, run jointly between the Liverpool Screen School and the Liverpool School of Art and Design. Modules covered immersive storytelling, an immersive arts lab, a collaborative project with an external partner, research and proposal, and a major practice-based project. It was built in consultation with creative industry and arts partners and with the North West's immersive technology sector.",
      "In December 2018 the team ran the <a href=\"https://www.ljmu.ac.uk/about-us/news/articles/2018/12/20/immersive-storytelling-experiences-symposium\" target=\"_blank\" rel=\"noopener\">Immersive Storytelling Experiences Research Symposium</a>, bringing 250+ companies and delegates from industry and academia to explore R&D in these mediums. In 2020 this body of work saw me named in the BIMA 100.",
    ],
    groups: [
      { title: "Find out more", items: [
        { label: "Experimental Technologies Lab", url: "https://www.ljmu.ac.uk/research/centres-and-institutes/institute-of-art-and-technology/expertise/experimental-technologies-lab" },
        { label: "Institute of Art and Technology", url: "https://www.ljmu.ac.uk/research/centres-and-institutes/institute-of-art-and-technology" },
        { label: "Dr Mark Wright", url: "https://www.ljmu.ac.uk/about-us/staff-profiles/faculty-of-arts-professional-and-social-studies/liverpool-school-of-art-and-design/mark-wright" },
        { label: "FACT Liverpool", url: "https://www.fact.co.uk/" },
        { label: "MA Immersive Arts", url: "https://www.ljmu.ac.uk/study/courses/postgraduates/immersive-arts" },
        { label: "Immersive Storytelling Experiences Symposium", url: "https://www.ljmu.ac.uk/about-us/news/articles/2018/12/20/immersive-storytelling-experiences-symposium" },
        { label: "Immerse UK: the North West immersive sector (PDF)", url: "https://www.immerseuk.org/wp-content/uploads/2018/05/Immersive_Technologies_PDF_lowres.pdf" },
      ] },
    ],
    press: [
      { label: "LJMU: Immersive arts pioneer named among UK's 100 top creatives", url: "https://www.ljmu.ac.uk/about-us/news/articles/2020/5/6/immersive-arts-pioneer-named-among-uks-100-top-creatives" },
      { label: "VRFocus: LJMU launches immersive arts degree", url: "https://www.vrfocus.com/2019/06/liverpools-john-moores-university-launches-immersive-arts-degree-looking-at-vr-ar/" },
    ],
    tags: ["Research lab", "Co-design", "Course design", "Mixed reality", "Teaching"],
    video: "/video/xlab-ljmu.mp4",
    poster: "/video/xlab-ljmu.jpg",
    card: "/img/card-xlab-ljmu.webp",
    cardVideo: "/video/xlab-ljmu-card.mp4",
    cardRole: "Co-Director",
    clients: ["FACT Liverpool"],
    size: "md",
  },
  {
    slug: "soda",
    title: "SODA Manchester",
    org: "Manchester Metropolitan University",
    orgUrl: "https://www.schoolofdigitalarts.mmu.ac.uk/",
    role: "Curriculum Development Lead · Senior Lecturer",
    period: "2015 – 2019",
    tagline: "Shaping the curriculum for a £35 million school built for the digital storytellers of the future.",
    intro:
      "I was on the strategic development team for the £35m School of Digital Arts in Manchester as curriculum development lead, through the bidding and formation stage of the new school.",
    body: [
      "The brief was to develop ground-breaking curriculum models for creative digital storytellers of the future, across courses in games, film, animation, creative technology, media production and other digital arts.",
      "At the same time I was a Senior Lecturer at Manchester School of Art, leading creative technology across a number of degrees, including as programme leader for the BA Creative Multimedia and on the BA Filmmaking. From 2015 to 2018 my R&D at SODA focused on immersive storytelling, the thread that ran through the Immersive Storylab collective I had founded in 2014 and, later, the MA Immersive Arts at LJMU.",
    ],
    groups: [
      { title: "Find out more", items: [
        { label: "School of Digital Arts (SODA)", url: "https://www.schoolofdigitalarts.mmu.ac.uk/" },
        { label: "Immersive Storylab", url: "http://www.immersivestorylab.com/" },
      ] },
    ],
    tags: ["Curriculum design", "Digital storytelling", "Teaching", "Immersive storytelling"],
    video: "/video/soda.mp4",
    poster: "/video/soda.jpg",
    card: "/img/card-soda.webp",
    cardVideo: "/video/soda-card.mp4",
    cardRole: "Curriculum Lead",
    clients: ["Manchester Met"],
    size: "lg",
  },
  {
    slug: "disruptive-media",
    title: "Centre for Disruptive Media",
    org: "Coventry University",
    orgUrl: "https://disruptivemedia.org.uk/",
    role: "Project Development Team & Lecturer",
    period: "2010 - 2015",
    tagline: "Pioneering digital learning: the UK's first university iTunes site, an early YouTube Edu partnership, and a photography course that lived inside an app.",
    intro:
      "Between 2010 and 2015 I worked as part of the project development team at the Centre for Disruptive Media at Coventry University, on innovations in using the web for teaching, research and open learning.",
    body: [
      "This included setting up partnerships with Apple and Google to create new ways to connect students to learning content. I created one of the first university iTunes sites in the UK and one of the first YouTube Edu partnerships.",
      "I developed a number of software applications and innovations, including work featured in Wired, which helped the University win awards for its pioneering research in this area. It is where I built my first augmented reality campaign, and where I did a lot of work on digital publishing and archiving, as co-investigator on several major funded research projects.",
      "The photography app got the most attention: a free, undergraduate-level class delivered entirely inside an app, covered by the <a href=\"http://www.bjp-online.com/british-journal-of-photography/news/2032274/photography-class-doors-world\" target=\"_blank\" rel=\"noopener\">British Journal of Photography</a>, <a href=\"http://www.professionalphotographer.co.uk/News-and-Reviews/2011/3/Coventry-University-launches-world-s-first-free-class-in-an-app\" target=\"_blank\" rel=\"noopener\">Professional Photographer</a>, <a href=\"http://pdnpulse.com/2011/02/free-undergrad-level-photo-courses-offered-online-and-in-app-by-uk-professor.html\" target=\"_blank\" rel=\"noopener\">PDN Pulse</a> and the <a href=\"http://www.timeshighereducation.co.uk/416937.article\" target=\"_blank\" rel=\"noopener\">Times Higher</a>. The open education work was later written up in a <a href=\"http://repository.jisc.ac.uk/6069/1/JR0041_OPEN_EDUCATION_REPORT_V3.pdf\" target=\"_blank\" rel=\"noopener\">JISC report</a>.",
      "Alongside the research I taught at <a href=\"https://www.coventry.ac.uk/study-at-coventry/faculties-and-schools/arts-and-humanities/art-and-design/\" target=\"_blank\" rel=\"noopener\">Coventry School of Art and Design</a> on the Digital Media and Culture MA and the Media Production BA, and developed a pioneering <a href=\"https://www.coventry.ac.uk/course-structure/ug/2019-20/fah/digital-media-ba-hons/\" target=\"_blank\" rel=\"noopener\">BA in Digital Media</a>.",
    ],
    groups: [
      { title: "Find out more", items: [
        { label: "Centre for Disruptive Media", url: "https://disruptivemedia.org.uk/" },
        { label: "Coventry School of Art and Design", url: "https://www.coventry.ac.uk/study-at-coventry/faculties-and-schools/arts-and-humanities/art-and-design/" },
        { label: "BA Digital Media", url: "https://www.coventry.ac.uk/course-structure/ug/2019-20/fah/digital-media-ba-hons/" },
        { label: "JISC open education report (PDF)", url: "http://repository.jisc.ac.uk/6069/1/JR0041_OPEN_EDUCATION_REPORT_V3.pdf" },
      ] },
    ],
    press: [
      { label: "BBC News: Shakespeare Unplugged", url: "http://www.bbc.co.uk/news/uk-england-coventry-warwickshire-18426672" },
      { label: "British Journal of Photography: a photography class that opens doors", url: "http://www.bjp-online.com/british-journal-of-photography/news/2032274/photography-class-doors-world" },
      { label: "Professional Photographer: world's first free class in an app", url: "http://www.professionalphotographer.co.uk/News-and-Reviews/2011/3/Coventry-University-launches-world-s-first-free-class-in-an-app" },
      { label: "PDN Pulse: free undergraduate photo courses in an app", url: "http://pdnpulse.com/2011/02/free-undergrad-level-photo-courses-offered-online-and-in-app-by-uk-professor.html" },
      { label: "Times Higher Education", url: "http://www.timeshighereducation.co.uk/416937.article" },
      { label: "4RFV: the world's first phone app for a media degree", url: "http://www.4rfv.co.uk/industrynews.asp?id=133201" },
    ],
    tags: ["Open education", "Digital publishing", "Augmented reality", "Apps", "Teaching"],
    video: "/video/disruptive-media.mp4",
    poster: "/video/disruptive-media.jpg",
    card: "/img/card-disruptive-media.webp",
    cardVideo: "/video/disruptive-media-card.mp4",
    cardRole: "Lecturer & R&D",
    clients: ["Apple", "Google", "BBC", "JISC"],
    size: "md",
  },
  {
    slug: "dream-machine",
    tier: "more",
    title: "Dream Machine",
    org: "Book, newsletter & podcast",
    orgUrl: "https://www.amazon.co.uk/dp/B0H44ZSGP2/",
    role: "Author",
    period: "2025 – present",
    tagline: "A living book about AI and the next creative economy, with a newsletter and podcast that track what is actually happening.",
    intro:
      "Artificial intelligence is transforming the creative industries faster than almost anyone predicted. Dream Machine is my attempt to keep up with it honestly: research, analysis, case studies and tools for people who make things for a living.",
    body: [
      "Dream Machine is a living book dedicated to the impact of AI on creativity, culture and the future of work. It tracks developments across generative AI, creative technology, entertainment, media and emerging digital industries, and tries to separate the meaningful from the hype. Unlike a traditional book it keeps evolving: new chapters, research and opportunities are added as the landscape changes.",
      "Whether you are a musician exploring AI-powered production, a filmmaker investigating new workflows, a game developer experimenting with generative tools or a creative leader planning for what comes next, it is written to be useful in the real world. The <a href=\"https://www.linkedin.com/newsletters/dream-machine-creative-ai-7379776527871381505/\" target=\"_blank\" rel=\"noopener\">newsletter</a> delivers regular updates across AI news, tools, trends, research and policy, and the <a href=\"https://open.spotify.com/show/2ptbLwVWeyO7ooPGHoYTqk?si=75397e5f7d7246e2\" target=\"_blank\" rel=\"noopener\">podcast</a> goes deeper with the people doing the work.",
      "The research has been cited in <a href=\"https://www.economist.com/business/2026/08/04/hollywood-is-entering-its-ai-era\" target=\"_blank\" rel=\"noopener\">The Economist</a> on Hollywood's AI era, and <a href=\"https://www.fastcompany.com/91568818/our-interest-in-ai-slop-is-hitting-a-ceiling\" target=\"_blank\" rel=\"noopener\">Fast Company</a> interviewed me about the chapter called the Slop Ceiling.",
    ],
    groups: [
      { title: "Read, listen, buy", items: [
        { label: "Dream Machine newsletter on LinkedIn", url: "https://www.linkedin.com/newsletters/dream-machine-creative-ai-7379776527871381505/" },
        { label: "Dream Machine podcast on Spotify", url: "https://open.spotify.com/show/2ptbLwVWeyO7ooPGHoYTqk?si=75397e5f7d7246e2" },
        { label: "Dream Machine: AI and the Next Creative Economy (book)", url: "https://www.amazon.co.uk/dp/B0H44ZSGP2/" },
      ] },
    ],
    press: [
      { label: "The Economist: Hollywood is entering its AI era", url: "https://www.economist.com/business/2026/08/04/hollywood-is-entering-its-ai-era" },
      { label: "Fast Company: our interest in AI slop is hitting a ceiling", url: "https://www.fastcompany.com/91568818/our-interest-in-ai-slop-is-hitting-a-ceiling" },
      { label: "Prolific North: AI talk at Beyond Conference", url: "https://www.prolificnorth.co.uk/news/from-ai-to-immersive-performances-and-greater-manchesters-creative-future-key-takeaways-from-beyond-2025s-creative-mixer-at-mediacity/" },
    ],
    tags: ["Creative AI", "Writing", "Research", "Podcast"],
    video: "/video/dream-machine.mp4",
    poster: "/video/dream-machine.jpg",
    card: "/img/card-dream-machine.webp",
    cardVideo: "/video/dream-machine-card.mp4",
    cardRole: "Author",
    clients: ["The Economist", "Fast Company"],
    size: "md",
  },
  {
    slug: "soundings",
    tier: "more",
    title: "Soundings",
    org: "Mapping the UK creative economy",
    orgUrl: "https://www.linkedin.com/posts/petewoodbridge_creativeindustries-creativeplace-creativeeconomy-activity-7481241546974195712-UHDa",
    role: "Data science & systems",
    period: "2026",
    tagline: "A live map of every registered creative company in the UK: roughly 745,000 of them, in 65 regional views.",
    intro:
      "Taking soundings is how a ship measures what is really beneath it, not what the chart says. Soundings does the same for the UK's creative economy, and this year it went national.",
    body: [
      "Soundings covers every registered creative company in the United Kingdom, swept from the Companies House register into sixty-five like-for-like region views from Cornwall to Shetland, each with its own database, map and regenerable evidence report. No comparable open picture of the sector exists.",
      "The problem it solves is that our knowledge of the creative economy is stored in the wrong medium: static reports, commissioned once per funding cycle, out of date before publication. The official statistics are rigorous but annual, aggregate and blind by design to everything below the VAT threshold. Soundings is a system, not a report. Agents sweep the register monthly; every fact carries its source and time of belief; nothing is silently overwritten, so it can answer not just what we know but what we believed when we decided, and what happened next.",
      "The deepest instance is the Liverpool City Region, where the register is joined by curated venues, festivals, studios and institutions and a full evidence briefing for the Combined Authority. That depth is the template: when a policy question arrives, the answer should be a query, not a commission.",
    ],
    groups: [
      { title: "Find out more", items: [
        { label: "Soundings: mapping the UK creative economy (LinkedIn)", url: "https://www.linkedin.com/posts/petewoodbridge_creativeindustries-creativeplace-creativeeconomy-activity-7481241546974195712-UHDa" },
        { label: "University of Liverpool: Liverpool is the UK's most musical big-city economy", url: "https://news.liverpool.ac.uk/2026/08/04/liverpool-is-uks-most-musical-big-city-economy-with-ai-sector-rapidly-catching-up/" },
        { label: "The Business Desk: LCR setting the pace in music and AI", url: "https://www.thebusinessdesk.com/northwest/news/2176917-liverpool-city-region-setting-pace-in-fast-expanding-music-and-ai-sectors" },
      ] },
    ],
    tags: ["Data", "AI agents", "Creative economy", "Policy"],
    video: "/video/soundings.mp4",
    poster: "/video/soundings.jpg",
    card: "/img/card-soundings.webp",
    cardVideo: "/video/soundings-card.mp4",
    cardRole: "Data & Systems",
    clients: ["Liverpool City Region"],
    size: "md",
  },
  {
    slug: "qube-smash",
    tier: "more",
    title: "Qube Smash",
    org: "Crucial FX",
    orgUrl: "https://crucial-fx.com/pulse/meet-qube-smash-an-original-mixed-reality-immersive-football-game/",
    role: "Creative Technologist",
    period: "2023",
    tagline: "An original mixed-reality football game: tracking, realtime games engines and an immersive space.",
    intro:
      "Qube Smash combines tracking, realtime games engines, immersive spaces and a bit of magic to create a new, out-of-this-world playable sports experience. I had a lot of fun on this one.",
    body: [
      "Built with the team at <a href=\"https://www.linkedin.com/company/crucial-fx/\" target=\"_blank\" rel=\"noopener\">Crucial FX</a>, the game turns a projection-mapped room into a pitch: players are tracked in real time and the environment reacts to every kick. It is a template for a category of playable, location-based sports experiences that fit venues from fan zones to shopping centres.",
      "Read the launch story at <a href=\"https://crucial-fx.com/pulse/meet-qube-smash-an-original-mixed-reality-immersive-football-game/\" target=\"_blank\" rel=\"noopener\">Crucial FX</a>, or see the wider work in <a href=\"/work/crucial-fx\">Crucial FX</a>.",
    ],
    groups: [
      { title: "Find out more", items: [
        { label: "Meet Qube Smash", url: "https://crucial-fx.com/pulse/meet-qube-smash-an-original-mixed-reality-immersive-football-game/" },
        { label: "Crucial FX on LinkedIn", url: "https://www.linkedin.com/company/crucial-fx/" },
      ] },
    ],
    tags: ["Playable media", "Tracking", "Projection mapping", "Games engines"],
    video: "/video/playable.mp4",
    poster: "/video/playable.jpg",
    card: "/img/card-qube-smash.webp",
    cardVideo: "/video/playable-card.mp4",
    cardRole: "Creative Technologist",
    clients: ["Crucial FX"],
    size: "md",
  },
  {
    slug: "aardman",
    tier: "more",
    title: "Immersive Shaun the Sheep",
    org: "Aardman · University of Liverpool · LJMU",
    orgUrl: "https://www.aardman.com/",
    role: "Co-investigator",
    period: "2020",
    tagline: "A £1.08m AHRC research partnership to build a headset-free, AI-driven Shaun the Sheep experience in Shanghai.",
    intro:
      "The University of Liverpool's Centre for Architecture and Visual Arts secured more than £500,000 of UKRI/AHRC funding to develop an immersive Shaun the Sheep experience in China for Aardman. I was a co-investigator, representing LJMU.",
    body: [
      "Led by Professor Richard Koeck with Dr Shan Luo and Aardman senior producer Stephanie Owen, the project set out to build a genuinely new cinematic, AI-driven, spatially immersive way of storytelling: visitors of all ages interacting directly with a Shaun the Sheep story in real time, without headsets, gloves or personal devices, in partnership with the <a href=\"http://www.sta.edu.cn/\" target=\"_blank\" rel=\"noopener\">Shanghai Theatre Academy</a>.",
      "It was funded through the AHRC Research-Industry Creative Partnership and the UKRI Fund for International Collaboration, with a combined project value of £1.08 million, and brought together three academic partners with Aardman, the Media Industry Association and Digital Fun, supported by the University's <a href=\"https://www.liverpool.ac.uk/engineering/research/vec/\" target=\"_blank\" rel=\"noopener\">Virtual Engineering Centre</a>.",
    ],
    groups: [
      { title: "Find out more", items: [
        { label: "University of Liverpool press release", url: "https://news.liverpool.ac.uk/2020/03/04/500k-to-develop-immersive-shaun-the-sheep-experience/" },
        { label: "Centre for Architecture and Visual Arts (CAVA)", url: "http://www.cava-research.org/" },
        { label: "Aardman", url: "https://www.aardman.com/" },
        { label: "Professor Richard Koeck", url: "https://www.liverpool.ac.uk/architecture/staff/richard-koeck/" },
        { label: "School of Architecture", url: "https://www.liverpool.ac.uk/architecture/" },
        { label: "Shanghai Theatre Academy", url: "http://www.sta.edu.cn/" },
      ] },
    ],
    tags: ["Research", "AI", "Location-based experience", "Animation"],
    video: "/video/aardman.mp4",
    poster: "/video/aardman.jpg",
    card: "/img/card-aardman.webp",
    cardVideo: "/video/aardman-card.mp4",
    cardRole: "Co-investigator",
    clients: ["Aardman", "AHRC", "UKRI"],
    size: "md",
  },
  {
    slug: "trailblazers",
    tier: "more",
    title: "500 UK Trailblazers",
    org: "UKII Intelligence Report 2024",
    orgUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7141433657994477568/",
    role: "Award",
    period: "2024",
    tagline: "Named one of 500 trailblazers in UK innovation for work in AI animation.",
    intro:
      "The UKII Intelligence Report 2024, by We Are Incandescence and sponsored by Verizon and Epic Games, named 500 trailblazers in UK science, technology and innovation. I was included in the creative industries category for my work in AI animation.",
    body: [
      "The work recognised came out of the MediaCity innovation programme and Dreamlab: AI-augmented animation and production workflows, tool-building with ComfyUI and realtime engines, and the community hacks and jams that spread those techniques across the North West's studios.",
    ],
    groups: [
      { title: "Find out more", items: [
        { label: "The report and the other nominees", url: "https://www.linkedin.com/feed/update/urn:li:activity:7141433657994477568/" },
        { label: "MediaCity AI work featured in the report", url: "https://www.linkedin.com/feed/update/urn:li:activity:7141426196197564417/" },
      ] },
    ],
    tags: ["Award", "AI animation"],
    video: "/video/trailblazers.mp4",
    poster: "/video/trailblazers.jpg",
    card: "/img/card-trailblazers.webp",
    cardVideo: "/video/trailblazers-card.mp4",
    cardRole: "Award",
    clients: ["Verizon", "Epic Games"],
    size: "md",
  },
  {
    slug: "bima-100",
    tier: "more",
    title: "BIMA 100",
    org: "British Interactive Media Association",
    orgUrl: "https://bima.co.uk/bima-programmes/bima-100-2020/",
    role: "Award · Creatives and Designers",
    period: "2020",
    tagline: "Named among the 100 most influential, pioneering and changemaking people in the UK digital and tech industry.",
    intro:
      "Every year BIMA, the UK's largest digital and tech community, searches for the 100 most influential, pioneering and groundbreaking people in the industry. In 2020 an independent panel put me in the Creatives and Designers category.",
    body: [
      "The selection followed a year of pioneering creative technology and immersive experience projects: the MA Immersive Arts, the Experimental Technologies Lab, the Immersive Storytelling Experiences Symposium and the Immersive Liverpool network.",
      "My advice at the time, for anyone starting out, still stands: go for it, start making, take risks, collaborate and experiment at the boundaries of what you do.",
    ],
    groups: [
      { title: "Find out more", items: [
        { label: "BIMA 100 2020", url: "https://bima.co.uk/bima-programmes/bima-100-2020/" },
        { label: "LJMU press release", url: "https://www.ljmu.ac.uk/about-us/news/articles/2020/5/6/immersive-arts-pioneer-named-among-uks-100-top-creatives" },
      ] },
    ],
    tags: ["Award", "Creative technology"],
    video: "/video/bima-100.mp4",
    poster: "/video/bima-100.jpg",
    card: "/img/card-bima-100.webp",
    cardVideo: "/video/bima-100-card.mp4",
    cardRole: "Award",
    clients: ["BIMA"],
    size: "md",
  },
];

export const mainProjects = projects.filter((p) => p.tier !== "more");
export const moreProjects = projects.filter((p) => p.tier === "more");

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
export function neighbours(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];
  return { prev, next };
}
