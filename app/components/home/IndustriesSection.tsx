import { AppLink } from "~/components/ui/AppLink";
import { homeIndustries } from "~/content/home";
import { ArrowUpRight, Eyebrow, TitleText, sectionTitle } from "./parts";

/** "04 / Where our equipment works": the industries served. */
export function IndustriesSection() {
  return (
    <section className="grid grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] gap-x-10 gap-y-10 bg-landing-surface px-landing-gutter pt-17 pb-16 text-landing-ink upto-900:grid-cols-[minmax(0,1fr)]">
      <div className="pt-1">
        <Eyebrow>{homeIndustries.eyebrow}</Eyebrow>
        <h2 className={`mt-7 ${sectionTitle}`}>
          <TitleText title={homeIndustries.title} accentClass="text-landing-emphasis" />
        </h2>
        <p className="mt-7 max-w-62.5 font-landing-sans text-13 leading-[22px] text-landing-ink-muted">
          {homeIndustries.text}
        </p>
      </div>
      <ul className="list-none border-b border-b-landing-line">
        {homeIndustries.items.map((item, index) => (
          <li key={item.name} className="border-t border-t-landing-line">
            <AppLink
              to={homeIndustries.to}
              className="flex items-center gap-6 py-4 hover:text-landing-emphasis"
            >
              <span className="w-3 self-start pt-2 font-landing-sans text-9 leading-[1] text-landing-ink-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="flex-1">
                <span className="block font-landing-sans text-20 leading-[1.15] tracking-snug">
                  {item.name}
                </span>
                <span className="mt-2 block font-landing-sans text-8 leading-[1] tracking-caps-wide text-landing-ink-muted uppercase">
                  {item.detail}
                </span>
              </span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </AppLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
