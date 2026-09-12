import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { routes, siteUrl } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${siteUrl}/${locale}${route === "/" ? "" : route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "/" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          locales.map((alt) => [
            alt,
            `${siteUrl}/${alt}${route === "/" ? "" : route}`,
          ]),
        ),
      },
    })),
  );
}
