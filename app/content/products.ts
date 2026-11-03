// Text of the products page. The words are the original's, including the
// apparent typo "Fl belt" (see ARCHITECTURE.md); titles and labels are in
// sentence case, as the site's design writes them. Casting equipment cards 05
// to 08 are new: they lead to the product pages, with text from the product
// page workbook.
import type { PageHeroContent } from "~/components/site/PageHero";
import { productPagePath } from "./product-pages";
import type { SectionTitle } from "./titles";

export const productsMeta = {
  title: "Products — B.P. Engineers | Moulding Boxes, Ladles, Conveyors",
  description:
    "B.P. Engineers manufactures moulding boxes, pouring ladles, conveyor systems, sand rollers, and complete foundry equipment. Custom sizes available.",
};

export const productsHero: PageHeroContent = {
  eyebrow: "Complete Foundry Equipment Range",
  titleBefore: "Our ",
  titleAccent: "products",
  lead: "Precision-engineered foundry equipment for sand casting operations — moulding boxes, pouring ladles, sand handling systems, and fabrication services. Custom sizes and OEM manufacturing available.",
};

export interface Product {
  number: string;
  title: string;
  text: string;
  specs: Array<{ label: string; value: string }>;
  tag: string;
  /** The address of the product's own page. The whole card leads there. */
  page?: string;
}

export type ProductCategoryId = "casting" | "sand" | "fab";

