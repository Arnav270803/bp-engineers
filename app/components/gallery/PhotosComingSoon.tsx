import { Eyebrow, PillLink, TitleText, sectionTitle } from "~/components/site/parts";
import { photosComingSoon } from "~/content/gallery";

/** The closing band of the gallery: more photos are coming, and how to ask for one. */
export function PhotosComingSoon() {
  return (
    <section className="grid grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-end gap-x-16 gap-y-8 bg-landing-surface-stone px-landing-gutter pt-16 pb-16 text-landing-ink upto-900:grid-cols-[minmax(0,1fr)]">
      <div>
        <Eyebrow className="text-landing-emphasis">{photosComingSoon.eyebrow}</Eyebrow>
        <h2 className={`mt-6 ${sectionTitle}`}>
          <TitleText title={photosComingSoon.title} accentClass="text-landing-emphasis" />
        </h2>
      </div>
      <div>
        <p className="max-w-105 font-landing-sans text-14 leading-[24px] text-landing-ink-muted">
          {photosComingSoon.text}
        </p>
        <PillLink to={photosComingSoon.action.to} tone="dark" className="mt-7">
          {photosComingSoon.action.label}
        </PillLink>
      </div>
    </section>
  );
}
