import Link from "next/link";
import type { SolutionCard } from "@/content/types";
import { localeHref, type Locale } from "@/lib/i18n";
import { Arrow } from "@/components/ui/Button";

/* Card tones lifted from the prototype's three gradient/border pairings. */
const tones = {
  blue: {
    background:
      "linear-gradient(160deg, rgba(30, 63, 160, 0.15) 0%, rgba(15, 25, 50, 0.6) 60%)",
    borderColor: "rgba(74, 127, 214, 0.2)",
  },
  orange: {
    background:
      "linear-gradient(160deg, rgba(255, 122, 41, 0.12) 0%, rgba(15, 25, 50, 0.6) 60%)",
    borderColor: "rgba(255, 122, 41, 0.25)",
  },
  silver: {
    background:
      "linear-gradient(160deg, rgba(192, 200, 214, 0.08) 0%, rgba(15, 25, 50, 0.6) 60%)",
    borderColor: "rgba(192, 200, 214, 0.2)",
  },
} as const;

const kickerTone = {
  blue: "text-faint",
  orange: "text-orange-300",
  silver: "text-silver",
} as const;

export function SolutionsGrid({
  locale,
  cards,
}: {
  locale: Locale;
  cards: SolutionCard[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <Link
          key={card.href}
          href={localeHref(locale, card.href)}
          className="group block text-inherit no-underline hover:text-inherit"
        >
          <article
            style={{ ...tones[card.tone], borderWidth: 1, borderStyle: "solid" }}
            className="flex h-full min-h-80 flex-col rounded-[20px] p-8 transition-transform duration-200 group-hover:-translate-y-1"
          >
            <div className="mb-6 flex items-center justify-between gap-3">
              <div
                className={`eyebrow font-mono text-[11px] tracking-[0.1em] ${kickerTone[card.tone]}`}
              >
                {card.index} · {card.kicker}
              </div>
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-orange">
                <Arrow />
              </div>
            </div>
            <h3 className="m-0 mb-3 font-display text-[22px] font-semibold text-white">
              {card.title}
            </h3>
            <p className="m-0 flex-1 text-sm leading-[1.6] text-dim">{card.copy}</p>
            <div className="mt-6 flex items-center gap-2 text-[13px] font-semibold text-orange">
              {card.cta}
              <Arrow />
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}
