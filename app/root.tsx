import { Fragment, useEffect, type ReactNode } from "react";
import { Links, Meta, Outlet, Scripts, isRouteErrorResponse } from "react-router";
import type { Route } from "./+types/root";
import { Footer } from "~/components/layout/Footer";
import { Header } from "~/components/layout/Header";
import { NotFound } from "~/components/layout/NotFound";
import { PageHero } from "~/components/layout/PageHero";
import { WhatsAppButton } from "~/components/layout/WhatsAppButton";
import { Button } from "~/components/ui/Button";
import { Section } from "~/components/ui/Section";
import { site } from "~/content/site";
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
 * The parts every page shares, around the page itself. The whole frame is
 * keyed by the page instance, so each page load starts fresh: menu closed,
 * tabs and forms reset, ticker restarted.
 *
 * The wrapper elements and their ids are kept from the original. The nav is
 * styled to stick to the top of the window, but its wrapper is only as tall as
 * the nav, so it scrolls away with the page. That is how the original behaves.
 */
function PageFrame({ children }: { children: ReactNode }) {
  const instance = usePageInstance();
  useDocumentScrolling(instance);
  useEffect(() => {
    // Lets the comparison suite wait until React has taken over the page.
    document.documentElement.dataset.hydrated = "true";
  }, []);

  return (
    <Fragment key={instance}>
      <div id="nav-placeholder">
        <Header />
      </div>
      {children}
      <div id="footer-placeholder">
        <Footer />
        <WhatsAppButton />
      </div>
    </Fragment>
  );
}

export default function App() {
  return (
    <PageFrame>
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
      <PageHero
        eyebrow={site.name}
        titleBefore="Something "
        titleAccent="Went Wrong"
        lead="An unexpected error occurred. Please try again."
      />
      <Section>
        <Button to="/" variant="ghost">
          Back to Home
        </Button>
      </Section>
    </PageFrame>
  );
}
