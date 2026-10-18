/**
 * Shared JSON-LD entities.
 *
 * Pete's sister sites (dreamlab.org.uk and getbearings.co.uk) publish these exact @ids, and this
 * site is the canonical home of the Person. Keeping the identifiers byte-for-byte identical across
 * all three is what lets search engines and AI assistants merge them into one entity graph, so they
 * are written out in full rather than derived from the build's SITE_URL. Do not change them.
 */
export const ids = {
  person: "https://petewoodbridge.com/#person",
  website: "https://petewoodbridge.com/#website",
  dreamlab: "https://dreamlab.org.uk/#organization",
  bearings: "https://getbearings.co.uk/#app",
};

/** dreamlab as an Organization reference. The name is lower case, as dreamlab writes it. */
export const dreamlabOrg = {
  "@type": "Organization",
  "@id": ids.dreamlab,
  name: "dreamlab",
  url: "https://dreamlab.org.uk/",
};

/**
 * Full nodes for the homepage and About page graphs: dreamlab (Pete is a founder) and Bearings
 * (which Pete created, with dreamlab). Other pages point at them by @id only.
 */
export const profileEntities = [
  {
    ...dreamlabOrg,
    founder: { "@id": ids.person },
  },
  {
    "@type": "WebApplication",
    "@id": ids.bearings,
    name: "Bearings",
    url: "https://getbearings.co.uk/",
    description:
      "A free finder for grants, investment, tenders and business support for businesses across the North West of England, with the UK-wide schemes they can apply for, reading over 1,100 sources every day.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "GBP" },
    creator: [{ "@id": ids.person }, { "@id": ids.dreamlab }],
  },
];
