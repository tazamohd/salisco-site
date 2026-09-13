import type { NumberedItem } from "@/content/types";

/**
 * Five hairline-joined panels. The gap-px on a translucent background is what
 * produces the 1px rules between cells in the prototype.
 */
export function StepGrid({ steps }: { steps: NumberedItem[] }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-[20px] border border-white/6 bg-white/3 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        return (
          <div key={step.title} className="bg-ink/60 p-8">
            <div
              className={`mb-3 font-display text-[44px] font-extrabold leading-none ${
                isLast ? "text-gradient-orange-deep" : "text-gradient-blue"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="m-0 mb-2 font-display text-base font-semibold text-white">
              {step.title}
            </h3>
            <p className="m-0 text-[13px] leading-[1.55] text-dim">{step.copy}</p>
          </div>
        );
      })}
    </div>
  );
}
