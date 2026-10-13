import { galleryFilters } from "~/content/gallery";
import { cx } from "~/lib/cx";

const filter =
  "cursor-pointer border px-5 py-2 font-display text-12 font-semibold tracking-sm uppercase transition-all duration-200";
const filterIdle =
  "border-line bg-transparent text-ink-muted hover:border-brand hover:bg-brand hover:text-ink-inverse";
const filterActive = "border-brand bg-brand text-ink-inverse";

/** The row of category buttons. They have no behaviour, as in the original. */
export function GalleryFilter() {
  return (
    <div className="mb-9 flex flex-wrap gap-2.5">
      {galleryFilters.map((name, index) => (
        <button key={name} className={cx(filter, index === 0 ? filterActive : filterIdle)}>
          {name}
        </button>
      ))}
    </div>
  );
}
