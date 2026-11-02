import { useEffect, useMemo, useState, type MouseEvent } from "react";
import { AppLink } from "~/components/ui/AppLink";
import { productPageText } from "~/content/product-pages";
import { cx } from "~/lib/cx";

export interface ChapterLink {
  id: string;
  number: string;
  label: string;
}

const item = "block font-editorial-sans text-11 leading-[27px] tracking-caps-snug uppercase";

/**
 * Scrolls to a chapter without adding a history entry, so Back leaves the page
 * straight away. A link opened in a new tab or copied still carries its `#`.
 */
export function scrollToChapter(event: MouseEvent<HTMLAnchorElement>, id: string) {
  const target = document.getElementById(id);
  const plainClick =
    event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;
  if (!target || !plainClick) return;
  event.preventDefault();
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
}

/** The chapter the reader is in: the last one whose top has passed a third of the way down the window. */
function useCurrentChapter(ids: readonly string[]): string | undefined {
  const [current, setCurrent] = useState(ids[0]);
  useEffect(() => {
    const update = () => {
      const line = window.innerHeight / 3;
      let found = ids[0];
      for (const id of ids) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= line) found = id;
      }
      setCurrent(found);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ids]);
  return current;
}

/** The list of chapters beside the text. It stays in view and marks the chapter being read. */
export function ChapterNav({ chapters }: { chapters: ChapterLink[] }) {
  const ids = useMemo(() => chapters.map((chapter) => chapter.id), [chapters]);
  const current = useCurrentChapter(ids);
  return (
    <nav aria-label={productPageText.onThisPage} className="sticky top-9 self-start pt-15.5 upto-900:hidden">
      <div className={cx(item, "text-editorial-subtle")}>{productPageText.onThisPage}</div>
      {chapters.map((chapter) => (
        <AppLink
          key={chapter.id}
          to={`#${chapter.id}`}
          onClick={(event) => scrollToChapter(event, chapter.id)}
          className={cx(
            item,
            chapter.id === current
              ? "text-editorial-accent"
              : "text-editorial-subtle hover:text-editorial-ink",
          )}
        >
          {`${chapter.number} — ${chapter.label}`}
        </AppLink>
      ))}
    </nav>
  );
}
