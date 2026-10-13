import { Button } from "~/components/ui/Button";
import type { ArticleFrontmatter } from "~/content/blog";

type ArticleSidebarProps = Pick<ArticleFrontmatter, "sidebar" | "relatedHeading" | "related">;

/** Stays in view beside the article. The related titles link to `#`, as in the original. */
export function ArticleSidebar({ sidebar, relatedHeading, related }: ArticleSidebarProps) {
  return (
    <aside className="sticky top-22.5 upto-900:static">
      <div className="mb-5 bg-surface-inverse p-7">
        <h3 className="mb-2.5 font-display text-18 font-bold text-ink-inverse uppercase">
          {sidebar.heading}
        </h3>
        <p className="mb-5 text-13 leading-[1.6] text-ink-inverse-muted">{sidebar.text}</p>
        <Button to={sidebar.action.to} variant="primary" block>
          {sidebar.action.label}
        </Button>
      </div>
      <div>
        <h4 className="mb-4 border-b-2 border-b-brand pb-2.5 font-display text-14 font-bold tracking-xs text-ink-strong uppercase">
          {relatedHeading}
        </h4>
        {related.map((item) => (
          <div key={item.title} className="border-b border-b-line py-3 last:[border-bottom:none]">
            <a
              href="#"
              className="block text-14 leading-[1.4] text-ink-strong transition-[color] duration-200 hover:text-brand"
            >
              {item.title}
            </a>
            <span className="mt-0.75 block text-11 text-ink-muted">{item.category}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}
