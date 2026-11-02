import { Fragment, type ReactNode } from "react";
import { productPageText, type Headline } from "~/content/product-pages";
import { cx } from "~/lib/cx";

/** Classes for the large opening paragraph of a chapter. */
export const leadText = "mt-9.5 max-w-172.5 text-23 leading-[1.55] upto-900:mt-6.5 upto-900:text-20";

/** Classes for a paragraph of running text. */
export const bodyText = "mt-5 max-w-172.5 text-18 leading-[1.72] text-editorial-ink-soft upto-900:text-17";

/** Classes for a small heading in heavy capitals. */
export const capsHeading =
  "font-editorial-heavy text-10 leading-[12px] font-normal tracking-caps-wider uppercase";

/** The words of a headline, ending in its accent. */
export function HeadlineText({ headline, accentClass }: { headline: Headline; accentClass: string }) {
  return (
    <>
      {headline.lines.map((line, index) => (
        <Fragment key={line}>
          {index > 0 && <br />}
          {line}
        </Fragment>
      ))}
      <em className={accentClass}>{headline.accent}</em>
    </>
  );
}

/** The small label that opens a chapter: its number and name. */
export function Kicker({ number, label }: { number?: string; label: string }) {
  return (
    <p className="flex items-center font-editorial-heavy text-10 leading-[12px] tracking-caps-widest uppercase">
      {number !== undefined && (
        <>
          {number}
          <span className="mr-[1.2em] ml-[0.9em]">/</span>
        </>
      )}
      {label}
    </p>
  );
}

export function ChapterTitle({ headline, dark = false }: { headline: Headline; dark?: boolean }) {
  return (
    <h2
      className={cx(
        "mt-4.5 max-w-190 text-editorial-title leading-[1.1] font-normal tracking-headline",
        dark ? "text-editorial-on-dark" : "text-editorial-ink",
      )}
    >
      <HeadlineText
        headline={headline}
        accentClass={dark ? "text-editorial-accent-on-dark" : "text-editorial-accent"}
      />
    </h2>
  );
}

/** "first" has no rule above it; "dark" is a dark panel; "after-dark" follows one without a rule. */
export type ChapterTone = "first" | "plain" | "dark" | "after-dark";

const toneClass: Record<ChapterTone, string> = {
  first: "pt-14.5 pb-22 upto-900:pt-11 upto-900:pb-16",
  plain: "border-t border-t-editorial-line pt-14.5 pb-22 upto-900:pt-11 upto-900:pb-16",
  dark: "mb-22 bg-editorial-dark px-13 pt-14.5 pb-15 text-editorial-on-dark upto-900:-mx-5 upto-900:mb-16 upto-900:px-5 upto-900:pt-11 upto-900:pb-12",
  "after-dark": "pb-22 upto-900:pb-16",
};

interface ChapterProps {
  id: string;
  number: string;
  label: string;
  title?: Headline;
  tone?: ChapterTone;
  children?: ReactNode;
}

export function Chapter({ id, number, label, title, tone = "plain", children }: ChapterProps) {
  return (
    <section id={id} className={cx("scroll-mt-6", toneClass[tone])}>
      <Kicker number={number} label={label} />
      {title && <ChapterTitle headline={title} dark={tone === "dark"} />}
      {children}
    </section>
  );
}

/** The line under a figure: its number and title, and an optional note on the right. */
export function FigureCaption({ number, text, aside }: { number: string; text: string; aside?: string }) {
  return (
    <figcaption className="flex items-center justify-between gap-4 border-b border-b-editorial-line pt-2.75 pb-3 font-editorial-sans text-10 leading-[12px] tracking-caps text-editorial-muted uppercase upto-900:flex-col upto-900:items-start upto-900:gap-1.5">
      <span>
        {`${productPageText.figure} ${number}`}
        <span className="mx-3.5">/</span>
        {text}
      </span>
      {aside !== undefined && <span>{aside}</span>}
    </figcaption>
  );
}
