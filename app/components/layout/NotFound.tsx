import { PageHero } from "~/components/site/PageHero";
import { PillLink } from "~/components/site/parts";
import { notFoundText } from "~/content/not-found";

/** Shown for an address that has no page. */
export function NotFound() {
  return (
    <>
      <PageHero {...notFoundText.hero} />
      <section className="bg-landing-surface px-landing-gutter py-16">
        <PillLink to={notFoundText.action.to} tone="dark">
          {notFoundText.action.label}
        </PillLink>
      </section>
    </>
  );
}
