import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import type { CtaVariant } from "@/content/types";

type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[10px] font-sans cursor-pointer transition-colors duration-150 no-underline";

/* Exact values from the prototype's inline styles. */
const variants: Record<CtaVariant, string> = {
  primary:
    "bg-orange text-ink font-semibold shadow-[0_8px_24px_rgba(255,122,41,0.35)] hover:bg-orange-400 hover:text-ink",
  secondary:
    "bg-white/6 text-white border border-white/15 font-medium hover:bg-white/10 hover:text-white",
  ghost:
    "bg-transparent text-muted border border-white/10 font-medium hover:bg-white/5 hover:text-white",
};

const sizes: Record<Size, string> = {
  sm: "px-[18px] py-[9px] text-[13px] rounded-lg",
  md: "px-6 py-3.5 text-[15px]",
  lg: "px-7 py-4 text-[15px]",
};

interface ButtonBaseProps {
  variant?: CtaVariant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: ButtonBaseProps & { href: string } & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: ButtonBaseProps & ComponentProps<"button">) {
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

/** The design's → glyph. Mirrors automatically under RTL. */
export function Arrow({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`dir-flip ${className}`}>
      →
    </span>
  );
}
