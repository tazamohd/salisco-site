import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/content/types";
import { localeHref, type Locale } from "@/lib/i18n";
import { logoSrc } from "@/lib/asset";
import { Newsletter } from "./Newsletter";

const socials = [
  { glyph: "𝕏", label: "X" },
  { glyph: "in", label: "LinkedIn" },
  { glyph: "◉", label: "Instagram" },
];

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <footer className="border-t border-white/6 bg-ink-deep px-5 pt-16 pb-8 sm:px-8 md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12">
          <Newsletter dict={dict} />
        </div>

        <div className="mb-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <Image
                src={logoSrc}
                alt="SALISCO"
                width={36}
                height={36}
                className="block size-9 object-contain"
              />
              <span className="font-display text-[18px] font-bold tracking-[0.08em] text-white">
                SALISCO
              </span>
            </div>
            <p className="m-0 mb-5 max-w-[300px] text-[13px] leading-[1.6] text-faint">
              {dict.footer.description}
            </p>
            <div className="flex gap-2">
              {socials.map((social) => (
                <span
                  key={social.label}
                  aria-label={social.label}
                  title={social.label}
                  className="flex size-8 items-center justify-center rounded-lg border border-white/10 text-[13px] text-faint"
                >
                  <span aria-hidden>{social.glyph}</span>
                </span>
              ))}
            </div>
          </div>

          {dict.footer.groups.map((group) => (
            <div key={group.title}>
              <h2 className="eyebrow m-0 mb-4 font-mono text-[11px] tracking-[0.1em] text-fainter">
                {group.title}
              </h2>
              <div className="flex flex-col gap-2.5 text-[13px]">
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={localeHref(locale, link.href)}
                    className="text-muted no-underline transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/6 pt-6 font-mono text-xs text-fainter">
          <div>{dict.footer.copyright}</div>
          <div>{dict.footer.tagline}</div>
        </div>
      </div>
    </footer>
  );
}
