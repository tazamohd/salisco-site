import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/content";
import { isLocale } from "@/lib/i18n";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FeatureGrid, DividedList, DividedRow, Glow } from "@/components/ui/Card";
import { ButtonLink, Arrow } from "@/components/ui/Button";
import { localeHref } from "@/lib/i18n";
import { Hero } from "@/components/sections/Hero";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { SolutionsGrid } from "@/components/sections/Solutions";
import { StepGrid } from "@/components/sections/HowItWorks";
import { PricingGrid } from "@/components/sections/Pricing";
import { CtaBand } from "@/components/sections/CtaBand";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return getDictionary(locale).home.meta;
}

export default async function HomePage({ params }: Params) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const { home } = dict;

  return (
    <>
      <Hero
        locale={locale}
        content={home.hero}
        visual={<HeroVisual content={home.heroVisual} />}
      />

      <Section background="fade-down" className="border-t border-white/4">
        <SectionHeading
          eyebrow={home.valueProps.eyebrow}
          title={home.valueProps.title}
          copy={home.valueProps.copy}
          className="mb-16 max-w-[720px]"
        />
        <FeatureGrid features={home.valueProps.cards} />
      </Section>

      <Section id="solutions">
        <SectionHeading
          eyebrow={home.solutions.eyebrow}
          title={home.solutions.title}
          align="center"
          className="mb-16 max-w-[780px]"
        />
        <SolutionsGrid locale={locale} cards={home.solutions.cards} />
      </Section>

      <Section background="deep" className="relative overflow-hidden">
        <Glow className="-start-50 top-1/2" color="blue" size={500} blur={40} />
        <div className="relative">
          <SectionHeading
            eyebrow={home.howItWorks.eyebrow}
            title={home.howItWorks.title}
            className="mb-16 max-w-[640px]"
          />
          <StepGrid steps={home.howItWorks.steps} />
        </div>
      </Section>

      <Section id="about">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-25">
            <SectionHeading
              eyebrow={home.why.eyebrow}
              title={home.why.title}
              copy={home.why.copy}
              className="mb-8"
            />
            <ButtonLink
              href={localeHref(locale, home.why.cta.href)}
              variant={home.why.cta.variant ?? "primary"}
            >
              {home.why.cta.label}
              <Arrow />
            </ButtonLink>
          </div>
          <DividedList>
            {home.why.reasons.map((reason, index) => (
              <DividedRow
                key={reason}
                index={String(index + 1).padStart(2, "0")}
                accent={index === home.why.reasons.length - 1}
              >
                {reason}
              </DividedRow>
            ))}
          </DividedList>
        </div>
      </Section>

      <Section background="fade-down" id="pricing">
        <SectionHeading
          eyebrow={home.pricing.eyebrow}
          title={home.pricing.title}
          copy={home.pricing.copy}
          align="center"
          className="mb-16"
        />
        <PricingGrid locale={locale} tiers={home.pricing.tiers} />
      </Section>

      <CtaBand
        locale={locale}
        title={home.mainCta.title}
        copy={home.mainCta.copy}
        ctas={home.mainCta.ctas}
      />
    </>
  );
}
