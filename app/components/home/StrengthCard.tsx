export function StrengthCard({ value, title, text }: { value: string; title: string; text: string }) {
  return (
    <div className="border-t-3 border-t-brand bg-surface px-6 py-7">
      <div className="mb-2.5 font-display text-42 leading-[1] font-bold text-brand">{value}</div>
      <div className="mb-2 font-display text-17 font-semibold text-ink-strong uppercase">{title}</div>
      <div className="text-13 leading-[1.65] text-ink-muted">{text}</div>
    </div>
  );
}
