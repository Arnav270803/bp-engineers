import { Icon } from "~/components/ui/Icon";
import type { IconName } from "~/content/icons";

interface ProductPreviewCardProps {
  number: string;
  icon: IconName;
  title: string;
  text: string;
}

// Looks like the card on the products page but differs in padding, icon size
// and title size, so the two are kept separate.
export function ProductPreviewCard({ number, icon, title, text }: ProductPreviewCardProps) {
  return (
    <div className="group relative overflow-hidden bg-surface px-6.5 py-8 transition-[background] duration-250 before:absolute before:top-0 before:left-0 before:h-0 before:w-0.75 before:bg-brand before:transition-[height] before:duration-250 before:content-[''] hover:bg-surface-inverse hover:before:h-full">
      <div className="absolute top-2 right-3.5 font-display text-60 leading-[1] font-bold text-[#f0f2f5] transition-[color] duration-250 group-hover:text-[rgba(255,255,255,0.05)]">
        {number}
      </div>
      <div className="mb-4.5 flex h-10.5 w-10.5 items-center justify-center bg-brand">
        <Icon name={icon} className="h-5 w-5 fill-ink-inverse" />
      </div>
      <div className="mb-2.5 font-display text-19 font-semibold text-ink-strong uppercase transition-[color] duration-250 group-hover:text-ink-inverse">
        {title}
      </div>
      <div className="text-13 leading-[1.7] text-ink-muted transition-[color] duration-250 group-hover:text-ink-inverse-muted">
        {text}
      </div>
    </div>
  );
}
