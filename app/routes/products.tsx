import type { Route } from "./+types/products";
import { CustomCta } from "~/components/products/CustomCta";
import { ProductTabs } from "~/components/products/ProductTabs";
import { PageHero } from "~/components/site/PageHero";
import { productsHero, productsMeta } from "~/content/products";

export const meta: Route.MetaFunction = () => [
  { title: productsMeta.title },
  { name: "description", content: productsMeta.description },
];

export default function Products() {
  return (
    <>
      <PageHero {...productsHero} />
      <ProductTabs />
      <CustomCta />
    </>
  );
}
