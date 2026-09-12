import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/content";
import { isLocale } from "@/lib/i18n";
import { SolutionPage } from "@/components/sections/SolutionPage";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return getDictionary(locale).serviceCenters.meta;
}

export default async function Page({ params }: Params) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <SolutionPage locale={locale} content={getDictionary(locale).serviceCenters} />;
}
