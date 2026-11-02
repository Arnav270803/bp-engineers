import { Fragment } from "react";
import { AppLink } from "~/components/ui/AppLink";
import { homeFooter, homeHeader } from "~/content/home";
import { site } from "~/content/site";
import { HomeLogo } from "./HomeHeader";
import { ArrowUpRight } from "./parts";

const heading =
  "mb-5 font-landing-sans text-9 leading-[1] tracking-caps-wide text-landing-on-dark-faint uppercase";
const item =
  "block font-landing-sans text-12 leading-[23px] text-landing-on-dark-muted hover:text-landing-on-dark";
const small = "font-landing-sans text-8 leading-[1] tracking-caps-wide uppercase";

function scrollToTop() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
}

/** The home page's footer: logo, links, address, contact and the closing line. */
export function HomeFooter() {
  return (
    <footer className="bg-landing-dark-deep px-landing-gutter pt-8 pb-5.5 text-landing-on-dark">
      <div className="grid grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1.28fr)_minmax(0,1.3fr)] gap-x-8 gap-y-10 upto-900:grid-cols-[repeat(2,minmax(0,1fr))] upto-600:grid-cols-[minmax(0,1fr)]">
        <div>
          <AppLink to="/" aria-label={homeHeader.homeLink}>
            <HomeLogo lineClass="text-landing-on-dark-sign" />
          </AppLink>
          <p className="mt-6 font-landing-sans text-12 leading-[20px] text-landing-on-dark-sign">
            {homeFooter.tagline.map((line, index) => (
              <Fragment key={line}>
                {index > 0 && <br />}
                {line}
              </Fragment>
            ))}
          </p>
        </div>
        <div>
          <h2 className={heading}>{homeFooter.explore.heading}</h2>
          {homeFooter.explore.links.map((link) => (
            <AppLink key={link.to} to={link.to} className={item}>
              {link.label}
            </AppLink>
          ))}
        </div>
        <div>
          <h2 className={heading}>{homeFooter.visit.heading}</h2>
          <p className="font-landing-sans text-12 leading-[20px] text-landing-on-dark-muted">
            {site.address.street}
            <br />
            {site.address.region}
          </p>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener"
            className={`mt-3 flex items-center gap-1.5 ${item}`}
          >
            {homeFooter.visit.map}
            <ArrowUpRight className="h-2.5 w-2.5" />
          </a>
        </div>
        <div>
          <h2 className={heading}>{homeFooter.talk.heading}</h2>
          <a href={site.phones[0].href} className={item}>
            {site.phones[0].label}
          </a>
          <a href={site.email.href} className={item}>
            {site.email.label}
          </a>
          <a
            href={site.whatsapp.href}
            target="_blank"
            rel="noopener"
            className={`flex items-center gap-1.5 ${item}`}
          >
            {homeFooter.talk.whatsapp}
            <ArrowUpRight className="h-2.5 w-2.5" />
          </a>
        </div>
      </div>

      <p className="mt-12 font-landing-sans text-landing-sign leading-[0.9] tracking-headline text-landing-on-dark-sign uppercase">
        {homeFooter.sign}
      </p>

      <div className="mt-9 grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-4 border-t border-t-landing-on-dark-line pt-5.5 text-landing-on-dark-muted upto-600:grid-cols-[minmax(0,1fr)]">
        <span className={small}>{homeFooter.copyright}</span>
        <span className={small}>{homeFooter.motto}</span>
        <button
          type="button"
          onClick={scrollToTop}
          className={`cursor-pointer justify-self-end border-0 bg-transparent text-landing-on-dark-muted hover:text-landing-on-dark upto-600:justify-self-start ${small}`}
        >
          {`${homeFooter.backToTop} ↑`}
        </button>
      </div>
    </footer>
  );
}
