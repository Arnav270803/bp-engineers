import { Fragment } from "react";
import { Button } from "~/components/ui/Button";
import { hero } from "~/content/home";

export function Hero() {
  return (
    <section className="relative flex min-h-150 items-center overflow-hidden bg-surface-inverse px-gutter py-18">
      <svg
        className="pointer-events-none absolute inset-0"
        viewBox="0 0 1400 600"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="1400" height="600" fill="url(#grid)" />
        <line x1="650" y1="0" x2="650" y2="600" stroke="rgba(240,125,26,0.15)" strokeWidth="2" />
        <circle cx="900" cy="300" r="220" fill="none" stroke="rgba(240,125,26,0.06)" strokeWidth="1" />
        <circle cx="900" cy="300" r="340" fill="none" stroke="rgba(240,125,26,0.04)" strokeWidth="1" />
      </svg>
      <div className="relative z-2 max-w-155">
        <div className="mb-5.5 flex items-center gap-3">
          <div className="h-0.5 w-8 bg-brand"></div>
          <div className="text-11 font-semibold tracking-xl text-brand uppercase">{hero.eyebrow}</div>
        </div>
        <h1 className="mb-2.5 font-display text-hero leading-[1.0] font-bold text-ink-inverse uppercase">
          {hero.titleBefore}
          <span className="text-brand">{hero.titleAccent}</span>
          <br />
          {hero.titleSecondLine}
        </h1>
        <div className="mb-7 flex items-center gap-2.5 font-display text-tagline font-normal tracking-2xl text-ink-inverse-muted uppercase">
          {hero.tagline.map((word, index) => (
            <Fragment key={word}>
              {index > 0 && <div className="h-1 w-1 rounded-[50%] bg-brand"></div>}
              <span>{word}</span>
            </Fragment>
          ))}
        </div>
        <p className="mb-9 max-w-125 text-16 leading-[1.8] text-ink-inverse-muted">{hero.description}</p>
        <div className="flex flex-wrap gap-3.5">
          <Button to={hero.primaryAction.to} variant="primary">
            {hero.primaryAction.label}
          </Button>
          <Button to={hero.secondaryAction.to} variant="ghost-light">
            {hero.secondaryAction.label}
          </Button>
        </div>
        <div className="mt-13 flex flex-wrap gap-5 border-t border-t-[rgba(255,255,255,0.08)] pt-9">
          {hero.stats.map((stat) => (
            <div
              key={stat.label}
              className="mr-9 border-r border-r-[rgba(255,255,255,0.1)] pr-9 last:mr-0 last:pr-0 last:[border-right:none] upto-768:mr-0 upto-768:pr-0 upto-768:[border-right:none]"
            >
              <div className="font-display text-38 leading-[1] font-bold text-brand">{stat.value}</div>
              <div className="mt-1 text-11 tracking-sm text-ink-inverse-muted uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
