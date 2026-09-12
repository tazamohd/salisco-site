import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/content";
import { isLocale } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { Hero } from "@/components/sections/Hero";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return getDictionary(locale).download.meta;
}

export default async function DownloadPage({ params }: Params) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const { download } = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} content={download.hero} compact />

      <Section background="fade-down" className="border-t border-white/4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            {/*
              The apps are unreleased, so these are inert placeholders rather
              than links. They become anchors once store URLs are confirmed.
            */}
            <div className="flex flex-wrap gap-4">
              {download.storeButtons.map((store) => (
                <div
                  key={store.label}
                  aria-disabled="true"
                  className="flex min-w-[190px] cursor-not-allowed items-center gap-3 rounded-[14px] border border-white/12 bg-white/5 px-5 py-3.5 opacity-70"
                >
                  <span aria-hidden className="text-2xl">
                    ⬇
                  </span>
                  <span className="flex flex-col text-start">
                    <span className="text-[11px] text-faint">{store.sublabel}</span>
                    <span className="font-display text-[16px] font-semibold text-white">
                      {store.label}
                    </span>
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-6 mb-0 max-w-[460px] rounded-xl border border-orange/25 bg-orange/8 px-5 py-4 text-[13px] leading-[1.6] text-orange-300">
              {download.availabilityNote}
            </p>
          </div>

          <div className="flex flex-col items-center gap-5">
            <div className="flex size-48 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              <span aria-hidden className="font-mono text-[11px] text-fainter">
                QR
              </span>
            </div>
            <p className="m-0 max-w-[300px] text-center text-[13px] leading-[1.6] text-faint">
              {download.qrCopy}
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
