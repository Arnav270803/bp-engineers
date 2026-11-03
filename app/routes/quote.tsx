import type { Route } from "./+types/quote";
import { QuoteForm } from "~/components/quote/QuoteForm";
import { QuoteSidebar } from "~/components/quote/QuoteSidebar";
import { PageHero } from "~/components/site/PageHero";
import { quoteHero, quoteMeta } from "~/content/quote";

export const meta: Route.MetaFunction = () => [
  { title: quoteMeta.title },
  { name: "description", content: quoteMeta.description },
];

export default function Quote() {
  return (
    <>
      <PageHero {...quoteHero} />
      <section className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-start gap-x-12 gap-y-10 bg-landing-surface px-landing-gutter pt-16 pb-20 text-landing-ink upto-900:grid-cols-[minmax(0,1fr)]">
        <QuoteSidebar />
        <QuoteForm />
      </section>
    </>
  );
}
