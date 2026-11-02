import type { ProductPage } from "~/content/product-pages";

type TypeItem = NonNullable<ProductPage["types"]["items"]>[number];

/** The kinds of a product that are made, two to a row. */
export function TypeList({ items }: { items: TypeItem[] }) {
  return (
    <div className="mt-12 grid grid-cols-[repeat(2,minmax(0,1fr))] gap-x-10 upto-900:grid-cols-[minmax(0,1fr)]">
      {items.map((item, index) => (
        <div key={item.name} className="border-t border-t-editorial-ink pt-5.5 pb-7">
          <div className="text-22 leading-[1] text-editorial-faint">{String(index + 1).padStart(2, "0")}</div>
          <h3 className="mt-3.5 text-32 leading-[1.1] font-normal tracking-headline upto-900:text-30">
            {item.name}
          </h3>
          <p className="mt-2 text-17 leading-[1.55] text-editorial-ink-soft">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
