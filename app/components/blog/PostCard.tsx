import { Icon } from "~/components/ui/Icon";
import { upcomingPostLabels } from "~/content/blog";
import type { IconName } from "~/content/icons";

interface PostCardProps {
  icon: IconName;
  category: string;
  title: string;
  excerpt: string;
}

/** A card for an article that is announced but not written. Its title links to `#`. */
export function PostCard({ icon, category, title, excerpt }: PostCardProps) {
  return (
    <div className="overflow-hidden border-[0.5px] border-line bg-surface transition-[box-shadow] duration-200 hover:[box-shadow:0_8px_32px_rgba(0,0,0,0.1)]">
      <div className="relative flex h-45 items-center justify-center overflow-hidden bg-surface-inverse-raised after:absolute after:right-0 after:bottom-0 after:left-0 after:h-0.75 after:bg-brand after:content-['']">
        <Icon name={icon} className="h-12 w-12 fill-[rgba(240,125,26,0.3)]" />
      </div>
      <div className="p-6">
        <div className="mb-2 text-10 font-semibold tracking-md text-brand uppercase">{category}</div>
        <div className="mb-2.5 font-display text-19 leading-[1.2] font-bold text-ink-strong uppercase">
          <a href="#" className="transition-[color] duration-200 hover:text-brand">
            {title}
          </a>
        </div>
        <div className="mb-4 text-13 leading-[1.7] text-ink-muted">{excerpt}</div>
        <div className="flex items-center justify-between">
          <span className="text-11 text-ink-muted">{upcomingPostLabels.date}</span>
          <span className="font-display text-12 font-semibold tracking-xs text-brand uppercase">
            {upcomingPostLabels.read}
          </span>
        </div>
      </div>
    </div>
  );
}
