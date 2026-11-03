// Text and pictures of the home page, in its own design (ARCHITECTURE.md,
// "Home page"). The moulding box, workshop and guide photos are the owner's;
// the hero and the other three product photos are still placeholders taken
// from the approved design. Replace a file in app/assets/home/ to change one.
// A hero video goes in `homeHero.video`.
import conveyorRollers from "~/assets/home/conveyor-rollers.jpg";
import conveyorSystems from "~/assets/home/conveyor-systems.jpg";
import heroImage from "~/assets/home/hero.jpg";
import guideImage from "~/assets/home/knowledge-moulding-boxes.jpg";
import mouldingBoxes from "~/assets/home/moulding-boxes.jpg";
import pouringLadles from "~/assets/home/pouring-ladles.jpg";
import workshop from "~/assets/home/workshop.jpg";
import { productPagePath } from "./product-pages";

/** Words before the accent, each entry on its own line; the accent ends the title on a new line. */
export interface HomeTitle {
  lines: string[];
  accent: string;
}

export const homeMeta = {
  title: "B.P. Engineers — Foundry Equipment Manufacturers Since 1990",
  description:
    "B.P. Engineers manufactures sand casting foundry equipment — moulding boxes, pouring ladles, conveyor systems and sand handling equipment. Mubarikpur, Punjab, India since 1990.",
};

export const homeHeader = {
  logoLine: "Engineers",
  homeLink: "B.P. Engineers home page",
  products: { label: "Products", to: "/products" },
  quote: { label: "Get a quote", to: "/quote" },
  menu: "Menu",
  close: "Close",
};

export const homeMenu = {
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

export const homeHero = {
  image: heroImage,
  /** The address of a muted, looping film to play instead of the photo. */
  video: undefined as string | undefined,
  eyebrow: ["Foundry equipment", "made to endure."],
  since: ["1990—", "Today"],
  title: "Engineered",
  subtitle: "To endure.",
  lines: ["Built in Punjab.", "Working in foundries across India."],
  action: { label: "Explore our products", to: "/products" },
  film: { label: "Factory film", sound: "Sound off", play: "Play the film", pause: "Pause the film" },
};

export const homeIntro = {
  eyebrow: "The work behind the word",
  title: "Strength in every detail.",
  lines: [
    "Moulding boxes. Pouring ladles.",
    "Conveyors. Rollers.",
    "Equipment made for the demands of your floor.",
  ],
};

export const homeEquipment = {
  eyebrow: "01 / The equipment",
  title: { lines: ["Built to work."], accent: "Made to last." } satisfies HomeTitle,
  intro: ["From the moulding floor to sand handling.", "Explore the equipment behind your next pour."],
  action: { label: "View the complete range", to: "/products" },
  items: [
    {
      name: "Moulding boxes",
      detail: "Green sand & no-bake casting",
      text: "Standard and custom flasks, made for accurate alignment.",
      image: mouldingBoxes,
      to: productPagePath("moulding-boxes"),
    },
    {
      name: "Pouring ladles",
      detail: "Hand shank & crane handled",
      text: "Fabricated for controlled molten metal transfer.",
      image: pouringLadles,
      to: "/products",
    },
    {
      name: "Conveyor systems",
      detail: "Sand handling & reclamation",
      text: "Custom layouts for the way material moves through your plant.",
      image: conveyorSystems,
      to: "/products",
    },
    {
      name: "Conveyor rollers",
      detail: "Idler, drive & return",
      text: "Machined housings. Dependable support. Smooth movement.",
      image: conveyorRollers,
      to: "/products",
    },
  ],
  tagSuffix: " / BP",
  question: "Need a different size or configuration?",
  drawings: { label: "We manufacture to your drawings", to: "/quote" },
};

export const homePeople = {
  eyebrow: "02 / The people behind the precision",
  title: { lines: ["Experience", "you can "], accent: "see." },
  paragraphs: [
    "Since 1990, we have been turning practical foundry knowledge into equipment that earns its place on the shop floor.",
    "From our workshop in Mubarikpur, Punjab, we bring fabrication, machining and assembly together—with care in every detail.",
  ],
  action: { label: "Inside B.P. Engineers", to: "/about" },
  note: "Built in Punjab. Working across India.",
  image: workshop,
  imageCaption: "The work behind the word.",
  imageLabel: "Our workshop",
  stats: [
    { value: "1990", label: "Our story began" },
    { value: "OEM", label: "Built to your specifications" },
    { value: "India", label: "Equipment supplied nationwide" },
  ],
};

export const homeProcess = {
  eyebrow: "From brief to build",
  title: "Every detail has a purpose.",
  steps: [
    { name: "Understand", text: "Your application, dimensions and working conditions." },
    { name: "Engineer", text: "Materials and details shaped around your requirements." },
    { name: "Manufacture", text: "Fabrication, machining and assembly in our workshop." },
    { name: "Inspect", text: "Dimensions and finish checked before dispatch." },
  ],
};

export const homeCustom = {
  eyebrow: "03 / Custom manufacturing",
  title: { lines: ["Your drawings."], accent: "Our expertise." } satisfies HomeTitle,
  lines: [
    "A different size. A specific capacity. A new layout.",
    "We build around the requirements of your foundry.",
  ],
  action: { label: "Discuss a custom build", to: "/quote" },
  tags: ["Moulding boxes", "Ladles", "Sand handling"],
  sheet: {
    header: "BP / Design & fabrication",
    badge: "Custom OEM",
    footer: "Your dimensions. Your requirements.",
    length: "Length",
    width: "Width",
    height: "Height",
  },
};

export const homeIndustries = {
  eyebrow: "04 / Where our equipment works",
  title: { lines: ["Built for the"], accent: "way you work." } satisfies HomeTitle,
  text: "Supporting the foundries behind everyday machines and essential industries.",
  items: [
    { name: "Sand casting foundries", detail: "Green sand · No-bake · Shell" },
    { name: "Automotive components", detail: "OEM & component manufacturing" },
    { name: "Agricultural machinery", detail: "Equipment for the field" },
    { name: "Pumps & valves", detail: "Precision casting applications" },
    { name: "Industrial machinery", detail: "General & heavy engineering" },
  ],
  to: "/products",
};

export const homeKnowledge = {
  eyebrow: "05 / Knowledge from the floor",
  title: { lines: ["Experience,"], accent: "shared." } satisfies HomeTitle,
  action: { label: "Explore the knowledge base", to: "/blog" },
  featured: {
    label: "Featured guide",
    topic: "Moulding boxes",
    title: ["The right moulding box.", "A better starting point."],
    text: "Size, material and pin configuration—our guide to choosing a moulding box for your sand casting operation.",
    action: { label: "Read the complete guide", to: "/blog/moulding-box-guide" },
    image: guideImage,
  },
};

export const homeCta = {
  eyebrow: "Your next build starts here",
  title: { lines: ["Let’s make"], accent: "it work." } satisfies HomeTitle,
  lines: [
    "Tell us what your foundry needs.",
    "Share your drawings, dimensions or quantities.",
    "We’ll help you take the next step.",
  ],
  action: { label: "Get a quote", to: "/quote" },
  callPrefix: "Or call ",
};

export const homeFooter = {
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
