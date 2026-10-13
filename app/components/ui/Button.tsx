import type { ReactNode } from "react";
import { cx } from "~/lib/cx";
import { AppLink } from "./AppLink";

export type ButtonVariant = "primary" | "ghost" | "ghost-light" | "white";

const shared = "cursor-pointer font-display text-14 tracking-sm uppercase";

const variantClass: Record<ButtonVariant, string> = {
  primary:
    "bg-brand px-8.5 py-3.5 font-semibold text-ink-inverse transition-[background] duration-200 hover:bg-brand-strong",
  ghost:
    "border-2 border-ink-strong bg-transparent px-8.5 py-3.25 font-semibold text-ink-strong transition-all duration-200 hover:bg-surface-inverse hover:text-ink-inverse",
  "ghost-light":
    "border border-[rgba(255,255,255,0.25)] bg-transparent px-8.5 py-3.25 font-semibold text-ink-inverse transition-all duration-200 hover:border-brand hover:text-brand",
  white:
    "bg-surface px-8.5 py-3.5 font-bold whitespace-nowrap text-brand transition-all duration-200 hover:bg-surface-inverse hover:text-ink-inverse",
};

interface ButtonProps {
  to: string;
  variant: ButtonVariant;
  /** Fills the width of its container, with centred text. */
  block?: boolean;
  children: ReactNode;
}

/** A link styled as a button. Every button on the site leads to another page. */
export function Button({ to, variant, block = false, children }: ButtonProps) {
  return (
    <AppLink
      to={to}
      className={cx(shared, variantClass[variant], block ? "block w-full text-center" : "inline-block")}
    >
      {children}
    </AppLink>
  );
}
