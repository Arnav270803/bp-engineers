import { Fragment, useId } from "react";
import { AppLink } from "~/components/ui/AppLink";
import { productPageText, type ProductPage } from "~/content/product-pages";
import { FigureCaption } from "./Chapter";
import { ProductDrawing } from "./ProductDrawing";

const crumbSeparator = "mx-4.25 font-normal text-editorial-faint upto-900:mx-2.5";
const plateNote =
  "absolute font-editorial-sans text-9 leading-[14px] tracking-caps-wide text-editorial-on-dark-muted uppercase";

/** The product's drawing on a dark sheet, standing in for a photo until there is one. */
function DrawingPlate({ page }: { page: ProductPage }) {
  const grid = `grid${useId().replace(/[^\w-]/g, "")}`;
  return (
    <div className="relative flex h-[374px] items-center justify-center overflow-hidden bg-editorial-dark upto-900:h-60">
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <pattern id={grid} width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M24 0H0V24" fill="none" stroke="rgba(238,236,229,0.07)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${grid})`} />
      </svg>
      <div className="pointer-events-none absolute inset-3 border border-[rgba(238,236,229,0.12)]"></div>
      <ProductDrawing
        kind={page.drawing}
        tone="dark"
        className="relative aspect-[4/3] h-[88%] upto-900:h-[70%]"
      />
      <span className={`${plateNote} top-6 left-7 upto-900:top-5 upto-900:left-6`}>
        {`${productPageText.drawingNumber}${page.number} · ${productPageText.elevation}`}
      </span>
      <span className={`${plateNote} right-7 bottom-6 text-right upto-900:right-6 upto-900:bottom-5`}>
        {productPageText.madeBy}
        <br />
        {`${page.shortName} · ${productPageText.notToScale}`}
      </span>
    </div>
  );
}

/** Breadcrumbs, the headline with its standfirst, and the large figure. */
export function ProductHero({ page, total }: { page: ProductPage; total: number }) {
  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center px-editorial-gutter pt-6 font-editorial-sans text-10 leading-[12px] font-bold tracking-caps-wide text-editorial-muted uppercase upto-900:px-5 upto-900:pt-4.5 upto-900:text-9"
      >
        <AppLink to="/products" className="flex items-center gap-2 hover:text-editorial-ink">
          <svg
            width="12"
            height="9"
            viewBox="0 0 12 9"
            fill="none"
            className="stroke-current"
            strokeWidth={1.3}
            aria-hidden="true"
          >
            <path d="M11.5 4.5H1M4.5 1L1 4.5L4.5 8" />
          </svg>
          {productPageText.allProducts}
        </AppLink>
        <span className={crumbSeparator}>/</span>
        <AppLink to="/products" className="hover:text-editorial-ink">
          {page.category.label}
        </AppLink>
        <span className={crumbSeparator}>/</span>
        <span>{page.number}</span>
      </nav>

      <section className="grid grid-cols-[minmax(0,1fr)_minmax(260px,26.2%)] gap-x-[5.5%] px-editorial-gutter upto-900:grid-cols-[minmax(0,1fr)] upto-900:px-5">
        <div>
          <p className="mt-18.5 flex items-center font-editorial-sans text-10 leading-[12px] font-bold tracking-caps-widest text-editorial-label uppercase before:mr-2.75 before:h-0.5 before:w-6.5 before:shrink-0 before:bg-editorial-accent before:content-[''] upto-900:mt-10 upto-900:text-9 upto-900:tracking-caps-wide">
            <span>
              {page.category.label}
              <span className="mr-[1.2em] ml-[0.9em] tracking-[0]">—</span>
              {page.hero.eyebrow}
            </span>
          </p>
          <h1 className="mt-6 text-editorial-display leading-[0.97] font-normal tracking-display upto-900:mt-4.5">
            {page.hero.title.lines.map((line) => (
              <Fragment key={line}>
                {line}
                <br />
              </Fragment>
            ))}
            <em className="text-editorial-accent">{page.hero.title.accent}</em>
          </h1>
        </div>
        <aside className="pt-23 upto-900:pt-8.5">
          <div className="text-23 leading-[1] text-editorial-faint">{`${page.number} / ${String(total).padStart(2, "0")}`}</div>
          <p className="mt-19.5 text-24 leading-[31px] upto-900:mt-4 upto-900:text-21 upto-900:leading-[29px]">
            {page.hero.standfirst}
          </p>
          <div className="mt-11.5 border-t border-t-editorial-line-strong pt-4 font-editorial-sans text-10 leading-[17px] tracking-caps text-editorial-muted uppercase upto-900:mt-7">
            {productPageText.madeBy}
            <br />
            {productPageText.madeWhere}
          </div>
        </aside>
      </section>

      <figure className="mt-8 px-editorial-gutter upto-900:mt-7.5 upto-900:px-5">
        {page.hero.image ? (
          <img
            src={page.hero.image.src}
            alt={page.hero.image.alt}
            className="h-[374px] w-full object-cover upto-900:h-60"
          />
        ) : (
          <DrawingPlate page={page} />
        )}
        <FigureCaption number="01" text={page.hero.caption} aside={productPageText.scroll} />
      </figure>
    </>
  );
}
