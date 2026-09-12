"use client";

import { useState } from "react";
import type { FormField } from "@/content/types";
import { Button } from "@/components/ui/Button";

const inputClass =
  "w-full rounded-[10px] border border-white/15 bg-white/6 px-4 py-3 text-[15px] text-text placeholder:text-fainter focus:border-blue focus:outline-none";

/**
 * Renders a field list from the content dictionary.
 *
 * There is no backend yet, so submission is handled in the browser: the form
 * validates natively, then swaps to the success message the copy deck
 * specifies. The notice under the button says so plainly — nothing is sent or
 * stored. Point `action` at a real endpoint when one exists.
 */
export function LeadForm({
  fields,
  submitLabel,
  successMessage,
  consent,
  demoNotice,
  requiredLabel,
  optionalLabel,
  selectPlaceholder,
  idPrefix,
}: {
  fields: FormField[];
  submitLabel: string;
  successMessage: string;
  consent?: string;
  demoNotice: string;
  requiredLabel: string;
  optionalLabel: string;
  selectPlaceholder: string;
  idPrefix: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-green/30 bg-green/10 p-8 text-[15px] leading-relaxed text-text"
      >
        {successMessage}
      </div>
    );
  }

  return (
    <form
      noValidate={false}
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      className="flex flex-col gap-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => {
          const id = `${idPrefix}-${field.name}`;
          const isWide = field.type === "textarea";

          return (
            <div key={field.name} className={isWide ? "sm:col-span-2" : ""}>
              <label
                htmlFor={id}
                className="mb-2 flex items-baseline gap-2 text-[13px] font-medium text-muted"
              >
                {field.label}
                <span className="font-mono text-[11px] text-fainter">
                  {field.required ? requiredLabel : optionalLabel}
                </span>
              </label>

              {field.type === "textarea" ? (
                <textarea
                  id={id}
                  name={field.name}
                  required={field.required}
                  rows={5}
                  className={`${inputClass} resize-y`}
                />
              ) : field.type === "select" ? (
                <select
                  id={id}
                  name={field.name}
                  required={field.required}
                  defaultValue=""
                  className={inputClass}
                >
                  <option value="" disabled>
                    {selectPlaceholder}
                  </option>
                  {field.options?.map((option) => (
                    <option key={option} value={option} className="bg-ink-3">
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={id}
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  className={inputClass}
                />
              )}
            </div>
          );
        })}
      </div>

      {consent ? (
        <label className="flex items-start gap-3 text-[13px] leading-[1.6] text-dim">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-1 size-4 shrink-0 accent-[#ff7a29]"
          />
          <span>{consent}</span>
        </label>
      ) : null}

      <div>
        <Button type="submit" variant="primary">
          {submitLabel}
        </Button>
        <p className="mt-4 mb-0 text-xs text-fainter">{demoNotice}</p>
      </div>
    </form>
  );
}
