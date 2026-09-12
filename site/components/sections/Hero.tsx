import type { ReactNode } from "react";
import type { Hero as HeroContent } from "@/content/types";
import { localeHref, type Locale } from "@/lib/i18n";
import { ButtonLink, Arrow } from "@/components/ui/Button";
import { Glow } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Section";

/**
 * Shared hero. The homepage passes a `visual` for the two-column layout; inner
 * pages omit it and get the same treatment centred on a single column.
 */
export function Hero({
  locale,
  content,
  visual,
  compact = false,
}: {
  locale: Locale;
  content: HeroContent;
  visual?: ReactNode;
  compact?: boolean;
}) {
  return (
    <section
      className={`relative overflow-hidden px-5 sm:px-8 md:px-10 ${
        compact ? "pt-14 pb-16 md:pt-20 md:pb-20" : "pt-16 pb-20 md:pt-25 md:pb-30"
      }`}
    >
      <div className="grid-backdrop grid-backdrop--hero" />
      <Glow
        className="-top-25 start-1/2 -translate-x-1/2 rtl:translate-x-1/2"
        color="blue"
        size={800}
        blur={20}
      />
      <Glow className="bottom-0 end-[10%]" color="orange" size={400} blur={30} />

      <div
        className={`relative mx-auto grid max-w-[1200px] items-center gap-12 lg:gap-15 ${
          visual ? "lg:grid-cols-[1.1fr_0.9fr]" : ""
        }`}
      >
        <div className={visual ? "" : "max-w-[820px]"}>
          {content.eyebrow ? (
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue/25 bg-blue/10 px-3.5 py-1.5">
              <span aria-hidden className="size-1.5 rounded-full bg-blue" />
              <Eyebrow tone="blue" className="tracking-[0.08em]">
                {content.eyebrow}
              </Eyebrow>
            </div>
          ) : null}

          <h1 className="m-0 mb-6 font-display text-[clamp(34px,5.5vw,72px)] font-bold leading-[1.04] tracking-[-0.03em] text-balance text-white">
            {content.title}
            {content.titleAccent ? (
              <span className="text-gradient-orange">{content.titleAccent}</span>
            ) : null}
          </h1>

          <p className="m-0 mb-9 max-w-[560px] text-[17px] leading-[1.6] text-muted text-pretty md:text-[18px]">
            {content.copy}
          </p>

          {content.ctas?.length ? (
            <div className="mb-8 flex flex-wrap gap-3">
              {content.ctas.map((cta) => (
                <ButtonLink
                  key={cta.href + cta.label}
                  href={localeHref(locale, cta.href)}
                  variant={cta.variant ?? "primary"}
                >
                  {cta.label}
                  {(cta.variant ?? "primary") === "primary" ? (
                    <Arrow className="text-lg" />
                  ) : null}
                </ButtonLink>
              ))}
            </div>
          ) : null}

          {content.trustLine?.length ? (
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[13px] text-faint">
              {content.trustLine.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span aria-hidden className="size-1 rounded-full bg-blue" />
                  {item}
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {visual}
      </div>
    </section>
  );
}
