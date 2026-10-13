# B.P. Engineers website

The website of B.P. Engineers ([bpfoundry.in](https://www.bpfoundry.in)), manufacturers of sand casting foundry equipment in Mubarikpur, Punjab, India.

It is built with React 19, TypeScript, React Router 7, Vite and Tailwind CSS 4. Every page is pre-rendered to static HTML at build time, so it can be served by any static host and needs no server.

## Run it

Node 22.12 or later is required.

```
npm install
npm run dev
```

The site is then at http://localhost:5173.

The contact and quote forms post to the live enquiry script, also when run locally. Do not submit them while testing.

## Build it

```
npm run build
```

The finished site is written to `build/client/`: one `index.html` per page, plus an `assets/` folder. `npm run preview` serves that folder at http://127.0.0.1:4173.

## Host it

- **Vercel:** import this repository. If Vercel does not pick the settings up by itself, use build command `npm run build` and output directory `build/client`.
- **Hostinger shared hosting:** run `npm run build` and upload the contents of `build/client/` to the site's `public_html` folder. Hostinger serves the files as they are and does not run the build.

Before this site replaces the earlier one on the live domain, the old addresses (`about.html`, `products.html` and so on) must be redirected to the new ones (`/about`, `/products`). That is not set up yet. See "Open items" in [ARCHITECTURE.md](ARCHITECTURE.md).

## Where things are

| Path | Contents |
|---|---|
| `app/routes/` | One file per page |
| `app/components/` | The pieces pages are built from |
| `app/content/` | All text, lists, contact details and articles |
| `app/lib/` | Form requests and page-change handling |
| `app/app.css` | Base rules and the design theme (colours, fonts, sizes) |
| `public/` | Files copied into the build as they are |

[ARCHITECTURE.md](ARCHITECTURE.md) explains the design and the reasons behind it.
