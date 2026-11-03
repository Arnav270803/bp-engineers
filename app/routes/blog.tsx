import type { Route } from "./+types/blog";
import { FeaturedPost } from "~/components/blog/FeaturedPost";
import { PostCard } from "~/components/blog/PostCard";
import { ClosingCta } from "~/components/site/ClosingCta";
import { PageHero } from "~/components/site/PageHero";
import { Eyebrow, TitleText, sectionTitle } from "~/components/site/parts";
import { blogHero, blogMeta, upcomingHeading, upcomingPosts } from "~/content/blog";

export const meta: Route.MetaFunction = () => [
  { title: blogMeta.title },
  { name: "description", content: blogMeta.description },
];

export default function Blog() {
  return (
    <>
      <PageHero {...blogHero} />
      <FeaturedPost />
      <section className="bg-landing-surface-light px-landing-gutter pt-16 pb-20 text-landing-ink">
        <Eyebrow>{upcomingHeading.eyebrow}</Eyebrow>
        <h2 className={`mt-6 ${sectionTitle}`}>
          <TitleText title={upcomingHeading.title} accentClass="text-landing-emphasis" />
        </h2>
        <div className="mt-12 grid grid-cols-[repeat(3,minmax(0,1fr))] gap-x-8 gap-y-14 upto-900:grid-cols-[repeat(2,minmax(0,1fr))] upto-600:grid-cols-[minmax(0,1fr)]">
          {upcomingPosts.map((post) => (
            <PostCard key={post.title} {...post} />
          ))}
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
