import { useEffect, useRef, useState } from "react";
import { homeHero } from "~/content/home";
import { PillLink } from "./parts";

const smallCaps = "font-landing-sans text-11 leading-[18px] font-bold tracking-caps-wide uppercase";

/**
 * The factory film. It is upright, and always shown whole: it is never cropped,
 * and nothing in the hero is laid over it. It plays muted and on a loop once the
 * page is ready, unless the visitor asks for less motion; the control under it
 * pauses and plays it.
 */
function HeroFilm() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const element = video.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    element.muted = true;
    element.play().catch(() => setPlaying(false));
  }, []);

  function toggle() {
    const element = video.current;
    if (!element) return;
    if (element.paused) element.play().catch(() => setPlaying(false));
    else element.pause();
  }

  // Never taller than the screen, with room for the control under it.
  return (
    <div className="w-full max-w-[calc((100svh_-_76px)*0.5625)] self-end justify-self-end [grid-area:film] upto-600:justify-self-start">
      <video
        ref={video}
        className="block aspect-[9/16] h-auto w-full bg-landing-dark-raised object-contain"
        src={homeHero.video}
        poster={homeHero.poster}
        width={720}
        height={1280}
        muted
        loop
        playsInline
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <div className="mt-4 flex items-center gap-3.5 font-landing-sans text-9 leading-[1] font-bold tracking-caps-wide uppercase">
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? homeHero.film.pause : homeHero.film.play}
          className="flex size-7.5 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[rgba(238,239,230,0.55)] bg-transparent text-landing-on-dark hover:border-landing-on-dark"
        >
          <svg width="8" height="9" viewBox="0 0 8 9" className="fill-current" aria-hidden="true">
            {playing ? <path d="M0 0H2.5V9H0ZM5.5 0H8V9H5.5Z" /> : <path d="M0 0L8 4.5L0 9Z" />}
          </svg>
        </button>
        <span className="whitespace-nowrap">{homeHero.film.label}</span>
        <span className="h-px w-8 bg-[rgba(238,239,230,0.55)]"></span>
        <span className="whitespace-nowrap">{homeHero.film.sound}</span>
      </div>
    </div>
  );
}

/**
 * The opening screen: the title, the way into the products and the film.
 * Wide windows put the film in a column on the right, as tall as the screen
 * allows. Tablets put the title across the top and the film beside the
 * lines below it; phones stack everything, with the film under the title.
 */
export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-landing-dark-deep text-landing-on-dark">
      <div className="grid min-h-[max(640px,100svh)] grid-cols-[minmax(0,1fr)_min(40vw,calc((max(640px,100svh)_-_192px)*0.5625))] grid-rows-[auto_minmax(0,1fr)_auto] gap-x-landing-gutter px-landing-gutter pt-26 pb-10.5 [grid-template-areas:'top_film'_'title_film'_'bottom_film'] upto-900:grid-cols-[minmax(0,1fr)_46%] upto-900:gap-y-10 upto-900:[grid-template-areas:'top_top'_'title_title'_'bottom_film'] upto-600:grid-cols-[minmax(0,1fr)] upto-600:grid-rows-[auto_auto_auto_auto] upto-600:gap-y-7 upto-600:[grid-template-areas:'top'_'title'_'film'_'bottom']">
        <div className="flex items-start justify-between gap-6 [grid-area:top]">
          <p className={smallCaps}>
            {homeHero.eyebrow[0]}
            <br />
            {homeHero.eyebrow[1]}
          </p>
          <p className="text-right font-landing-sans text-10 leading-[16px] tracking-caps-wide uppercase">
            {homeHero.since[0]}
            <br />
            {homeHero.since[1]}
          </p>
        </div>

        <div className="@container self-end pt-16 [grid-area:title] upto-900:pt-0">
          <h1 className="font-landing-sans font-normal uppercase">
            <span className="block text-landing-hero leading-[0.84] tracking-display">{homeHero.title}</span>
            <span className="mt-3 block text-landing-hero-sub leading-[1.1] tracking-[-0.01em]">
              {homeHero.subtitle}
            </span>
          </h1>
        </div>

        <div className="mt-23 flex flex-wrap items-end justify-between gap-6 self-end [grid-area:bottom] upto-900:mt-0">
          <p className="font-landing-sans text-14 leading-[21px]">
            {homeHero.lines[0]}
            <br />
            {homeHero.lines[1]}
          </p>
          <PillLink to={homeHero.action.to} tone="action">
            {homeHero.action.label}
          </PillLink>
        </div>

        <HeroFilm />
      </div>
    </section>
  );
}
