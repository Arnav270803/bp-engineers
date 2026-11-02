import { Fragment } from "react";
import { AppLink } from "~/components/ui/AppLink";
import { homeEquipment, homeIntro } from "~/content/home";
import { ArrowUpRight, Eyebrow, sectionTitle } from "./parts";

/** "Strength in every detail": the four products as a list of links. */
export function IntroSection() {
  return (
    <section className="bg-landing-surface px-landing-gutter pt-11 pb-18 text-landing-ink">
      <Eyebrow>{homeIntro.eyebrow}</Eyebrow>
      <h2 className={`mt-6 ${sectionTitle}`}>{homeIntro.title}</h2>
      <div className="mt-7 grid grid-cols-[minmax(0,0.63fr)_minmax(0,1fr)] gap-x-10 gap-y-8 upto-900:grid-cols-[minmax(0,1fr)]">
        <p className="pt-1.5 font-landing-sans text-13 leading-[23px] text-landing-ink-muted">
          {homeIntro.lines.map((line, index) => (
            <Fragment key={line}>
              {index > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </p>
        <ul className="grid list-none grid-cols-[repeat(2,minmax(0,1fr))] gap-x-10 upto-600:grid-cols-[minmax(0,1fr)]">
          {homeEquipment.items.map((item, index) => (
            <li
              key={item.name}
              className="border-t border-t-landing-line [&:nth-last-child(-n+2)]:border-b [&:nth-last-child(-n+2)]:border-b-landing-line upto-600:[&:nth-last-child(2)]:border-b-0"
            >
              <AppLink to={item.to} className="flex items-center gap-4 py-5 hover:text-landing-emphasis">
                <span className="w-2.5 font-landing-sans text-9 leading-[1] text-landing-ink-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-landing-sans text-15 leading-[1]">{item.name}</span>
                <ArrowUpRight className="ml-auto" />
              </AppLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
