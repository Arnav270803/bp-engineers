import { Button } from "~/components/ui/Button";
import { photosComingSoon } from "~/content/gallery";

export function PhotosComingSoon() {
  return (
    <div className="mt-0.5 border-2 border-dashed border-line-strong bg-surface-muted px-10 py-15 text-center">
      <h3 className="mb-3 font-display text-24 font-bold text-ink-strong uppercase">
        {photosComingSoon.title}
      </h3>
      <p className="mx-auto mb-6 max-w-115 text-15 leading-[1.7] text-ink-muted">{photosComingSoon.text}</p>
      <Button to={photosComingSoon.action.to} variant="primary">
        {photosComingSoon.action.label}
      </Button>
    </div>
  );
}
