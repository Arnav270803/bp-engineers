import { Button } from "~/components/ui/Button";
import { Icon } from "~/components/ui/Icon";
import { featuredPost } from "~/content/blog";

export function FeaturedPost() {
  return (
    <div className="mb-12 grid grid-cols-[1fr_1fr] gap-0 overflow-hidden bg-surface-inverse upto-768:grid-cols-[1fr]">
      <div className="flex min-h-75 items-center justify-center bg-surface-inverse-raised">
        <Icon name={featuredPost.icon} className="h-20 w-20 fill-[rgba(240,125,26,0.2)]" />
      </div>
      <div className="px-10 py-12">
        <div className="mb-3 text-10 font-semibold tracking-md text-brand uppercase">
          {featuredPost.category}
        </div>
        <div className="mb-4 font-display text-featured-title leading-[1.1] font-bold text-ink-inverse uppercase">
          {featuredPost.title}
        </div>
        <div className="mb-6 text-14 leading-[1.8] text-ink-inverse-muted">{featuredPost.excerpt}</div>
        <Button to={featuredPost.action.to} variant="ghost-light">
          {featuredPost.action.label}
        </Button>
      </div>
    </div>
  );
}
