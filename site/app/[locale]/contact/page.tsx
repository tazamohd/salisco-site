import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/content";
import { isLocale } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { FeatureGrid } from "@/components/ui/Card";
import { Hero } from "@/components/sections/Hero";
import { LeadForm } from "@/components/site/LeadForm";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return getDictionary(locale).contact.meta;
}

export default async function ContactPage({ params }: Params) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const { contact } = dict;

  return (
    <>
      <Hero locale={locale} content={contact.hero} compact />

      <Section background="fade-down" className="border-t border-white/4">
        <FeatureGrid features={contact.categories} minWidth={240} />
      </Section>

      <Section>
        <div className="mx-auto max-w-[820px]">
          <h2 className="m-0 mb-10 font-display text-[clamp(26px,4vw,44px)] font-bold leading-[1.05] tracking-[-0.02em] text-white">
            {contact.form.title}
          </h2>
          <LeadForm
            idPrefix="contact"
            fields={contact.form.fields}
            submitLabel={contact.form.submit}
            successMessage={contact.form.success}
            consent={contact.form.consent}
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
