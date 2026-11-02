import { Fragment } from "react";
import { AppLink } from "~/components/ui/AppLink";
import { homeEquipment } from "~/content/home";
import { ArrowUpRight, Eyebrow, TitleText, UnderlineLink, sectionTitle } from "./parts";

/** "01 / The equipment": a photo card for each of the four main products. */
export function EquipmentSection() {
  return (
    <section className="border-t border-t-landing-line bg-landing-surface px-landing-gutter pt-16 pb-14 text-landing-ink">
      <div className="flex items-start justify-between gap-10 upto-900:flex-col upto-900:gap-8">
        <div>
          <Eyebrow>{homeEquipment.eyebrow}</Eyebrow>
          <h2 className={`mt-6 ${sectionTitle}`}>
            <TitleText title={homeEquipment.title} accentClass="text-landing-emphasis" />
          </h2>
        </div>
        <div className="w-[min(330px,100%)] pt-7.5 upto-900:pt-0">
          <p className="font-landing-sans text-13 leading-[20px] text-landing-ink-muted">
            {homeEquipment.intro.map((line, index) => (
              <Fragment key={line}>
                {index > 0 && <br />}
                {line}
              </Fragment>
            ))}
          </p>
          <UnderlineLink to={homeEquipment.action.to} className="mt-10 w-48">
            {homeEquipment.action.label}
          </UnderlineLink>
        </div>
      </div>

      <div className="mt-9 grid grid-cols-[repeat(2,minmax(0,1fr))] gap-x-7.5 gap-y-8 upto-768:grid-cols-[minmax(0,1fr)]">
        {homeEquipment.items.map((item, index) => (
          <AppLink key={item.name} to={item.to} className="group block">
            <div className="relative aspect-[3/2] overflow-hidden bg-landing-surface-stone">
              <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
              <span className="absolute top-4.5 left-4.5 bg-landing-surface px-2.5 py-1.5 font-landing-sans text-9 leading-[1] tracking-caps-wide text-landing-ink uppercase">
                {`${String(index + 1).padStart(2, "0")}${homeEquipment.tagSuffix}`}
              </span>
              <span className="absolute right-4.5 bottom-4.5 flex size-9.5 items-center justify-center rounded-full bg-landing-surface-light text-landing-ink group-hover:bg-landing-action">
                <ArrowUpRight />
              </span>
            </div>
            <div className="mt-4 flex items-baseline justify-between gap-4">
              <h3 className="font-landing-sans text-22 leading-[1.1] font-normal tracking-[-0.01em]">
                {item.name}
              </h3>
              <span className="text-right font-landing-sans text-9 leading-[1.3] text-landing-ink-muted">
                {item.detail}
              </span>
            </div>
            <p className="mt-2.5 font-landing-sans text-12 leading-[1.5] text-landing-ink-muted">
              {item.text}
            </p>
          </AppLink>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-between gap-6 border-t border-t-landing-line pt-8 upto-600:flex-col upto-600:items-start">
        <p className="font-landing-sans text-10 leading-[1] tracking-caps-wide uppercase">
          {homeEquipment.question}
        </p>
        <AppLink
          to={homeEquipment.drawings.to}
          className="flex items-center gap-8 font-landing-sans text-13 leading-[1] hover:text-landing-emphasis"
        >
          {homeEquipment.drawings.label}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </AppLink>
      </div>
    </section>
  );
}
