import type { Route } from "./+types/product-page";
import { NotFound } from "~/components/layout/NotFound";
import { ProductArticle } from "~/components/product-page/ProductArticle";
import { findProductPage, productPageHref } from "~/content/product-pages";
import { site } from "~/content/site";
import type { FrameHandle } from "~/lib/frame";

// A product page draws its own header and footer. An address that names no
// product keeps the site's frame and shows "page not found".
export const handle: FrameHandle = {
  ownFrame: (match) => findProductPage(match.params.category, match.params.slug) !== undefined,
};

export const meta: Route.MetaFunction = ({ params }) => {
  const page = findProductPage(params.category, params.slug);
  if (!page) return [{ title: "Page Not Found" }];
  return [
    { title: page.meta.title },
    { name: "description", content: page.meta.description },
    { tagName: "link", rel: "canonical", href: `${site.canonicalUrl}${productPageHref(page)}` },
  ];
};

export default function ProductPageRoute({ params }: Route.ComponentProps) {
  const page = findProductPage(params.category, params.slug);
  if (!page) return <NotFound />;
  return <ProductArticle page={page} />;
}
