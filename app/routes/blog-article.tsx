import type { MDXContent } from "mdx/types";
import type { Route } from "./+types/blog-article";
import { ArticleSidebar } from "~/components/blog/ArticleSidebar";
import { articleElements } from "~/components/blog/article-elements";
import { NotFound } from "~/components/layout/NotFound";
import { ClosingCta } from "~/components/site/ClosingCta";
import { PageHero } from "~/components/site/PageHero";
import type { ArticleFrontmatter } from "~/content/blog";

interface ArticleModule {
  default: MDXContent;
  frontmatter: ArticleFrontmatter;
}

// Every MDX file in content/blog is an article; its file name is its address.
const articles = import.meta.glob<ArticleModule>("../content/blog/*.mdx", { eager: true });

function findArticle(slug: string | undefined): ArticleModule | undefined {
  return articles[`../content/blog/${slug}.mdx`];
}

export const meta: Route.MetaFunction = ({ params }) => {
  const article = findArticle(params.slug);
  if (!article) return [{ title: "Page Not Found" }];
  return [
    { title: article.frontmatter.metaTitle },
    { name: "description", content: article.frontmatter.metaDescription },
  ];
};

export default function BlogArticle({ params }: Route.ComponentProps) {
  const article = findArticle(params.slug);
  if (!article) return <NotFound />;

  const { default: Content, frontmatter } = article;
  return (
    <>
      <PageHero {...frontmatter.hero} />
      <section className="grid grid-cols-[minmax(0,1fr)_300px] items-start gap-x-20 gap-y-14 bg-landing-surface px-landing-gutter pt-14 pb-20 text-landing-ink upto-900:grid-cols-[minmax(0,1fr)]">
        <article className="max-w-180">
          <div className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-b-landing-line pb-7 font-landing-sans text-9 leading-[1.4] tracking-caps-wide uppercase">
            <span className="rounded-full bg-landing-dark px-3 py-1.5 font-bold text-landing-on-dark">
              {frontmatter.category}
            </span>
            {frontmatter.byline.map((line) => (
              <span key={line} className="text-landing-ink-muted">
                {line}
              </span>
            ))}
          </div>
          <Content components={articleElements} />
        </article>
        <ArticleSidebar
          sidebar={frontmatter.sidebar}
          relatedHeading={frontmatter.relatedHeading}
          related={frontmatter.related}
        />
      </section>
      <ClosingCta />
    </>
  );
}
