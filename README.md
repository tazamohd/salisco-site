# Salisco

The published site is the **SALISCO platform site** in [`site/`](./site) — a Next.js app
covering the automotive platform for vehicle owners, service centres, spare-parts
suppliers, fleet operators, insurers and businesses, in English and Arabic.

| Path | What it is |
| --- | --- |
| [`site/`](./site) | **The site.** Next.js App Router app, static-exported to GitHub Pages. See [`site/README.md`](./site/README.md). |
| [`design/`](./design) | The Claude Design handoff it was built from: the prototype, the content deck and the chat transcript. |
| `site/public/legacy/` | The previous corporate page, archived and still served (see below). |

## Deployment

Pushing to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds `site/` and publishes it to GitHub Pages.

> **One-time setup:** in **Settings → Pages → Build and deployment**, set
> **Source** to **GitHub Actions**. Until that is changed, Pages keeps serving from the
> branch and the workflow's output is built but never published.

The build assumes a project Pages site at `https://<owner>.github.io/<repo>/`, so it
sets `NEXT_PUBLIC_BASE_PATH` to `/<repo>`. When a custom domain is attached, change
`NEXT_PUBLIC_BASE_PATH` to `""` and `NEXT_PUBLIC_SITE_URL` to the domain in the
workflow.

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
