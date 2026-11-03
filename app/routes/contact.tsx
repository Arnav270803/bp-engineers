import { Fragment } from "react";
import type { Route } from "./+types/contact";
import { ContactDetail, detailLink } from "~/components/contact/ContactDetail";
import { ContactForm } from "~/components/contact/ContactForm";
import { MapPanel } from "~/components/contact/MapPanel";
import { PageHero } from "~/components/site/PageHero";
import { Eyebrow, TitleText, sectionTitle } from "~/components/site/parts";
import { contactDetailLabels, contactHero, contactIntro, contactMeta } from "~/content/contact";
import { site } from "~/content/site";

export const meta: Route.MetaFunction = () => [
  { title: contactMeta.title },
  { name: "description", content: contactMeta.description },
];

export default function Contact() {
  return (
    <>
      <PageHero {...contactHero} />
      <section className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-start gap-x-16 gap-y-12 bg-landing-surface px-landing-gutter pt-16 pb-20 text-landing-ink upto-860:grid-cols-[minmax(0,1fr)]">
        <div>
          <Eyebrow>{contactIntro.label}</Eyebrow>
          <h2 className={`mt-6 ${sectionTitle}`}>
            <TitleText title={contactIntro.title} accentClass="text-landing-emphasis" />
          </h2>
          <p className="mt-7 mb-10 max-w-125 font-landing-sans text-14 leading-[25px] text-landing-ink-muted">
            {contactIntro.text}
          </p>

          <div className="border-b border-b-landing-line">
            <ContactDetail label={contactDetailLabels.phone}>
              {site.phones.map((phone, index) => (
                <Fragment key={phone.href}>
                  {index > 0 && <br />}
                  <a href={phone.href} className={detailLink}>
                    {phone.label}
                  </a>
                </Fragment>
              ))}
            </ContactDetail>

            <ContactDetail label={contactDetailLabels.whatsapp}>
              <a href={site.whatsapp.href} target="_blank" className={detailLink}>
                {site.whatsapp.label + contactDetailLabels.whatsappSuffix}
              </a>
            </ContactDetail>

            <ContactDetail label={contactDetailLabels.email}>
              <a href={site.email.href} className={detailLink}>
                {site.email.label}
              </a>
            </ContactDetail>

            <ContactDetail label={contactDetailLabels.address}>
              {site.address.street}
              <br />
              {site.address.region}
            </ContactDetail>
          </div>

          <MapPanel />
        </div>

        <ContactForm />
      </section>
    </>
  );
}
