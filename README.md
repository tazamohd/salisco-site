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

## Highlights

A high-motion, dependency-free single page:

- **Animated aurora background** — drifting gradient blobs (cyan / amber / violet), grid, floating shapes, film grain.
- **Kinetic gradient headline** with an animated sheen.
- **Orbiting brand mark** with glowing rings + mouse parallax.
- **Scroll-reveal** (blur-slide) on every section, **scroll-progress bar**, blur-on-scroll nav.
- **Cursor-spotlight** division cards, **magnetic** buttons, micro-interactions.
- **Live telemetry** panel — values tick in real time, sparkline draws on reveal.
- Capability **marquee**, shimmering "coming soon" tiles.
- Full **EN/AR + RTL**, and `prefers-reduced-motion` fully respected.

> Design direction sourced from the *ui-ux-pro-max* skill (Aurora / Kinetic Typography /
> Micro-interactions) and *Magic (21st.dev)* component inspiration, hand-built in vanilla
> CSS/JS so it runs on GitHub Pages with no build step.

## What's in here

A single-page, dependency-free static site:

```
index.html          # markup (semantic, bilingual via data-i18n keys)
assets/styles.css    # dark automotive-tech theme, RTL-aware, responsive
assets/app.js        # EN/AR language toggle + telemetry count-up
assets/logo.png      # official Salisco circuit-board logo (nav)
assets/favicon.png   # 64×64 favicon derived from the logo
```

> The nav uses `assets/logo.png` and the tab icon uses `assets/favicon.png`.
> If the logo is missing, the nav falls back to a text wordmark automatically —
> no broken image.

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
