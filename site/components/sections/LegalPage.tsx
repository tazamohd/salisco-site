import type { LegalPageContent } from "@/content/types";
import { Section, Eyebrow } from "@/components/ui/Section";

/**
 * Legal pages carry foundational copy only. The content deck is explicit that
 * a qualified Saudi lawyer must review these before publication, so the review
 * notice is rendered prominently at the top rather than buried at the bottom —
 * anyone landing here should see the page is a draft before reading it.
 */
export function LegalPage({ content }: { content: LegalPageContent }) {
  return (
    <>
      <Section padding="compact" className="border-b border-white/4">
        <div className="mx-auto max-w-[820px]">
          <Eyebrow className="mb-3">{content.updated}</Eyebrow>
          <h1 className="m-0 mb-6 font-display text-[clamp(30px,4.5vw,52px)] font-bold leading-[1.05] tracking-[-0.02em] text-white">
            {content.title}
          </h1>

          <div
            role="note"
            className="rounded-2xl border border-orange/30 bg-orange/8 p-6 text-[14px] leading-[1.65] text-orange-300"
          >
            {content.reviewNotice}
          </div>
        </div>
      </Section>

      <Section background="fade-down">
        <div className="mx-auto max-w-[820px]">
          <p className="m-0 mb-12 text-[17px] leading-[1.7] text-muted">
            {content.intro}
          </p>

          <div className="flex flex-col gap-10">
            {content.sections.map((section, index) => (
              <section key={section.title}>
                <div className="mb-3 flex items-baseline gap-3">
                  <span className="font-mono text-[13px] text-blue">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="m-0 font-display text-[20px] font-semibold text-white">
                    {section.title}
                  </h2>
                </div>
                <p className="m-0 ps-8 text-[15px] leading-[1.7] text-dim">
                  {section.copy}
                </p>
              </section>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
