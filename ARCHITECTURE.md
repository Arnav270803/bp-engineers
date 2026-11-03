# B.P. Engineers website: architecture

Last updated: 2026-11-03

This document describes how the B.P. Engineers website (bpfoundry.in) is built as a React application. The site was rebuilt from an earlier static site in plain HTML, CSS and JavaScript, matching its appearance and behaviour. The owner subsequently approved the animated foundry-pour browser-tab icon described below, five product pages with a design of their own (see [Product pages](#product-pages)) and a new design for the home page, which on 2026-11-03 was carried to every other page (see [Design](#design)).

## Goals

1. Rebuild the site in React and TypeScript without changing how it looks or behaves.
2. Structure it so the site can grow: many more pages, a later restyle, and possibly app features such as logins.

The first goal was met and checked automatically (see [Verification](#verification)). The restyle has since happened: the site now has the owner's approved design. The words of the original and the behaviour of its links and forms were kept.

## Stack

| Layer | Choice | Reason |
|---|---|---|
| Language | TypeScript, strict mode | Catches mistakes in component props and form data |
| Build | Vite | Fast dev server; produces static files |
| UI | React 19 | |
| Routing | React Router 7 in framework mode | Runs on Vite and pre-renders every page to HTML at build time. The same route files can later move to server rendering |
| Styling | Tailwind CSS v4 | One theme file holds the design values, so a restyle is a change in one place |
| Articles | MDX | An article is one file |
| Code quality | ESLint, Prettier | |

**Pre-rendering** means the build writes a complete HTML file for each page. Search engines and visitors receive real content immediately, and React takes over in the browser afterwards. No server-side code runs.

Deliberately left out: state libraries, UI kits, data-fetching libraries and CSS-in-JS. Motion is not installed: the design has no animations.

React Router 8 needs Node 22.22 or later. The project uses the latest 7.x, with version 8's behaviour already switched on in `react-router.config.ts`, so the upgrade is small.

## Project layout

```
package.json, tsconfig.json, vite.config.ts, react-router.config.ts
app/
  root.tsx                document shell, page frame
  routes.ts               route table
  routes/                 one file per page
  components/
    site/                 the site's frame and shared pieces: SiteHeader (with the menu),
                          SiteFooter, PageHero, ClosingCta, parts (titles, pills, links)
    layout/               WhatsAppButton, NotFound, AnimatedFavicon
    ui/                   AppLink, FormField, Icon
    home/ about/ products/ gallery/ blog/ contact/ quote/
                          the pieces that belong to one page
    product-page/         the pieces of the product pages, which share one design
  content/                text and lists as typed data, articles
    product-pages/        one file per product page, from the product page workbook
  lib/                    form requests, form memory, page-change handling, page frame
  assets/home/            the home page film and photos, some still placeholders
  assets/pages/           the owner's photos and film stills used on other pages
  app.css                 base rules, theme, Tailwind entry
public/                   files copied into the build as they are, including .htaccess
scripts/preview.mjs       serves the production build locally
.github/workflows/        deploy.yml: builds on every push to main and publishes the deploy branch
```

A piece of UI used by one page stays in that page's folder. It moves into `components/site/` when a second page needs it with identical styling, as the header, footer, page opening and closing call did. Pieces that only look alike stay separate: the form fields of the contact and quote forms have a tone each, and the product pages keep their own small parts, although they use the same two fonts as the rest of the site.

## Routes

| Address | Route file | Address on the original site |
|---|---|---|
| `/` | `routes/home.tsx` | `index.html` |
| `/about` | `routes/about.tsx` | `about.html` |
| `/products` | `routes/products.tsx` | `products.html` |
| `/products/casting-equipment/<product>` | `routes/product-page.tsx` (`/products/:category/:slug`) | None: new pages, see [Product pages](#product-pages) |
| `/gallery` | `routes/gallery.tsx` | `gallery.html` |
| `/blog` | `routes/blog.tsx` | `blog.html` |
| `/blog/moulding-box-guide` | `routes/blog-article.tsx` (`/blog/:slug`) | `blog-moulding-box-guide.html` |
| `/contact` | `routes/contact.tsx` | `contact.html` |
| `/quote` | `routes/quote.tsx` | `quote.html` |

The old `.html` addresses are redirected to the new ones with a 301 by `public/.htaccess` (see [Build and deploy](#build-and-deploy)).

## Styling

All styling is Tailwind classes. `app/app.css` holds three things.

**1. Base rules.** The original site's own reset (`*`, `html`, `body`, `a`), with the body's font and colours set to the site's design. Tailwind's default reset is not loaded, because it changes line height, list bullets, placeholder colour, `<small>` size and form-control fonts.

**2. The theme.** Tailwind's default theme is not loaded either, so only the site's own values exist.

| Kind | Theme values |
|---|---|
| The site's design | colours `landing-*`, fonts `font-landing-serif` (Gelasio) and `font-landing-sans` (Arimo), the fluid sizes `text-landing-*`, and `landing-gutter`, the side padding, which grows with the window from 20 to 80px. `text-landing-hero` and `-hero-sub` follow the width of the home page's title column (`cqi`) instead of the window. The prefix is historical: the design began as the home page's |
| Product pages | colours `editorial-*`, fonts `font-editorial-serif`, `-sans` and `-heavy`, the fluid sizes `text-editorial-*`, and `editorial-gutter` 64px. Only the product pages use them |
| Shared colours | `ink-inverse` (white), `whatsapp`, `danger` |
| Type sizes | `text-8` to `text-60` in pixels |
| Weights | `normal` 400, `bold` 700 |
| Letter spacing | in ems: `tracking-caps-*` for small capitals, `tracking-display`, `tracking-headline`, `tracking-figure`, `tracking-snug`, `tracking-logo` |
| Layout | the spacing unit is 4px |
| Motion | the browser's default easing; there are no animations |

The main colour roles of the site's design:

| Role | Value | Used for |
|---|---|---|
| `landing-surface` | `#eeeae1` | The cream of most sections |
| `landing-surface-light`, `-stone`, `-mist` | `#f6f3ea`, `#e2dfd0`, `#e3e4dc` | Lighter, stone and grey-green sections, the closing call |
| `landing-dark`, `-dark-deep` | `#14251f`, `#10211b` | The deep green: page openings, bands, the menu, the footer |
| `landing-band` | `#dfa76e` | The warm band: custom manufacturing, values |
| `landing-ink`, `-ink-muted` | `#21211a`, `#75746a` | Text and secondary text on light sections |
| `landing-on-dark`, `-on-dark-soft`, `-on-dark-muted` | `#eeefe6`, `#c8d0c6`, `#acbbb2` | Text on the deep green |
| `landing-emphasis`, `-emphasis-warm`, `-emphasis-on-dark` | `#797a6c`, `#74502a`, `#d9c19e` | The italic accents of titles |
| `landing-action`, `-action-soft`, `-action-strong` | `#e39950`, `#e6aa64`, `#d6823a` | The orange pills and their hover |
| `landing-line`, `-line-strong`, `-on-dark-line` | `#bebab1`, `#a19e95`, `#495a54` | Thin rules |

**3. Breakpoints.** Four variants reproduce the original `max-width` queries exactly: `upto-900:`, `upto-860:`, `upto-768:` and `upto-600:`.

**Rules**

- Colours, fonts, weights, type sizes, letter spacing and layout constants come from the theme.
- One-off measurements (a padding, a line-height ratio, a tinted colour with transparency) are written directly in the class.
- The `hover:` variant applies on every device, as the original's `:hover` rules do.

**Two things that are easy to break**

- **Semi-transparent colours keep their exact values.** A CSS minifier normally rewrites `rgba(240,125,26,0.1)` as 8-digit hex, which rounds the transparency to the nearest 1/255. Firefox keeps the finer value, so the rounding shows there as colours one step off. `vite.config.ts` tells the minifier to keep `rgba()`.
- **One piece of text stays one piece.** In JSX, `{a}{b}` and `text{" "}` each create two separate pieces of text where one is meant. The browser then spaces the letters slightly differently. Join the text into one expression, or keep it in a content file.

## Page changes

The original was eight separate documents. This site is one application, so `app/lib/navigation.ts` reproduces what a document load did:

- Moving to another page, or clicking a link to the page you are on, starts the page fresh: menus closed, tabs and forms reset. The whole page frame is keyed by a counter of "document loads" to get this.
- A page opened by a link appears at the top at once. A page reached with back or forward appears where it was left. Neither is animated, although the site sets `scroll-behavior: smooth`.
- A link that only changes the `#` part of the address is left to the browser, as it was in the original. `AppLink` does this for links to the page being viewed, and the placeholder `#` links are plain anchors.
- A form reached with back or forward has its typed values put back, as browsers do for a normal page. `app/lib/form-memory.ts` keeps them per history entry. A form opened by a link starts empty.

React Router's own scroll restoration is not used. It animated the jump to the top, and it scrolled to the top on `#` links whose target does not exist, which the original does not do.

**One known gap.** The original site sends no cache headers, so real browsers keep its pages in their back-forward cache. When that cache is used, Back returns a page exactly as it was left, including the open product tab and an open mobile menu. This site restores the scroll position and form values, and resets the rest.

## Product pages

Five product pages, one per product in the product page workbook: Moulding Boxes, Pallet Cars, Bushes, Matchplate & Moulding Pins and Closing Pins, at `/products/casting-equipment/<product>`. They are new pages, not part of the original, and the owner approved a design of their own for them: an editorial layout on warm paper, with dark ink, one rust accent and serif type. The rest of the site has the site's design (see [Design](#design)).

**Reaching them.** On the products page, the Moulding Boxes card and four new Casting Equipment cards (05 to 08) lead to the pages: the title link of such a card is stretched over the whole card, and its "Request a quote" link is raised above it so that it still goes to `/quote`. The home page's Moulding Boxes links lead to its page too. The pages link to each other through their related products and their footer. Back returns to the products page where it was left.

**Their own frame.** A product page has no nav bar: its header is the logo alone, leading to the home page, and it has a footer of its own. The route exports a `handle` with `ownFrame` (`lib/frame.ts`), and `root.tsx` then leaves out the site's header, footer and WhatsApp button; the page draws its own, and reuses `WhatsAppButton`. An address that names no product keeps the site's frame and shows "page not found".

**Content.** Each page is a typed data file in `content/product-pages/`, written from its sheet of the workbook. Obvious typos were corrected and the workbook's editing notes left out. Words shared by all pages are in `shared.ts`. `keepTogether` (in `keep-together.ts`) stops a line from breaking inside "0.1 mm", a range such as "45–60" or "B.P. Engineers". A page leaves out a chapter its sheet has nothing for, such as "Where they're used" for the pins, and the contents list and chapter numbers follow. Adding a product means adding a file and listing it in `index.ts`; `react-router.config.ts` reads the list to pre-render the pages, so `index.ts` and the files it imports use no `~/` imports.

**Design.**

- The theme values are prefixed `editorial-` (see [Styling](#styling)). Sizes reach their full value at a 1440px window and shrink with it; below 900px the layout is one column.
- The fonts are Gelasio, Arimo and Archivo Black from Google Fonts, loaded for every page by `root.tsx` (`site.fontsUrl`); Archivo Black is used by these pages only. Gelasio and Arimo have the measurements of Georgia and Arial, so the layout does not move while they load.
- There are no product photos yet, so the large figure at the top shows the product's line drawing (`ProductDrawing`). Setting `hero.image` in a page's file replaces it with a photo.
- The contents list and the round quote link stay in view beside the text, and the list marks the chapter being read. Their links scroll without adding a history entry. A `#` entry made by the browser carries no router state, so `lib/navigation.ts` files it under the same key as the first page of the visit, and Back would put that page at the wrong position; it would also have to step back through each `#` before leaving the page.
- No animation was added. Scrolling to a chapter is smooth, as `scroll-behavior: smooth` already makes every `#` link on the site.

**The quote form** sends the same eight fields as the site's other forms, to the same script, with the product's name in `product`, its details in `requirements` and `Product Page` as the source. The script cannot receive files, so the form asks for drawings by WhatsApp or email instead of uploading them.

## Design

On 2026-11-02 the owner approved a new design for the home page, given as five screenshots of a finished page: cream and stone sections, a deep green, an orange accent, serif headlines and large photos. On 2026-11-03 the owner asked for it on every other page too. Every page now has it, except the product pages, which keep their own.

**The frame.** `root.tsx` puts every page between the site's header and footer, with the WhatsApp button (`PageFrame`). A route that exports a `handle` with `ownFrame` (`lib/frame.ts`) draws its own instead, as the product pages do.

- The header (`SiteHeader`) lies over the dark opening of each page: the logo, Products, Get a quote and a Menu button. At 768px and below it keeps only the logo, Get a quote and Menu, and at 600px and below only the logo and Menu.
- The menu covers the whole window, above the WhatsApp button, and closes with its button or the Escape key. It marks the page being viewed, or the section it belongs to, such as Knowledge for an article.
- The footer (`SiteFooter`) has the address, the first phone number, the email address and the WhatsApp link from `content/site.ts`, and a back-to-top button.

**The pieces.** They are in `components/site/` and used the same way on every page:

- `PageHero`: the dark opening of every page but the home page. Small capitals, a large serif title whose middle part is the accent in italics, and the lead beside it.
- Section titles are serif, their last words an accent in italics (`SectionTitle` in `content/titles.ts`, drawn by `TitleText`). A section opens with small capitals (`Eyebrow`).
- `PillLink` is the rounded button with the arrow; a form's submit button is drawn the same way (`pillClasses`). `UnderlineLink` is the text link with a rule under it.
- Lists, steps and cards sit under thin rules, numbered 01, 02 and so on. Bands of deep green, the warm band and the stone band break the cream sections.
- `ClosingCta`: "Let's make it work", the call to get a quote at the foot of the home, About, Knowledge and article pages.

**Words.** The content files keep the original's words. Titles, labels and buttons are in sentence case, as the design writes them, and a title is split into its words and its accent. The arrows that followed some labels ("Request Quote →") are drawn as icons. The design's own labels, such as "Coming soon" over the announced guides, are new.

**Photos.** The owner's photos are in `app/assets/home/` and `app/assets/pages/`, with stills taken from the factory film. A product or gallery tile without a real photo shows a placeholder, never an unrelated photo. Three placeholders on the home page are still cut from the approved design's screenshots (see [Home page](#home-page)).

**Behaviour.** The redesign kept what the pages do: the product tabs, the stretched links of the product cards, the gallery's filter buttons that do nothing, the `#` links of the announced articles, and the forms, which send the same fields to the same script and keep their quirks (see [Kept from the original on purpose](#kept-from-the-original-on-purpose)). No animation was added.

## Pages

- **Home:** see [Home page](#home-page).
- **About:** the story beside a workshop photo, with the pull quote; the five years of the journey; the company profile on the deep green; the six capabilities; the three values on the warm band; the closing call.
- **Products:** the three categories as tabs, each product a card with its number, tag, text and specifications under thin rules; a card with a product page has an arrow and leads there. The warm band asks about custom sizes.
- **Gallery:** the filter buttons, then eight tiles. Five show the owner's photos and film stills; the pouring ladle, conveyor system and conveyor rollers tiles wait for photos. The stone band says more photos are coming.
- **Knowledge:** the featured guide beside its picture, the six announced guides as cards, the closing call. An **article** has its category and byline, then the text with serif headings, rules and tables, and a sidebar that stays in view.
- **Contact:** the contact details between thin rules, a panel that opens Google Maps, and the enquiry form on the deep green.
- **Quote:** the direct contacts and the promises beside the form, whose three parts are numbered, and the submit bar.
- **Not found:** the page opening and a button back to the home page.

## Home page

The home page is the source of the site's design (see [Design](#design)) and replaces the original home page.

**Sections**, in order: the hero with the factory film; "Strength in every detail" with the four products as links; the equipment, as four photo cards; the workshop and three figures; the four steps from brief to build; custom manufacturing, with a drawing of a moulding box; the industries; the featured guide; the closing call to get a quote; the footer.

**Content.** All text is in `content/home.ts`. It follows the wording of the approved design and says what the original home page said: the products, Mubarikpur in Punjab, since 1990, custom and OEM work, supply across India. The Moulding Boxes card and list entry lead to the Moulding Boxes product page; the other products and the industries lead to `/products`, and the featured guide to the moulding box article. The original page's ticker, strength cards and industry cards are gone with it.

**The hero and its film.** The film is the owner's own, upright (9:16), in `app/assets/home/hero-film.mp4`, with its first frame as the poster that shows until it plays (`hero-film-poster.jpg`). It was 16.5 MB from the camera; for the site it is 720×1280 H.264 without sound, 2.3 MB. It is always shown whole, never cropped. An upright film cannot fill a wide screen without cropping, so on wider screens it sits beside the text instead of behind it, and the layout follows the window:

- Wider than 900px: the text on the left, and the film in a column on the right, as tall as the screen allows below the header (at most 40% of the width). "ENGINEERED" is sized to fill the width of its column.
- 601 to 900px: the title across the top, then the lines and the products button on the left with the film beside them, 46% of the width.
- 600px and below: the film fills the whole hero, as the photo did, and the text lies over it, as the owner asked. The hero takes the film's upright shape, so the film covers it without losing any of its frame; on most phones that is about the height of the screen. The top and the foot of the film are shaded, and the text has a soft shadow, so it stays readable over the film's brightest moment, the welding flash.
- On wider screens the film is never taller than the screen, less room for its control, so it can always be seen whole at once. The control pauses and plays the film: under it on wider screens, at the foot of the hero on phones. The film plays muted and on a loop once the page is ready, except for visitors who ask their system for less motion, who see the poster and the play button. On phones the WhatsApp button floats over the film's corner, as it floats over everything else on the site.
- `npm run preview` sends part of a file when the browser asks for one, as Hostinger and Vercel do: browsers ask for parts of a film to jump within it, and Safari plays no film without them.

**Photos.** The photos are in `app/assets/home/`. Three are the owner's own photos of moulding boxes: the Moulding boxes card (`moulding-boxes.jpg`), the workshop (`workshop.jpg`) and the featured guide (`knowledge-moulding-boxes.jpg`, the product on white, widened with white to the frame's shape). The Pouring ladles, Conveyor systems and Conveyor rollers cards are still placeholders, cut from the approved design's screenshots and cleaned of the text printed over them. To change a photo, replace the file of the same name; the layout crops each photo to its frame. To change the film, replace `hero-film.mp4` and its poster with another upright film.

**Details.**

- Sizes follow the window: at 1265px, the width of the approved screenshots, they match the design. On narrower windows the sections stack, at 900, 768 or 600px depending on the section.
- The drawing in the custom manufacturing section is an SVG (`CustomSection.tsx`), not a picture, so it stays sharp at every size.
- The workshop photo darkens slightly towards its foot, so that its captions stay readable over a light part of the photo.
- No animation was added; the film is the only thing that moves. The back-to-top button scrolls smoothly unless the visitor asks for reduced motion.

## Content

- `content/site.ts` is the single source for the company name, address, phone numbers, email address, WhatsApp link and external addresses. Components never hard-code these.
- `content/navigation.ts` holds the words of the header, the menu and the footer; `content/closing.ts` those of the closing call; `content/not-found.ts` those of the "page not found" and error screens.
- `content/titles.ts` defines the shape of a section title: its words and its accent.
- `content/icons.ts` holds the WhatsApp icon.
- One file per page holds that page's repeated items (cards, timeline entries, form options).
- `content/blog/` holds one MDX file per article. Adding a file there adds a page at `/blog/<file name>`.

A CMS is not part of this design. It becomes worth adding if non-developers need to edit content.

## Forms and analytics

- `lib/forms.ts` builds the request for both forms and posts it to the existing Google Apps Script web app, exactly as the original does: JSON in the body and no request headers. The redesign changed how the forms look, not their fields or what they send.
- The existing Google Analytics (GA4) tag is loaded in `root.tsx`, in production builds only, so development records no visits. Moving between pages no longer reloads the browser page, so page views must be confirmed in Google Analytics after the first deploy.

## Kept from the original on purpose

The first goal was an exact copy, so the original's oddities were copied too. Each one is a candidate fix, waiting for a decision. Q1 to Q3 belonged to the original nav and footer and went with them in the redesign.

| # | What happens | Where |
|---|---|---|
| Q4 | Gallery filter buttons do nothing, and no page links to the gallery | `components/gallery/GalleryFilter.tsx` |
| Q5 | After a successful contact submission the button stays disabled and keeps reading "Sending..." | `components/contact/ContactForm.tsx` |
| Q6 | After a failed submission, both form buttons show the raw text `&#8594;` where the arrow should be | `content/contact.ts`, `content/quote.ts` |
| Q7 | The "coming soon" article titles and the related-article titles link to `#`, which jumps to the top of the page | `components/blog/PostCard.tsx`, `components/blog/ArticleSidebar.tsx` |
| Q8 | The WhatsApp link in the quote sidebar opens in the same tab. The others open a new tab | `components/quote/QuoteSidebar.tsx` |
| Q9 | A quote sent with the city left empty reports the city as ", India" | `lib/forms.ts` |

Text copied with its apparent typos:

| Text | Where |
|---|---|
| "Fl belt and troughed conveyor systems" | `content/products.ts` |
| "Knock-out machine,Sand coolers" | `content/about.ts` |

## SEO and addresses

- Each route declares its own title and description, with the same text as the original.
- The canonical tag is on the home page only, as in the original.
- The old `.html` addresses redirect to the new ones (`public/.htaccess`).
- Not added yet: a canonical tag on every page, `sitemap.xml` and `robots.txt`.

## Browser-tab icon

`components/layout/AnimatedFavicon.tsx` lives in the document head in `root.tsx`, so every page uses the approved BP ladle pouring molten metal. It stays mounted across page navigation.

- `public/favicon.png` is the still 32-pixel icon included in pre-rendered HTML. `public/favicon.ico` contains still 16-, 32- and 48-pixel versions for clients that request the conventional icon path.
- `app/assets/foundry-pour-frames.png` contains 72 pre-rendered 32-pixel frames, arranged in 12 columns. Vite gives this asset a hashed URL. The client decodes it once, caches the individual frame URLs, and updates the icon at 12 frames per second for a six-second loop.
- Inactive tabs and visitors who request reduced motion get the still icon. Image or canvas failures also retain the still icon. No animation library or continuous artwork rendering is needed.
- Actual tab animation depends on whether the browser refreshes changed favicon URLs; the still image also works without JavaScript. The icon does not alter the site's header logo or page layout.

## Verification

The match with the original was checked by tests, not by eye. On 2026-10-13 all of them passed in Chromium, the installed Google Chrome, Firefox and WebKit:

| Tests | Per browser | What they check |
|---|---|---|
| Comparisons | 245 | One page at one width and in one state against the original: structure, text, attributes, every computed style, position and size, the request a form sends, and the screenshot pixel for pixel |
| Behaviour | 32 | Moving between pages, back and forward, the mobile menu, `#` links, returning to a half-filled form, the keyboard in the forms. Each runs on the original and on this site with the same expectations |
| Form payloads | 9 | What each form sends, for every combination of filled and empty fields |

The comparisons cover eight pages at 15 widths from 360 to 2560px, scrolled views, the open mobile menu, product tabs, hover and focus states, every form state, and each page reached by clicking a link.

The suite is not in this repository. It needs a copy of the original site beside the project and holds a large recording of it, so it lives in a `tests/` folder on the developer's machine, which git ignores. It is retired with the redesign: the pages no longer match the original's design, so its comparisons fail by design. Its form payload tests still describe what the forms send.

Since the product pages, the products page differs from the original on purpose: the Moulding Boxes card leads to its page and four cards were added. Since the new home page, the home page differs too. The suite reports these differences. After each of the two changes, every other page was checked on 2026-11-02 by comparing screenshots with the build before the change, at 1440 and 390px: all are identical pixel for pixel, the product pages included after the home page change. On 2026-11-03, after the owner's photos and film were added to the home page, every other page's built HTML was compared with the build before: identical, apart from the names of the built files.

The redesign of the other pages on 2026-11-03 was checked this way:

- The five product pages are identical pixel for pixel to the build before, at 1440 and 390px.
- Every page renders at 1440 and 390px with no error, no sideways scroll and no broken image.
- The menu opens and closes on every page and marks the current one; the product tabs switch; a product card opens its page and Back returns to the same place; the card's quote link still goes to `/quote`.
- The contact and quote forms keep the same fields and the same sending code, and refuse to send when empty. No form was sent to the live script.

## Commands

| Command | What it does |
|---|---|
| `npm install` | Installs the packages |
| `npm run dev` | Development server with live reload, at http://localhost:5173 |
| `npm run build` | Production build into `build/client/` |
| `npm run preview` | Serves the production build at http://127.0.0.1:4173 |
| `npm run typecheck` | Type check |
| `npm run lint` | ESLint and the Prettier format check |
| `npm run format` | Formats the code |

## Build and deploy

The build produces static files in `build/client/`: one `index.html` per page, plus `assets/`. Any host that serves static files can serve it.

**Hostinger** (Single Web Hosting) hosts bpfoundry.in. It serves files as they are and does not run the build, so the build runs on GitHub:

1. Every push to `main` runs `.github/workflows/deploy.yml`: `npm ci`, typecheck, lint, build.
2. The workflow replaces the contents of the `deploy` branch with the contents of `build/client/`. That branch holds only built files. Never edit it by hand.
3. Hostinger's Git deployment (hPanel, Advanced, Git) is connected to the `deploy` branch and pulls it into `public_html` on every push to it.

So every push to `main` that passes the checks goes live within a few minutes. If a change does not show, clear the cache in hPanel.

`public/.htaccess` is read by Hostinger's LiteSpeed server. It forces HTTPS, redirects the old `.html` addresses with a 301, answers `/about` with `about/index.html` without a redirect to `/about/`, and answers unknown addresses with `__spa-fallback.html` and status 404, which shows the site's "page not found" screen. `/products/casting-equipment`, the folder of the product pages, has no page of its own and is redirected to `/products` with a 302.

**Vercel** would also work: it builds from this repository, with build command `npm run build` and output directory `build/client`. It is not used. On Vercel the redirects would go in `vercel.json`.

## Growth path

- **More content** (product pages, articles, other languages): add routes and content files. Static pre-rendering stays sufficient.
- **App features** (logins, customer accounts, quote or order tracking, an admin panel): React Router switches from pre-rendering to server rendering using the same route files. This needs a host that runs Node, plus a backend and a database, and code is then grouped by feature.
- **Interactive pieces** (dialogs, dropdowns, accordions): take them from Radix or shadcn and style them with this theme.

## Open items

1. **The oddities kept from the original:** which to fix (see the table above).
2. **Meaning of growth:** whether app features are expected, or only more content. The design assumes content first.
3. **Node version:** Node 22.22 or later is needed before moving to React Router 8. The deploy workflow uses the latest Node 22.
4. **Page views in Google Analytics:** confirm after the first deploy that moving between pages records page views (see [Forms and analytics](#forms-and-analytics)).
5. **Product photos:** the product pages show line drawings until there are photos (see [Product pages](#product-pages)). On the home page, three product photos are still placeholders taken from its approved design (see [Home page](#home-page)); in the gallery, three tiles wait for photos.
6. **The "page not found" screen** is `__spa-fallback.html`, served for unknown addresses. React reports a hydration mismatch on it (error 418) and draws the page in the browser instead; the visitor sees the right page. It was so before the redesign.
7. **Drawing uploads:** the product page form asks for drawings by WhatsApp or email. Uploading them needs the Google Apps Script to accept files.
8. **Workbook questions:** bush hardness is 58–62 HRC in the Bushes specifications but 58–60 HRC in its FAQ and on the Moulding Boxes page; the pallet car bearing make "NGC" may mean NBC. The pages show both as written.
