import { Fragment, type ReactNode } from "react";
import { quoteSidebar } from "~/content/quote";
import { site } from "~/content/site";

const card = "px-7 pt-8 pb-7";
const cardTitle = "font-landing-serif text-26 leading-[1.15] font-normal tracking-[-0.015em]";
const itemLabel =
  "mb-1 block font-landing-sans text-9 leading-[1.4] font-bold tracking-caps-wide text-landing-on-dark-muted uppercase";

function SidebarItem({ children }: { children: ReactNode }) {
  return (
    <div className="border-t border-t-landing-on-dark-line py-4 font-landing-sans text-14 leading-[1.6] text-landing-on-dark">
      {children}
    </div>
  );
}

/** Stays in view beside the quote form: direct contact details and a list of promises. */
export function QuoteSidebar() {
  return (
    <div className="sticky top-8 upto-900:static">
      <div className={`${card} bg-landing-dark text-landing-on-dark`}>
        <div className={`${cardTitle} mb-6`}>{quoteSidebar.contactTitle}</div>
        {/* This WhatsApp link opens in the same tab, unlike the others, as on the original site. */}
        <SidebarItem>
          <strong className={itemLabel}>{quoteSidebar.labels.whatsapp}</strong>
          <a href={site.whatsapp.href} className="text-landing-action hover:text-landing-action-soft">
            {site.whatsapp.label}
          </a>
        </SidebarItem>
        <SidebarItem>
          <strong className={itemLabel}>{quoteSidebar.labels.phone}</strong>
          {site.phones.map((phone, index) => (
            <Fragment key={phone.href}>
              {index > 0 && <br />}
              {phone.label}
            </Fragment>
          ))}
        </SidebarItem>
        <SidebarItem>
          <strong className={itemLabel}>{quoteSidebar.labels.email}</strong>
          <a href={site.email.href} className="text-landing-action hover:text-landing-action-soft">
            {site.email.label}
          </a>
        </SidebarItem>
      </div>
      <div className={`${card} mt-5 bg-landing-surface-stone text-landing-ink`}>
        <div className={`${cardTitle} mb-5`}>{quoteSidebar.promiseTitle}</div>
        <ul className="list-none">
          {quoteSidebar.promises.map((promise) => (
            <li
              key={promise}
              className="flex items-center gap-3 border-t border-t-[rgba(33,33,26,0.14)] py-2.75 font-landing-sans text-13 leading-[1.5] text-landing-ink before:shrink-0 before:font-bold before:text-landing-emphasis-warm before:content-['✓']"
            >
              {promise}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
