import { productPageText } from "~/content/product-pages";
import { site } from "~/content/site";
import { cx } from "~/lib/cx";

/** The B.P. Engineers mark and name as drawn on the product pages. */
export function EditorialLogo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span
      className={cx(
        "flex items-center gap-2.75",
        tone === "dark" ? "text-editorial-on-dark" : "text-editorial-ink",
      )}
    >
      <span className="relative pr-2.75 font-editorial-heavy text-36 leading-[1] tracking-logo upto-900:text-30">
        BP
        <span className="absolute right-0 bottom-1.25 size-2.25 bg-editorial-accent-bright"></span>
      </span>
      <span className="font-editorial-heavy text-10 leading-[10px] tracking-caps uppercase">
        {site.name}
        <br />
        {productPageText.logoSince}
      </span>
    </span>
  );
}
