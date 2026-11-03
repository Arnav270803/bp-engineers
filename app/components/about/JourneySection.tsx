import { Eyebrow, TitleText, sectionTitle } from "~/components/site/parts";
import { timeline } from "~/content/about";

/** "Our journey": the company's years, side by side under thin rules. */
export function JourneySection() {
  return (
    <section className="bg-landing-surface-mist px-landing-gutter pt-16 pb-18 text-landing-ink">
      <Eyebrow className="text-landing-emphasis">{timeline.label}</Eyebrow>
      <h2 className={`mt-6 ${sectionTitle}`}>
        <TitleText title={timeline.title} accentClass="text-landing-emphasis" />
      </h2>
      <ol className="mt-12 grid list-none grid-cols-[repeat(5,minmax(0,1fr))] gap-x-8 gap-y-10 upto-900:grid-cols-[repeat(2,minmax(0,1fr))] upto-600:grid-cols-[minmax(0,1fr)]">
        {timeline.entries.map((entry) => (
          <li key={entry.year} className="border-t border-t-landing-line-strong pt-6">
            <span className="font-landing-serif text-landing-stat leading-[1] tracking-[0]">
              {entry.year}
            </span>
            <h3 className="mt-5 font-landing-sans text-16 leading-[1.3] font-normal tracking-[-0.01em]">
              {entry.title}
            </h3>
            <p className="mt-3 max-w-60 font-landing-sans text-12 leading-[19px] text-landing-ink-muted">
              {entry.text}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
