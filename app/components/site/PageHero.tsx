import type { ReactNode } from "react";
import { Eyebrow } from "./parts";

export interface PageHeroContent {
  eyebrow: string;
  /** The title is written in up to three parts; the middle one is the accent, in italics. */
  titleBefore: string;
  titleAccent: string;
  titleAfter?: string;
  lead: string;
}

/**
 * The dark opening of every page but the home page, under the site's header:
 * the small capitals, the serif title with its accent, and the lead beside it.
 */
export function PageHero({
  eyebrow,
  titleBefore,
  titleAccent,
  titleAfter = "",
  lead,
  children,
}: PageHeroContent & { children?: ReactNode }) {
  return (
    <section className="bg-landing-dark-deep px-landing-gutter pt-48 pb-16 text-landing-on-dark upto-900:pt-40 upto-600:pt-36 upto-600:pb-12">
      <Eyebrow className="text-landing-on-dark-muted">{eyebrow}</Eyebrow>
      <div className="mt-8 grid grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] items-end gap-x-16 gap-y-8 upto-900:grid-cols-[minmax(0,1fr)]">
        <h1 className="max-w-[13em] font-landing-serif text-landing-page-title leading-[1.02] font-normal tracking-headline">
          {titleBefore}
          <em className="text-landing-emphasis-on-dark">{titleAccent}</em>
          {titleAfter}
        </h1>
        <p className="max-w-105 pb-2 font-landing-sans text-14 leading-[24px] text-landing-on-dark-soft upto-900:pb-0">
          {lead}
        </p>
      </div>
      {children}
    </section>
  );
}
