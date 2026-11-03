// The header, menu and footer every page shares, except the product pages,
// which have their own (ARCHITECTURE.md, "Design"). Contact details in them
// come from site.ts.

export const siteHeader = {
  logoLine: "Engineers",
  homeLink: "B.P. Engineers home page",
  products: { label: "Products", to: "/products" },
  quote: { label: "Get a quote", to: "/quote" },
  menu: "Menu",
  close: "Close",
};

export const siteMenu = {
  label: "Menu",
  links: [
    { label: "Home", to: "/" },
    { label: "Products", to: "/products" },
    { label: "About us", to: "/about" },
    { label: "Knowledge", to: "/blog" },
    { label: "Contact", to: "/contact" },
    { label: "Get a quote", to: "/quote" },
  ],
};

export const siteFooter = {
  tagline: ["Foundry equipment.", "Made in Punjab. Since 1990."],
  explore: {
    heading: "Explore",
    links: [
      { label: "Our products", to: "/products" },
      { label: "Our company", to: "/about" },
      { label: "Knowledge", to: "/blog" },
      { label: "Get a quote", to: "/quote" },
    ],
  },
  visit: { heading: "Visit us", map: "Find our workshop" },
  talk: { heading: "Let’s talk", whatsapp: "WhatsApp" },
  sign: "Built to endure.",
  copyright: "© 2026 B.P. Engineers",
  motto: "Strength. Precision. Reliability.",
  backToTop: "Back to top",
};
