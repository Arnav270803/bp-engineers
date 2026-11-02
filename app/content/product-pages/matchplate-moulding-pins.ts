// From the "Matchplate Pins" sheet of the product page workbook.
import { castingEquipment } from "./shared";
import type { ProductPage } from "./types";

export const matchplateMouldingPins: ProductPage = {
  slug: "matchplate-moulding-pins",
  category: castingEquipment,
  number: "04",
  name: "Matchplate & Moulding Pins",
  shortName: "Matchplate & moulding pins",
  drawing: "matchplate-pins",
  meta: {
    title: "Matchplate/Moulding Pins for Foundry Moulding | B.P. Engineers, Punjab",
    description:
      "Matchplate & Moulding Pins for sand casting moulding boxes and matchplates, made out of EN19 or 20MnCr5 as per your drawing and requirement. Made in Punjab by B.P. Engineers since 1990. Request a quote.",
  },
  hero: {
    eyebrow: "15–25 days lead time",
    title: { lines: ["Matchplate &", "moulding pins,"], accent: "made to drawing." },
    standfirst:
      "Matchplate or moulding pins locate the pattern plate and moulding box accurately during moulding.",
    caption: "Moulding pin, elevation",
  },
  overview: {
    title: { lines: ["Any pin error carries into the "], accent: "finished mould." },
    lead: "B.P. Engineers makes them to your drawing or sample.",
    points: [
      {
        label: "Plate-to-box alignment",
        text: "The pattern on each side of the match plate must sit in the right position inside its box. If the pins are off, the pattern is shifted within the box, leaving uneven sand thickness on one side and too little wall sand on the other.",
      },
      {
        label: "Cope-drag match",
        text: "Because both boxes are located from the same plate, any pin error carries into the finished mould. When the boxes are later closed, the cavity halves won’t line up, giving mould shift and a stepped parting line on the casting.",
      },
      {
        label: "Stability during jolting",
        text: "Jolting applies repeated impact. Loose or worn pins let the plate and box move against each other with each blow, which can shift the pattern, cause sand to leak between plate and box, and give poor ramming around the pattern.",
      },
      {
        label: "Sand compaction quality",
        text: "If the box is not seated true on the plate, the gap or tilt can lead to uneven compaction, weak spots, and sand drops when the plate is stripped.",
      },
      {
        label: "Clean pattern draw",
        text: "Accurate alignment helps the plate separate from the sand without dragging or damaging edges, especially on deep or detailed patterns.",
      },
      {
        label: "Wear and repeatability",
        text: "The pins take shock on every cycle. Hardened, ground pins and bushings hold their fit for longer, so the setup stays consistent across a long production run.",
      },
    ],
  },
  types: {
    title: { lines: ["Made to your drawing, sample or "], accent: "existing pin." },
  },
  specs: {
    title: { lines: ["EN19 or 20MnCr5, "], accent: "ground." },
    stats: [
      { value: "15–25", unit: "days", label: "Lead time" },
      { value: "20", unit: "sets", label: "Minimum order" },
    ],
    rows: [
      { label: "Material", value: "EN19 / 20MnCr5" },
      { label: "Heat treatment / hardness", value: "Depending on material" },
      { label: "Diameter range", value: "As per drawing" },
      { label: "Length range", value: "As per drawing" },
      { label: "Surface finish", value: "Ground" },
      { label: "Lead time", value: "15–25 days" },
      { label: "MOQ", value: "20 sets" },
    ],
  },
  reasons: ["30+ years in foundry equipment manufacturing", "Made to your drawing or sample"],
  faqs: [
    {
      question: "Can you make to my drawing or match a sample?",
      answer: "Yes. Send a drawing or sample and we’ll quote.",
    },
    { question: "What is your minimum order quantity?", answer: "20 sets." },
    {
      question: "How long does delivery take?",
      answer: "Standard delivery time is 15–25 days on order confirmation.",
    },
  ],
  quoteFields: [
    { name: "size", label: "Pin size", placeholder: "Diameter × length, e.g. 20 × 120 mm", wide: true },
    { name: "quantity", label: "Quantity", placeholder: "e.g. 20 sets" },
  ],
  related: ["moulding-boxes", "bushes", "closing-pins"],
};
