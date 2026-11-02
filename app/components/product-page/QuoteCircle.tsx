import { AppLink } from "~/components/ui/AppLink";
import { productPageText } from "~/content/product-pages";
import { scrollToChapter } from "./ChapterNav";

/** The round link to the quote form. It stays in view beside the text. */
export function QuoteCircle() {
  const [first, second] = productPageText.circle;
  return (
    <div className="sticky top-9 self-start pt-14 upto-900:hidden">
      <AppLink
        to="#quote"
        onClick={(event) => scrollToChapter(event, "quote")}
        className="flex size-[clamp(84px,7.6vw,110px)] flex-col items-center justify-center gap-1 rounded-[50%] border border-editorial-accent text-center font-editorial-sans text-12 leading-[1.2] font-bold tracking-caps-tight text-editorial-accent uppercase hover:bg-editorial-accent hover:text-ink-inverse"
      >
        <span>
          {first}
          <br />
          {second}
        </span>
        <svg
          width="13"
          height="13"
          viewBox="0 0 12 12"
          fill="none"
          className="stroke-current"
          strokeWidth={1.4}
          aria-hidden="true"
        >
          <path d="M2 2L10 10M10 3.5V10H3.5" />
        </svg>
      </AppLink>
    </div>
  );
}
