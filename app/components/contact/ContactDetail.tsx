import type { ReactNode } from "react";

/** Classes for a link inside a contact detail. */
export const detailLink = "text-landing-ink hover:text-landing-emphasis";

/** One way of reaching the company: a small label and the value, between thin rules. */
export function ContactDetail({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid grid-cols-[110px_minmax(0,1fr)] gap-6 border-t border-t-landing-line py-5 upto-600:grid-cols-[minmax(0,1fr)] upto-600:gap-2">
      <div className="pt-1.5 font-landing-sans text-9 leading-[1.4] font-bold tracking-caps-wide text-landing-ink-muted uppercase">
        {label}
      </div>
      <div className="font-landing-sans text-15 leading-[1.7] text-landing-ink">{children}</div>
    </div>
  );
}
