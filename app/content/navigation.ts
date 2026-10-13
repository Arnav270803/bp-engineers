// Link lists shared by every page: nav, mobile menu, footer and ticker.
import type { NavSection } from "~/lib/navigation";

export const navLinks: Array<{ label: string; to: string; section: NavSection }> = [
  { label: "Home", to: "/", section: "home" },
  { label: "About", to: "/about", section: "about" },
  { label: "Products", to: "/products", section: "products" },
  { label: "Knowledge", to: "/blog", section: "blog" },
  { label: "Contact", to: "/contact", section: "contact" },
];

export const navButton = { label: "Get a Quote", to: "/quote" };

/** The last entry is shown in the brand colour. */
export const mobileMenuLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Knowledge Base", to: "/blog" },
  { label: "Contact", to: "/contact" },
  { label: "Get a Quote →", to: "/quote" },
];

export const footerIntro =
  "Manufacturers of sand casting foundry equipment since 1990. Moulding boxes, pouring ladles, conveyor systems and sand handling equipment — built in Punjab for foundries across India.";

// The `#` parts are kept from the original. Nothing on the products page reads
// them, so these links open its first tab.
export const footerProductLinks = [
  { label: "Moulding Boxes", to: "/products#casting" },
  { label: "Pouring Ladles", to: "/products#casting" },
  { label: "Flask Equipment", to: "/products#casting" },
  { label: "Conveyor Systems", to: "/products#sand" },
  { label: "Sand Rollers", to: "/products#sand" },
  { label: "CNC Machining", to: "/products#fab" },
];

export const footerCompanyLinks = [
  { label: "About Us", to: "/about" },
  { label: "Knowledge Base", to: "/blog" },
  { label: "Get a Quote", to: "/quote" },
  { label: "Contact", to: "/contact" },
];

export const footerCopyright = "© 2025 B.P. Engineers. All rights reserved. · Est. 1990 · Mubarikpur, Punjab";

/** Shown twice in a row so the ticker loops without a gap. */
export const tickerItems = [
  "Moulding Boxes",
  "Pouring Ladles",
  "Casting Flasks",
  "Conveyor Systems",
  "Sand Rollers",
  "Sand Hoppers",
  "CNC Machining",
  "Sheet Metal Fabrication",
  "Structural Welding",
  "Custom OEM Manufacturing",
  "Est. 1990 · Punjab, India",
];
