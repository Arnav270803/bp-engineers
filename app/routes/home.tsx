import type { Route } from "./+types/home";
import { CustomSection } from "~/components/home/CustomSection";
import { EquipmentSection } from "~/components/home/EquipmentSection";
import { HomeHero } from "~/components/home/HomeHero";
import { IndustriesSection } from "~/components/home/IndustriesSection";
import { IntroSection } from "~/components/home/IntroSection";
import { KnowledgeSection } from "~/components/home/KnowledgeSection";
import { PeopleSection, ProcessSection } from "~/components/home/PeopleSection";
import { ClosingCta } from "~/components/site/ClosingCta";
import { homeMeta } from "~/content/home";
import { site } from "~/content/site";

export const meta: Route.MetaFunction = () => [
  { title: homeMeta.title },
  { name: "description", content: homeMeta.description },
  { tagName: "link", rel: "canonical", href: site.canonicalUrl },
];

export default function Home() {
  return (
    <>
      <HomeHero />
      <IntroSection />
      <EquipmentSection />
      <PeopleSection />
      <ProcessSection />
      <CustomSection />
      <IndustriesSection />
      <KnowledgeSection />
      <ClosingCta />
    </>
  );
}
