import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/content";
import { isLocale } from "@/lib/i18n";
import { Section, SectionHeading } from "@/components/ui/Section";
import { DividedList, DividedRow } from "@/components/ui/Card";
import { Hero } from "@/components/sections/Hero";
import { LeadForm } from "@/components/site/LeadForm";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return getDictionary(locale).partners.meta;
}

export default async function PartnersPage({ params }: Params) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const { partners } = dict;

  return (
    <>
      <Hero locale={locale} content={partners.hero} compact />

      <Section background="fade-down" className="border-t border-white/4">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-25">
            <SectionHeading
              eyebrow={partners.reasons.eyebrow}
              title={partners.reasons.title}
            />
          </div>
          <DividedList>
            {partners.reasons.items.map((item, index) => (
              <DividedRow key={item} index={String(index + 1).padStart(2, "0")}>
                {item}
              </DividedRow>
            ))}
          </DividedList>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-[820px]">
          <h2 className="m-0 mb-3 font-display text-[clamp(26px,4vw,44px)] font-bold leading-[1.05] tracking-[-0.02em] text-white">
            {partners.form.title}
          </h2>
          <p className="m-0 mb-10 text-[17px] leading-[1.6] text-muted">
            {partners.form.copy}
          </p>
          <LeadForm
            idPrefix="partner"
            fields={partners.form.fields}
            submitLabel={partners.form.submit}
            successMessage={partners.form.success}
            demoNotice={dict.common.formDemoNotice}
            requiredLabel={dict.common.requiredLabel}
            optionalLabel={dict.common.optionalLabel}
            selectPlaceholder={dict.common.selectPlaceholder}
          />
        </div>
      </Section>
    </>
  );
}
