import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/content";
import { isLocale, localeHref } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { IconTile } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { Hero } from "@/components/sections/Hero";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return getDictionary(locale).register.meta;
}

export default async function RegisterPage({ params }: Params) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const { register } = dict;

  return (
    <>
      <Hero locale={locale} content={register.hero} compact />

      <Section background="fade-down" className="border-t border-white/4">
        <h2 className="m-0 mb-10 font-display text-[clamp(26px,4vw,44px)] font-bold leading-[1.05] tracking-[-0.02em] text-white">
          {register.accountTypesTitle}
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {register.accountTypes.map((type) => (
            <div
              key={type.title}
              className="surface flex gap-4 rounded-2xl border border-white/6 p-6"
            >
              {type.icon ? (
                <IconTile glyph={type.icon} accent={type.accent} size={40} />
              ) : null}
              <div>
                <h3 className="m-0 mb-1.5 font-display text-[16px] font-semibold text-white">
                  {type.title}
                </h3>
                <p className="m-0 text-[13px] leading-[1.55] text-dim">{type.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section padding="compact">
        <div className="mx-auto max-w-[620px] rounded-[20px] border border-white/8 bg-white/3 p-8 text-center md:p-12">
          <h2 className="m-0 mb-3 font-display text-[26px] font-bold text-white">
            {register.start.title}
          </h2>
          <p className="m-0 mb-8 text-[15px] leading-[1.65] text-muted">
            {register.start.copy}
          </p>

          {/* Registration is not open yet, so this routes to contact. */}
          <ButtonLink href={localeHref(locale, "/contact")} variant="primary" size="lg">
            {register.start.cta}
          </ButtonLink>

          <p className="mt-6 mb-0 text-sm text-dim">
            {register.start.signInPrompt}{" "}
            <Link
              href={localeHref(locale, "/contact")}
              className="font-semibold text-orange no-underline"
            >
              {register.start.signInCta}
            </Link>
          </p>

          <p className="mt-6 mb-0 text-xs leading-[1.6] text-fainter">
            {register.start.consent}
          </p>
          <p className="mt-3 mb-0 text-xs text-fainter">{dict.common.demoNotice}</p>
        </div>
      </Section>
    </>
  );
}
