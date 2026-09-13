import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { routes, siteUrl } from "@/lib/routes";

// Emitted as a file at build time — required under `output: "export"`.
export const dynamic = "force-static";

// Pinned to the build date: `new Date()` here would rewrite every <lastmod> on
// every build, telling crawlers the whole site changed when nothing did.
const lastModified = new Date(
  process.env.SOURCE_DATE_EPOCH
    ? Number(process.env.SOURCE_DATE_EPOCH) * 1000
    : Date.now(),
);

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${siteUrl}/${locale}${route === "/" ? "" : route}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route === "/" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          locales.map((alt) => [
            alt,
            `${siteUrl}/${alt}${route === "/" ? "" : route}/`,
          ]),
        ),
      },
    })),
  );
}
