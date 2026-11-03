import { ArrowUpRight } from "~/components/site/parts";
import { AppLink } from "~/components/ui/AppLink";
import { productQuoteLink, type Product } from "~/content/products";
import { cx } from "~/lib/cx";

// A card with a product page is a link: its title's link is stretched over the
// whole card, and the quote link is raised above it so it still works.
export function ProductCard({ number, title, text, specs, tag, page }: Product) {
  return (
    <article className="group relative flex flex-col border-t border-t-landing-line-strong pt-6">
      <div className="flex items-start justify-between gap-4 font-landing-sans text-9 leading-[1.4] uppercase">
        <span className="text-landing-ink-muted">{number}</span>
        <span className="text-right tracking-caps-wide text-landing-emphasis">{tag}</span>
      </div>
      <h3 className="mt-6 font-landing-sans text-22 leading-[1.15] font-normal tracking-[-0.01em]">
        {page ? (
          <AppLink
            to={page}
            className="inline-flex items-center gap-2.5 group-hover:text-landing-emphasis after:absolute after:inset-0 after:content-['']"
          >
            {title}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </AppLink>
        ) : (
          title
        )}
      </h3>
      <p className="mt-3 font-landing-sans text-13 leading-[21px] text-landing-ink-muted">{text}</p>
      <dl className="mt-6 border-b border-b-landing-line">
        {specs.map((spec) => (
          <div
            key={spec.label}
            className="flex gap-4 border-t border-t-landing-line py-2.5 font-landing-sans text-12 leading-[1.4]"
          >
            <dt className="w-22 shrink-0 text-9 leading-[1.9] tracking-caps-wide text-landing-ink-muted uppercase">
              {spec.label}
            </dt>
            <dd>{spec.value}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-auto pt-6">
        <AppLink
          to={productQuoteLink.to}
          className={cx(
            "inline-flex items-center gap-2.5 border-b border-b-landing-line-strong pb-2 font-landing-sans text-12 leading-[1] text-landing-ink hover:border-b-landing-ink",
            page && "relative z-1",
          )}
        >
          {productQuoteLink.label}
          <ArrowUpRight className="h-3 w-3" />
        </AppLink>
      </div>
    </article>
  );
}
