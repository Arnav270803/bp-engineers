import { Eyebrow, TitleText, sectionTitle } from "~/components/site/parts";
import { story } from "~/content/about";

const paragraph = "max-w-150 font-landing-sans text-14 leading-[25px] text-landing-ink-muted";

/** "Our story": how the company began and what it makes today, beside a workshop photo. */
export function StorySection() {
  return (
    <section className="grid grid-cols-[minmax(0,1fr)_minmax(0,0.78fr)] items-start gap-x-16 gap-y-12 bg-landing-surface px-landing-gutter pt-18 pb-20 text-landing-ink upto-900:grid-cols-[minmax(0,1fr)]">
      <div>
        <Eyebrow>{story.label}</Eyebrow>
        <h2 className={`mt-6 ${sectionTitle}`}>
          <TitleText title={story.title} accentClass="text-landing-emphasis" />
        </h2>
        {story.opening.map((text) => (
          <p key={text} className={`mt-6 first-of-type:mt-9 ${paragraph}`}>
            {text}
          </p>
        ))}
        <blockquote className="mt-10 max-w-150 border-l-2 border-l-landing-action pl-6 font-landing-serif text-landing-quote leading-[1.3] tracking-[-0.01em] text-landing-ink italic">
          {story.pullquote}
        </blockquote>
        <p className={`mt-10 ${paragraph}`}>{story.closing}</p>
      </div>
      <figure>
        <img src={story.image} alt={story.imageAlt} className="aspect-[4/5] w-full object-cover" />
        <figcaption className="mt-4 flex items-center justify-between font-landing-sans text-9 leading-[1] tracking-caps-wide text-landing-ink-muted uppercase">
          <span>{story.imageCaption}</span>
          <span>{story.imageLabel}</span>
        </figcaption>
      </figure>
    </section>
  );
}
