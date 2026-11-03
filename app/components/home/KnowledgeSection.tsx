import { homeKnowledge } from "~/content/home";
import { Eyebrow, TitleText, UnderlineLink } from "~/components/site/parts";

/** "05 / Knowledge from the floor": the featured guide. */
export function KnowledgeSection() {
  const featured = homeKnowledge.featured;
  return (
    <section className="bg-landing-surface-light px-landing-gutter pt-15 pb-13 text-landing-ink">
      <div className="flex items-end justify-between gap-8 upto-768:flex-col upto-768:items-start">
        <div>
          <Eyebrow>{homeKnowledge.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-landing-serif text-landing-title-sm leading-[1.02] font-normal tracking-[-0.01em]">
            <TitleText title={homeKnowledge.title} accentClass="text-landing-emphasis" />
          </h2>
        </div>
        <UnderlineLink to={homeKnowledge.action.to} className="w-52.5">
          {homeKnowledge.action.label}
        </UnderlineLink>
      </div>
      <div className="mt-9 grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-start gap-x-11 gap-y-8 upto-768:grid-cols-[minmax(0,1fr)]">
        <img src={featured.image} alt={featured.topic} className="aspect-[549/280] w-full object-cover" />
        <div className="pt-6.5 upto-768:pt-0">
          <p className="font-landing-sans text-8 leading-[1] tracking-caps-wide text-landing-ink-muted uppercase">
            {featured.label}
            <span className="mx-3">/</span>
            {featured.topic}
          </p>
          <h3 className="mt-6.5 font-landing-serif text-landing-subtitle leading-[1.12] font-normal tracking-[-0.015em]">
            {featured.title[0]}
            <br />
            {featured.title[1]}
          </h3>
          <p className="mt-6 max-w-102.5 font-landing-sans text-13 leading-[22px] text-landing-ink-muted">
            {featured.text}
          </p>
          <UnderlineLink to={featured.action.to} className="mt-10 w-48.5">
            {featured.action.label}
          </UnderlineLink>
        </div>
      </div>
    </section>
  );
}
