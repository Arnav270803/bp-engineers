# B.P. Engineers website

The B.P. Engineers website (bpfoundry.in) in React and TypeScript, rebuilt from an earlier static site and matching it exactly. Read [ARCHITECTURE.md](ARCHITECTURE.md) for the design before making changes.

## Where things are

- `app/` is the React application: `routes/` (one file per page), `components/`, `content/` (all text and lists), `lib/`, `app.css` (base rules and theme).
- `public/` holds files copied into the build as they are.
- `build/client/` is the production build. It is generated, not committed.
- `tests/` exists only on the developer's machine and is ignored by git. It is the suite that compares this site with the original static site, with its own `package.json` and README. The original site itself sits beside the project in `../public_html/` there and must never be edited.

## Commands

- `npm run dev` starts the development server at http://localhost:5173.
- `npm run build` builds into `build/client/`. `npm run preview` serves that build at http://127.0.0.1:4173.
- `npm run typecheck` and `npm run lint` check types, lint rules and formatting. `npm run format` fixes formatting.
- If `tests/` is present, run `npm test` inside it before every commit that touches `app/`. It rebuilds the site and compares it with the original.

## Rules

- Until the owner decides to change the design, the site must match the original exactly: structure, text, computed styles, geometry, pixels, links and behaviour.
- The oddities listed in ARCHITECTURE.md under "Kept from the original on purpose" are deliberate. Do not fix them without being asked.
- Keep one piece of text as one piece. Do not write `{a}{b}` or `text{" "}` where a single run of text is meant: join it into one expression or put it in a content file. Splitting it shifts the letters by a fraction of a pixel.
- Style with Tailwind classes. Colours, fonts, weights, type sizes, letter spacing and layout constants come from the theme in `app/app.css`. One-off measurements are written directly.
- Name colours by role (`brand`, `surface`, `ink`), never by hue.
- Use `upto-900:`, `upto-860:`, `upto-768:` and `upto-600:` for responsive rules. They are the site's four breakpoints.
- Do not load Tailwind's default reset or default theme.
- Do not use Tailwind's opacity modifiers (`bg-brand/15`) or gradient, shadow and transform utilities for existing values. Write the value in brackets instead. Those utilities produce different computed styles.
- Keep look-alike components separate unless their styles are identical.
- Use `AppLink` for links to pages of this site, a plain `<a>` for external links and for the placeholder `#` links.
- Do not add React Router's `<ScrollRestoration />`. Scrolling on page changes is handled in `app/lib/navigation.ts`.
- Do not use Motion or add any animation until asked.
- Do not add state libraries, UI kits or data-fetching libraries without asking.
- Contact details come from `app/content/site.ts`. Never hard-code phone numbers, the email address or WhatsApp links in components.
- The contact and quote forms post to the live Google script. Do not submit them while developing or testing.
- Update ARCHITECTURE.md when a decision in it changes.
