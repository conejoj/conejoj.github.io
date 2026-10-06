"use client";

import type { ExperienceEntry } from "@/data/experience";
import { useT } from "@/lib/i18n";

interface ExperienceItemProps {
  entry: ExperienceEntry;
  index: number;
}

export default function ExperienceItem({ entry, index }: ExperienceItemProps) {
  const tr = useT();
  return (
    <details className="group border-b border-ink/12 py-7 md:py-8" open={index === 0}>
      <summary className="grid cursor-pointer list-none grid-cols-1 justify-items-center gap-3 text-center md:grid-cols-12 md:items-center md:justify-items-stretch md:gap-6 md:text-left">
        <span className="font-mono text-[13px] text-ink/35 md:col-span-1">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="md:col-span-4">
          <span className="block text-[clamp(1.3rem,2.2vw,1.6rem)] font-medium tracking-tightest text-ink">
            {tr(entry.company)}
          </span>
          <span className="mt-1 block text-[14px] text-ink/55">{tr(entry.role)}</span>
        </span>

        <span className="font-mono text-[12px] uppercase tracking-wideish text-ink/45 md:col-span-3">
          {tr(entry.dates)}
        </span>

        <span className="flex flex-wrap justify-center gap-2 md:col-span-3 md:justify-start">
          {entry.focus.map((f) => (
            <span
              key={f.en}
              className="border border-accent-deep/25 bg-accent-deep/[0.06] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-accent-deep"
            >
              {tr(f)}
            </span>
          ))}
        </span>

        <span className="mt-1 flex justify-center md:col-span-1 md:mt-0 md:justify-end">
          <span className="flex h-7 w-7 items-center justify-center border border-ink/15 text-ink/50 transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </span>
      </summary>

      <div className="mt-6 grid grid-cols-1 gap-5 text-center md:mt-5 md:grid-cols-12 md:gap-6 md:text-left">
        <div className="hidden md:col-span-1 md:block" />
        <div className="md:col-span-7">
          <p className="mx-auto max-w-xl text-[14.5px] leading-relaxed text-ink/65 md:mx-0 md:max-w-none">
            {tr(entry.description)}
          </p>
          <ul className="mx-auto mt-4 max-w-xl space-y-2 text-left md:mx-0 md:max-w-none">
            {entry.highlights.map((h) => (
              <li
                key={h.en}
                className="flex gap-3 text-[14px] leading-relaxed text-ink/60"
              >
                <span className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-accent-deep/50" />
                <span>{tr(h)}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap content-start justify-center gap-2 md:col-span-4 md:justify-start">
          {entry.tech.map((item) => (
            <span
              key={typeof item === "string" ? item : item.en}
              className="border border-ink/12 px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-wide text-ink/55"
            >
              {tr(item)}
            </span>
          ))}
        </div>
      </div>
    </details>
  );
}
