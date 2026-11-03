// Text of the quote page. The words are the original's; titles and labels are
// in sentence case, as the site's design writes them.
import type { PageHeroContent } from "~/components/site/PageHero";

export const quoteMeta = {
  title: "Get a Quote — B.P. Engineers | Foundry Equipment",
  description:
    "Request a free quote from B.P. Engineers for moulding boxes, pouring ladles, conveyor systems and custom foundry equipment. Response within 24 hours.",
};

export const quoteHero: PageHeroContent = {
  eyebrow: "Free · No Obligation · 24 Hour Response",
  titleBefore: "Request a ",
  titleAccent: "free quote",
  lead: "Tell us your requirements — product type, dimensions, quantity, material. We'll respond with a competitive quote within 24 hours on working days.",
};

export const quoteSidebar = {
  contactTitle: "Contact us directly",
  labels: { whatsapp: "WhatsApp", phone: "Phone", email: "Email" },
  promiseTitle: "Our promise",
  promises: [
    "Free quote — no obligation",
    "Response within 24 hours",
    "Custom sizes available",
    "OEM manufacturing welcome",
    "Competitive pricing",
    "35+ years experience",
  ],
};

export const quoteForm = {
  sections: {
    details: "Your details",
    requirements: "Product requirements",
    additional: "Additional details",
  },
  categoryPrompt: "Select category",
  categories: [
    "Moulding Boxes / Flasks",
    "Pouring Ladles",
    "Flask & Frame Equipment",
    "Casting Accessories",
    "Conveyor Belt Systems",
    "Conveyor Rollers",
    "Sand Hoppers / Bins",
    "Sand Plant Structures",
    "CNC Machined Parts",
    "Sheet Metal Fabrication",
    "Welding & Structural",
    "Multiple Products",
    "Other / Custom",
  ],
  materialPrompt: "Select material",
  materials: ["Mild Steel (MS)", "Galvanized Iron (GI)", "MS + GI", "As per recommendation"],
  timelinePrompt: "Select timeline",
  timelines: [
    "Urgent — within 2 weeks",
    "Standard — 2 to 4 weeks",
    "Flexible — 1 to 2 months",
    "Planning stage — no rush",
  ],
  sourcePrompt: "Select one",
  sources: ["Google Search", "IndiaMART", "WhatsApp / Referral", "Existing Customer", "Other"],
  specificationsPlaceholder:
    "Describe your requirements in detail — any special dimensions, tolerances, finish requirements, or other specifications...",
  noteLead: "Free quote — no obligation.",
  noteRest:
    " We will review your requirements and respond within 24 hours on working days with pricing and availability.",
  submit: "Submit quote request",
  sending: "Sending...",
  submitted: "Submitted ✓",
  // Each message is written in parts around its links. A part must stay one
  // piece of text: splitting it changes how the browser spaces the letters.
  success: {
    mark: "✓ ",
    heading: "Quote request sent!",
    text: "We will respond within 24 hours.",
    beforeLink: "Or ",
    link: "WhatsApp us",
    afterLink: " for faster response.",
  },
  failure: {
    beforeWhatsapp: "Submission failed. Please ",
    whatsapp: "WhatsApp us",
    beforeEmail: " or email ",
    afterEmail: ".",
  },
  // The original shows the arrow's character code as raw text after a failed
  // submission. Reproduced on purpose: see Q6 in ARCHITECTURE.md.
  submitAfterFailure: "Submit Quote Request &#8594;",
};
