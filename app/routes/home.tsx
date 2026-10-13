import type { Route } from "./+types/home";
import { CtaBand } from "~/components/home/CtaBand";
import { Hero } from "~/components/home/Hero";
import { IndustryCard } from "~/components/home/IndustryCard";
import { ProductPreviewCard } from "~/components/home/ProductPreviewCard";
import { StrengthCard } from "~/components/home/StrengthCard";
import { Ticker } from "~/components/layout/Ticker";
import { Button } from "~/components/ui/Button";
import { Section } from "~/components/ui/Section";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { homeMeta, industries, productPreview, strengths } from "~/content/home";
import { site } from "~/content/site";

export const meta: Route.MetaFunction = () => [
  { title: homeMeta.title },
  { name: "description", content: homeMeta.description },
  { tagName: "link", rel: "canonical", href: site.canonicalUrl },
];

export default function Home() {
  return (
    <>
      <div id="ticker-placeholder">
        <Ticker />
      </div>

      <Hero />

      <Section id="products">
        <SectionHeader label={productPreview.label} title={productPreview.title} sub={productPreview.sub} />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-px bg-line">
          {productPreview.cards.map((card) => (
            <ProductPreviewCard key={card.number} {...card} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button to={productPreview.action.to} variant="ghost">
            {productPreview.action.label}
          </Button>
        </div>
      </Section>

      <Section tone="light">
        <SectionHeader label={strengths.label} title={strengths.title} />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
          {strengths.cards.map((card) => (
            <StrengthCard key={card.title} {...card} />
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeader label={industries.label} title={industries.title} sub={industries.sub} onDark />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-px bg-[rgba(255,255,255,0.06)]">
          {industries.cards.map((card) => (
            <IndustryCard key={card.name} {...card} />
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
