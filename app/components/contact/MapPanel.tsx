import { ArrowUpRight } from "~/components/site/parts";
import { contactMap } from "~/content/contact";
import { site } from "~/content/site";

/** A panel that links to the address on Google Maps. It is not an embedded map. */
export function MapPanel() {
  return (
    <div className="mt-10 flex flex-wrap items-end justify-between gap-6 bg-landing-dark px-7 pt-8 pb-7 text-landing-on-dark">
      <p className="max-w-60 font-landing-serif text-24 leading-[1.2] tracking-[-0.01em] italic">
        {contactMap.text}
      </p>
      <a
        href={site.mapsUrl}
        target="_blank"
        className="flex items-center gap-2.5 border-b border-b-[rgba(238,239,230,0.4)] pb-2 font-landing-sans text-12 leading-[1] hover:border-b-landing-on-dark"
      >
        {contactMap.linkLabel}
        <ArrowUpRight className="h-3 w-3" />
      </a>
    </div>
  );
}
