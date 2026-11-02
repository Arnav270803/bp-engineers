// From the "Pallet Cars" sheet of the product page workbook.
import { castingEquipment, conveyorBelts, conveyorRollers } from "./shared";
import type { ProductPage } from "./types";

export const palletCars: ProductPage = {
  slug: "pallet-cars",
  category: castingEquipment,
  number: "02",
  name: "Pallet Cars",
  shortName: "Pallet cars",
  drawing: "pallet-cars",
  meta: {
    title: "Pallet Cars for Foundry Mould Conveyors | B.P. Engineers, Punjab",
    description:
      "Fabricated or cast iron pallet cars with SG iron or CI wheels and heavy-duty bearings, built for sand casting environments. Made to your size and load. Request a quote.",
  },
  hero: {
    eyebrow: "45–60 days lead time",
    title: { lines: ["Pallet cars", "for foundry"], accent: "mould conveyors." },
    standfirst:
      "Pallet cars work in one of the harshest parts of the foundry, with heavy loads, hot moulds, and sand and dust everywhere.",
    caption: "Pallet car, side elevation",
  },
  overview: {
    title: { lines: ["Built to your line, in fabricated or "], accent: "cast iron." },
    lead: "Ours are built to your line in fabricated or cast iron construction, with SG iron or CI wheels and premium heavy-duty bearings chosen for sand casting conditions.",
  },
  types: {
    title: { lines: ["Fabricated, cast iron, or made to "], accent: "your existing line." },
    items: [
      { name: "Fabricated pallet cars", text: "Welded steel constructed pallets made to your size and load" },
      {
        name: "Cast iron (CI) pallet cars",
        text: "Cast construction where it suits your line, with a hardness of 180–220 BHN",
      },
      {
        name: "Custom pallet cars",
        text: "Made to your drawing, sample or existing line, in whichever construction suits your duty",
      },
    ],
  },
  specs: {
    title: { lines: ["Built to "], accent: "your line." },
    rows: [
      { label: "Body construction", value: "Fabricated or CI, as per requirement" },
      { label: "Wheel material", value: "SG iron or CI, as per requirement" },
      {
        label: "Bearings",
        value: "Premium heavy-duty, for sand casting environments. Make: SKF / FAG / NGC",
      },
      { label: "Track gauge", value: "As per customer line" },
      { label: "Wheel diameter", value: "As per customer line" },
      { label: "Deck / pallet surface (cast iron)", value: "Machined top and bottom" },
      { label: "Lead time", value: "45–60 days" },
    ],
  },
  whereUsed: {
    statement:
      "Pallet cars are the backbone of material movement in a moulding line, carrying moulds from the moulding station through pouring, cooling, and shakeout.",
    body: [
      "Built from heavy-duty fabricated steel with machined wheels and a rigid, flat deck, they take the weight of filled moulds and the repeated shock of loading without warping or losing alignment. Well-made pallet cars run smoothly on their track, keep moulds steady during pouring so there is no shift or spillage, and hold up to heat, sand, and continuous production cycles.",
      "The result is a steady, dependable mould flow, less downtime, and a safer, more organized shop floor.",
    ],
  },
  reasons: [
    "30+ years in foundry equipment manufacturing",
    "Choice of fabricated or cast iron construction, with SG iron or CI wheels, to suit your load and duty",
    "Heavy-duty bearings selected for sand casting conditions",
    "Built to your drawing, line layout or existing pallet",
  ],
  faqs: [
    {
      question: "Should I choose SG iron or CI wheels?",
      answer:
        "SG iron is stronger and tougher, so it suits heavier loads and shock. CI suits lighter, steadier duty at lower cost. Tell us your load and cycle and we’ll recommend one.",
    },
    {
      question: "Can you match my existing pallet cars?",
      answer: "Yes. Send a drawing or a sample car and we’ll quote.",
    },
    { question: "Do you supply the track as well?", answer: "Yes." },
    {
      question: "What is your minimum order quantity?",
      answer:
        "If it is an existing size of pattern tool in our stock, a minimal quantity can be entertained. New sizes of pattern will be quoted after we know the quantity.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Typically 45–60 days from order confirmation, depending on pallet size, quantity and drawing complexity.",
    },
  ],
  quoteFields: [
    { name: "size", label: "Pallet size", placeholder: "Length × width, e.g. 1000 × 800 mm" },
    { name: "load", label: "Load", placeholder: "e.g. 2,000 kg per car" },
    { name: "quantity", label: "Quantity", placeholder: "e.g. 20 cars" },
  ],
  related: [conveyorBelts, conveyorRollers, "moulding-boxes"],
};
