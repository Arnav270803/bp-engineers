export function CapabilityCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="border-l-3 border-l-brand bg-surface-inverse-raised px-5 py-6">
      <div className="mb-2 font-display text-16 font-semibold text-ink-inverse uppercase">{title}</div>
      <div className="text-13 leading-[1.6] text-ink-inverse-muted">{text}</div>
    </div>
  );
}
