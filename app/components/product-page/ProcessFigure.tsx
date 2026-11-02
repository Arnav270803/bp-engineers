import { productPageText, type ProductPage } from "~/content/product-pages";
import { cx } from "~/lib/cx";
import { FigureCaption } from "./Chapter";

type Process = NonNullable<ProductPage["overview"]["process"]>;

/** The steps a product goes through, side by side. */
export function ProcessFigure({ process, number }: { process: Process; number: string }) {
  return (
    <figure className="mt-13">
      <ol className="grid list-none grid-cols-[repeat(4,minmax(0,1fr))] border-t-2 border-t-editorial-ink upto-900:grid-cols-[minmax(0,1fr)]">
        {process.steps.map((step, index) => (
          <li
            key={step.name}
            className={cx(
              "pt-5 pr-5.5 pb-6.5 upto-900:px-0 upto-900:pt-4.5 upto-900:pb-5",
              index > 0 &&
                "border-l border-l-editorial-line pl-5.5 upto-900:border-t upto-900:border-l-0 upto-900:border-t-editorial-line",
            )}
          >
            <div className="font-editorial-heavy text-10 leading-[12px] tracking-caps-wider text-editorial-accent uppercase">
              {`${productPageText.step} ${String(index + 1).padStart(2, "0")}`}
            </div>
            <div className="mt-3.5 text-25 leading-[1.1] tracking-headline">{step.name}</div>
            <p className="mt-2.5 text-15 leading-[1.55] text-editorial-ink-soft">{step.text}</p>
          </li>
        ))}
      </ol>
      <FigureCaption number={number} text={process.caption} />
    </figure>
  );
}
