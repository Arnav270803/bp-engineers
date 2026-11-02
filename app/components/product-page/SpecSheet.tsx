import type { ProductPage } from "~/content/product-pages";
import { cx } from "~/lib/cx";

const statColumns: Record<number, string> = {
  1: "grid-cols-[minmax(0,1fr)]",
  2: "grid-cols-[repeat(2,minmax(0,1fr))]",
  3: "grid-cols-[repeat(3,minmax(0,1fr))]",
};

/** The key figures in large type, then every specification row. */
export function SpecSheet({ specs }: { specs: ProductPage["specs"] }) {
  return (
    <>
      {specs.stats && (
        <div
          className={cx(
            "mt-11.5 grid border-t-2 border-t-editorial-ink upto-900:grid-cols-[minmax(0,1fr)]",
            statColumns[specs.stats.length],
          )}
        >
          {specs.stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cx(
                "pt-5.5 pr-4 pb-6.5 upto-900:px-0 upto-900:pt-4.5 upto-900:pb-5",
                index > 0 &&
                  "border-l border-l-editorial-line pl-5 upto-900:border-t upto-900:border-l-0 upto-900:border-t-editorial-line",
              )}
            >
              <div className="text-editorial-figure leading-[1] tracking-figure whitespace-nowrap">
                {stat.value}
                <small className="ml-1.25 text-19 tracking-[0] text-editorial-muted">{stat.unit}</small>
              </div>
              <div className="mt-3.5 font-editorial-sans text-10 leading-[1.5] tracking-caps text-editorial-muted uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      )}
      <dl className={cx("border-t border-t-editorial-ink", specs.stats ? "mt-14" : "mt-11.5")}>
        {specs.rows.map((row, index) => (
          <div
            key={row.label}
            className="grid grid-cols-[minmax(0,1.05fr)_minmax(0,1.6fr)] items-baseline border-b border-b-editorial-line pt-3.75 pb-4 upto-900:grid-cols-[minmax(0,1fr)] upto-900:gap-y-1.5"
          >
            <dt className="flex items-baseline pr-4 font-editorial-sans text-10 leading-[1.5] font-bold tracking-caps text-editorial-label uppercase">
              <span className="w-13 shrink-0 font-editorial-serif text-15 leading-[1] font-normal tracking-[0] text-editorial-faint normal-case upto-900:w-9">
                {String(index + 1).padStart(2, "0")}
              </span>
              {row.label}
            </dt>
            <dd className="text-19 leading-[1.45] upto-900:pl-9">{row.value}</dd>
          </div>
        ))}
      </dl>
    </>
  );
}
