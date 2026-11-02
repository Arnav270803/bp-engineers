import { useCallback, useEffect, useState } from "react";
import { AppLink } from "~/components/ui/AppLink";
import { homeHeader, homeMenu } from "~/content/home";
import { site } from "~/content/site";
import { PillLink } from "./parts";

/** "B.P." over "ENGINEERS", as drawn on the home page. */
export function HomeLogo({ lineClass = "text-landing-on-dark" }: { lineClass?: string }) {
  return (
    <span className="flex flex-col items-start">
      <span className="font-landing-sans text-30 leading-[1] font-bold tracking-[0]">
        {site.name.split(" ")[0]}
      </span>
      <span
        className={`mt-4.5 font-landing-sans text-9 leading-[1] font-bold tracking-caps-wider uppercase ${lineClass}`}
      >
        {homeHeader.logoLine}
      </span>
    </span>
  );
}

const menuButton =
  "inline-flex h-11.5 cursor-pointer items-center gap-5 rounded-full border border-[rgba(238,239,230,0.55)] bg-transparent px-4.5 font-landing-sans text-11 leading-[1] font-bold text-landing-on-dark hover:border-landing-on-dark";

function MenuIcon() {
  return (
    <svg width="11" height="9" viewBox="0 0 11 9" className="fill-current" aria-hidden="true">
      <rect width="11" height="1.2" />
      <rect y="3.9" width="11" height="1.2" />
      <rect y="7.8" width="11" height="1.2" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      className="stroke-current"
      strokeWidth={1.3}
      aria-hidden="true"
    >
      <path d="M1 1L9 9M9 1L1 9" />
    </svg>
  );
}

/** The menu over the whole window. It closes with its button or the Escape key. */
function HomeMenu({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={homeMenu.label}
      className="fixed inset-0 z-1000 flex flex-col overflow-y-auto bg-landing-dark px-landing-gutter pt-7.5 pb-10 text-landing-on-dark"
    >
      <div className="flex items-start justify-between">
        <AppLink to="/" aria-label={homeHeader.homeLink}>
          <HomeLogo lineClass="text-landing-on-dark-sign" />
        </AppLink>
        <button type="button" onClick={onClose} className={menuButton} autoFocus>
          {homeHeader.close}
          <CloseIcon />
        </button>
      </div>
      <nav className="mt-auto pt-16">
        {homeMenu.links.map((link, index) => (
          <AppLink
            key={link.to}
            to={link.to}
            className="flex items-baseline gap-6 border-b border-b-[rgba(238,239,230,0.14)] py-3.5 font-landing-serif text-landing-menu leading-[1.1] tracking-headline hover:text-landing-emphasis-on-dark"
          >
            <span className="w-7 shrink-0 font-landing-sans text-10 tracking-caps text-landing-on-dark-faint">
              {String(index + 1).padStart(2, "0")}
            </span>
            {link.label}
          </AppLink>
        ))}
      </nav>
      <div className="mt-10 flex flex-wrap gap-x-10 gap-y-3 font-landing-sans text-12 leading-[1.6] text-landing-on-dark-muted">
        <a href={site.phones[0].href} className="hover:text-landing-on-dark">
          {site.phones[0].label}
        </a>
        <a href={site.email.href} className="hover:text-landing-on-dark">
          {site.email.label}
        </a>
        <span>{`${site.address.street}, ${site.address.region}`}</span>
      </div>
    </div>
  );
}

/** The header laid over the top of the hero: logo, products, the quote button and the menu. */
export function HomeHeader() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-20 flex items-start justify-between px-landing-gutter pt-7.5 text-landing-on-dark">
        <AppLink to="/" aria-label={homeHeader.homeLink}>
          <HomeLogo />
        </AppLink>
        <div className="flex items-center gap-7.5 upto-600:gap-3">
          <AppLink
            to={homeHeader.products.to}
            className="font-landing-sans text-11 leading-[1] font-bold hover:text-landing-action-soft upto-768:hidden"
          >
            {homeHeader.products.label}
          </AppLink>
          <PillLink to={homeHeader.quote.to} tone="soft" className="upto-600:hidden">
            {homeHeader.quote.label}
          </PillLink>
          <button type="button" onClick={() => setOpen(true)} className={menuButton} aria-haspopup="dialog">
            {homeHeader.menu}
            <MenuIcon />
          </button>
        </div>
      </header>
      {open && <HomeMenu onClose={close} />}
    </>
  );
}
