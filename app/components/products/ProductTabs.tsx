import { useState } from "react";
import { productCategories, type ProductCategoryId } from "~/content/products";
import { cx } from "~/lib/cx";
import { ProductCard } from "./ProductCard";

const tab =
  "-mb-px flex cursor-pointer items-baseline gap-3 border-0 border-b-2 bg-transparent pb-4.5 font-landing-sans text-11 leading-[1] font-bold tracking-caps-wide whitespace-nowrap uppercase";
const tabIdle = "border-b-transparent text-landing-ink-muted hover:text-landing-ink";
const tabActive = "border-b-landing-ink text-landing-ink";

const panel =
  "grid grid-cols-[repeat(3,minmax(0,1fr))] gap-x-8 gap-y-14 pt-12 upto-900:grid-cols-[repeat(2,minmax(0,1fr))] upto-600:grid-cols-[minmax(0,1fr)]";

/**
 * The three product categories as tabs. The first tab is open on arrival. The
 * choice is kept in the page only, so it resets on every visit, as it did on
 * the original site.
 */
export function ProductTabs() {
  const [active, setActive] = useState<ProductCategoryId>("casting");

  return (
    <section id="products" className="bg-landing-surface px-landing-gutter pt-14 pb-20 text-landing-ink">
      <div
        role="tablist"
        className="flex gap-x-10 overflow-x-auto border-b border-b-landing-line upto-600:gap-x-7"
      >
        {productCategories.map((category, index) => (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={category.id === active}
            aria-controls={`tab-${category.id}`}
            className={cx(tab, category.id === active ? tabActive : tabIdle)}
            onClick={() => setActive(category.id)}
          >
            <span className="text-9 font-normal text-landing-ink-muted">
              {String(index + 1).padStart(2, "0")}
            </span>
            {category.label}
          </button>
        ))}
      </div>

      {productCategories.map((category) => (
        <div
          key={category.id}
          id={`tab-${category.id}`}
          role="tabpanel"
          className={category.id === active ? panel : "hidden"}
        >
          {category.products.map((product) => (
            <ProductCard key={product.number} {...product} />
          ))}
        </div>
      ))}
    </section>
  );
}
