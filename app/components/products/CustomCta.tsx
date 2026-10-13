import { AppLink } from "~/components/ui/AppLink";
import { productsCta } from "~/content/products";

// Looks like the band on the home page but differs: a smaller heading that is
// not an <h2>, no stacking on narrow screens, and a plain link with no hover
// effect. See home/CtaBand.
export function CustomCta() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-7.5 bg-brand px-gutter py-15">
      <div>
        <div className="font-display text-cta-title-sm font-bold text-ink-inverse uppercase">
          {productsCta.title}
        </div>
        <p className="mt-1.5 text-15 text-[rgba(255,255,255,0.8)]">{productsCta.text}</p>
      </div>
      <AppLink
        to={productsCta.action.to}
        className="bg-surface px-8.5 py-3.5 font-display text-14 font-bold tracking-sm whitespace-nowrap text-brand uppercase"
      >
        {productsCta.action.label}
      </AppLink>
    </div>
  );
}
