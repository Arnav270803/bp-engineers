import { Fragment, type ReactNode } from "react";
import { Icon } from "~/components/ui/Icon";
import type { IconName } from "~/content/icons";
import { quoteSidebar } from "~/content/quote";
import { site } from "~/content/site";

const card = "mb-5 bg-surface-inverse p-8";
const cardTitle =
  "mb-4 border-b-2 border-b-brand pb-3 font-display text-18 font-bold text-ink-inverse uppercase";
const itemLabel = "mb-0.5 block text-12 tracking-xs text-ink-inverse uppercase";

function SidebarItem({ icon, children }: { icon: IconName; children: ReactNode }) {
  return (
    <div className="mb-3.5 flex items-start gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-[rgba(240,125,26,0.15)]">
        <Icon name={icon} className="h-3.5 w-3.5 fill-brand" />
      </div>
      <div className="text-13 leading-[1.6] text-ink-inverse-muted">{children}</div>
    </div>
  );
}

/** Stays in view beside the quote form: direct contact details and a list of promises. */
export function QuoteSidebar() {
  return (
    <div className="sticky top-22.5 upto-900:static">
      <div className={card}>
        <div className={cardTitle}>{quoteSidebar.contactTitle}</div>
        {/* This WhatsApp link opens in the same tab, unlike the others. That is how the original is. */}
        <SidebarItem icon="whatsapp">
          <strong className={itemLabel}>{quoteSidebar.labels.whatsapp}</strong>
          <a href={site.whatsapp.href} className="text-brand">
            {site.whatsapp.label}
          </a>
        </SidebarItem>
        <SidebarItem icon="phone">
          <strong className={itemLabel}>{quoteSidebar.labels.phone}</strong>
          {site.phones.map((phone, index) => (
            <Fragment key={phone.href}>
              {index > 0 && <br />}
              {phone.label}
            </Fragment>
          ))}
        </SidebarItem>
        <SidebarItem icon="mail">
          <strong className={itemLabel}>{quoteSidebar.labels.email}</strong>
          <a href={site.email.href} className="text-brand">
            {site.email.label}
          </a>
        </SidebarItem>
      </div>
      <div className={card}>
        <div className={cardTitle}>{quoteSidebar.promiseTitle}</div>
        <ul className="list-none">
          {quoteSidebar.promises.map((promise) => (
            <li
              key={promise}
              className="flex items-center gap-2.5 border-b border-b-[rgba(255,255,255,0.07)] py-2 text-13 text-ink-inverse-muted before:shrink-0 before:font-bold before:text-brand before:content-['✓']"
            >
              {promise}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
