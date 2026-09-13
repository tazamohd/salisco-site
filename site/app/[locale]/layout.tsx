import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Sora, Inter, JetBrains_Mono, IBM_Plex_Sans_Arabic } from "next/font/google";
import type { ReactNode } from "react";
import "../globals.css";

import { getDictionary } from "@/content";
import { isLocale, localeDir, locales, type Locale } from "@/lib/i18n";
import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { asset } from "@/lib/asset";
import { siteUrl } from "@/lib/routes";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(siteUrl),
    title: { default: dict.home.meta.title, template: "%s" },
    description: dict.home.meta.description,
    icons: { icon: asset("/logo.webp") },
    alternates: {
      // Absolute, so they stay correct under a subpath deployment.
      languages: {
        en: `${siteUrl}/en/`,
        ar: `${siteUrl}/ar/`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const typedLocale: Locale = locale;
  const dict = getDictionary(typedLocale);

  return (
    <html
      lang={typedLocale}
      dir={localeDir[typedLocale]}
      className={`${sora.variable} ${inter.variable} ${jetbrains.variable} ${plexArabic.variable}`}
    >
      <body className="bg-ink text-text antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-200 focus:rounded-lg focus:bg-orange focus:px-4 focus:py-2 focus:text-ink"
        >
          {dict.common.skipToContent}
        </a>
        <AnnouncementBar text={dict.announcement} />
        <Nav locale={typedLocale} dict={dict} />
        <main id="main">{children}</main>
        <Footer locale={typedLocale} dict={dict} />
      </body>
    </html>
  );
}
