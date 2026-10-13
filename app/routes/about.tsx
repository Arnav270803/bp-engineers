import type { Route } from "./+types/about";
import { CapabilityCard } from "~/components/about/CapabilityCard";
import { ProfilePanel } from "~/components/about/ProfilePanel";
import { Timeline } from "~/components/about/Timeline";
import { ValueCard } from "~/components/about/ValueCard";
import { PageHero } from "~/components/layout/PageHero";
import { Section } from "~/components/ui/Section";
import { SectionHeader } from "~/components/ui/SectionHeader";
import { aboutHero, aboutMeta, capabilities, story, timeline, values } from "~/content/about";

export const meta: Route.MetaFunction = () => [
  { title: aboutMeta.title },
  { name: "description", content: aboutMeta.description },
];

const paragraph = "mb-4.5 text-15 leading-[1.85] text-ink-muted";

export default function About() {
  return (
    <>
      <PageHero {...aboutHero} />

      <Section>
        <div className="grid grid-cols-[1fr_1fr] items-center gap-17.5 upto-860:grid-cols-[1fr]">
          <ProfilePanel />
          <div>
            <SectionHeader label={story.label} title={story.title} />
            {story.opening.map((text) => (
              <p key={text} className={paragraph}>
                {text}
              </p>
            ))}
            <div className="my-7 border-l-3 border-l-brand bg-[rgba(240,125,26,0.05)] px-4.5 py-3 font-display text-17 leading-[1.5] font-medium text-ink-strong">
              {story.pullquote}
            </div>
            <p className={paragraph}>{story.closing}</p>
          </div>
        </div>
      </Section>

      <Section tone="light">
        <SectionHeader label={timeline.label} title={timeline.title} />
        <div className="mt-9 max-w-150">
          <Timeline />
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeader label={capabilities.label} title={capabilities.title} sub={capabilities.sub} onDark />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
          {capabilities.items.map((item) => (
            <CapabilityCard key={item.title} {...item} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader label={values.label} title={values.title} />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
          {values.items.map((item) => (
            <ValueCard key={item.title} {...item} />
          ))}
        </div>
      </Section>
    </>
  );
}
