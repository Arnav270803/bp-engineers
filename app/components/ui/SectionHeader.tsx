import { cx } from "~/lib/cx";

interface SectionHeaderProps {
  label: string;
  title: string;
  sub?: string;
  /** Set inside a dark section. */
  onDark?: boolean;
}

/** The small label, title and optional intro that open a section. */
export function SectionHeader({ label, title, sub, onDark = false }: SectionHeaderProps) {
  return (
    <>
      <div className="mb-2.5 flex items-center gap-2.5">
        <div className="h-0.5 w-6 bg-brand"></div>
        <div className="text-11 font-semibold tracking-xl text-brand uppercase">{label}</div>
      </div>
      <div
        className={cx(
          "mb-3 font-display text-section-title leading-[1.05] font-bold uppercase",
          onDark ? "text-ink-inverse" : "text-ink-strong",
        )}
      >
        {title}
      </div>
      {sub !== undefined && (
        <div
          className={cx(
            "mb-11 max-w-140 text-15 leading-[1.8]",
            onDark ? "text-ink-inverse-muted" : "text-ink-muted",
          )}
        >
          {sub}
        </div>
      )}
    </>
  );
}
