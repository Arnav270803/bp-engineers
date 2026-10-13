import type { Route } from "./+types/products";
import { PageHero } from "~/components/layout/PageHero";
import { CustomCta } from "~/components/products/CustomCta";
import { ProductTabs } from "~/components/products/ProductTabs";
import { Section } from "~/components/ui/Section";
import { productsHero, productsMeta } from "~/content/products";

export const meta: Route.MetaFunction = () => [
  { title: productsMeta.title },
  { name: "description", content: productsMeta.description },
];

export default function Products() {
  return (
    <>
      <PageHero {...productsHero} />
      <Section id="products">
        <ProductTabs />
      </Section>
      <CustomCta />
    </>
  );
}
