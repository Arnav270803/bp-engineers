import { Eyebrow, PillLink, TitleText, sectionTitle } from "~/components/site/parts";
import { productsCta } from "~/content/products";

/** The warm band at the foot of the products page: custom sizes and OEM work. */
export function CustomCta() {
  return (
    <section className="grid grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] items-end gap-x-16 gap-y-8 bg-landing-band px-landing-gutter pt-16 pb-16 text-landing-ink upto-900:grid-cols-[minmax(0,1fr)]">
      <div>
        <Eyebrow className="text-landing-band-ink">{productsCta.eyebrow}</Eyebrow>
        <h2 className={`mt-6 ${sectionTitle}`}>
          <TitleText title={productsCta.title} accentClass="text-landing-emphasis-warm" />
        </h2>
      </div>
      <div>
        <p className="max-w-90 font-landing-sans text-14 leading-[24px] text-landing-band-ink">
          {productsCta.text}
        </p>
        <PillLink to={productsCta.action.to} tone="dark" className="mt-7">
          {productsCta.action.label}
        </PillLink>
      </div>
    </section>
  );
}
