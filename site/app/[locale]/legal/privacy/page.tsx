import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/content";
import { isLocale } from "@/lib/i18n";
import { LegalPage } from "@/components/sections/LegalPage";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return getDictionary(locale).legal.privacy.meta;
}

export default async function Page({ params }: Params) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <LegalPage content={getDictionary(locale).legal.privacy} />;
}
