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

/** Set NEXT_PUBLIC_SITE_URL in the deploy environment before launch. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://salisco.example";
