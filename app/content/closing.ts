import type { SectionTitle } from "./titles";

// The closing call to ask for a quote, at the foot of the home page and the
// pages that end the same way.

export const closingCta = {
  eyebrow: "Your next build starts here",
  title: { lines: ["Let’s make"], accent: "it work." } satisfies SectionTitle,
  lines: [
    "Tell us what your foundry needs.",
    "Share your drawings, dimensions or quantities.",
    "We’ll help you take the next step.",
  ],
  action: { label: "Get a quote", to: "/quote" },
  callPrefix: "Or call ",
};
