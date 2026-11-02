import { homePeople, homeProcess } from "~/content/home";
import { cx } from "~/lib/cx";
import { Eyebrow, PillLink, TitleText, sectionTitle } from "./parts";

/** "02 / The people behind the precision": the workshop, the story and three figures. */
export function PeopleSection() {
  return (
    <section className="bg-landing-dark text-landing-on-dark">
      <div className="grid grid-cols-[44%_56%] upto-900:grid-cols-[minmax(0,1fr)]">
        <div className="px-landing-gutter pt-16 pb-16 upto-900:pb-12">
          <Eyebrow className="text-landing-on-dark-muted">{homePeople.eyebrow}</Eyebrow>
          <h2 className={`mt-8 ${sectionTitle}`}>
            <TitleText title={homePeople.title} accentClass="text-landing-emphasis-on-dark" />
          </h2>
          {homePeople.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-5 max-w-92.5 font-landing-sans text-13 leading-[23px] text-landing-on-dark-soft first-of-type:mt-9"
            >
              {paragraph}
            </p>
          ))}
          <PillLink to={homePeople.action.to} tone="outline" className="mt-9">
            {homePeople.action.label}
          </PillLink>
          <p className="mt-11 flex items-center gap-2.5 font-landing-sans text-8 leading-[1] tracking-caps-wide text-landing-on-dark-muted uppercase before:size-1.25 before:rounded-full before:bg-landing-action before:content-['']">
            {homePeople.note}
          </p>
        </div>
        <figure className="relative min-h-[590px] overflow-hidden upto-900:min-h-[360px]">
          <img src={homePeople.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <figcaption className="absolute inset-x-7 bottom-7 flex items-center justify-between font-landing-sans text-9 leading-[1] tracking-caps-wide text-landing-on-dark uppercase">
            <span>{homePeople.imageCaption}</span>
            <span className="flex items-center gap-2.5">
              <svg width="6" height="7" viewBox="0 0 6 7" className="fill-current" aria-hidden="true">
                <path d="M0 0L6 3.5L0 7Z" />
              </svg>
              {homePeople.imageLabel}
            </span>
          </figcaption>
        </figure>
      </div>

      <div className="grid grid-cols-[repeat(3,minmax(0,1fr))] border-t border-t-landing-on-dark-line px-landing-gutter py-9 upto-768:grid-cols-[minmax(0,1fr)] upto-768:gap-y-6">
        {homePeople.stats.map((stat, index) => (
          <div
            key={stat.value}
            className={cx(
              "flex items-center gap-7",
              index > 0 && "border-l border-l-landing-on-dark-line pl-10 upto-768:border-l-0 upto-768:pl-0",
            )}
          >
            <span className="font-landing-serif text-landing-stat leading-[1] tracking-[0]">
              {stat.value}
            </span>
            <span className="max-w-28 font-landing-sans text-10 leading-[1.5] text-landing-on-dark-muted">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/** "From brief to build": the four steps of an order. */
export function ProcessSection() {
  return (
    <section className="bg-landing-surface-mist px-landing-gutter pt-14 pb-12 text-landing-ink">
      <div className="flex items-center justify-between gap-6 upto-768:flex-col upto-768:items-start">
        <Eyebrow className="text-landing-emphasis">{homeProcess.eyebrow}</Eyebrow>
        <h2 className="font-landing-serif text-landing-subtitle leading-[1.1] font-normal tracking-headline">
          {homeProcess.title}
        </h2>
      </div>
      <ol className="mt-9 grid list-none grid-cols-[repeat(4,minmax(0,1fr))] gap-x-8 gap-y-8 upto-900:grid-cols-[repeat(2,minmax(0,1fr))] upto-600:grid-cols-[minmax(0,1fr)]">
        {homeProcess.steps.map((step, index) => (
          <li key={step.name} className="border-t border-t-landing-line-strong pt-6">
            <span className="font-landing-sans text-9 leading-[1] text-landing-ink-muted">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-5 font-landing-sans text-18 leading-[1.2] font-normal tracking-[-0.02em]">
              {step.name}
            </h3>
            <p className="mt-3 max-w-60 font-landing-sans text-12 leading-[19px] text-landing-ink-muted">
              {step.text}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
