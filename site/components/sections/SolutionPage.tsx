import type { SolutionPageContent } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { FeatureGrid } from "@/components/ui/Card";
import { Hero } from "./Hero";
import { CtaBand } from "./CtaBand";

/**
 * The six audience pages (owners, workshops, parts, fleets, insurance,
 * business) all have the same spine: hero → capabilities → outcome → CTA.
 * Rendering them from one component keeps them visually identical to each
 * other and to the approved homepage language.
 */
export function SolutionPage({
  locale,
  content,
}: {
  locale: Locale;
  content: SolutionPageContent;
}) {
  return (
    <>
      <Hero locale={locale} content={content.hero} compact />

      {content.features ? (
        <Section background="fade-down" className="border-t border-white/4">
          <SectionHeading
            eyebrow={content.features.eyebrow}
            title={content.features.title}
            copy={content.features.copy}
            className="mb-16 max-w-[720px]"
          />
          <FeatureGrid features={content.features.cards} minWidth={280} />
        </Section>
      ) : null}

      {content.bulletGroups?.length ? (
        <Section background="fade-down" className="border-t border-white/4">
          <div
            className={`grid gap-10 ${
              content.bulletGroups.length > 1 ? "lg:grid-cols-2" : ""
            }`}
          >
            {content.bulletGroups.map((group) => (
              <div
                key={group.title}
                className="surface rounded-2xl border border-white/6 p-8 md:p-10"
              >
                <h2 className="m-0 mb-6 font-display text-[24px] font-semibold text-white">
                  {group.title}
                </h2>
                <ul className="m-0 flex list-none flex-col gap-4 p-0">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[15px] leading-[1.6] text-muted"
                    >
                      <span
                        aria-hidden
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-blue"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>
      ) : null}

      {content.outcome ? (
        <Section padding="compact">
          <div className="rounded-[20px] border border-blue/25 bg-linear-[160deg] from-blue-900/20 to-[rgba(15,25,50,0.4)] p-8 md:p-12">
            <Eyebrow className="mb-3">— {content.outcome.title}</Eyebrow>
            <p className="m-0 max-w-[820px] font-display text-[20px] leading-[1.5] text-white md:text-[24px]">
              {content.outcome.copy}
            </p>
          </div>
        </Section>
      ) : null}

      {content.closingCta ? (
        <CtaBand
          locale={locale}
          title={content.closingCta.title}
          copy={content.closingCta.copy}
          ctas={content.closingCta.ctas}
          size="compact"
        />
      ) : null}
    </>
  );
}
