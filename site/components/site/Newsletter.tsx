"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import type { Dictionary } from "@/content/types";

/**
 * No backend exists yet, so this validates and acknowledges locally and says so.
 * Wire `onSubmit` to a real endpoint before launch.
 */
export function Newsletter({ dict }: { dict: Dictionary }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const { newsletter } = dict.footer;

  return (
    <div className="surface rounded-2xl border border-white/6 p-7 md:p-8">
      <h2 className="font-display text-[20px] font-semibold text-white m-0 mb-2">
        {newsletter.title}
      </h2>
      <p className="m-0 mb-5 max-w-[520px] text-sm leading-[1.6] text-dim">
        {newsletter.copy}
      </p>

      {done ? (
        <p role="status" className="m-0 text-sm font-medium text-green">
          {newsletter.success}
        </p>
      ) : (
        <form
          className="flex flex-col gap-3 sm:flex-row"
          onSubmit={(event) => {
            event.preventDefault();
            setDone(true);
          }}
        >
          <label htmlFor="newsletter-email" className="sr-only">
            {newsletter.placeholder}
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={newsletter.placeholder}
            className="min-w-0 flex-1 rounded-[10px] border border-white/15 bg-white/6 px-4 py-3 text-[15px] text-text placeholder:text-fainter focus:border-blue focus:outline-none"
          />
          <Button type="submit" variant="primary">
            {newsletter.submit}
          </Button>
        </form>
      )}

      <p className="mt-4 mb-0 text-xs text-fainter">{dict.common.formDemoNotice}</p>
    </div>
  );
}
