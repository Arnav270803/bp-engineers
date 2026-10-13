import { Icon } from "~/components/ui/Icon";
import type { IconName } from "~/content/icons";

export function IndustryCard({ icon, name, text }: { icon: IconName; name: string; text: string }) {
  return (
    <div className="relative overflow-hidden bg-surface-inverse-raised px-5.5 py-7 transition-[background] duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-brand after:transition-[width] after:duration-300 after:content-[''] hover:bg-surface-inverse-hover hover:after:w-full">
      <div className="mb-3.5 flex h-9 w-9 items-center justify-center border border-[rgba(240,125,26,0.25)] bg-[rgba(240,125,26,0.12)]">
        <Icon name={icon} className="h-4.5 w-4.5 fill-brand" />
      </div>
      <div className="mb-1.5 font-display text-15 font-semibold text-ink-inverse uppercase">{name}</div>
      <div className="text-12 leading-[1.55] text-ink-inverse-muted">{text}</div>
    </div>
  );
}
