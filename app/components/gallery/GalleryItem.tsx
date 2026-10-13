import { Icon } from "~/components/ui/Icon";
import { galleryPlaceholderNote } from "~/content/gallery";
import type { IconName } from "~/content/icons";

interface GalleryItemProps {
  icon: IconName;
  name: string;
  title: string;
  category: string;
}

/** A placeholder tile. Its caption slides up when the tile is hovered. */
export function GalleryItem({ icon, name, title, category }: GalleryItemProps) {
  return (
    <div className="group relative aspect-[4/3] cursor-pointer overflow-hidden bg-surface-inverse-raised">
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 transition-[background] duration-300 group-hover:bg-surface-inverse-hover">
        <Icon name={icon} className="h-10 w-10 fill-[rgba(240,125,26,0.4)]" />
        <div className="px-5 text-center font-display text-13 font-semibold tracking-xs text-ink-inverse-muted uppercase">
          {name}
          <br />
          {galleryPlaceholderNote}
        </div>
      </div>
      <div className="absolute right-0 bottom-0 left-0 [transform:translateY(100%)] bg-[linear-gradient(transparent,rgba(11,27,46,0.9))] px-4 pt-5 pb-4 transition-[transform] duration-300 group-hover:[transform:translateY(0)]">
        <div className="font-display text-15 font-semibold text-ink-inverse uppercase">{title}</div>
        <div className="mt-0.75 text-11 tracking-xs text-brand">{category}</div>
      </div>
    </div>
  );
}
