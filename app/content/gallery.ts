// Text and photos of the gallery page. The words are the original's; titles and
// labels are in sentence case, as the site's design writes them. Five tiles show
// the owner's own photos and stills from the factory film; the others wait for
// photos and say so.
import mouldingBoxes from "~/assets/home/moulding-boxes.jpg";
import welding from "~/assets/home/workshop.jpg";
import cnc from "~/assets/pages/gallery-cnc.jpg";
import facility from "~/assets/pages/gallery-facility.jpg";
import flaskAssembly from "~/assets/pages/gallery-flask-assembly.jpg";
import type { PageHeroContent } from "~/components/site/PageHero";
import type { SectionTitle } from "./titles";

export const galleryMeta = {
  title: "Gallery — B.P. Engineers | Foundry Equipment Photos",
  description:
    "View photos of B.P. Engineers foundry equipment — moulding boxes, pouring ladles, conveyor systems, and our manufacturing facility in Punjab.",
};

export const galleryHero: PageHeroContent = {
  eyebrow: "Our Work · Manufacturing Facility",
  titleBefore: "Product ",
  titleAccent: "gallery",
  lead: "Photos of our foundry equipment — moulding boxes, pouring ladles, conveyor systems, and our manufacturing facility in Mubarikpur, Punjab.",
};

/** The first filter is shown as selected. The buttons do nothing, as on the original site. */
export const galleryFilters = [
  "All",
  "Moulding Boxes",
  "Pouring Ladles",
  "Conveyors",
  "Fabrication",
  "Facility",
];

export const galleryPlaceholderNote = "Photo coming soon";

export interface GalleryTile {
  name: string;
  title: string;
  category: string;
  /** The photo. A tile without one shows its name and that a photo is coming. */
  image?: string;
}

export const galleryTiles: GalleryTile[] = [
  {
    name: "Moulding Box",
    title: "Moulding Box — Standard Series",
    category: "Casting Equipment",
    image: mouldingBoxes,
  },
  { name: "Pouring Ladle", title: "Crane Handled Pouring Ladle", category: "Casting Equipment" },
  { name: "Conveyor System", title: "Sand Conveyor Belt System", category: "Sand Handling" },
  { name: "Conveyor Rollers", title: "Heavy Duty Conveyor Rollers", category: "Sand Handling" },
  {
    name: "Welding Shop",
    title: "MIG Welding — Structural Assembly",
    category: "Fabrication",
    image: welding,
  },
  { name: "CNC Machining", title: "CNC Turning Centre", category: "Fabrication", image: cnc },
  {
    name: "Flask Equipment",
    title: "Complete Flask Assembly",
    category: "Casting Equipment",
    image: flaskAssembly,
  },
  {
    name: "Manufacturing Floor",
    title: "B.P. Engineers Facility — Mubarikpur",
    category: "Facility",
    image: facility,
  },
];

export const photosComingSoon = {
  eyebrow: "More photos",
  title: { lines: ["Photos"], accent: "coming soon." } satisfies SectionTitle,
  text: "We are adding real photos of our products and facility. Check back soon — or contact us directly and we will share photos of specific equipment you need.",
  action: { label: "Contact us for photos", to: "/contact" },
};
