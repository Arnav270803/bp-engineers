import type { Route } from "./+types/blog";
import { FeaturedPost } from "~/components/blog/FeaturedPost";
import { PostCard } from "~/components/blog/PostCard";
import { PageHero } from "~/components/layout/PageHero";
import { Section } from "~/components/ui/Section";
import { blogHero, blogMeta, upcomingPosts } from "~/content/blog";

export const meta: Route.MetaFunction = () => [
  { title: blogMeta.title },
  { name: "description", content: blogMeta.description },
];

export default function Blog() {
  return (
    <>
      <PageHero {...blogHero} />
      <Section>
        <FeaturedPost />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6">
          {upcomingPosts.map((post) => (
            <PostCard key={post.title} {...post} />
          ))}
        </div>
      </Section>
    </>
  );
}
