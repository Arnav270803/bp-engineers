import { Eyebrow, TitleText, sectionTitle } from "~/components/site/parts";
import { values } from "~/content/about";

/** "What we stand for": the three values on the warm band. */
export function ValuesSection() {
  return (
    <section className="bg-landing-band px-landing-gutter pt-16 pb-18 text-landing-ink">
      <Eyebrow className="text-landing-band-ink">{values.label}</Eyebrow>
      <h2 className={`mt-6 ${sectionTitle}`}>
        <TitleText title={values.title} accentClass="text-landing-emphasis-warm" />
      </h2>
      <ul className="mt-12 grid list-none grid-cols-[repeat(3,minmax(0,1fr))] gap-x-10 gap-y-10 upto-768:grid-cols-[minmax(0,1fr)]">
        {values.items.map((item) => (
          <li key={item.title} className="border-t border-t-[rgba(75,58,38,0.35)] pt-6">
            <h3 className="font-landing-serif text-landing-subtitle leading-[1.1] font-normal tracking-[-0.015em] italic">
              {item.title}
            </h3>
            <p className="mt-4 max-w-80 font-landing-sans text-13 leading-[22px] text-landing-band-ink">
              {item.text}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
