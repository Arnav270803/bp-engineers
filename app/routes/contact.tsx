import { Fragment } from "react";
import type { Route } from "./+types/contact";
import { ContactDetail, detailLink } from "~/components/contact/ContactDetail";
import { ContactForm } from "~/components/contact/ContactForm";
import { MapPanel } from "~/components/contact/MapPanel";
import { PageHero } from "~/components/layout/PageHero";
import { Section } from "~/components/ui/Section";
import { SectionHeader } from "~/components/ui/SectionHeader";
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
      <Section>
        <div className="grid grid-cols-[1fr_1fr] [align-items:start] gap-15 upto-860:grid-cols-[1fr]">
          <div>
            <SectionHeader label={contactIntro.label} title={contactIntro.title} />
            <p className="mb-9 text-15 leading-[1.8] text-ink-muted">{contactIntro.text}</p>

            <ContactDetail icon="phone" label={contactDetailLabels.phone}>
              {site.phones.map((phone, index) => (
                <Fragment key={phone.href}>
                  {index > 0 && <br />}
                  <a href={phone.href} className={detailLink}>
                    {phone.label}
                  </a>
                </Fragment>
              ))}
            </ContactDetail>

            <ContactDetail icon="whatsapp" label={contactDetailLabels.whatsapp}>
              <a href={site.whatsapp.href} target="_blank" className={detailLink}>
                {site.whatsapp.label + contactDetailLabels.whatsappSuffix}
              </a>
            </ContactDetail>

            <ContactDetail icon="mail" label={contactDetailLabels.email}>
              <a href={site.email.href} className={detailLink}>
                {site.email.label}
              </a>
            </ContactDetail>

            <ContactDetail icon="pin" label={contactDetailLabels.address}>
              {site.address.street}
              <br />
              {site.address.region}
            </ContactDetail>

            <MapPanel />
          </div>

          <ContactForm />
        </div>
      </Section>
    </>
  );
}
