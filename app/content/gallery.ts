// Text of the gallery page, copied verbatim from the original. The site has no
// photos yet, so every tile is a placeholder.
import type { PageHeroContent } from "~/components/layout/PageHero";
import type { IconName } from "./icons";

export const galleryMeta = {
  title: "Gallery — B.P. Engineers | Foundry Equipment Photos",
  description:
    "View photos of B.P. Engineers foundry equipment — moulding boxes, pouring ladles, conveyor systems, and our manufacturing facility in Punjab.",
};

export const galleryHero: PageHeroContent = {
  eyebrow: "Our Work · Manufacturing Facility",
  titleBefore: "Product ",
  titleAccent: "Gallery",
  lead: "Photos of our foundry equipment — moulding boxes, pouring ladles, conveyor systems, and our manufacturing facility in Mubarikpur, Punjab.",
};

/** The first filter is shown as selected. The buttons do nothing, as in the original. */
export const galleryFilters = [
  "All",
  "Moulding Boxes",
  "Pouring Ladles",
  "Conveyors",
  "Fabrication",
  "Facility",
];

export const galleryPlaceholderNote = "Photo Coming Soon";

export const galleryTiles: Array<{ icon: IconName; name: string; title: string; category: string }> = [
  {
    icon: "bars",
    name: "Moulding Box",
    title: "Moulding Box — Standard Series",
    category: "Casting Equipment",
  },
  {
    icon: "clockFilledAlt",
    name: "Pouring Ladle",
    title: "Crane Handled Pouring Ladle",
    category: "Casting Equipment",
  },
  { icon: "funnel", name: "Conveyor System", title: "Sand Conveyor Belt System", category: "Sand Handling" },
  { icon: "ring", name: "Conveyor Rollers", title: "Heavy Duty Conveyor Rollers", category: "Sand Handling" },
  { icon: "leaf", name: "Welding Shop", title: "MIG Welding — Structural Assembly", category: "Fabrication" },
  { icon: "cube", name: "CNC Machining", title: "CNC Turning Centre", category: "Fabrication" },
  { icon: "bars", name: "Flask Equipment", title: "Complete Flask Assembly", category: "Casting Equipment" },
  {
    icon: "square",
    name: "Manufacturing Floor",
    title: "B.P. Engineers Facility — Mubarikpur",
    category: "Facility",
  },
];

export const photosComingSoon = {
  title: "Photos Coming Soon",
  text: "We are adding real photos of our products and facility. Check back soon — or contact us directly and we will share photos of specific equipment you need.",
  action: { label: "Contact Us for Photos", to: "/contact" },
};