export interface ProductCategory {
  id: ProductCategoryId;
  label: string;
  products: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    id: "casting",
    label: "Casting Equipment",
    products: [
      {
        number: "01",
        title: "Moulding Boxes",
        text: "Heavy-duty MS moulding boxes (flasks) for green sand and no-bake casting. Precision-machined locating pins and bushings for accurate cope-and-drag alignment.",
        specs: [
          { label: "Material", value: "Mild Steel (MS)" },
          { label: "Sizes", value: "Standard & Custom" },
          { label: "Type", value: "Cope, Drag, Cheek" },
          { label: "Finish", value: "Shot blasted / painted" },
        ],
        tag: "Custom Sizes Available",
        page: productPagePath("moulding-boxes"),
      },
      {
        number: "02",
        title: "Pouring Ladles",
        text: "Hand shank and crane-handled ladles for molten metal transfer. Fabricated MS body with refractory lining options. Available in multiple capacities.",
        specs: [
          { label: "Material", value: "MS with refractory lining" },
          { label: "Types", value: "Hand shank / Crane handled" },
          { label: "Capacity", value: "5kg to 500kg+" },
          { label: "Lining", value: "Refractory optional" },
        ],
        tag: "Multiple Capacities",
      },
      {
        number: "03",
        title: "Flask & Frame Equipment",
        text: "Complete flask assemblies including cope, drag, and cheek sections with alignment hardware, guide bushings, and clamping systems.",
        specs: [
          { label: "Material", value: "MS fabricated" },
          { label: "Hardware", value: "Pins, bushings, clamps" },
          { label: "Assembly", value: "Complete or parts" },
        ],
        tag: "Complete Assemblies",
      },
      {
        number: "04",
        title: "Casting Accessories",
        text: "Complete range of foundry floor tools — chaplets, chills, rammers, vent rods, strike-off bars, core boxes, and more.",
        specs: [
          { label: "Material", value: "MS / GI" },
          { label: "Range", value: "Full foundry toolkit" },
        ],
        tag: "Full Range Available",
      },
      {
        number: "05",
        title: "Pallet Cars",
        text: "Fabricated or cast iron pallet cars with SG iron or CI wheels and heavy-duty bearings, built for sand casting environments.",
        specs: [
          { label: "Body", value: "Fabricated or CI" },
          { label: "Wheels", value: "SG iron or CI" },
          { label: "Bearings", value: "Heavy duty" },
          { label: "Lead time", value: "45–60 days" },
        ],
        tag: "Built to Your Line",
        page: productPagePath("pallet-cars"),
      },
      {
        number: "06",
        title: "Bushes",
        text: "Round and oval guide bushes in 20MnCr5 / AISI 8620, supplied as matched pairs for accurate cope and drag alignment.",
        specs: [
          { label: "Material", value: "20MnCr5 / AISI 8620" },
          { label: "Hardness", value: "58–62 HRC" },
          { label: "Finish", value: "Ground" },
          { label: "MOQ", value: "100 sets" },
        ],
        tag: "Standard Sizes in Stock",
        page: productPagePath("bushes"),
      },
      {
        number: "07",
        title: "Matchplate & Moulding Pins",
        text: "Pins that locate the pattern plate and moulding box accurately during moulding, made to your drawing or sample.",
        specs: [
          { label: "Material", value: "EN19 / 20MnCr5" },
          { label: "Finish", value: "Ground" },
          { label: "Lead time", value: "15–25 days" },
          { label: "MOQ", value: "20 sets" },
        ],
        tag: "Made to Drawing",
        page: productPagePath("matchplate-moulding-pins"),
      },
      {
        number: "08",
        title: "Closing Pins",
        text: "Closing pins hold the cope and drag aligned when the mould is closed. Made to your drawing or sample.",
        specs: [
          { label: "Material", value: "EN19 / 20MnCr5" },
          { label: "Finish", value: "Ground" },
          { label: "Lead time", value: "20–25 days" },
          { label: "MOQ", value: "25 sets" },
        ],
        tag: "Made to Drawing",
        page: productPagePath("closing-pins"),
      },
    ],
  },
  {
    id: "sand",
    label: "Sand Handling",
    products: [
      {
        number: "01",
        title: "Conveyor Belt Systems",
        text: "Fl belt and troughed conveyor systems for sand transport on the foundry floor. MS structural frames with adjustable speed drives.",
        specs: [
          { label: "Frame", value: "MS structural" },
          { label: "Belt", value: "Rubber / PVC" },
          { label: "Width", value: "300mm to 1200mm+" },
          { label: "Length", value: "Custom" },
        ],
        tag: "Custom Length & Width",
      },
      {
        number: "02",
        title: "Conveyor Rollers",
        text: "Idler, drive, and return rollers manufactured from MS and GI tubing. Precision-machined bearing housings for smooth low-maintenance operation.",
        specs: [
          { label: "Material", value: "MS & GI tubing" },
          { label: "Bearings", value: "Precision machined housings" },
          { label: "Grade", value: "Standard & heavy duty" },
          { label: "Diameter", value: "63mm to 219mm" },
        ],
        tag: "MS & GI · Heavy Duty",
      },
      {
        number: "03",
        title: "Sand Hoppers & Bins",
        text: "Fabricated MS sand storage hoppers, feed bins, and discharge chutes for continuous sand reclamation and handling systems.",
        specs: [
          { label: "Material", value: "MS fabricated" },
          { label: "Capacity", value: "Custom" },
          { label: "Discharge", value: "Custom angles" },
        ],
        tag: "Custom Fabricated",
      },
      {
        number: "04",
        title: "Sand Plant Structures",
        text: "Supporting MS frameworks, elevated platforms, walkways and enclosures for sand mixing and reclamation plants.",
        specs: [
          { label: "Material", value: "MS structural sections" },
          { label: "Finish", value: "Painted / galvanized" },
          { label: "Supply", value: "Site-ready assembly" },
        ],
        tag: "Structural Fabrication",
      },
    ],
  },
  {
    id: "fab",
    label: "Fabrication Services",
    products: [
      {
        number: "01",
        title: "CNC Machining",
        text: "Precision CNC turning and VMC milling for foundry tooling, jigs, fixtures and component parts. Consistent quality across batch runs.",
        specs: [
          { label: "Equipment", value: "CNC turning + VMC" },
          { label: "Materials", value: "MS, SS, Aluminium" },
          { label: "Tolerance", value: "As per drawing" },
        ],
        tag: "High Precision",
      },
      {
        number: "02",
        title: "Sheet Metal Fabrication",
        text: "Cutting, bending and forming of MS and GI sheet components for guards, enclosures, covers and panels to your drawings.",
        specs: [
          { label: "Material", value: "MS & GI sheet" },
          { label: "Process", value: "Cut, bend, form, weld" },
          { label: "Finish", value: "As required" },
        ],
        tag: "MS & GI",
      },
      {
        number: "03",
        title: "Welding & Structural",
        text: "MIG, TIG, and arc welding for heavy structural assemblies, machine bases, frames, and bespoke fabrications.",
        specs: [
          { label: "Process", value: "MIG, TIG, Arc" },
          { label: "Material", value: "MS, GI, SS" },
          { label: "Capacity", value: "Heavy fabrication" },
        ],
        tag: "Heavy Fabrication",
      },
    ],
  },
];

export const productQuoteLink = { label: "Request a quote", to: "/quote" };

export const productsCta = {
  eyebrow: "Custom manufacturing",
  title: { lines: ["Need custom sizes"], accent: "or OEM manufacturing?" } satisfies SectionTitle,
  text: "We manufacture to your drawings — any size, any quantity.",
  action: { label: "Get a quote", to: "/quote" },
};
