import { productPageText } from "~/content/product-pages";

/** The reasons to choose B.P. Engineers, two to a row on the dark panel. */
export function ReasonList({ reasons }: { reasons: string[] }) {
  return (
    <div className="mt-11 grid grid-cols-[repeat(2,minmax(0,1fr))] gap-x-11 upto-900:grid-cols-[minmax(0,1fr)]">
      {reasons.map((reason, index) => (
        <div
          key={reason}
          className="grid grid-cols-[54px_minmax(0,1fr)] border-t border-t-[rgba(238,236,229,0.15)] pt-5.5 pb-6.5"
        >
          <span className="text-26 leading-[1.1] text-editorial-accent-on-dark italic">
            {productPageText.numerals[index]}
          </span>
          <p className="text-22 leading-[1.4] tracking-snug text-editorial-on-dark upto-900:text-20">
            {reason}
          </p>
        </div>
      ))}
    </div>
  );
}
