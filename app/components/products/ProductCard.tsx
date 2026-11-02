import { AppLink } from "~/components/ui/AppLink";
import { Icon } from "~/components/ui/Icon";
import { productQuoteLink, type Product } from "~/content/products";
import { cx } from "~/lib/cx";

// A card with a product page is a link: its title's link is stretched over the
// whole card, and the quote link is raised above it so it still works.
export function ProductCard({ number, icon, title, text, specs, tag, page }: Product) {
  return (
    <div className="group relative overflow-hidden bg-surface px-7 py-9 transition-[background] duration-250 before:absolute before:top-0 before:left-0 before:h-0 before:w-0.75 before:bg-brand before:transition-[height] before:duration-250 before:content-[''] hover:bg-surface-inverse hover:before:h-full">
      <div className="absolute top-2 right-3.5 font-display text-60 leading-[1] font-bold text-[#f0f2f5] transition-[color] duration-250 group-hover:text-[rgba(255,255,255,0.05)]">
        {number}
      </div>
      <div className="mb-5 flex h-11 w-11 items-center justify-center bg-brand">
        <Icon name={icon} className="h-5 w-5 fill-ink-inverse" />
      </div>
      <div className="mb-2.5 font-display text-21 leading-[1.2] font-bold text-ink-strong uppercase transition-[color] duration-250 group-hover:text-ink-inverse">
        {page ? (
          <AppLink to={page} className="after:absolute after:inset-0 after:content-['']">
            {title}
          </AppLink>
        ) : (
          title
        )}
      </div>
      <div className="mb-4 text-13 leading-[1.7] text-ink-muted transition-[color] duration-250 group-hover:text-ink-inverse-muted">
        {text}
      </div>
      <ul className="mb-4 list-none">
        {specs.map((spec) => (
          <li
            key={spec.label}
            className="flex gap-2 border-b border-b-[rgba(0,0,0,0.05)] py-1 text-12 text-ink transition-[color] duration-250 group-hover:text-ink-inverse"
          >
            <span className="min-w-20 font-medium text-ink-muted transition-[color] duration-250 group-hover:text-ink-inverse-muted">
              {spec.label}
            </span>
            {spec.value}
          </li>
        ))}
      </ul>
      <div className="inline-block bg-surface-muted px-2.5 py-1 text-10 font-semibold tracking-sm text-ink-muted uppercase transition-all duration-250 group-hover:bg-[rgba(240,125,26,0.15)] group-hover:text-brand-soft">
        {tag}
      </div>
      <div className="mt-4">
        <AppLink
          to={productQuoteLink.to}
          className={cx(
            "font-display text-13 font-semibold tracking-xs text-brand uppercase transition-[color] duration-200 group-hover:text-brand-soft",
            page && "relative z-1",
          )}
        >
          {productQuoteLink.label}
        </AppLink>
      </div>
    </div>
  );
}
