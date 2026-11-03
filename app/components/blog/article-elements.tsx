// How the elements of an article are styled, in the site's design. An article is
// written in MDX; each Markdown element is rendered through the matching entry here.
import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";

/** A highlighted note inside an article. Used in MDX as <InfoBox title="...">. */
export function InfoBox({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="my-9 border-l-2 border-l-landing-action bg-landing-surface-stone px-7 py-6 [&_p]:mb-0 [&_p]:text-14 [&_p]:text-landing-ink">
      <div className="mb-3 font-landing-sans text-9 leading-[1.4] font-bold tracking-caps-wide text-landing-emphasis-warm uppercase">
        {title}
      </div>
      {children}
    </div>
  );
}

export const articleElements: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-14 mb-5 border-t border-t-landing-line-strong pt-8 font-landing-serif text-32 leading-[1.15] font-normal tracking-[-0.015em] text-landing-ink first:mt-0 first:border-t-0 first:pt-0"
      {...props}
    />
  ),
  p: (props) => (
    <p className="mb-5 font-landing-sans text-15 leading-[1.85] text-landing-ink-muted" {...props} />
  ),
  ul: (props) => <ul className="mb-5 ml-5.5" {...props} />,
  ol: (props) => <ol className="mb-5 ml-5.5" {...props} />,
  li: (props) => (
    <li className="mb-2 font-landing-sans text-15 leading-[1.8] text-landing-ink-muted" {...props} />
  ),
  strong: (props) => <strong className="font-bold text-landing-ink" {...props} />,
  table: (props) => (
    <div className="my-8 overflow-x-auto">
      <table className="w-full border-collapse font-landing-sans text-14" {...props} />
    </div>
  ),
  th: (props) => (
    <th
      className="border-b border-b-landing-ink px-4 py-3 text-left text-9 leading-[1.4] font-bold tracking-caps-wide text-landing-ink uppercase first:pl-0"
      {...props}
    />
  ),
  td: (props) => (
    <td className="border-b border-b-landing-line px-4 py-3.5 text-landing-ink-muted first:pl-0" {...props} />
  ),
  InfoBox,
};
