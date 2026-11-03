// The shape of a serif section title: its words, then an accent in italics.

/**
 * Words before the accent, each entry on its own line. A line that ends in a
 * space runs on into the accent; otherwise the accent starts a new line.
 */
export interface SectionTitle {
  lines: string[];
  accent: string;
}
