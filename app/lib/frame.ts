// Every page sits in the site's frame: the nav bar above it, the footer and
// WhatsApp button below. A route can draw its own frame instead by exporting
// a `handle` with `ownFrame`, as the product pages do.
import type { UIMatch } from "react-router";

export interface FrameHandle {
  /** True when this match draws its own header and footer. */
  ownFrame?: (match: UIMatch) => boolean;
}

export function usesOwnFrame(matches: UIMatch[]): boolean {
  return matches.some((match) => (match.handle as FrameHandle | undefined)?.ownFrame?.(match) === true);
}
