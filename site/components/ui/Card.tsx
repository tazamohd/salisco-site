import type { ReactNode } from "react";
import type { Feature } from "@/content/types";

/** The 44px gradient icon tile used across value props, values, and categories. */
export function IconTile({
  glyph,
  accent = false,
  size = 44,
}: {
  glyph: string;
  accent?: boolean;
  size?: number;
}) {
  return (
    <div
      aria-hidden
      style={{ width: size, height: size, fontSize: size * 0.45 }}
      className={`flex items-center justify-center rounded-[10px] text-white ${
        accent
          ? "bg-linear-[135deg] from-orange to-orange-400"
          : "bg-linear-[135deg] from-blue-900 to-blue"
      }`}
    >
      {glyph}
    </div>
  );
}

export function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="surface rounded-2xl border border-white/6 p-7">
      {feature.icon ? (
        <div className="mb-5">
          <IconTile glyph={feature.icon} accent={feature.accent} />
        </div>
      ) : null}
      <h3 className="font-display text-[18px] font-semibold text-white m-0 mb-2">
        {feature.title}
      </h3>
      <p className="m-0 text-sm leading-[1.55] text-dim">{feature.copy}</p>
    </div>
  );
}

export function FeatureGrid({
  features,
  minWidth = 240,
}: {
  features: Feature[];
  minWidth?: number;
}) {
  return (
    <div
      className="grid gap-5"
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(min(${minWidth}px, 100%), 1fr))`,
      }}
    >
      {features.map((feature) => (
        <FeatureCard key={feature.title} feature={feature} />
      ))}
    </div>
  );
}

/** Soft radial light used behind heroes and CTAs. */
export function Glow({
  className = "",
  color = "blue",
  size = 600,
  blur = 40,
}: {
  className?: string;
  color?: "blue" | "orange";
  size?: number;
  blur?: number;
}) {
  const fill =
    color === "blue"
      ? "radial-gradient(circle, rgba(74,127,214,0.22) 0%, rgba(30,63,160,0.10) 40%, transparent 70%)"
      : "radial-gradient(circle, rgba(255,122,41,0.15) 0%, transparent 70%)";

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute ${className}`}
      style={{
        width: size,
        height: size,
        background: fill,
        filter: `blur(${blur}px)`,
      }}
    />
  );
}

/** Hairline-separated stack — the "why SALISCO" list and legal sections. */
export function DividedList({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-px overflow-hidden rounded-2xl border border-white/6 bg-white/6">
      {children}
    </div>
  );
}

export function DividedRow({
  index,
  children,
  accent = false,
}: {
  index?: string;
  children: ReactNode;
  accent?: boolean;
}) {
  return (
    <div className="flex items-start gap-5 bg-ink px-7 py-6">
      {index ? (
        <span
          className={`mt-0.5 font-mono text-[13px] ${accent ? "text-orange" : "text-blue"}`}
        >
          {index}
        </span>
      ) : null}
      <span className="text-[15px] leading-relaxed text-text">{children}</span>
    </div>
  );
}
