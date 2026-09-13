# Salisco

The published site is the **SALISCO platform site** in [`site/`](./site) — a Next.js app
covering the automotive platform for vehicle owners, service centres, spare-parts
suppliers, fleet operators, insurers and businesses, in English and Arabic.

| Path | What it is |
| --- | --- |
| [`site/`](./site) | **The site.** Next.js App Router app deployed to Vercel. See [`site/README.md`](./site/README.md). |
| [`design/`](./design) | The Claude Design handoff it was built from: the prototype, the content deck and the chat transcript. |
| `site/public/legacy/` | The previous corporate page, archived and still served (see below). |

## Deployment

Deployed to **Vercel**, which builds `site/` on every push to `main` and publishes
previews for other branches.

Project settings that matter:

- **Root directory:** `site`
- **`NEXT_PUBLIC_SITE_URL`** (production): the canonical origin, used for
  `sitemap.xml`, `robots.txt` and `hreflang` tags. Previews fall back to Vercel's
  per-deployment URL, so they never advertise production URLs.

Vercel runs Node, so this is a normal Next build — middleware handles locale
detection at `/`, and images are optimised on demand. Do not reintroduce
`output: "export"` without also restoring the static fallbacks it requires
(see [`site/README.md`](./site/README.md)).

## The previous corporate site

The earlier single-page corporate site — Salisco LTD across Technology, Manpower and
Automotive — has been moved to `site/public/legacy/` rather than deleted. It is still
published, at `/legacy/`, with its version archive at `/legacy/versions/`. It is plain
HTML/CSS/JS with no build step; edit the files in place.

Two carried-over caveats, both present before the move:

- `legacy/index.html` references `assets/ai-face.png`, which has never existed in this
  repository — that image 404s.
- The Arabic brand wordmark there (`ساليسكو`) is a transliteration placeholder, set in
  `legacy/assets/app.js` (`I18N.ar.brand`).

Its telemetry figures (vehicles online, uptime, jobs, response time) are illustrative
sample values. Product names are real: **SalisAuto** (live), **FleetCo** and
**Salis SP** (coming soon).

## Running locally

```bash
cd site
npm install
npm run dev      # http://localhost:3000
```

The legacy page is served at `/legacy/` from the same dev server, since it lives in
`site/public/`.
