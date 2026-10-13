import { tickerItems } from "~/content/navigation";

/** The scrolling strip of product names on the home page. */
export function Ticker() {
  // The list is rendered twice so the loop has no gap.
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="overflow-hidden bg-brand py-3" aria-hidden="true">
      <div className="flex animate-ticker whitespace-nowrap">
        {items.map((item, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-2.5 px-8 font-display text-13 font-semibold tracking-md text-ink-inverse uppercase"
          >
            {item}
            <span className="inline-block h-1 w-1 rounded-[50%] bg-[rgba(255,255,255,0.5)]"></span>
          </span>
        ))}
      </div>
    </div>
  );
}
