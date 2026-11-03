import { UnderlineLink } from "~/components/site/parts";
import { featuredPost } from "~/content/blog";

/** The featured guide: its picture beside the title, the excerpt and the way in. */
export function FeaturedPost() {
  return (
    <section className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-start gap-x-11 gap-y-8 bg-landing-surface px-landing-gutter pt-16 pb-18 text-landing-ink upto-768:grid-cols-[minmax(0,1fr)]">
      <img
        src={featuredPost.image}
        alt={featuredPost.topic}
        className="aspect-[549/280] w-full object-cover"
      />
      <div className="pt-6.5 upto-768:pt-0">
        <p className="font-landing-sans text-8 leading-[1] tracking-caps-wide text-landing-ink-muted uppercase">
          {featuredPost.category}
          <span className="mx-3">/</span>
          {featuredPost.topic}
        </p>
        <h2 className="mt-6.5 max-w-130 font-landing-serif text-landing-subtitle leading-[1.12] font-normal tracking-[-0.015em]">
          {featuredPost.title}
        </h2>
        <p className="mt-6 max-w-110 font-landing-sans text-13 leading-[22px] text-landing-ink-muted">
          {featuredPost.excerpt}
        </p>
        <UnderlineLink to={featuredPost.action.to} className="mt-10 w-44">
          {featuredPost.action.label}
        </UnderlineLink>
      </div>
    </section>
  );
}
