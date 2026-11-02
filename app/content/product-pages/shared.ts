// What the product pages have in common: their category, the products they
// mention that have no page yet, and the words used on every page.
import { keepTogether } from "./keep-together";
import type { OtherProduct, ProductCategory } from "./types";

export const castingEquipment: ProductCategory = { slug: "casting-equipment", label: "Casting equipment" };

// Related to pallet cars but without a page. They link to the products page;
// their text is the home page's.
export const conveyorBelts: OtherProduct = {
  name: "Conveyor belt systems",
  label: "Sand handling",
  excerpt:
    "Flat belt and troughed conveyor systems for sand transport. Custom lengths and widths with MS structural frames.",
  drawing: "conveyor-belts",
  to: "/products",
};

export const conveyorRollers: OtherProduct = {
  name: "Conveyor rollers",
  label: "Sand handling",
  excerpt:
    "Idler, drive and return rollers in MS and GI. Precision-machined bearing housings for smooth operation.",
  drawing: "conveyor-rollers",
  to: "/products",
};

/** The words used on every product page. */
export const productPageText = keepTogether({
  homeLink: "B.P. Engineers home page",
  logoSince: "Since 1990",
  allProducts: "All products",
  madeBy: "Made by B.P. Engineers",
  madeWhere: "Mubarikpur, Punjab · Since 1990",
  figure: "Fig.",
  scroll: "Scroll to explore ↓",
  drawingNumber: "Drg. BP-",
  elevation: "Elevation",
  notToScale: "Not to scale",
  onThisPage: "On this page",
  chapters: {
    overview: "Overview",
    types: "Types we make",
    specifications: "Specifications",
    sizes: "Standard sizes",
    whereUsed: "Where they’re used",
    why: "Why B.P. Engineers",
    faq: "FAQ",
    quote: "Request a quote",
  },
  circle: ["Request", "quote"],
  step: "Step",
  why: { lines: ["Why foundries choose "], accent: "B.P. Engineers." },
  numerals: ["i.", "ii.", "iii.", "iv.", "v.", "vi."],
  faq: { lines: ["Frequently asked "], accent: "questions." },
  question: "Q.",
  bushLabels: { round: "Round", oval: "Oval" },
  quote: {
    title: { lines: ["Send your drawing, sample or dimensions and "], accent: "we’ll quote." },
    note: "We will review your requirements and respond within 24 hours on working days with pricing and availability.",
    contact: { call: "Call", whatsapp: "WhatsApp", email: "Email" },
    product: "Product",
    prefilled: "Pre-filled",
    name: { label: "Name *", placeholder: "Your full name" },
    company: { label: "Company", placeholder: "Company or foundry name" },
    phone: { label: "Phone / WhatsApp *", placeholder: "+91 XXXXX XXXXX" },
    // The enquiry script cannot receive files, so drawings go by WhatsApp or email.
    drawing: {
      label: "Drawing",
      before: "Send your drawing on ",
      whatsapp: "WhatsApp",
      middle: " or by ",
      email: "email",
      note: "A drawing, sketch or photo of your sample",
    },
    submit: "Request a quote",
    sending: "Sending…",
    sent: "Request sent",
    fine: "Free quote — no obligation.",
    // Each message is written in parts around its links.
    success: {
      text: "✓ Quote request sent! We will respond within 24 hours.",
      before: "Or ",
      link: "WhatsApp us",
      after: " for a faster response.",
    },
    failure: {
      before: "Submission failed. Please ",
      whatsapp: "WhatsApp us",
      middle: " or email ",
      after: ".",
    },
  },
  related: {
    kicker: "Related products",
    title: { lines: ["More from the "], accent: "casting floor." },
    view: "View product",
  },
  footer: { products: "Products", company: "Company", contact: "Contact" },
});
