// Small pieces shared by the sections of the home page.
import { Fragment, type ReactNode } from "react";
import { AppLink } from "~/components/ui/AppLink";
import type { HomeTitle } from "~/content/home";
import { cx } from "~/lib/cx";

/** The diagonal arrow beside links and buttons. */
export function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={cx("shrink-0 stroke-current", className)}
      strokeWidth={1.2}
      aria-hidden="true"
    >
      <path d="M2 10L10 2M3.5 2H10V8.5" />
    </svg>
  );
}

/** The small capitals that open a section. */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cx(
        "font-landing-sans text-10 leading-[12px] font-bold tracking-caps-wide uppercase",
        className,
      )}
    >
      {children}
    </p>
  );
}

/**
 * A serif title: each line, then the accent in italics. A line that ends in a
 * space runs on into the accent; otherwise the accent starts a new line.
 */
export function TitleText({ title, accentClass }: { title: HomeTitle; accentClass: string }) {
  const last = title.lines[title.lines.length - 1] ?? "";
  return (
    <>
      {title.lines.map((line, index) => (
        <Fragment key={line}>
          {index > 0 && <br />}
          {line}
        </Fragment>
      ))}
      {!last.endsWith(" ") && <br />}
      <em className={accentClass}>{title.accent}</em>
    </>
  );
}

export type PillTone = "action" | "soft" | "dark" | "outline";

const pillTone: Record<PillTone, string> = {
  action: "bg-landing-action text-landing-ink hover:bg-landing-action-strong",
  soft: "bg-landing-action-soft text-landing-ink hover:bg-landing-action",
  dark: "bg-landing-dark-raised text-landing-on-dark hover:bg-landing-dark",
  outline:
    "border border-[rgba(238,239,230,0.45)] text-landing-on-dark hover:border-landing-on-dark hover:bg-[rgba(238,239,230,0.08)]",
};

/** A rounded button-like link with its label on the left and the arrow on the right. */
export function PillLink({
  to,
  tone,
  children,
  className,
}: {
  to: string;
  tone: PillTone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <AppLink
      to={to}
      className={cx(
        "inline-flex h-13.5 items-center justify-between gap-11 rounded-full px-5.5 font-landing-sans text-12 leading-[1]",
        pillTone[tone],
        className,
      )}
    >
      <span>{children}</span>
      <ArrowUpRight />
    </AppLink>
  );
}

/** A text link with a rule under it and the arrow at its far end. */
export function UnderlineLink({
  to,
  children,
  className,
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <AppLink
      to={to}
      className={cx(
        "flex items-center justify-between gap-8 border-b border-b-landing-line-strong pb-5 font-landing-sans text-12 leading-[1] text-landing-ink hover:border-b-landing-ink",
        className,
      )}
    >
      <span>{children}</span>
      <ArrowUpRight className="h-3.5 w-3.5" />
    </AppLink>
  );
}

/** Classes for a large serif section title. */
export const sectionTitle =
  "font-landing-serif text-landing-title leading-[1.02] font-normal tracking-headline";
