import type { HomeContent } from "@/content/types";

const barHeights = [40, 60, 30, 80, 55, 90, 70, 45, 65, 50, 75, 40];
/** The one orange bar in the prototype's fleet sparkline. */
const accentBar = 5;

const cardShell =
  "surface-solid rounded-2xl border border-white/8 shadow-[0_24px_60px_rgba(0,0,0,0.5)] backdrop-blur-[20px]";

/**
 * The three floating dashboard cards from the hero.
 *
 * Above `lg` this reproduces the prototype's absolute composition inside a
 * 520px stage; below that the cards fall into a plain stack, since the overlap
 * only reads at desktop width. Offsets use logical inset properties so the
 * composition mirrors in Arabic rather than colliding with the text column.
 */
export function HeroVisual({ content }: { content: HomeContent["heroVisual"] }) {
  return (
    <div
      aria-hidden
      className="relative flex flex-col gap-4 lg:block lg:h-[520px]"
    >
      {/* Organic blurred "S" mark */}
      <div
        className="pointer-events-none absolute top-5 end-5 hidden size-80 opacity-15 blur-[8px] animate-float-s lg:block"
        style={{
          background:
            "conic-gradient(from 45deg, #1e3fa0, #4a7fd6, #c0c8d6, #4a7fd6, #1e3fa0)",
          borderRadius: "40% 60% 55% 45% / 50% 45% 55% 50%",
        }}
      />

      {/* Booking card */}
      <div
        className={`${cardShell} p-5 lg:absolute lg:top-0 lg:start-0 lg:w-80 lg:animate-slide-up`}
      >
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="font-mono text-[11px] tracking-[0.05em] text-faint">
            {content.booking.reference}
          </div>
          <div className="rounded-full bg-green/15 px-2 py-[3px] text-[11px] font-medium text-green">
            {content.booking.status}
          </div>
        </div>
        <div className="mb-1 font-display text-[18px] font-semibold text-white">
          {content.booking.title}
        </div>
        <div className="mb-4 text-[13px] text-faint">{content.booking.subtitle}</div>
        <div className="mb-2 flex gap-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-[3px] ${
                i < 3 ? "bg-blue" : i === 3 ? "bg-blue/30" : "bg-blue/15"
              }`}
            />
          ))}
        </div>
        <div className="flex justify-between text-xs text-faint">
          <span>{content.booking.step}</span>
          <span className="text-blue">{content.booking.cost}</span>
        </div>
      </div>

      {/* Fleet card */}
      <div
        className={`${cardShell} p-5 lg:absolute lg:top-[200px] lg:end-0 lg:w-[300px] lg:animate-[slideUp_0.8s_0.2s_ease-out_backwards]`}
      >
        <div className="mb-3 font-mono text-[11px] tracking-[0.05em] text-faint">
          {content.fleet.label}
        </div>
        <div className="mb-4 grid grid-cols-2 gap-3">
          <div>
            <div className="font-display text-[28px] font-bold text-white">
              {content.fleet.activeValue}
            </div>
            <div className="text-[11px] text-faint">{content.fleet.activeLabel}</div>
          </div>
          <div>
            <div className="font-display text-[28px] font-bold text-orange">
              {content.fleet.maintenanceValue}
            </div>
            <div className="text-[11px] text-faint">
              {content.fleet.maintenanceLabel}
            </div>
          </div>
        </div>
        <div className="flex h-11 items-end gap-[3px]">
          {barHeights.map((height, i) => (
            <div
              key={i}
              style={{ height: `${height}%` }}
              className={`flex-1 rounded-sm ${i === accentBar ? "bg-orange" : "bg-blue"}`}
            />
          ))}
        </div>
      </div>

      {/* Part card */}
      <div
        className={`${cardShell} p-4 lg:absolute lg:bottom-0 lg:start-10 lg:w-70 lg:animate-[slideUp_0.8s_0.4s_ease-out_backwards]`}
      >
        <div className="flex items-center gap-3">
          <div className="flex size-13 shrink-0 items-center justify-center rounded-[10px] bg-linear-[135deg] from-[#1a2a4a] to-[#2a3a5a] text-[22px]">
            ⚙︎
          </div>
          <div className="min-w-0 flex-1">
            <div className="mb-0.5 text-[13px] font-semibold text-white">
              {content.part.name}
            </div>
            <div className="font-mono text-[11px] text-faint">{content.part.sku}</div>
          </div>
          <div className="text-end">
            <div className="font-display text-sm font-semibold text-white">
              {content.part.price}
            </div>
            <div className="text-[10px] text-green">{content.part.stock}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
