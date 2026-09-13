import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/content";
import { isLocale } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { Hero } from "@/components/sections/Hero";
import { CtaBand } from "@/components/sections/CtaBand";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return getDictionary(locale).faq.meta;
}

export default async function FaqPage({ params }: Params) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const { faq } = getDictionary(locale);

  // Structured data — the content deck calls out SEO explicitly, and an FAQ
  // page is the one route where rich results are straightforwardly available.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero locale={locale} content={faq.hero} compact />

      <Section background="fade-down" className="border-t border-white/4">
        <div className="mx-auto flex max-w-[860px] flex-col gap-3">
          {faq.items.map((item) => (
            <details
              key={item.question}
              className="group surface rounded-2xl border border-white/6 px-6 py-5 md:px-8"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-[17px] font-semibold text-white md:text-[18px]">
                {item.question}
                <span
                  aria-hidden
                  className="shrink-0 text-xl text-orange transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="m-0 mt-4 text-[15px] leading-[1.7] text-dim">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Section>

      <CtaBand
        locale={locale}
        title={faq.closingCta.title}
        copy={faq.closingCta.copy}
        ctas={faq.closingCta.ctas}
        size="compact"
      />
    </>
  );
}
