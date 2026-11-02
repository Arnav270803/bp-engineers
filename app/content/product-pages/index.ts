// The product pages, in the order of the series. Each page's text is in its own
// file in this folder, taken from the product page workbook. This file is also
// read by react-router.config.ts, so it imports nothing through "~/".
import { bushes } from "./bushes";
import { closingPins } from "./closing-pins";
import { keepTogether } from "./keep-together";
import { matchplateMouldingPins } from "./matchplate-moulding-pins";
import { mouldingBoxes } from "./moulding-boxes";
import { palletCars } from "./pallet-cars";
import type { OtherProduct, ProductPage } from "./types";

export type { DrawingKind, Headline, OtherProduct, ProductPage } from "./types";
export { productPageText } from "./shared";

// The page title and description are left as written.
const tidy = (page: ProductPage): ProductPage => ({ ...keepTogether(page), meta: page.meta });

export const productPages: ProductPage[] = [
  mouldingBoxes,
  palletCars,
  bushes,
  matchplateMouldingPins,
  closingPins,
].map(tidy);

export function productPageHref(page: ProductPage): string {
  return `/products/${page.category.slug}/${page.slug}`;
}

/** Every product page's address, for pre-rendering. */
export const productPagePaths = productPages.map(productPageHref);

export function findProductPage(
  category: string | undefined,
  slug: string | undefined,
): ProductPage | undefined {
  return productPages.find((page) => page.category.slug === category && page.slug === slug);
}

/** The address of the product page with this slug. */
export function productPagePath(slug: string): string {
  const page = productPages.find((candidate) => candidate.slug === slug);
  if (!page) throw new Error(`There is no product page "${slug}".`);
  return productPageHref(page);
}

/** The products a page lists as related, each with what its card shows. */
export function relatedProducts(page: ProductPage): Array<OtherProduct & { key: string }> {
  return page.related.map((item) => {
    if (typeof item !== "string") return { ...item, key: item.name };
    const other = productPages.find((candidate) => candidate.slug === item);
    if (!other) throw new Error(`There is no product page "${item}".`);
    return {
      key: other.slug,
      name: other.shortName,
      label: `${other.number} / ${String(productPages.length).padStart(2, "0")}`,
      excerpt: other.hero.standfirst,
      drawing: other.drawing,
      to: productPageHref(other),
    };
  });
}
