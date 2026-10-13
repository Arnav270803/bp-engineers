import type { ReactNode } from "react";

// The contact form sits on a dark panel and the quote form on a light one.
// They look alike but differ in label size, spacing and colours, so each tone
// carries its own exact values.
export type FieldTone = "dark" | "light";

const wrapper: Record<FieldTone, string> = {
  dark: "mb-3.5 flex flex-col gap-1.5",
  light: "mb-4 flex flex-col gap-1.5",
};

const labelText: Record<FieldTone, string> = {
  dark: "text-10 font-semibold tracking-md text-ink-inverse-muted uppercase",
  light: "text-11 font-semibold tracking-sm text-ink-muted uppercase",
};

/** Classes for an <input>, <select> or <textarea>. */
export const fieldControl: Record<FieldTone, string> = {
  dark: "w-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.06)] px-3.5 py-2.75 font-body text-14 text-ink-inverse transition-[border-color] duration-200 [outline:none] focus:border-brand",
  light:
    "w-full border border-line bg-surface-muted px-3.5 py-2.75 font-body text-14 text-ink transition-[border-color] duration-200 [outline:none] focus:border-brand focus:bg-surface",
};

/** Extra classes for a <textarea>. */
export const fieldTextarea: Record<FieldTone, string> = {
  dark: "h-25 resize-none",
  light: "h-25 resize-y",
};

/** Extra classes for a <select>. */
export const fieldSelect: Record<FieldTone, string> = {
  dark: "[&_option]:bg-surface-inverse-raised [&_option]:text-ink-inverse",
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
