import type { ReactNode } from "react";
import { Icon } from "~/components/ui/Icon";
import type { IconName } from "~/content/icons";

/** Classes for a link inside a contact detail. */
export const detailLink = "text-brand transition-[color] duration-200 hover:text-brand-strong";

interface ContactDetailProps {
  icon: IconName;
  label: string;
  children: ReactNode;
}

/** One way of reaching the company: an icon, a small label and the value. */
export function ContactDetail({ icon, label, children }: ContactDetailProps) {
  return (
    <div className="mb-7 flex items-start gap-3.5">
      <div className="flex h-10.5 w-10.5 shrink-0 items-center justify-center bg-brand">
        <Icon name={icon} className="h-4.5 w-4.5 fill-ink-inverse" />
      </div>
      <div>
        <div className="mb-1.25 text-10 font-semibold tracking-md text-ink-muted uppercase">{label}</div>
        <div className="text-15 leading-[1.7] text-ink">{children}</div>
      </div>
    </div>
  );
}
