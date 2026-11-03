import type { Route } from "./+types/about";
import { CapabilitiesSection } from "~/components/about/CapabilitiesSection";
import { JourneySection } from "~/components/about/JourneySection";
import { ProfileSection } from "~/components/about/ProfileSection";
import { StorySection } from "~/components/about/StorySection";
import { ValuesSection } from "~/components/about/ValuesSection";
import { ClosingCta } from "~/components/site/ClosingCta";
import { PageHero } from "~/components/site/PageHero";
import { aboutHero, aboutMeta } from "~/content/about";

export const meta: Route.MetaFunction = () => [
  { title: aboutMeta.title },
  { name: "description", content: aboutMeta.description },
];

export default function About() {
  return (
    <>
      <PageHero {...aboutHero} />
      <StorySection />
      <JourneySection />
      <ProfileSection />
      <CapabilitiesSection />
      <ValuesSection />
      <ClosingCta />
    </>
  );
}
