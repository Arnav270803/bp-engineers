import { AppLink } from "~/components/ui/AppLink";
import { productPageText, relatedProducts, type ProductPage } from "~/content/product-pages";
import { cx } from "~/lib/cx";
import { HeadlineText, Kicker } from "./Chapter";
import { ProductDrawing } from "./ProductDrawing";

const cardColumns: Record<number, string> = {
  1: "grid-cols-[repeat(3,minmax(0,1fr))]",
  2: "grid-cols-[repeat(3,minmax(0,1fr))]",
  3: "grid-cols-[repeat(3,minmax(0,1fr))]",
  4: "grid-cols-[repeat(4,minmax(0,1fr))]",
};

const arrowLink =
  "flex items-center gap-2 font-editorial-heavy text-10 leading-[12px] tracking-caps-wider text-editorial-accent uppercase";

function Arrow() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className="stroke-current"
      strokeWidth={1.4}
      aria-hidden="true"
    >
      <path d="M1 6H11M6.5 1.5L11 6L6.5 10.5" />
    </svg>
  );
}

/** Cards for the products the workbook lists as related. */
export function RelatedProducts({ page }: { page: ProductPage }) {
  const items = relatedProducts(page);
  const text = productPageText.related;
  return (
    <section className="px-editorial-gutter pt-25 pb-29 upto-900:px-5 upto-900:pt-16 upto-900:pb-18">
      <div className="flex items-end justify-between gap-6 border-b border-b-editorial-ink pb-5.5 upto-900:flex-col upto-900:items-start">
        <div>
          <Kicker label={text.kicker} />
          <h2 className="mt-4.5 text-editorial-title leading-[1.1] font-normal tracking-headline">
            <HeadlineText headline={text.title} accentClass="text-editorial-accent" />
          </h2>
        </div>
        <AppLink to="/products" className={cx(arrowLink, "shrink-0")}>
          {productPageText.allProducts}
          <Arrow />
        </AppLink>
      </div>
      <div
        className={cx(
          "mt-9 grid gap-x-8 upto-900:grid-cols-[minmax(0,1fr)] upto-900:gap-y-11",
          cardColumns[items.length] ?? cardColumns[4],
        )}
      >
        {items.map((item) => (
          <AppLink key={item.key} to={item.to} className="group flex flex-col">
            <div className="flex aspect-[4/3] items-center justify-center bg-editorial-panel">
              <ProductDrawing kind={item.drawing} tone="light" className="h-full w-full" />
            </div>
            <div className="mt-5.5 text-20 leading-[1] text-editorial-faint">{item.label}</div>
            <h3 className="mt-3 text-30 leading-[1.1] font-normal tracking-headline group-hover:text-editorial-accent">
              {item.name}
            </h3>
            <p className="mt-3 text-15 leading-[1.6] text-editorial-ink-soft">{item.excerpt}</p>
            <span className={cx(arrowLink, "mt-auto pt-4.5")}>
              {text.view}
              <Arrow />
            </span>
          </AppLink>
        ))}
      </div>
    </section>
  );
}
