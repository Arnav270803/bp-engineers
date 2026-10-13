// How the elements of an article are styled. An article is written in MDX;
// each Markdown element is rendered through the matching entry here.
import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";

/** A highlighted note inside an article. Used in MDX as <InfoBox title="...">. */
export function InfoBox({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="my-7 border-l-3 border-l-brand bg-surface-muted px-6 py-5 [&_p]:mb-0 [&_p]:text-14">
      <div className="mb-2.5 font-display text-14 font-bold tracking-xs text-ink-strong uppercase">
        {title}
      </div>
      {children}
    </div>
  );
}

export const articleElements: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-10 mb-3.5 border-t-2 border-t-surface-muted pt-2.5 font-display text-26 font-bold text-ink-strong uppercase first:mt-0 first:[border-top:none]"
      {...props}
    />
  ),
  p: (props) => <p className="mb-4.5 text-15 leading-[1.9] text-ink-muted" {...props} />,
  ul: (props) => <ul className="mb-4.5 ml-5.5" {...props} />,
  ol: (props) => <ol className="mb-4.5 ml-5.5" {...props} />,
  li: (props) => <li className="mb-2 text-15 leading-[1.8] text-ink-muted" {...props} />,
  strong: (props) => <strong className="font-semibold text-ink" {...props} />,
  table: (props) => <table className="my-6 w-full border-collapse text-14" {...props} />,
  th: (props) => (
    <th
      className="bg-surface-inverse px-4 py-3 text-left font-display text-13 font-semibold tracking-xs text-ink-inverse uppercase"
      {...props}
    />
  ),
  td: (props) => (
    <td
      className="border-b border-b-line px-4 py-2.75 text-ink-muted [tr:nth-child(even)_&]:bg-surface-muted"
      {...props}
    />
  ),
  InfoBox,
};
