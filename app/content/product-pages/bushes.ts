// From the "Bushes", "Standard Round bushes" and "Oval Bush internal Sizes"
// sheets of the product page workbook. The oval sizes are sorted.
import { castingEquipment } from "./shared";
import type { ProductPage } from "./types";

export const bushes: ProductPage = {
  slug: "bushes",
  category: castingEquipment,
  number: "03",
  name: "Bushes",
  shortName: "Bushes",
  drawing: "bushes",
  meta: {
    title: "Guide Bushes for Moulding Boxes & Flasks | 20MnCr5 / 8620 | B.P. Engineers",
    description:
      "Alloy steel guide bushes (20MnCr5 / AISI 8620) for foundry moulding boxes and flasks, made to your drawing. Made in Punjab by B.P. Engineers since 1990. Request a quote.",
  },
  hero: {
    eyebrow: "Standard sizes readily available",
    title: { lines: ["Guide bushes", "for moulding"], accent: "boxes & flasks." },
    standfirst:
      "Precision-engineered moulding box bushes, supplied as a matched pair comprising one round bush and one oval bush.",
    caption: "Round and oval bushes",
  },
  overview: {
    title: { lines: ["Worn or poorly made bushes cause mould mismatch and "], accent: "shifted castings." },
    lead: "Designed for accurate alignment of cope and drag moulding boxes in sand casting foundries, ensuring proper positioning, consistent mould assembly, and reliable alignment during the casting process.",
  },
  types: {
    title: { lines: ["Made to your drawing, sample or "], accent: "existing bush." },
  },
  specs: {
    title: { lines: ["Case hardened to "], accent: "58–62 HRC." },
    stats: [
      { value: "58–62", unit: "HRC", label: "Case hardness" },
      { value: "0.8–1.2", unit: "mm", label: "Effective case depth" },
      { value: "100", unit: "sets", label: "Minimum order" },
    ],
    rows: [
      { label: "Material", value: "20MnCr5 / AISI 8620" },
      {
        label: "Heat treatment / hardness",
        value: "Case hardened to 58–62 HRC, with an effective case depth of 0.8 to 1.2 mm",
      },
      { label: "Tolerance / fit", value: "ID F8" },
      { label: "Surface finish", value: "Ground" },
      { label: "Lead time", value: "Standard sizes readily available" },
      { label: "MOQ", value: "100 sets" },
    ],
  },
  sizes: {
    title: { lines: ["Standard sizes, "], accent: "readily available." },
    round: {
      heading: "Standard round bushes",
      columns: ["Internal diameter (mm)", "Outer diameter (mm)", "Length (mm)"],
      rows: [
        [19, 30, 22],
        [22, 35, 22],
        [25, 40, 25],
      ],
    },
    oval: {
      heading: "Oval bushes, internal sizes",
      note: "Width × length, mm",
      sizes: [
        [14, 17],
        [16, 18],
        [18, 24],
        [19, 23],
        [19, 24],
        [21, 27],
        [21, 30],
        [22, 27],
        [25, 30],
        [27, 35],
        [30, 35],
        [30, 36],
        [35, 40],
        [35, 45],
      ],
    },
  },
  whereUsed: {
    statement:
      "Moulding boxes and flasks for green sand and no-bake moulding lines; replacement bushes for existing boxes.",
  },
  reasons: [
    "30+ years in foundry equipment manufacturing",
    "Alloy steel (20MnCr5 / AISI 8620) as used in our own moulding boxes",
    "Made to your drawing or sample",
  ],
  faqs: [
    {
      question: "Can you supply replacement bushes for my existing boxes?",
      answer: "Yes. Send a sample or dimensions.",
    },
    {
      question: "What material do you use?",
      answer: "20MnCr5 / AISI 8620 alloy steel, hardened to 58–60 HRC.",
    },
    { question: "What is your minimum order quantity?", answer: "100 sets." },
    { question: "How long does delivery take?", answer: "Standard sizes are readily available." },
  ],
  quoteFields: [
    { name: "size", label: "Bush size", placeholder: "ID × OD × length, e.g. 22 × 35 × 22 mm", wide: true },
    { name: "quantity", label: "Quantity", placeholder: "e.g. 100 sets" },
  ],
  related: ["moulding-boxes", "matchplate-moulding-pins", "closing-pins"],
};
