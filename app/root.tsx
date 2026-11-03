import { Fragment, useEffect, type ReactNode } from "react";
import { Links, Meta, Outlet, Scripts, isRouteErrorResponse, useMatches } from "react-router";
import type { Route } from "./+types/root";
import { AnimatedFavicon } from "~/components/layout/AnimatedFavicon";
import { NotFound } from "~/components/layout/NotFound";
import { WhatsAppButton } from "~/components/layout/WhatsAppButton";
import { PageHero } from "~/components/site/PageHero";
import { SiteFooter } from "~/components/site/SiteFooter";
import { SiteHeader } from "~/components/site/SiteHeader";
import { PillLink } from "~/components/site/parts";
import { pageErrorText } from "~/content/not-found";
import { site } from "~/content/site";
import { usesOwnFrame } from "~/lib/frame";
import { useDocumentScrolling, usePageInstance } from "~/lib/navigation";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  { rel: "stylesheet", href: site.fontsUrl },
];

const analyticsSnippet = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${site.analyticsId}');`;

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <Meta />
        <Links />
        <AnimatedFavicon />
        {/* Analytics loads in production builds only, so development and tests record no visits. */}
        {import.meta.env.PROD && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${site.analyticsId}`}></script>
            <script dangerouslySetInnerHTML={{ __html: analyticsSnippet }}></script>
          </>
        )}
      </head>
      <body>
        {children}
        {/* Scroll position on page changes is handled in lib/navigation.ts. */}
        <Scripts />
      </body>
    </html>
  );
}

/**
 * The parts every page shares, around the page itself: the header laid over
 * the page's dark opening, the footer and the WhatsApp button. The whole frame
 * is keyed by the page instance, so each page load starts fresh: menu closed,
 * tabs and forms reset.
 *
 * With `ownFrame`, the page draws its own header and footer (lib/frame.ts).
 */
function PageFrame({ children, ownFrame = false }: { children: ReactNode; ownFrame?: boolean }) {
  const instance = usePageInstance();
  useDocumentScrolling(instance);
  useEffect(() => {
    // Lets tests wait until React has taken over the page.
    document.documentElement.dataset.hydrated = "true";
  }, []);

  return (
    <Fragment key={instance}>
      {ownFrame ? (
        children
      ) : (
        <div className="bg-landing-surface font-landing-sans text-landing-ink">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <WhatsAppButton />
        </div>
      )}
    </Fragment>
  );
}

export default function App() {
  const ownFrame = usesOwnFrame(useMatches());
  return (
    <PageFrame ownFrame={ownFrame}>
      <Outlet />
    </PageFrame>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <PageFrame>
        <NotFound />
      </PageFrame>
    );
  }
  return (
    <PageFrame>
      <PageHero {...pageErrorText.hero} />
      <section className="bg-landing-surface px-landing-gutter py-16">
        <PillLink to={pageErrorText.action.to} tone="dark">
          {pageErrorText.action.label}
        </PillLink>
      </section>
    </PageFrame>
  );
}
