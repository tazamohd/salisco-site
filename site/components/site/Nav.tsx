"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Dictionary } from "@/content/types";
import { localeHref, localeSwitchLabel, otherLocale, type Locale } from "@/lib/i18n";
import { ButtonLink } from "@/components/ui/Button";

export function Nav({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // The mobile drawer closes from the link that was clicked rather than from an
  // effect on `pathname` — same result, without a second render pass.
  const closeMenu = () => setOpen(false);

  // The current path without its locale prefix, so the toggle keeps the page.
  const pathWithoutLocale = pathname.replace(/^\/(en|ar)(?=\/|$)/, "") || "/";
  const swapLocale = otherLocale(locale);

  const isActive = (href: string) =>
    pathWithoutLocale === href || pathWithoutLocale.startsWith(`${href}/`);

  return (
    <nav className="sticky top-0 z-100 flex items-center justify-between gap-4 border-b border-white/6 bg-ink/85 px-5 py-4 backdrop-blur-[20px] sm:px-8 md:px-10">
      <div className="flex items-center gap-8 xl:gap-12">
        <Link
          href={localeHref(locale, "/")}
          className="flex shrink-0 items-center gap-2.5 text-white no-underline hover:text-white"
        >
          <Image
            src="/logo.webp"
            alt="SALISCO"
            width={40}
            height={40}
            priority
            className="block size-10 object-contain"
          />
          <span className="font-display text-xl font-bold tracking-[0.08em]">
            SALISCO
          </span>
        </Link>

        <div className="hidden items-center gap-7 text-sm text-muted lg:flex">
          {dict.nav.links.map((link) => (
            <Link
              key={link.href}
              href={localeHref(locale, link.href)}
              className={`no-underline transition-colors hover:text-white ${
                isActive(link.href) ? "text-white" : "text-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-3">
        <Link
          href={localeHref(swapLocale, pathWithoutLocale)}
          lang={swapLocale}
          title={dict.nav.languageSwitchTitle}
          className="rounded-lg border border-white/15 px-3 py-2 text-[13px] font-medium text-text no-underline transition-colors hover:bg-white/6 hover:text-white"
        >
          {localeSwitchLabel[locale]}
        </Link>

        {/*
          Wrapped rather than given `hidden` directly: ButtonLink already sets
          `inline-flex`, and two display utilities on one element resolve by
          stylesheet order, not class order — the button would stay visible.
        */}
        <div className="hidden items-center gap-3 sm:flex">
          <ButtonLink
            href={localeHref(locale, "/register")}
            variant="secondary"
            size="sm"
          >
            {dict.nav.signIn}
          </ButtonLink>

          <ButtonLink
            href={localeHref(locale, "/register")}
            variant="primary"
            size="sm"
            className="shadow-[0_4px_16px_rgba(255,122,41,0.35)]"
          >
            {dict.nav.getStarted}
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? dict.nav.menuClose : dict.nav.menuOpen}
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 cursor-pointer items-center justify-center rounded-lg border border-white/15 bg-transparent text-white lg:hidden"
        >
          <span aria-hidden className="text-lg leading-none">
            {open ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-white/6 bg-ink/98 px-5 py-4 backdrop-blur-[20px] sm:px-8 lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {dict.nav.links.map((link) => (
              <Link
                key={link.href}
                href={localeHref(locale, link.href)}
                onClick={closeMenu}
                className={`rounded-lg px-3 py-3 text-[15px] no-underline ${
                  isActive(link.href) ? "bg-white/6 text-white" : "text-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex gap-3 sm:hidden">
            <ButtonLink
              href={localeHref(locale, "/register")}
              variant="secondary"
              size="sm"
              className="flex-1"
              onClick={closeMenu}
            >
              {dict.nav.signIn}
            </ButtonLink>
            <ButtonLink
              href={localeHref(locale, "/register")}
              variant="primary"
              size="sm"
              className="flex-1"
              onClick={closeMenu}
            >
              {dict.nav.getStarted}
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
