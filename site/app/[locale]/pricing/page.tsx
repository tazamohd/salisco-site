import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/content";
import { isLocale, localeHref } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { Arrow } from "@/components/ui/Button";
import { Hero } from "@/components/sections/Hero";
import { PricingGrid } from "@/components/sections/Pricing";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return getDictionary(locale).pricing.meta;
}

export default async function PricingPage({ params }: Params) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const { pricing } = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} content={pricing.hero} compact />

      <Section background="fade-down" className="border-t border-white/4">
        <PricingGrid locale={locale} tiers={pricing.tiers} />

        <div className="mt-12 rounded-2xl border border-white/8 bg-white/3 p-8">
          <p className="m-0 max-w-[760px] text-[15px] leading-[1.65] text-muted">
            {pricing.note}
          </p>
          <Link
            href={localeHref(locale, pricing.faqLink.href)}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange no-underline"
          >
            {pricing.faqLink.label}
            <Arrow />
          </Link>
        </div>
      </Section>
    </>
  );
}
