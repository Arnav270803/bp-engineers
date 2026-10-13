import type { Route } from "./+types/quote";
import { PageHero } from "~/components/layout/PageHero";
import { QuoteForm } from "~/components/quote/QuoteForm";
import { QuoteSidebar } from "~/components/quote/QuoteSidebar";
import { Section } from "~/components/ui/Section";
import { quoteHero, quoteMeta } from "~/content/quote";

export const meta: Route.MetaFunction = () => [
  { title: quoteMeta.title },
  { name: "description", content: quoteMeta.description },
];

export default function Quote() {
  return (
    <>
      <PageHero {...quoteHero} />
      <Section>
        <div className="grid grid-cols-[1fr_2fr] [align-items:start] gap-15 upto-900:grid-cols-[1fr]">
          <QuoteSidebar />
          <QuoteForm />
        </div>
      </Section>
    </>
  );
}
