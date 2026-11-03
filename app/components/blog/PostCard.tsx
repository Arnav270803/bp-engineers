import { ArrowUpRight } from "~/components/site/parts";
import { upcomingPostLabels } from "~/content/blog";

interface PostCardProps {
  category: string;
  title: string;
  excerpt: string;
}

/** A card for an article that is announced but not written. Its title links to `#`. */
export function PostCard({ category, title, excerpt }: PostCardProps) {
  return (
    <article className="flex flex-col border-t border-t-landing-line-strong pt-6">
      <p className="font-landing-sans text-9 leading-[1] tracking-caps-wide text-landing-emphasis uppercase">
        {category}
      </p>
      <h3 className="mt-5 font-landing-serif text-24 leading-[1.18] font-normal tracking-[-0.015em]">
        <a href="#" className="hover:text-landing-emphasis">
          {title}
        </a>
      </h3>
      <p className="mt-4 font-landing-sans text-13 leading-[21px] text-landing-ink-muted">{excerpt}</p>
      <div className="mt-auto flex items-center justify-between gap-4 pt-7 font-landing-sans text-11 leading-[1]">
        <span className="text-9 tracking-caps-wide text-landing-ink-muted uppercase">
          {upcomingPostLabels.date}
        </span>
        <span className="flex items-center gap-2 text-landing-ink">
          {upcomingPostLabels.read}
          <ArrowUpRight className="h-3 w-3" />
        </span>
      </div>
    </article>
  );
}
