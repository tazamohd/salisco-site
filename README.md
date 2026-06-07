# Salisco — Corporate Site

The marketing site for **Salisco LTD**, a Riyadh-based company operating across three
divisions for the Saudi market:

- **Technology** — product engineering, platforms and data.
- **Manpower** — skilled talent and workforce solutions.
- **Automotive** — fleet & garage technology, live today as **SalisAuto**.

**SalisAuto** is Salisco's first shipping product: a fleet & garage management platform.
Two further automotive products are in development — **FleetCo** (fleet leasing & financing)
and **Salis SP** (spare parts marketplace & supply).

> Headquarters: Riyadh, Kingdom of Saudi Arabia · © 2026 Salisco LTD

## What's in here

A single-page, dependency-free static site:

```
index.html          # markup (semantic, bilingual via data-i18n keys)
assets/styles.css    # dark automotive-tech theme, RTL-aware, responsive
assets/app.js        # EN/AR language toggle + telemetry count-up
assets/logo.svg      # Salisco circuit-board wordmark (SVG recreation)
```

> The nav and favicon use `assets/logo.svg`. If it's removed, the nav falls back
> to a text wordmark automatically — no broken image. Swap in the official artwork
> any time by replacing `assets/logo.svg`.

No build step. Fonts load from Google Fonts; everything else is local.

## Run locally

Open `index.html` directly, or serve it:

```bash
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Bilingual (EN / AR + RTL)

The site ships **English-first** with a built-in Arabic toggle. Clicking the language
button swaps all copy (driven by the `I18N` dictionary in `assets/app.js`) and flips the
document to `dir="rtl"`. The chosen language is remembered via `localStorage`.

> ⚠️ **Arabic brand wordmark is a placeholder.** The Arabic rendering of "Salisco"
> (`ساليسكو`) is a transliteration. Replace it with the official Arabic spelling in
> `assets/app.js` (`I18N.ar.brand`) once confirmed.

## Content notes

Some figures are **illustrative placeholders** pending real data:

- Telemetry numbers (vehicles online, uptime, jobs, response time) are sample values.
- "Established 2026" and the three-division count reflect current positioning.

Product names are real: **SalisAuto** (live), **FleetCo** and **Salis SP** (coming soon).
