import { PageHero } from "~/components/layout/PageHero";
import { Button } from "~/components/ui/Button";
import { Section } from "~/components/ui/Section";
import { site } from "~/content/site";

/** Shown for an address that has no page. The original site had no such page of its own. */
export function NotFound() {
  return (
    <>
      <PageHero
        eyebrow={site.name}
        titleBefore="Page "
        titleAccent="Not Found"
        lead="The page you are looking for does not exist or has moved."
      />
      <Section>
        <Button to="/" variant="ghost">
          Back to Home
        </Button>
      </Section>
    </>
  );
}
