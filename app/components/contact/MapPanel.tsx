import { Icon } from "~/components/ui/Icon";
import { contactMap } from "~/content/contact";
import { site } from "~/content/site";

/** A panel that links to the address on Google Maps. It is not an embedded map. */
export function MapPanel() {
  return (
    <div className="mt-9 flex h-75 flex-col items-center justify-center gap-3 border-t-3 border-t-brand bg-surface-inverse-raised">
      <Icon name="pin" className="h-10 w-10 fill-[rgba(240,125,26,0.4)]" />
      <p className="text-center text-14 text-ink-inverse-muted">{contactMap.text}</p>
      <a
        href={site.mapsUrl}
        target="_blank"
        className="font-display text-13 font-semibold tracking-xs text-brand uppercase"
      >
        {contactMap.linkLabel}
      </a>
    </div>
  );
}
