import { useState } from "react";
import { useLocation } from "react-router";
import { AppLink } from "~/components/ui/AppLink";
import { mobileMenuLinks, navButton, navLinks } from "~/content/navigation";
import { site } from "~/content/site";
import { cx } from "~/lib/cx";
import { navSectionFor } from "~/lib/navigation";

const navLink =
  "relative text-12 font-medium tracking-sm uppercase transition-[color] duration-200 after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-brand after:transition-[width] after:duration-200 after:content-['']";
const navLinkIdle = "text-ink-inverse-muted after:w-0 hover:text-ink-inverse hover:after:w-full";
const navLinkActive = "text-brand after:w-full";

const mobileLink =
  "border-b border-b-[rgba(255,255,255,0.06)] py-2 text-14 font-medium tracking-sm uppercase last:[border-bottom:none]";

/** The nav bar and the mobile menu it opens. */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = navSectionFor(useLocation().pathname);

  return (
    <>
      <nav className="sticky top-0 z-200 flex h-nav items-center justify-between bg-surface-inverse px-gutter after:absolute after:right-0 after:bottom-0 after:left-0 after:h-0.5 after:bg-[linear-gradient(90deg,var(--color-brand),var(--color-brand-soft),var(--color-brand))] after:content-['']">
        <AppLink to="/" className="flex items-center gap-3">
          <svg className="h-11 w-11 shrink-0" viewBox="0 0 44 44" fill="none">
            <rect width="44" height="44" fill="#f07d1a" />
            <text
              x="22"
              y="30"
              fontFamily="Oswald,sans-serif"
              fontWeight="700"
              fontSize="20"
              fill="#fff"
              textAnchor="middle"
              letterSpacing="1"
            >
              BP
            </text>
            <rect x="6" y="36" width="32" height="2" fill="rgba(255,255,255,0.4)" />
          </svg>
          <div className="flex flex-col">
            <div className="font-display text-19 leading-[1.1] font-bold tracking-xs text-ink-inverse">
              {site.name}
            </div>
            <div className="mt-0.25 text-10 font-normal tracking-lg text-ink-inverse-muted uppercase">
              {site.tagline}
            </div>
          </div>
        </AppLink>
        <div className="flex items-center gap-6 upto-900:hidden">
          {navLinks.map((link) => (
            <AppLink
              key={link.to}
              to={link.to}
              className={cx(navLink, link.section === activeSection ? navLinkActive : navLinkIdle)}
            >
              {link.label}
            </AppLink>
          ))}
        </div>
        <AppLink
          to={navButton.to}
          className="cursor-pointer bg-brand px-6 py-2.5 font-display text-13 font-semibold tracking-sm whitespace-nowrap text-ink-inverse uppercase transition-[background] duration-200 hover:bg-brand-strong upto-900:hidden"
        >
          {navButton.label}
        </AppLink>
        <div
          className="hidden cursor-pointer flex-col gap-1.25 p-1 upto-900:flex"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="h-0.5 w-6 bg-ink-inverse transition-all duration-300"></span>
          <span className="h-0.5 w-6 bg-ink-inverse transition-all duration-300"></span>
          <span className="h-0.5 w-6 bg-ink-inverse transition-all duration-300"></span>
        </div>
      </nav>
      <div
        id="mobileMenu"
        className={cx(
          "fixed top-nav right-0 left-0 z-199 flex-col gap-4 border-b-2 border-b-brand bg-surface-inverse-raised px-gutter py-5",
          menuOpen ? "flex" : "hidden",
        )}
      >
        {mobileMenuLinks.map((link, index) => (
          <AppLink
            key={link.to}
            to={link.to}
            className={cx(
              mobileLink,
              index === mobileMenuLinks.length - 1 ? "text-brand" : "text-ink-inverse-muted",
            )}
          >
            {link.label}
          </AppLink>
        ))}
      </div>
    </>
  );
}
