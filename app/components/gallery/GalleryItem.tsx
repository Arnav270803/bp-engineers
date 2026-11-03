import { galleryPlaceholderNote, type GalleryTile } from "~/content/gallery";

/** A photo of the gallery with its title, or a panel saying the photo is coming. */
export function GalleryItem({ name, title, category, image, number }: GalleryTile & { number: string }) {
  return (
    <figure>
      <div className="relative aspect-[4/3] overflow-hidden bg-landing-surface-stone">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
            <span className="font-landing-serif text-26 leading-[1.1] text-landing-ink-muted italic">
              {name}
            </span>
            <span className="font-landing-sans text-8 leading-[1] tracking-caps-wide text-landing-ink-muted uppercase">
              {galleryPlaceholderNote}
            </span>
          </div>
        )}
        <span className="absolute top-4.5 left-4.5 bg-landing-surface px-2.5 py-1.5 font-landing-sans text-9 leading-[1] tracking-caps-wide text-landing-ink uppercase">
          {number}
        </span>
      </div>
      <figcaption className="mt-4 flex items-baseline justify-between gap-4">
        <span className="font-landing-sans text-17 leading-[1.25] tracking-[-0.01em]">{title}</span>
        <span className="shrink-0 text-right font-landing-sans text-8 leading-[1.4] tracking-caps-wide text-landing-ink-muted uppercase">
          {category}
        </span>
      </figcaption>
    </figure>
  );
}
