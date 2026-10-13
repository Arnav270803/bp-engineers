import { Button } from "~/components/ui/Button";
import { homeCta } from "~/content/home";

// The products page has a band that looks the same but differs in heading
// size, stacking and button behaviour. See products/CustomCta.
export function CtaBand() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-7.5 bg-brand px-gutter py-15 upto-768:flex-col upto-768:items-start">
      <div>
        <h2 className="font-display text-cta-title leading-[1.1] font-bold text-ink-inverse uppercase">
          {homeCta.title}
        </h2>
        <p className="mt-1.5 text-15 text-[rgba(255,255,255,0.8)]">{homeCta.text}</p>
      </div>
      <Button to={homeCta.action.to} variant="white">
        {homeCta.action.label}
      </Button>
    </div>
  );
}
