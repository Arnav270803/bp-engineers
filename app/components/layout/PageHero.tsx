export interface PageHeroContent {
  eyebrow: string;
  /** The title is written in three parts; the middle one takes the brand colour. */
  titleBefore: string;
  titleAccent: string;
  titleAfter?: string;
  lead: string;
}

/** The dark banner that opens every page except the home page. */
export function PageHero({ eyebrow, titleBefore, titleAccent, titleAfter = "", lead }: PageHeroContent) {
  return (
    <div className="relative overflow-hidden bg-surface-inverse px-gutter py-15 before:absolute before:inset-0 before:bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.01)_0,rgba(255,255,255,0.01)_1px,transparent_1px,transparent_40px)] before:content-['']">
      <div className="relative z-1 max-w-175">
        <div className="mb-3.5 flex items-center gap-2.5">
          <div className="h-0.5 w-6 bg-brand"></div>
          <div className="text-11 font-semibold tracking-xl text-brand uppercase">{eyebrow}</div>
        </div>
        <h1 className="mb-3.5 font-display text-page-title leading-[1.0] font-bold text-ink-inverse uppercase">
          {titleBefore}
          <span className="text-brand">{titleAccent}</span>
          {titleAfter}
        </h1>
        <p className="max-w-130 text-16 leading-[1.8] text-ink-inverse-muted">{lead}</p>
      </div>
    </div>
  );
}
