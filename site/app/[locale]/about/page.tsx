import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getDictionary } from "@/content";
import { isLocale } from "@/lib/i18n";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { FeatureGrid } from "@/components/ui/Card";
import { Hero } from "@/components/sections/Hero";
import { CtaBand } from "@/components/sections/CtaBand";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return getDictionary(locale).about.meta;
}

export default async function AboutPage({ params }: Params) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const { about } = getDictionary(locale);

  const pillars = [about.story, about.vision, about.mission];

  return (
    <>
      <Hero locale={locale} content={about.hero} compact />

      <Section background="fade-down" className="border-t border-white/4">
        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="surface rounded-2xl border border-white/6 p-8"
            >
              <h2 className="m-0 mb-4 font-display text-[22px] font-semibold text-white">
                {pillar.title}
              </h2>
              <p className="m-0 text-[15px] leading-[1.65] text-dim">{pillar.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={about.values.eyebrow}
          title={about.values.title}
          className="mb-16 max-w-[720px]"
        />
        <FeatureGrid features={about.values.cards} minWidth={260} />
      </Section>

      <Section background="deep">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="flex justify-center">
            <div className="relative flex size-56 items-center justify-center rounded-[32px] border border-white/8 bg-linear-[160deg] from-blue-900/25 to-[rgba(15,25,50,0.5)] md:size-72">
              <Image
                src="/logo.webp"
                alt="SALISCO"
                width={160}
                height={160}
                className="size-28 object-contain md:size-40"
              />
            </div>
          </div>
          <div>
            <Eyebrow className="mb-3">— {about.logoMeaning.title}</Eyebrow>
            <p className="m-0 font-display text-[20px] leading-[1.55] text-white md:text-[26px]">
              {about.logoMeaning.copy}
            </p>
          </div>
        </div>
      </Section>

      <CtaBand
        locale={locale}
        title={about.closingCta.title}
        copy={about.closingCta.copy}
        ctas={about.closingCta.ctas}
        size="compact"
      />
    </>
  );
}
