import type { ReactNode } from "react";

/**
 * Section rhythm from the prototype: 100px block padding, 40px inline padding
 * (tightened on small screens), 1200px content column.
 */
export function Section({
  id,
  children,
  className = "",
  background = "base",
  padding = "default",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: "base" | "fade-down" | "deep" | "none";
  padding?: "default" | "large" | "compact";
}) {
  const backgrounds = {
    base: "bg-ink",
    "fade-down": "bg-linear-to-b from-ink to-ink-2",
    deep: "bg-linear-to-b from-ink to-ink-3",
    none: "",
  } as const;

  const paddings = {
    default: "py-16 md:py-25",
    large: "py-20 md:py-30",
    compact: "py-12 md:py-20",
  } as const;

  return (
    <section
      id={id}
      className={`px-5 sm:px-8 md:px-10 ${paddings[padding]} ${backgrounds[background]} ${className}`}
    >
      <div className="mx-auto max-w-[1200px]">{children}</div>
    </section>
  );
}

/** The mono all-caps label above section headings, e.g. "— SOLUTIONS". */
export function Eyebrow({
  children,
  tone = "orange",
  className = "",
}: {
  children: ReactNode;
  tone?: "orange" | "blue" | "faint";
  className?: string;
}) {
  const tones = {
    orange: "text-orange",
    blue: "text-blue-300",
    faint: "text-faint",
  } as const;

  return (
    <div
      className={`eyebrow font-mono text-xs tracking-[0.15em] ${tones[tone]} ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  titleAccent,
  copy,
  align = "start",
  className = "",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  copy?: string;
  align?: "start" | "center";
  className?: string;
  as?: "h1" | "h2";
}) {
  const isH1 = Tag === "h1";
  return (
    <div
      className={`${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow ? <Eyebrow className="mb-3">{eyebrow}</Eyebrow> : null}
      <Tag
        className={`font-display font-bold text-white m-0 text-balance ${
          isH1
            ? "text-[clamp(34px,5.5vw,72px)] leading-[1.04] tracking-[-0.03em]"
            : "text-[clamp(28px,4vw,52px)] leading-[1.05] tracking-[-0.02em]"
        }`}
      >
        {title}
        {titleAccent ? (
          <span className="text-gradient-orange">{titleAccent}</span>
        ) : null}
      </Tag>
      {copy ? (
        <p
          className={`mt-5 mb-0 text-[17px] leading-relaxed text-muted text-pretty ${
            align === "center" ? "mx-auto max-w-[640px]" : ""
          }`}
        >
          {copy}
        </p>
      ) : null}
    </div>
  );
}
