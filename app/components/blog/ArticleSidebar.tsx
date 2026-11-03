import { PillLink } from "~/components/site/parts";
import type { ArticleFrontmatter } from "~/content/blog";

type ArticleSidebarProps = Pick<ArticleFrontmatter, "sidebar" | "relatedHeading" | "related">;

/** Stays in view beside the article. The related titles link to `#`, as on the original site. */
export function ArticleSidebar({ sidebar, relatedHeading, related }: ArticleSidebarProps) {
  return (
    <aside className="sticky top-8 upto-900:static">
      <div className="bg-landing-dark px-7 pt-8 pb-7 text-landing-on-dark">
        <h3 className="font-landing-serif text-26 leading-[1.15] font-normal tracking-[-0.015em]">
          {sidebar.heading}
        </h3>
        <p className="mt-4 font-landing-sans text-13 leading-[21px] text-landing-on-dark-soft">
          {sidebar.text}
        </p>
        <PillLink to={sidebar.action.to} tone="action" className="mt-7 w-full">
          {sidebar.action.label}
        </PillLink>
      </div>
      <div className="mt-10">
        <h4 className="border-b border-b-landing-ink pb-3 font-landing-sans text-9 leading-[1.4] font-bold tracking-caps-wide text-landing-ink uppercase">
          {relatedHeading}
        </h4>
        {related.map((item) => (
          <div key={item.title} className="border-b border-b-landing-line py-4">
            <a
              href="#"
              className="block font-landing-sans text-14 leading-[1.4] text-landing-ink hover:text-landing-emphasis"
            >
              {item.title}
            </a>
            <span className="mt-1.5 block font-landing-sans text-9 leading-[1.4] tracking-caps-wide text-landing-ink-muted uppercase">
              {item.category}
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
}
