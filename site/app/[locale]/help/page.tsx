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
  return getDictionary(locale).help.meta;
}

export default async function HelpPage({ params }: Params) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const { help } = dict;

  return (
    <>
      <Hero locale={locale} content={help.hero} compact />

      <Section background="fade-down" className="border-t border-white/4">
        {/*
          Search is presentational until the help content exists — disabled and
          labelled rather than a box that silently does nothing when typed into.
        */}
        <div className="mx-auto mb-14 max-w-[720px]">
          <label htmlFor="help-search" className="sr-only">
            {help.searchPlaceholder}
          </label>
          <div className="flex items-center gap-3 rounded-[14px] border border-white/10 bg-white/5 px-5 py-4">
            <span aria-hidden className="text-lg text-faint">
              ⌕
            </span>
            <input
              id="help-search"
              type="search"
              disabled
              placeholder={help.searchPlaceholder}
              className="min-w-0 flex-1 bg-transparent text-[15px] text-text placeholder:text-fainter focus:outline-none disabled:cursor-not-allowed"
            />
          </div>
          <p className="mt-3 mb-0 text-center text-xs text-fainter">
            {dict.common.demoNotice}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {help.categories.map((category, index) => (
            <div
              key={category}
              className="surface flex flex-col gap-4 rounded-2xl border border-white/6 p-6"
            >
              <span className="eyebrow font-mono text-[11px] tracking-[0.1em] text-faint">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-[15px] leading-[1.5] font-medium text-white">
                {category}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        locale={locale}
        title={help.closingCta.title}
        copy={help.closingCta.copy}
        ctas={help.closingCta.ctas}
        size="compact"
      />
    </>
  );
}
