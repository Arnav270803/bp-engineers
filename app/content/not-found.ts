// Text of the "page not found" screen and of the screen shown when a page fails.
import type { PageHeroContent } from "~/components/site/PageHero";
import { site } from "./site";

export const notFoundText: { hero: PageHeroContent; action: { label: string; to: string } } = {
  hero: {
    eyebrow: site.name,
    titleBefore: "Page ",
    titleAccent: "not found",
    lead: "The page you are looking for does not exist or has moved.",
  },
  action: { label: "Back to home", to: "/" },
};

export const pageErrorText: { hero: PageHeroContent; action: { label: string; to: string } } = {
  hero: {
    eyebrow: site.name,
    titleBefore: "Something ",
    titleAccent: "went wrong",
    lead: "An unexpected error occurred. Please try again.",
  },
  action: { label: "Back to home", to: "/" },
};
