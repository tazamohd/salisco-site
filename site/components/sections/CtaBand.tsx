import type { Cta } from "@/content/types";
import { localeHref, type Locale } from "@/lib/i18n";
import { ButtonLink } from "@/components/ui/Button";

/** The full-bleed closing CTA: masked grid, orange glow, centred stack. */
export function CtaBand({
  locale,
  title,
  copy,
  ctas,
  size = "large",
}: {
  locale: Locale;
  title: string;
  copy?: string;
  ctas: Cta[];
  size?: "large" | "compact";
}) {
  return (
    <section
      className={`relative overflow-hidden bg-ink px-5 sm:px-8 md:px-10 ${
        size === "large" ? "py-20 md:py-30" : "py-16 md:py-20"
      }`}
    >
      <div className="grid-backdrop grid-backdrop--cta" />
      <div
        aria-hidden
        className="pointer-events-none absolute start-1/2 top-1/2 size-[700px] -translate-x-1/2 -translate-y-1/2 rtl:translate-x-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 122, 41, 0.12), transparent 60%)",
          filter: "blur(40px)",
        }}
      />
      <div className="relative mx-auto max-w-[780px] text-center">
        <h2
          className={`m-0 mb-6 font-display font-bold leading-[1.05] tracking-[-0.03em] text-balance text-white ${
            size === "large"
              ? "text-[clamp(30px,5vw,64px)]"
              : "text-[clamp(26px,4vw,44px)]"
          }`}
        >
          {title}
        </h2>
        {copy ? (
          <p className="m-0 mb-10 text-[17px] leading-[1.6] text-muted text-pretty md:text-[18px]">
            {copy}
          </p>
        ) : (
          <div className="mb-10" />
        )}
        <div className="flex flex-wrap justify-center gap-3">
          {ctas.map((cta) => (
            <ButtonLink
              key={cta.href + cta.label}
              href={localeHref(locale, cta.href)}
              variant={cta.variant ?? "primary"}
              size="lg"
            >
              {cta.label}
            </ButtonLink>
          ))}
        </div>
      </div>
    </section>
  );
}
