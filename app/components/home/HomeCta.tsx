import { Fragment } from "react";
import { homeCta } from "~/content/home";
import { site } from "~/content/site";
import { ArrowUpRight, Eyebrow, PillLink, TitleText } from "./parts";

/** "Let's make it work": the closing call to ask for a quote. */
export function HomeCta() {
  const phone = site.phones[0];
  return (
    <section className="grid grid-cols-[minmax(0,1.07fr)_minmax(0,1fr)] gap-x-10 gap-y-10 bg-landing-surface-stone px-landing-gutter pt-15 pb-15 text-landing-ink upto-900:grid-cols-[minmax(0,1fr)]">
      <div>
        <Eyebrow className="text-landing-emphasis">{homeCta.eyebrow}</Eyebrow>
        <h2 className="mt-7 font-landing-serif text-landing-cta leading-[0.98] font-normal tracking-snug">
          <TitleText title={homeCta.title} accentClass="text-landing-emphasis" />
        </h2>
      </div>
      <div>
        <p className="font-landing-sans text-14 leading-[24px] text-landing-ink-muted">
          {homeCta.lines.map((line, index) => (
            <Fragment key={line}>
              {index > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </p>
        <PillLink to={homeCta.action.to} tone="action" className="mt-7.5 h-14">
          {homeCta.action.label}
        </PillLink>
        <a
          href={phone.href}
          className="mt-6.5 flex items-center gap-1.5 font-landing-sans text-11 leading-[1] text-landing-ink-muted hover:text-landing-ink"
        >
          {`${homeCta.callPrefix}${phone.label}`}
          <ArrowUpRight className="h-2.5 w-2.5" />
        </a>
      </div>
    </section>
  );
}
