import type { ProductPage } from "~/content/product-pages";

type Point = NonNullable<ProductPage["overview"]["points"]>[number];

/** Numbered points, each a short heading and its explanation. */
export function PointList({ points }: { points: Point[] }) {
  return (
    <div className="mt-11.5 border-t border-t-editorial-ink">
      {points.map((point, index) => (
        <div
          key={point.label}
          className="grid grid-cols-[64px_minmax(0,0.8fr)_minmax(0,1.4fr)] gap-x-7.5 border-b border-b-editorial-line pt-6 pb-7 upto-900:grid-cols-[minmax(0,1fr)] upto-900:gap-y-2"
        >
          <span className="pt-1.5 text-15 leading-[1] text-editorial-faint">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-21 leading-[1.3] font-normal tracking-snug">{point.label}</h3>
          <p className="text-17 leading-[1.65] text-editorial-ink-soft">{point.text}</p>
        </div>
      ))}
    </div>
  );
}
