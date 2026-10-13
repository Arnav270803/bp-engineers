// Text of the home page, copied verbatim from the original.
import type { IconName } from "./icons";

export const homeMeta = {
  title: "B.P. Engineers — Foundry Equipment Manufacturers Since 1990",
  description:
    "B.P. Engineers manufactures sand casting foundry equipment — moulding boxes, pouring ladles, conveyor systems and sand handling equipment. Mubarikpur, Punjab, India since 1990.",
};

export const hero = {
  eyebrow: "Sand Casting Foundry Equipment · Punjab, India",
  titleBefore: "Foundry ",
  titleAccent: "Equipment",
  titleSecondLine: "Built to Last",
  tagline: ["Strength", "Precision", "Reliability"],
  description:
    "Manufacturers of Moulding Boxes, Pouring Ladles, Sand Handling Conveyors & Rollers for sand casting foundries across India — trusted since 1990.",
  primaryAction: { label: "Get a Free Quote", to: "/quote" },
  secondaryAction: { label: "View Products", to: "/products" },
  stats: [
    { value: "35+", label: "Years Experience" },
    { value: "MS.Alloy steel", label: "Materials" },
    { value: "PAN", label: "India Supply" },
    { value: "OEM", label: "Custom Manufacturing" },
  ],
};

export const productPreview: {
  label: string;
  title: string;
  sub: string;
  cards: Array<{ number: string; icon: IconName; title: string; text: string }>;
  action: { label: string; to: string };
} = {
  label: "What We Make",
  title: "Core Product Range",
  sub: "Precision-engineered for the foundry floor — from moulding boxes to complete sand handling systems.",
  cards: [
    {
      number: "01",
      icon: "bars",
      title: "Moulding Boxes",
      text: "Heavy-duty MS flasks for green sand and no-bake casting. Standard and custom sizes with precision pins and bushings.",
    },
    {
      number: "02",
      icon: "clock",
      title: "Pouring Ladles",
      text: "Hand shank and crane-handled ladles for molten metal transfer. MS body with refractory lining — multiple capacities.",
    },
    {
      number: "03",
      icon: "funnel",
      title: "Conveyor Systems",
      text: "Flat belt and troughed conveyor systems for sand transport. Custom lengths and widths with MS structural frames.",
    },
    {
      number: "04",
      icon: "ring",
      title: "Conveyor Rollers",
      text: "Idler, drive and return rollers in MS and GI. Precision-machined bearing housings for smooth operation.",
    },
  ],
  action: { label: "View All Products →", to: "/products" },
};

export const strengths = {
  label: "Our Strengths",
  title: "Why Foundries Choose B.P. Engineers",
  cards: [
    {
      value: "35+",
      title: "Years of Experience",
      text: "Deep knowledge of what foundry equipment needs to withstand on the shop floor — built in from day one.",
    },
    {
      value: "OEM",
      title: "Custom Manufacturing",
      text: "Any size moulding box, any ladle capacity, custom conveyor lengths — we manufacture to your drawings.",
    },
    {
      value: "Punjab",
      title: "Strategic Location",
      text: "Based in Mubarikpur — well connected for fast supply to foundries across North India.",
    },
    {
      value: "MS·Alloy steel",
      title: "Right Materials",
      text: "Mild steel and GI — proven materials for long-lasting foundry equipment in demanding environments.",
    },
  ],
};

export const industries: {
  label: string;
  title: string;
  sub: string;
  cards: Array<{ icon: IconName; name: string; text: string }>;
} = {
  label: "Who We Serve",
  title: "Industries & Applications",
  sub: "Our foundry equipment serves manufacturers across India's major casting industries.",
  cards: [
    {
      icon: "play",
      name: "Sand Casting Foundries",
      text: "Green sand, no-bake and shell moulding of all sizes",
    },
    {
      icon: "car",
      name: "Automotive Components",
      text: "Foundries supplying cast parts to auto OEMs and Tier-1",
    },
    {
      icon: "home",
      name: "Agricultural Machinery",
      text: "Punjab agri-equipment manufacturers and casting suppliers",
    },
    { icon: "chart", name: "Industrial Machinery", text: "General engineering and heavy industrial casting" },
    {
      icon: "crosshair",
      name: "Pump & Valve Foundries",
      text: "Precision casting for fluid handling components",
    },
  ],
};

export const homeCta = {
  title: "Ready to Discuss Your Requirements?",
  text: "Get a competitive quote within 24 hours — custom sizes welcome.",
  action: { label: "Request a Free Quote", to: "/quote" },
};
