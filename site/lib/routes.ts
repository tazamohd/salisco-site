/** Every locale-agnostic route the site renders. Source for the sitemap. */
export const routes = [
  "/",
  "/owners",
  "/service-centers",
  "/spare-parts",
  "/fleets",
  "/insurance",
  "/business",
  "/about",
  "/partners",
  "/pricing",
  "/faq",
  "/contact",
  "/help",
  "/blog",
  "/download",
  "/register",
  "/legal/terms",
  "/legal/privacy",
  "/legal/cookies",
  "/legal/refunds",
] as const;

/**
 * Absolute base for sitemap/robots/hreflang URLs.
 *
 * Set NEXT_PUBLIC_SITE_URL in the Vercel project (production: the custom
 * domain). Falls back to Vercel's per-deployment URL on previews, so preview
 * builds do not advertise production URLs.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")
).replace(/\/$/, "");
