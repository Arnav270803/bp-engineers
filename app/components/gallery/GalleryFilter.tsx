import { galleryFilters } from "~/content/gallery";
import { cx } from "~/lib/cx";

const filter =
  "h-10 cursor-pointer rounded-full border px-4.5 font-landing-sans text-11 leading-[1] font-bold whitespace-nowrap";
const filterIdle =
  "border-landing-line-strong bg-transparent text-landing-ink-muted hover:border-landing-ink hover:text-landing-ink";
const filterActive = "border-landing-dark bg-landing-dark text-landing-on-dark";

/** The row of category buttons. They have no behaviour, as on the original site. */
export function GalleryFilter() {
  return (
    <div className="flex flex-wrap gap-2.5">
      {galleryFilters.map((name, index) => (
        <button key={name} type="button" className={cx(filter, index === 0 ? filterActive : filterIdle)}>
          {name}
        </button>
      ))}
    </div>
  );
}
