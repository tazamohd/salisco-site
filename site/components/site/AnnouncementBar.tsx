export function AnnouncementBar({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center gap-2.5 border-b border-white/6 bg-linear-to-r from-[#0a1a3a] via-[#0f2456] to-[#0a1a3a] px-5 py-2.5 text-center text-[13px] tracking-[0.02em] text-muted">
      <span
        aria-hidden
        className="inline-block size-1.5 shrink-0 rounded-full bg-orange animate-pulse-dot"
      />
      {text}
    </div>
  );
}
