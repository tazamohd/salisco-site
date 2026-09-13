# SALISCO website

Implementation of the Claude Design handoff in `../design/Salisco.dc.html`, extended
to the full site described in `../design/uploads/SALISCO_WEBSITE_CONTENT_EN.md`.

Next.js (App Router) + Tailwind CSS v4, built as a **static export** so GitHub Pages
can serve it. Every page is pre-rendered in both English and Arabic.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → out/
npm run lint     # eslint
npm run typecheck
```

`npm run build` writes `out/`. There is no `npm run start` — the export is plain files;
`npm run preview` serves them.

Two paths are **export-only**, because `next dev` does not serve directory indexes out
of `public/`: `/` (the language-detecting entry page) and `/legacy/`. In dev, open
`/en` directly, or `/index.html` and `/legacy/index.html`. Both behave correctly in the
build — use `npm run preview` to check them.

To preview exactly what Pages will serve, including the subpath:

```bash
NEXT_PUBLIC_BASE_PATH=/salisco-site npm run build
# then serve out/ as if it were mounted at /salisco-site/
```

## How it is put together

```
app/[locale]/        one route per page; `layout.tsx` owns <html lang dir>
components/ui/       primitives (Button, Section, Card, IconTile, Glow)
components/sections/ page-level blocks (Hero, Solutions, Pricing, CtaBand, …)
components/site/     chrome (Nav, Footer, AnnouncementBar, forms)
content/             all copy — en.ts, ar.ts, typed by types.ts
lib/i18n.ts          locale list, direction, href helper
lib/asset.ts         basePath-aware public asset URLs
public/index.html    the page served at `/` — detects language, redirects
public/legacy/       the previous corporate site, served at /legacy/
```

### Static-export constraints

Pages runs no Node process, which rules out a few things you might otherwise reach for:

- **No middleware.** Locale detection at `/` is done by `public/index.html`, a small
  script that reads `navigator.languages` and redirects. Its links are relative so it
  works at a domain root or under a `/salisco-site/` subpath unchanged.
- **`next/image` is unoptimized**, and in that mode it does *not* prepend `basePath` —
  neither does `metadata.icons`. Both must go through `lib/asset.ts` or they 404 on a
  project Pages site. `next/link` does apply `basePath` automatically.
- **`sitemap.ts` / `robots.ts` need `export const dynamic = "force-static"`** to be
  emitted as files.

**All copy lives in `content/`.** Components never hard-code strings, so `en.ts` and
`ar.ts` can be read side by side and either can be edited without touching layout.

**Design tokens live in `app/globals.css`** under `@theme`, taken verbatim from the
prototype's inline styles. Change them there, not in components.

One gotcha worth knowing: base element styles are inside `@layer base` on purpose.
Unlayered CSS beats *every* layered rule regardless of specificity, so an unlayered
`a { color: … }` silently overrides all Tailwind text-colour utilities on links.

## Languages and RTL

- `/en/*` and `/ar/*`. `/` detects the browser language and redirects.
- Arabic sets `dir="rtl"` and swaps the whole type stack to IBM Plex Sans Arabic
  (Sora / Inter / JetBrains Mono have no Arabic coverage).
- Layout uses logical properties (`ms-`, `pe-`, `start-`, `end-`) so it mirrors
  automatically. The `→` glyph flips via `.dir-flip`.
- The header language toggle keeps the visitor on the same page.

> **The Arabic is a translation of the English source, not native copy.** The brand
> positions itself as "Arabic-first", so it should get a native review pass before
> launch — the legal pages and marketing headlines especially.

## Before launch

Not wired up yet, deliberately — each of these is visibly labelled in the UI rather
than faked:

- [ ] **Forms** (`components/site/LeadForm.tsx`, `Newsletter.tsx`) validate and
      acknowledge in the browser. Nothing is sent or stored. Point them at a real
      endpoint and remove `common.formDemoNotice`.
- [ ] **Sign in / registration** link to `/contact`. Wire to the product when accounts open.
- [ ] **App Store / Google Play** buttons are inert placeholders; the QR block is a
      placeholder box. Swap in real URLs and a generated QR code.
- [ ] **Help Center search** is disabled pending help content.
- [ ] **Blog articles** are titles only, marked "coming soon".
- [ ] **Social links** in the footer are non-interactive glyphs.
- [ ] **Legal pages** carry the foundational copy from the content deck plus a visible
      draft notice. Section 21 of the deck requires review by a qualified Saudi lawyer
      before publication.
- [ ] `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_BASE_PATH` are set by the deploy
      workflow for a project Pages site. Update both when a custom domain is attached
      (see `../README.md`).

Section 24 of the content deck lists what the business still needs to confirm before
publishing (legal entity, CR and VAT numbers, address, contact channels, store links,
approved pricing, support hours, partner names).
