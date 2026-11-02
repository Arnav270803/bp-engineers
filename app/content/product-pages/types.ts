// The shape of a product page. Each page's text is in its own file in this
// folder, taken from the product page workbook.

/** The line drawing that stands for a product (components/product-page/ProductDrawing). */
export type DrawingKind =
  | "moulding-boxes"
  | "pallet-cars"
  | "bushes"
  | "matchplate-pins"
  | "closing-pins"
  | "conveyor-belts"
  | "conveyor-rollers";

/** A headline whose last words take the accent colour. Each entry of `lines` starts a new line. */
export interface Headline {
  lines: string[];
  accent: string;
}

export interface ProductCategory {
  slug: string;
  label: string;
}

/** A product listed as related that has no page of its own yet. */
export interface OtherProduct {
  name: string;
  label: string;
  excerpt: string;
  drawing: DrawingKind;
  to: string;
}

export interface ProductPage {
  slug: string;
  category: ProductCategory;
  /** Position in the series of product pages, as "01". */
  number: string;
  /** As sent with a quote request. */
  name: string;
  /** In lists and cards. */
  shortName: string;
  drawing: DrawingKind;
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    title: Headline;
    standfirst: string;
    caption: string;
    /** A photo for the large figure. Without one, the product's drawing is shown. */
    image?: { src: string; alt: string };
  };
  overview: {
    title: Headline;
    lead?: string;
    body?: string[];
    points?: Array<{ label: string; text: string }>;
    process?: { caption: string; steps: Array<{ name: string; text: string }> };
  };
  types: {
    title: Headline;
    /** Left out when the product is only made to order, which the title says. */
    items?: Array<{ name: string; text: string }>;
    exploded?: {
      caption: string;
      dimension: string;
      flatness: string;
      legend: Array<{ label: string; text: string }>;
    };
  };
  specs: {
    title: Headline;
    stats?: Array<{ value: string; unit: string; label: string }>;
    rows: Array<{ label: string; value: string }>;
  };
  sizes?: {
    title: Headline;
    round: { heading: string; columns: [string, string, string]; rows: Array<[number, number, number]> };
    oval: { heading: string; note: string; sizes: Array<[number, number]> };
  };
  whereUsed?: {
    statement: string;
    body?: string[];
    lists?: Array<{ label: string; items: string[] }>;
  };
  reasons: string[];
  faqs: Array<{ question: string; answer: string }>;
  /** What the quote form asks for besides name, company and phone. A wide field takes a whole row. */
  quoteFields: Array<{ name: string; label: string; placeholder: string; wide?: boolean }>;
  /** Slugs of other product pages, or products without a page. */
  related: Array<string | OtherProduct>;
}
