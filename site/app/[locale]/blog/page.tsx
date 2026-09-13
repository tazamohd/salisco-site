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
  return getDictionary(locale).blog.meta;
}

export default async function BlogPage({ params }: Params) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const { blog } = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} content={blog.hero} compact />

      <Section background="fade-down" className="border-t border-white/4">
        <div className="mb-12 flex flex-wrap gap-2">
          {blog.categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-white/10 bg-white/4 px-4 py-2 text-[13px] text-muted"
            >
              {category}
            </span>
          ))}
        </div>

        {/*
          Articles are planned, not written. They render as titled placeholders
          marked "coming soon" rather than links to pages that do not exist.
        */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {blog.articles.map((article) => (
            <article
              key={article.title}
              className="surface flex min-h-52 flex-col rounded-2xl border border-white/6 p-7"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="eyebrow font-mono text-[11px] tracking-[0.1em] text-faint">
                  {article.category}
                </span>
                <span className="rounded-full bg-orange/12 px-2.5 py-1 font-mono text-[10px] tracking-[0.08em] text-orange-300">
                  {blog.comingSoonLabel}
                </span>
              </div>
              <h2 className="m-0 font-display text-[18px] leading-[1.4] font-semibold text-white">
                {article.title}
              </h2>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
