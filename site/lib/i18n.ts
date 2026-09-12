export const locales = ["en", "ar"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeDir: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  ar: "rtl",
};

export const localeLabel: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
};

/** Short label for the header toggle — always shows the *other* language. */
export const localeSwitchLabel: Record<Locale, string> = {
  en: "العربية",
  ar: "EN",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "ar" : "en";
}

/** Builds a locale-prefixed href. `path` is always the locale-agnostic path. */
export function localeHref(locale: Locale, path: string): string {
  if (path.startsWith("#") || path.startsWith("http") || path.startsWith("mailto:")) {
    return path;
  }
  const clean = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean}`;
}
