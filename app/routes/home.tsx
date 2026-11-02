import type { Route } from "./+types/home";
import { CustomSection } from "~/components/home/CustomSection";
import { EquipmentSection } from "~/components/home/EquipmentSection";
import { HomeCta } from "~/components/home/HomeCta";
import { HomeFooter } from "~/components/home/HomeFooter";
import { HomeHeader } from "~/components/home/HomeHeader";
import { HomeHero } from "~/components/home/HomeHero";
import { IndustriesSection } from "~/components/home/IndustriesSection";
import { IntroSection } from "~/components/home/IntroSection";
import { KnowledgeSection } from "~/components/home/KnowledgeSection";
import { PeopleSection, ProcessSection } from "~/components/home/PeopleSection";
import { WhatsAppButton } from "~/components/layout/WhatsAppButton";
import { homeMeta } from "~/content/home";
import { site } from "~/content/site";
import type { FrameHandle } from "~/lib/frame";

// The home page has its own design, header and footer (ARCHITECTURE.md, "Home page").
export const handle: FrameHandle = { ownFrame: () => true };

export const links: Route.LinksFunction = () => [{ rel: "stylesheet", href: site.productFontsUrl }];

export const meta: Route.MetaFunction = () => [
  { title: homeMeta.title },
  { name: "description", content: homeMeta.description },
  { tagName: "link", rel: "canonical", href: site.canonicalUrl },
];

export default function Home() {
  return (
    <div className="bg-landing-surface font-landing-sans text-landing-ink">
      <HomeHeader />
      <main>
        <HomeHero />
        <IntroSection />
        <EquipmentSection />
        <PeopleSection />
        <ProcessSection />
        <CustomSection />
        <IndustriesSection />
        <KnowledgeSection />
        <HomeCta />
      </main>
      <HomeFooter />
      <WhatsAppButton />
    </div>
  );
}
