import { useState } from "react";
import { productCategories, type ProductCategoryId } from "~/content/products";
import { cx } from "~/lib/cx";
import { ProductCard } from "./ProductCard";

const tab =
  "-mb-px cursor-pointer border-b-3 px-7 py-3 font-display text-13 font-semibold tracking-sm whitespace-nowrap uppercase transition-all duration-200";
const tabIdle = "border-b-transparent text-ink-muted hover:text-ink-strong";
const tabActive = "border-b-brand text-brand";

const panelActive = "grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-px bg-line";

/**
 * The three product categories as tabs. The first tab is open on arrival.
 * The choice is kept in the page only, so it resets on every visit, and the
 * `#casting`, `#sand` and `#fab` parts of the footer links are not read. Both
 * are how the original behaves.
 */
export function ProductTabs() {
  const [active, setActive] = useState<ProductCategoryId>("casting");

  return (
    <>
      <div className="mb-7 flex gap-0 overflow-x-auto border-b border-b-line">
        {productCategories.map((category) => (
          <div
            key={category.id}
            className={cx(tab, category.id === active ? tabActive : tabIdle)}
            onClick={() => setActive(category.id)}
          >
            {category.label}
          </div>
        ))}
      </div>

      {productCategories.map((category) => (
        <div
          key={category.id}
          id={`tab-${category.id}`}
          className={category.id === active ? panelActive : "hidden"}
        >
          {category.products.map((product) => (
            <ProductCard key={product.number} {...product} />
          ))}
        </div>
      ))}
    </>
  );
}
