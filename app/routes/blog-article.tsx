import type { MDXContent } from "mdx/types";
import type { Route } from "./+types/blog-article";
import { ArticleSidebar } from "~/components/blog/ArticleSidebar";
import { articleElements } from "~/components/blog/article-elements";
import { NotFound } from "~/components/layout/NotFound";
import { PageHero } from "~/components/layout/PageHero";
import { Section } from "~/components/ui/Section";
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
      <Section>
        <div className="grid grid-cols-[1fr_300px] [align-items:start] gap-15 upto-900:grid-cols-[1fr]">
          <article>
            <div className="mb-8 flex flex-wrap items-center gap-5 border-b border-b-line pb-7">
              <span className="bg-brand px-3 py-1 text-11 font-semibold tracking-sm text-ink-inverse uppercase">
                {frontmatter.category}
              </span>
              {frontmatter.byline.map((line) => (
                <span key={line} className="text-13 text-ink-muted">
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
        </div>
      </Section>
    </>
  );
}
