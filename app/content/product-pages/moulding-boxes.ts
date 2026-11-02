// From the "Moulding Box" sheet of the product page workbook.
import { castingEquipment } from "./shared";
import type { ProductPage } from "./types";

export const mouldingBoxes: ProductPage = {
  slug: "moulding-boxes",
  category: castingEquipment,
  number: "01",
  name: "Moulding Boxes",
  shortName: "Moulding boxes",
  drawing: "moulding-boxes",
  meta: {
    title: "Precision Moulding Boxes (Cope & Drag) | VMC Machined | B.P. Engineers, Punjab",
    description:
      "VMC-machined MS moulding boxes with 0.1 mm centre-distance accuracy and 0.1 mm flatness. Stress relieved, MIG welded, with 20MnCr5 bushes. Custom sizes. Request a quote.",
  },
  hero: {
    eyebrow: "45–60 days lead time",
    title: { lines: ["Precision", "moulding boxes,"], accent: "cope & drag." },
    standfirst: "Cope, drag and cheek boxes, fabricated in mild steel and VMC machined to 0.1 mm accuracy.",
    caption: "Cope and drag, assembled",
  },
  overview: {
    title: { lines: ["Your mould halves close and align the same way on "], accent: "every cycle." },
    lead: "A moulding box that is out of flat or has misaligned pins gives you mismatch, flash and rejected castings.",
    body: [
      "Ours are fabricated, stress relieved and then machined on VMC, so critical faces and pin positions are held to tight tolerances after welding distortion is removed. B.P. Engineers has manufactured foundry equipment in Punjab since 1990.",
    ],
    process: {
      caption: "How every box is made",
      steps: [
        { name: "Fabricated", text: "Mild steel, MIG welded throughout." },
        {
          name: "Stress relieved",
          text: "Relieving welding stresses first keeps the machined accuracy in service.",
        },
        { name: "VMC machined", text: "Critical faces and pin positions held to 0.1 mm." },
        { name: "Black painted", text: "Painted black throughout." },
      ],
    },
  },
  types: {
    title: { lines: ["Cope, drag and cheek,", "or made to "], accent: "your drawing." },
    items: [
      { name: "Cope box", text: "Top half of the mould" },
      { name: "Drag box", text: "Bottom half of the mould" },
      { name: "Cheek box", text: "Intermediate sections for multi-part moulds" },
      { name: "Custom box", text: "Made to your size, drawing or sample" },
    ],
    exploded: {
      caption: "Cope, cheek and drag, exploded",
      dimension: "PIN CENTRE DISTANCE · 0.1 MM",
      flatness: "0.1",
      legend: [
        { label: "Cope", text: "Top half of the mould" },
        { label: "Cheek", text: "Intermediate sections for multi-part moulds" },
        { label: "Drag", text: "Bottom half of the mould" },
        { label: "Guide bush", text: "20MnCr5 / AISI 8620, case hardened to 58–60 HRC" },
        { label: "Guide pin", text: "Pin centre distance held to 0.1 mm" },
        { label: "Parting face", text: "Within 0.1 mm" },
      ],
    },
  },
  specs: {
    title: { lines: ["Built and machined to "], accent: "0.1 mm." },
    stats: [
      { value: "0.1", unit: "mm", label: "Centre distance and flatness" },
      { value: "58–60", unit: "HRC", label: "Bush hardness" },
      { value: "45–60", unit: "days", label: "Lead time" },
    ],
    rows: [
      { label: "Box material", value: "Mild steel" },
      { label: "Bush material", value: "20MnCr5 / AISI 8620, case hardened to 58–60 HRC" },
      { label: "Machining", value: "VMC machined" },
      { label: "Centre distance (CD) accuracy", value: "0.1 mm" },
      { label: "Flatness", value: "Within 0.1 mm" },
      { label: "Other dimensions", value: "Standard fabrication tolerances" },
      { label: "Welding", value: "MIG, throughout" },
      { label: "Stress relieving", value: "Yes" },
      { label: "Finish", value: "Black painted throughout" },
      { label: "Lead time", value: "45–60 days" },
      { label: "Handling", value: "As per drawing / sample" },
    ],
  },
  whereUsed: {
    statement:
      "Moulding boxes for green sand and no-bake moulding in jobbing foundries, automotive, agricultural, railway vendor and pump and valve casting units.",
    lists: [
      { label: "Processes", items: ["Green sand", "No-bake"] },
      {
        label: "Industries",
        items: [
          "Jobbing foundries",
          "Automotive",
          "Agricultural",
          "Railway vendors",
          "Pump and valve casting units",
        ],
      },
    ],
  },
  reasons: [
    "30+ years in foundry equipment manufacturing",
    "Machined accuracy of 0.1 mm on centre distance and flatness",
    "Stress-relieved construction for dimensional stability",
    "Typical lead time of 45–60 days, depending on size and quantity",
  ],
  faqs: [
    {
      question: "Can you make boxes to my size and pin layout?",
      answer: "Yes. Send your drawing, sample or dimensions and we’ll quote.",
    },
    {
      question: "Why are the boxes stress relieved before machining?",
      answer:
        "Welding leaves internal stresses that can make a box move later. Relieving them first keeps the machined accuracy in service.",
    },
    {
      question: "What accuracy do you hold?",
      answer:
        "0.1 mm on centre distance and flatness. Other dimensions follow standard fabrication tolerances.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Typically 45–60 days from order confirmation, depending on box size, quantity and drawing complexity.",
    },
  ],
  quoteFields: [
    {
      name: "size",
      label: "Box size",
      placeholder: "Length × width × height, e.g. 600 × 400 × 150 mm",
      wide: true,
    },
    { name: "quantity", label: "Quantity", placeholder: "e.g. 10 sets" },
  ],
  related: ["pallet-cars", "bushes", "matchplate-moulding-pins", "closing-pins"],
};
