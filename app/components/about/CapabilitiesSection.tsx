import { Eyebrow, TitleText, sectionTitle } from "~/components/site/parts";
import { capabilities } from "~/content/about";

/** "What we can do": the six capabilities of the workshop. */
export function CapabilitiesSection() {
  return (
    <section className="bg-landing-surface-light px-landing-gutter pt-16 pb-18 text-landing-ink">
      <div className="flex items-end justify-between gap-10 upto-900:flex-col upto-900:items-start upto-900:gap-6">
        <div>
          <Eyebrow>{capabilities.label}</Eyebrow>
          <h2 className={`mt-6 ${sectionTitle}`}>
            <TitleText title={capabilities.title} accentClass="text-landing-emphasis" />
          </h2>
        </div>
        <p className="max-w-82.5 pb-2 font-landing-sans text-13 leading-[21px] text-landing-ink-muted">
          {capabilities.sub}
        </p>
      </div>
      <ul className="mt-12 grid list-none grid-cols-[repeat(3,minmax(0,1fr))] gap-x-8 gap-y-10 upto-900:grid-cols-[repeat(2,minmax(0,1fr))] upto-600:grid-cols-[minmax(0,1fr)]">
        {capabilities.items.map((item, index) => (
          <li key={item.title} className="border-t border-t-landing-line-strong pt-6">
            <span className="font-landing-sans text-9 leading-[1] text-landing-ink-muted">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-5 font-landing-sans text-18 leading-[1.2] font-normal tracking-[-0.02em]">
              {item.title}
            </h3>
            <p className="mt-3 max-w-75 font-landing-sans text-12 leading-[19px] text-landing-ink-muted">
              {item.text}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
