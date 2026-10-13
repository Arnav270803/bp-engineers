import { Icon } from "~/components/ui/Icon";
import type { IconName } from "~/content/icons";

export function ValueCard({ icon, title, text }: { icon: IconName; title: string; text: string }) {
  return (
    <div className="border-t-3 border-t-brand bg-surface-muted px-6 py-7 text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center bg-brand">
        <Icon name={icon} className="h-5.5 w-5.5 fill-ink-inverse" />
      </div>
      <div className="mb-2 font-display text-17 font-semibold text-ink-strong uppercase">{title}</div>
      <div className="text-13 leading-[1.65] text-ink-muted">{text}</div>
    </div>
  );
}
