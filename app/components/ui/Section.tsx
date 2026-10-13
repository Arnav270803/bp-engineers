import type { ReactNode } from "react";
import { cx } from "~/lib/cx";

export type SectionTone = "default" | "light" | "dark";

const toneClass: Record<SectionTone, string> = {
  default: "",
  light: "bg-surface-muted",
  dark: "bg-surface-inverse",
};

interface SectionProps {
  tone?: SectionTone;
  id?: string;
  children: ReactNode;
}

export function Section({ tone = "default", id, children }: SectionProps) {
  return (
    <section id={id} className={cx("px-gutter py-section", toneClass[tone])}>
      {children}
    </section>
  );
}
