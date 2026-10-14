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
      <summary className="grid cursor-pointer list-none grid-cols-[minmax(0,1fr)_auto] items-start gap-x-4 gap-y-2 text-left md:grid-cols-12 md:items-center md:gap-6">
        <span className="col-start-1 md:col-span-6 lg:col-span-5">
          {/* A heading for screen-reader navigation; <summary> only allows
              phrasing content inside this wrapper, so it's a role, not <h3>. */}
          <span
            role="heading"
            aria-level={3}
            className="block font-display text-[clamp(1.375rem,2.2vw,1.75rem)] font-medium leading-[1.15] tracking-tight text-ink"
          >
            {tr(entry.company)}
          </span>
          <span className="mt-1.5 block text-ui text-ink/65">{tr(entry.role)}</span>
        </span>

        <span className="col-start-1 font-mono text-eyebrow uppercase tracking-wideish text-ink/65 md:col-span-5 md:col-start-auto lg:col-span-3">
          {tr(entry.dates)}
        </span>

        <span className="hidden flex-wrap gap-2 lg:col-span-3 lg:flex">
          {entry.focus.map((f) => (
            <span
              key={f.en}
              className="whitespace-nowrap border border-accent-deep/25 bg-accent-deep/[0.06] px-2.5 py-1 font-mono text-label uppercase tracking-wideish text-accent-deep"
            >
              {tr(f)}
            </span>
          ))}
        </span>

        <span className="col-start-2 row-span-2 row-start-1 flex justify-end md:col-span-1 md:col-start-auto md:row-span-1 md:row-start-auto">
          <span className="flex h-9 w-9 items-center justify-center border border-ink/20 text-ink/70 transition-colors duration-300 group-hover:border-accent group-hover:text-accent">
            <span className="text-[1rem] leading-none transition-transform duration-300 group-open:rotate-45" aria-hidden>
              +
            </span>
            <span className="sr-only">
              {tr({ en: "Show or hide details", es: "Mostrar u ocultar detalles" })}
            </span>
          </span>
        </span>
      </summary>

      <div className="mt-5 grid grid-cols-1 gap-5 text-left md:grid-cols-12 md:gap-6">
        <div className="md:col-span-8">
          <p className="max-w-xl text-body text-ink/65 md:max-w-none">
            {tr(entry.description)}
          </p>
          <ul className="mt-4 max-w-xl space-y-2 md:max-w-none">
            {entry.highlights.map((h) => (
              <li
                key={h.en}
                className="flex gap-3 text-body-sm text-ink/65"
              >
                <span className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-accent-deep/50" />
                <span className="min-w-0">{tr(h)}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap content-start gap-2 md:col-span-4">
          {/* Below 1024px the focus tags live here instead of in the summary row */}
          {entry.focus.map((f) => (
            <span
              key={f.en}
              className="border border-accent-deep/25 bg-accent-deep/[0.06] px-2.5 py-1 font-mono text-label uppercase tracking-wideish text-accent-deep lg:hidden"
            >
              {tr(f)}
            </span>
          ))}
          {entry.tech.map((item) => (
            <span
              key={typeof item === "string" ? item : item.en}
              className="border border-ink/12 px-2.5 py-1 font-mono text-label uppercase tracking-wideish text-ink/65"
            >
              {tr(item)}
            </span>
          ))}
        </div>
      </div>
    </details>
  );
}
