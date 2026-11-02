import type { ProductPage } from "~/content/product-pages";
import { bodyText, capsHeading } from "./Chapter";

type WhereUsedContent = NonNullable<ProductPage["whereUsed"]>;

/** Where a product is used: one statement in large type, then any detail and lists. */
export function WhereUsed({ content }: { content: WhereUsedContent }) {
  return (
    <>
      <p className="mt-5.5 max-w-197.5 text-editorial-statement leading-[1.32] tracking-snug">
        {content.statement}
      </p>
      {content.body?.map((paragraph) => (
        <p key={paragraph} className={bodyText}>
          {paragraph}
        </p>
      ))}
      {content.lists && (
        <div className="mt-12 grid grid-cols-[minmax(0,0.45fr)_minmax(0,1fr)] gap-x-10 upto-900:grid-cols-[minmax(0,1fr)] upto-900:gap-y-8">
          {content.lists.map((list) => (
            <div key={list.label}>
              <div className={`${capsHeading} border-b border-b-editorial-ink pb-3.5`}>{list.label}</div>
              <ul className="list-none">
                {list.items.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-4 border-b border-b-editorial-line pt-3.5 pb-3.75 text-22 leading-[1.3] tracking-snug"
                  >
                    <span className="w-6.5 flex-none text-15 tracking-[0] text-editorial-faint">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
