# B.P. Engineers website

The B.P. Engineers website (bpfoundry.in) in React and TypeScript, rebuilt from an earlier static site and since redesigned with the owner's approval. Read [ARCHITECTURE.md](ARCHITECTURE.md) for the design before making changes.

## Where things are

- `app/` is the React application: `routes/` (one file per page), `components/` (`site/` holds the header, menu, footer and the pieces every page shares), `content/` (all text and lists), `lib/`, `app.css` (base rules and theme).
- `public/` holds files copied into the build as they are, including `.htaccess` (redirects and addresses on Hostinger).
- `build/client/` is the production build. It is generated, not committed.
- `.github/workflows/deploy.yml` builds the site on every push to `main` and publishes it to the `deploy` branch, which Hostinger serves on bpfoundry.in.
- `tests/` exists only on the developer's machine and is ignored by git. It is the suite that compared this site with the original static site, with its own `package.json` and README. The original site itself sits beside the project in `../public_html/` there and must never be edited.

## Commands

- `npm run dev` starts the development server at http://localhost:5173.
- `npm run build` builds into `build/client/`. `npm run preview` serves that build at http://127.0.0.1:4173.
- `npm run typecheck` and `npm run lint` check types, lint rules and formatting. `npm run format` fixes formatting.
- The `tests/` suite is retired since the redesign: its comparisons with the original fail by design. Check changes by building and looking at the pages instead, and compare the product pages with the build before the change, which must stay identical unless they are the change.

## Rules

- Every push to `main` goes live on bpfoundry.in. Push only when the change is meant to be published. Never edit or push to the `deploy` branch by hand.
- The site has the owner's approved design, described in ARCHITECTURE.md under "Design": every page has it except the product pages (`/products/<category>/<product>`, `content/product-pages/`, `components/product-page/`), which keep their own, described under "Product pages". Build new pages from the pieces in `components/site/`. Keep the words of the content files and the behaviour of links and forms unless asked to change them.
- The oddities listed in ARCHITECTURE.md under "Kept from the original on purpose" are deliberate. Do not fix them without being asked.
- Keep one piece of text as one piece. Do not write `{a}{b}` or `text{" "}` where a single run of text is meant: join it into one expression or put it in a content file. Splitting it shifts the letters by a fraction of a pixel.
- Style with Tailwind classes. Colours, fonts, weights, type sizes, letter spacing and layout constants come from the theme in `app/app.css`. One-off measurements are written directly.
- Name colours by role (`landing-surface`, `landing-ink`, `landing-action`), never by hue.
- Use `upto-900:`, `upto-860:`, `upto-768:` and `upto-600:` for responsive rules. They are the site's four breakpoints.
- Do not load Tailwind's default reset or default theme.
- Do not use Tailwind's opacity modifiers (`bg-landing-action/15`) or gradient, shadow and transform utilities for existing values. Write the value in brackets instead. Those utilities produce different computed styles.
- Keep look-alike components separate unless their styles are identical.
- Use `AppLink` for links to pages of this site, a plain `<a>` for external links and for the placeholder `#` links.
- Do not add React Router's `<ScrollRestoration />`. Scrolling on page changes is handled in `app/lib/navigation.ts`.
- Do not use Motion or add any animation until asked.
- Do not add state libraries, UI kits or data-fetching libraries without asking.
- Contact details come from `app/content/site.ts`. Never hard-code phone numbers, the email address or WhatsApp links in components.
- The contact and quote forms post to the live Google script. Do not submit them while developing or testing.
- Update ARCHITECTURE.md when a decision in it changes.
