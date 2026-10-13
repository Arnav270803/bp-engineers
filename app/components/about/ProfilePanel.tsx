import { profile } from "~/content/about";

/** The dark panel with the offset outline that lists what the company does. */
export function ProfilePanel() {
  return (
    <div className="relative bg-surface-inverse p-11 before:pointer-events-none before:absolute before:-top-2.5 before:right-2.5 before:bottom-2.5 before:-left-2.5 before:z-0 before:border-2 before:border-brand before:content-['']">
      <div className="relative z-1">
        <div className="mb-3.5 text-10 font-semibold tracking-xl text-brand uppercase">{profile.eyebrow}</div>
        <div className="mb-5.5 font-display text-28 leading-[1.1] font-bold text-ink-inverse uppercase">
          {profile.heading}
        </div>
        <ul className="list-none">
          {profile.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 border-b border-b-[rgba(255,255,255,0.07)] py-2.25 text-13 leading-[1.5] text-ink-inverse-muted before:mt-1 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-[50%] before:bg-brand before:content-['']"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
