import { useRef, useState, type RefObject } from "react";
import { homeHero } from "~/content/home";
import { PillLink } from "./parts";

const smallCaps = "font-landing-sans text-11 leading-[18px] font-bold tracking-caps-wide uppercase";

/** Play and pause for the hero film. Shown only when there is a film. */
function FilmControl({ video }: { video: RefObject<HTMLVideoElement | null> }) {
  const [playing, setPlaying] = useState(true);
  function toggle() {
    const element = video.current;
    if (!element) return;
    if (element.paused) {
      void element.play();
      setPlaying(true);
    } else {
      element.pause();
      setPlaying(false);
    }
  }
  return (
    <div className="flex items-center justify-end gap-3.5 font-landing-sans text-9 leading-[1] font-bold tracking-caps-wide uppercase upto-768:justify-start">
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? homeHero.film.pause : homeHero.film.play}
        className="flex size-7.5 cursor-pointer items-center justify-center rounded-full border border-[rgba(238,239,230,0.55)] bg-transparent text-landing-on-dark"
      >
        <svg width="8" height="9" viewBox="0 0 8 9" className="fill-current" aria-hidden="true">
          {playing ? <path d="M0 0H2.5V9H0ZM5.5 0H8V9H5.5Z" /> : <path d="M0 0L8 4.5L0 9Z" />}
        </svg>
      </button>
      <span>{homeHero.film.label}</span>
      <span className="h-px w-11 bg-[rgba(238,239,230,0.55)]"></span>
      <span>{homeHero.film.sound}</span>
    </div>
  );
}

/** The opening screen: the photo (or film), the title and the way into the products. */
export function HomeHero() {
  const video = useRef<HTMLVideoElement>(null);
  return (
    <section className="relative flex min-h-[max(640px,100svh)] flex-col overflow-hidden bg-landing-dark text-landing-on-dark">
      {homeHero.video ? (
        <video
          ref={video}
          className="absolute inset-0 h-full w-full object-cover"
          src={homeHero.video}
          poster={homeHero.image}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <img src={homeHero.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      )}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,14,11,0.42)_0%,rgba(9,14,11,0.08)_32%,rgba(9,14,11,0.12)_62%,rgba(9,14,11,0.55)_100%)]"></div>

      <div className="relative flex flex-1 flex-col px-landing-gutter pt-50 pb-10.5 upto-900:pt-36">
        <div className="flex items-start justify-between gap-6">
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

        <h1 className="mt-auto pt-16 font-landing-sans font-normal uppercase">
          <span className="block text-landing-hero leading-[0.84] tracking-display">{homeHero.title}</span>
          <span className="mt-3 block text-landing-hero-sub leading-[1.1] tracking-[-0.01em]">
            {homeHero.subtitle}
          </span>
        </h1>

        <div className="mt-23 grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-6 upto-768:mt-14 upto-768:grid-cols-[minmax(0,1fr)] upto-768:justify-items-start upto-768:gap-7">
          <p className="font-landing-sans text-14 leading-[21px]">
            {homeHero.lines[0]}
            <br />
            {homeHero.lines[1]}
          </p>
          <PillLink to={homeHero.action.to} tone="action">
            {homeHero.action.label}
          </PillLink>
          {homeHero.video ? <FilmControl video={video} /> : <span></span>}
        </div>
      </div>
    </section>
  );
}
