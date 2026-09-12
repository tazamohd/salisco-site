import type { PricingTier } from "@/content/types";
import { localeHref, type Locale } from "@/lib/i18n";
import { ButtonLink } from "@/components/ui/Button";

export function PricingGrid({
  locale,
  tiers,
}: {
  locale: Locale;
  tiers: PricingTier[];
}) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {tiers.map((tier) => (
        <div
          key={tier.name}
          className={`relative rounded-[20px] p-9 ${
            tier.popular
              ? "border border-blue bg-linear-to-b from-blue-900/30 to-[rgba(15,25,50,0.5)] shadow-[0_20px_60px_rgba(30,63,160,0.25)]"
              : "surface border border-white/8"
          }`}
        >
          {tier.popular && tier.popularLabel ? (
            <div className="absolute -top-3 start-9 rounded-full bg-orange px-2.5 py-1 font-mono text-[11px] font-bold tracking-[0.08em] text-ink">
              {tier.popularLabel}
            </div>
          ) : null}

          <div
            className={`eyebrow mb-2 font-mono text-xs tracking-[0.1em] ${
              tier.popular ? "text-blue-300" : "text-faint"
            }`}
          >
            {tier.tierLabel}
          </div>
          <h3 className="m-0 mb-3 font-display text-[26px] font-bold text-white">
            {tier.name}
          </h3>
          <p
            className={`m-0 mb-6 min-h-11 text-sm leading-[1.55] ${
              tier.popular ? "text-muted" : "text-dim"
            }`}
          >
            {tier.copy}
          </p>

          <ul
            className={`m-0 mb-7 list-none border-t p-0 pt-6 text-sm leading-[1.7] ${
              tier.popular
                ? "border-white/15 text-text"
                : "border-white/8 text-muted"
            }`}
          >
            {tier.features.map((feature) => (
              <li key={feature} className="flex gap-2">
                <span aria-hidden className="text-orange">
                  •
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <ButtonLink
            href={localeHref(locale, tier.cta.href)}
            variant={tier.cta.variant ?? "secondary"}
            className="w-full"
          >
            {tier.cta.label}
          </ButtonLink>
        </div>
      ))}
    </div>
  );
}
