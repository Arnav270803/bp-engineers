import { timeline } from "~/content/about";

export function Timeline() {
  return (
    <div className="relative pl-8 before:absolute before:top-0 before:bottom-0 before:left-0 before:w-0.5 before:bg-[linear-gradient(to_bottom,var(--color-brand),rgba(240,125,26,0.1))] before:content-['']">
      {timeline.entries.map((entry) => (
        <div
          key={entry.year}
          className="relative mb-9 before:absolute before:top-1 before:-left-9.25 before:h-2.5 before:w-2.5 before:rounded-[50%] before:bg-brand before:content-['']"
        >
          <div className="mb-1 font-display text-20 font-bold text-brand">{entry.year}</div>
          <div className="mb-1.5 font-display text-16 font-semibold text-ink-strong uppercase">
            {entry.title}
          </div>
          <div className="text-14 leading-[1.6] text-ink-muted">{entry.text}</div>
        </div>
      ))}
    </div>
  );
}
