// Text of the knowledge base listing, copied verbatim from the original.
// Articles themselves are the MDX files in content/blog/.
import type { PageHeroContent } from "~/components/layout/PageHero";
import type { IconName } from "./icons";

export const blogMeta = {
  title: "Knowledge Base — B.P. Engineers | Foundry Equipment Guides",
  description:
    "Foundry equipment guides, tips and industry knowledge from B.P. Engineers — 35 years of sand casting expertise shared freely.",
};

export const blogHero: PageHeroContent = {
  eyebrow: "35 Years of Foundry Knowledge",
  titleBefore: "Knowledge ",
  titleAccent: "Base",
  lead: "Guides, tips and industry insights from B.P. Engineers — helping foundry operators get more from their equipment.",
};

export const featuredPost: {
  icon: IconName;
  category: string;
  title: string;
  excerpt: string;
  action: { label: string; to: string };
} = {
  icon: "bars",
  category: "Featured Guide",
  title: "Complete Guide to Moulding Box Selection for Sand Casting",
  excerpt:
    "Choosing the right moulding box size, material, and pin configuration for your casting operation is critical. This guide covers everything foundry managers need to know — from green sand to no-bake applications.",
  action: { label: "Read the Guide →", to: "/blog/moulding-box-guide" },
};

export const upcomingPostLabels = { date: "Coming Soon", read: "Read More →" };

/** Articles announced but not written. Their titles link to `#`, as in the original. */
export const upcomingPosts: Array<{ icon: IconName; category: string; title: string; excerpt: string }> = [
  {
    icon: "clockFilled",
    category: "Pouring Ladles",
    title: "Why Your Pouring Ladle Lining is Cracking — 5 Common Causes",
    excerpt:
      "Premature refractory lining failure is one of the most common and costly problems in a foundry. Here are the five reasons it happens and how to prevent them.",
  },
  {
    icon: "funnel",
    category: "Sand Handling",
    title: "How to Calculate Conveyor Belt Length for Your Foundry Floor",
    excerpt:
      "A practical step-by-step guide to calculating the right conveyor dimensions for your sand reclamation system — including incline, speed, and load calculations.",
  },
  {
    icon: "ring",
    category: "Maintenance",
    title: "Conveyor Roller Maintenance — How to Double the Lifespan",
    excerpt:
      "Roller failure is the leading cause of conveyor downtime in sand handling systems. Simple maintenance practices that every foundry should follow.",
  },
  {
    icon: "chart",
    category: "Industry",
    title: "MS vs Cast Iron for Moulding Boxes — Which Lasts Longer?",
    excerpt:
      "The debate between mild steel and cast iron flasks has been ongoing in Indian foundries for decades. Here is what 35 years of experience tells us.",
  },
  {
    icon: "wrench",
    category: "Foundry Operations",
    title: "5 Signs Your Moulding Box Pins and Bushings Need Replacement",
    excerpt:
      "Worn pins and bushings cause misalignment, flash, and dimensional errors in castings. How to spot the warning signs before they affect your quality.",
  },
  {
    icon: "bolt",
    category: "Industry",
    title: "How India's Foundry Industry Has Changed in 35 Years",
    excerpt:
      "From manually rammed green sand to semi-automated moulding lines — a perspective on the transformation of Indian foundries from someone who has supplied them since 1990.",
  },
];

/** What every article file in content/blog/ exports as `frontmatter`. */
export interface ArticleFrontmatter {
  metaTitle: string;
  metaDescription: string;
  hero: PageHeroContent;
  category: string;
  byline: string[];
  sidebar: { heading: string; text: string; action: { label: string; to: string } };
  relatedHeading: string;
  related: Array<{ title: string; category: string }>;
}
