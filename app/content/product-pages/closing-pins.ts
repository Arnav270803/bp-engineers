// From the "Closing Pins" sheet of the product page workbook. Its "Where
// they're used" entry reads only "As per Drawing", so the page has no such
// chapter.
import { castingEquipment } from "./shared";
import type { ProductPage } from "./types";

export const closingPins: ProductPage = {
  slug: "closing-pins",
  category: castingEquipment,
  number: "05",
  name: "Closing Pins",
  shortName: "Closing pins",
  drawing: "closing-pins",
  meta: {
    title: "Closing Pins for Sand Casting Foundry Moulding Boxes | B.P. Engineers, Punjab",
    description:
      "Closing Pins for sand casting moulding boxes and matchplates, made to your drawing. Made in Punjab by B.P. Engineers since 1990. Request a quote.",
  },
  hero: {
    eyebrow: "20–25 days lead time",
    title: { lines: ["Closing pins", "for sand casting"], accent: "moulding boxes." },
    standfirst: "Closing pins hold the cope and drag aligned when the mould is closed.",
    caption: "Closing pin, elevation",
  },
  overview: {
    title: { lines: ["The last alignment step before "], accent: "metal is poured." },
    lead: "A loose, worn or bent closing pin lets the mould halves shift before pouring.",
    body: [
      "Closing pins are what align the cope and drag boxes when the mould is closed. They are the last alignment step before metal is poured, so any error in them goes straight into the casting. Since the pins and their bushings are the only thing holding the two halves in register, their condition decides whether the cavity halves meet exactly.",
      "B.P. Engineers makes them to your drawing or sample.",
    ],
  },
  types: {
    title: { lines: ["Made to your drawing, sample or "], accent: "existing pin." },
  },
  specs: {
    title: { lines: ["Hardened, ground and "], accent: "made to drawing." },
    stats: [
      { value: "20–25", unit: "days", label: "Lead time" },
      { value: "25", unit: "sets", label: "Minimum order" },
    ],
    rows: [
      { label: "Material", value: "EN19 / 20MnCr5" },
      { label: "Heat treatment / hardness", value: "Depending on material" },
      { label: "Diameter range", value: "As per drawing" },
      { label: "Length range", value: "As per drawing" },
      { label: "Surface finish", value: "Ground" },
      { label: "Lead time", value: "20–25 days" },
      { label: "MOQ", value: "25 sets" },
    ],
  },
  reasons: [
    "30+ years in foundry equipment manufacturing",
    "Made to your drawing or sample",
    "Precision-ground, hardened pins that hold the boxes in exact register, mould after mould",
  ],
  faqs: [
    {
      question: "Can you make to my drawing or match a sample?",
      answer: "Yes. Send a drawing or sample and we’ll quote.",
    },
    {
      question: "What material and hardness do you use?",
      answer: "Material selection and hardness are both as per the customer’s drawing.",
    },
    { question: "What is your minimum order quantity?", answer: "25 sets." },
    { question: "How long does delivery take?", answer: "20–25 days on order confirmation." },
  ],
  quoteFields: [
    { name: "size", label: "Pin size", placeholder: "Diameter × length, e.g. 25 × 150 mm", wide: true },
    { name: "quantity", label: "Quantity", placeholder: "e.g. 25 sets" },
  ],
  related: ["moulding-boxes", "bushes", "matchplate-moulding-pins"],
};
