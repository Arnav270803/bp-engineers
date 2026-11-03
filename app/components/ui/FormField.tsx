import type { ReactNode } from "react";

// The contact form sits on the dark band and the quote form on a light panel.
// Each tone carries its own colours; the shapes are the same.
export type FieldTone = "dark" | "light";

const wrapper: Record<FieldTone, string> = {
  dark: "mb-4 flex flex-col gap-2",
  light: "mb-5 flex flex-col gap-2",
};

const labelText: Record<FieldTone, string> = {
  dark: "font-landing-sans text-9 leading-[1.4] font-bold tracking-caps-wide text-landing-on-dark-muted uppercase",
  light:
    "font-landing-sans text-9 leading-[1.4] font-bold tracking-caps-wide text-landing-ink-muted uppercase",
};

/** Classes for an <input>, <select> or <textarea>. */
export const fieldControl: Record<FieldTone, string> = {
  dark: "w-full border border-[rgba(238,239,230,0.18)] bg-[rgba(238,239,230,0.05)] px-4 py-3 font-landing-sans text-14 text-landing-on-dark [outline:none] placeholder:text-[rgba(238,239,230,0.38)] focus:border-landing-action",
  light:
    "w-full border border-landing-line-strong bg-landing-surface-light px-4 py-3 font-landing-sans text-14 text-landing-ink [outline:none] placeholder:text-landing-ink-muted focus:border-landing-ink",
};

/** Extra classes for a <textarea>. */
export const fieldTextarea: Record<FieldTone, string> = {
  dark: "h-28 resize-none",
  light: "h-28 resize-y",
};

/** Extra classes for a <select>. */
export const fieldSelect: Record<FieldTone, string> = {
  dark: "[&_option]:bg-landing-dark [&_option]:text-landing-on-dark",
  light: "",
};

interface FormFieldProps {
  tone: FieldTone;
  label: string;
  children: ReactNode;
}

/** A label above its control. */
export function FormField({ tone, label, children }: FormFieldProps) {
  return (
    <div className={wrapper[tone]}>
      <label className={labelText[tone]}>{label}</label>
      {children}
    </div>
  );
}
