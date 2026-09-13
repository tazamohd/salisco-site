import Link from "next/link";

/**
 * Bilingual by design: a not-found render cannot read route params, and this
 * site serves two languages, so both are offered rather than guessing.
 */
export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-5 py-24 text-center">
      <div>
        <div className="mb-4 font-mono text-[13px] tracking-[0.15em] text-orange">
          404
        </div>
        <h1 className="m-0 mb-4 font-display text-[clamp(28px,4vw,44px)] font-bold text-white">
          Page not found
          <span className="mx-3 text-fainter">·</span>
          <span lang="ar">الصفحة غير موجودة</span>
        </h1>
        <p className="m-0 mb-8 text-[15px] text-muted">
          The page you are looking for may have moved.
          <span className="mx-2 text-fainter">·</span>
          <span lang="ar">قد تكون الصفحة التي تبحث عنها قد نُقلت.</span>
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/en"
            className="rounded-[10px] bg-orange px-6 py-3 text-[15px] font-semibold text-ink no-underline hover:text-ink"
          >
            Back to home
          </Link>
          <Link
            href="/ar"
            lang="ar"
            className="rounded-[10px] border border-white/15 bg-white/6 px-6 py-3 text-[15px] font-medium text-white no-underline hover:text-white"
          >
            العودة إلى الرئيسية
          </Link>
        </div>
      </div>
    </section>
  );
}
