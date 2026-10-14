"use client";

import { useEffect, useId, useState, type ReactNode } from "react";
import Reveal from "@/lib/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { leadershipEntries } from "@/data/leadership";
import type { LeadershipEntry } from "@/data/leadership";
import { useT } from "@/lib/i18n";

const ICONS: Record<LeadershipEntry["icon"], ReactNode> = {
  flag: (
    <path
      d="M6 21V4M6 5h10l-2 3.5L16 12H6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  globe: (
    <>
      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3 11h16M11 3c2.2 2.4 3.5 5 3.5 8s-1.3 5.6-3.5 8c-2.2-2.4-3.5-5-3.5-8s1.3-5.6 3.5-8z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </>
  ),
  people: (
    <>
      <circle cx="7.5" cy="8.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15.5" cy="8.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M2 19c0-2.8 2.5-5 5.5-5s5.5 2.2 5.5 5M9.5 19c0-2.8 2.5-5 5.5-5s5.5 2.2 5.5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </>
  ),
  home: (
    <path
      d="M3 10.5 11 4l8 6.5M5 9v9h4.5v-5h3v5H17V9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  compass: (
    <>
      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M14 8l-2 4.5L7.5 14.5 9.5 10 14 8z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </>
  ),
};

/**
 * Leadership, mentoring, multicultural, and global-program experience,
 * presented as a borderless two-column grid (icon + meta + copy) so it
 * reads as an editorial complement to Experience rather than a second
 * résumé list.
 */
export default function Leadership() {
  const t = useT();
  return (
    <section id="leadership" className="border-b border-ink/10 bg-stone-100">
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">
        <SectionHeader
          eyebrow={{ en: "Leadership & Global Experience", es: "Liderazgo y Experiencia Global" }}
          title={{ en: "Leadership beyond technology.", es: "Liderazgo más allá de la tecnología." }}
          subtitle={{
            en: "Beyond software, I've led student government and a multicultural organization, served in residence life, mentored students, and joined a global leadership program.",
            es: "Más allá del software, he liderado el gobierno estudiantil y una organización multicultural, he servido en vida residencial, he sido mentor de estudiantes y participé en un programa global de liderazgo.",
          }}
        />

        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-4 sm:gap-6 md:mt-16 md:gap-7">
          {leadershipEntries.map((entry, i) => (
            <Reveal
              key={entry.title.en}
              className={`reveal-card sm:col-span-2 ${
                i === leadershipEntries.length - 1 && i % 2 === 0 ? "sm:col-start-2" : ""
              }`}
              delay={i * 110}
            >
              <LeadershipCard entry={entry} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * One leadership entry. On phones it's a compact row (icon, dates, title)
 * that opens to show the details, like Experience; from 640px up the full
 * card is always shown. Content renders open until hydration, so it's
 * readable without JavaScript.
 */
function LeadershipCard({ entry }: { entry: LeadershipEntry }) {
  const t = useT();
  const id = useId();
  const [open, setOpen] = useState<boolean | null>(null);
  useEffect(() => setOpen(false), []);

  const icon = (size: string) => (
    <span
      className={`flex ${size} shrink-0 items-center justify-center border border-accent/25 bg-accent/[0.08] text-accent-deep`}
    >
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none" aria-hidden>
        {ICONS[entry.icon]}
      </svg>
    </span>
  );

  return (
    <div className="relative flex h-full flex-col border border-ink/12 bg-cream p-5 shadow-[0_1px_2px_rgba(23,23,23,0.04)] sm:p-6 lg:p-8">
      {/* Phone header: the whole row toggles the details */}
      <h3 className="sm:hidden">
        <button
          type="button"
          aria-expanded={open !== false}
          aria-controls={id}
          onClick={() => setOpen((v) => !(v ?? true))}
          className="group flex w-full items-center gap-4 text-left"
        >
          {icon("h-10 w-10")}
          <span className="min-w-0 flex-1">
            <span className="block font-display text-[1.2rem] font-medium leading-tight tracking-tight text-ink">
              {t(entry.title)}
            </span>
            {entry.meta && (
              <span className="mt-1.5 block font-mono text-label uppercase tracking-wideish text-ink/65">
                {/* "Org · years" as two lines, so the dot never hangs */}
                {t(entry.meta)
                  .split(" · ")
                  .map((part, i) => (
                    <span key={part} className="block">
                      {i > 0 && <span className="sr-only">, </span>}
                      {part}
                    </span>
                  ))}
              </span>
            )}
          </span>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-ink/20 text-ink/70" aria-hidden>
            <span
              className={`text-[1rem] leading-none transition-transform duration-300 ${
                open !== false ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </span>
        </button>
      </h3>

      {/* Card header from 640px up */}
      <div className="hidden sm:block">
        <div className="flex">{icon("h-12 w-12")}</div>
        <div className="mt-6">
          {entry.meta && (
            <p className="font-mono text-label uppercase tracking-wideish text-ink/65">
              {t(entry.meta)}
            </p>
          )}
          <h3 className="mt-1 font-display text-[1.3rem] font-medium leading-tight tracking-tight text-ink">
            {t(entry.title)}
          </h3>
        </div>
      </div>

      <div
        id={id}
        className={`min-w-0 flex-1 ${open === false ? "hidden sm:block" : "mt-4 sm:mt-0"}`}
      >
        {entry.category && (
          <p className="mt-1 font-mono text-label uppercase tracking-wideish text-accent-deep">
            {t(entry.category)}
          </p>
        )}
        <p className="mt-3 text-body-sm text-ink/65">{t(entry.description)}</p>
        <ul className="mt-4 space-y-2 border-t border-ink/10 pt-4">
          {entry.highlights.map((h) => (
            <li key={h.en} className="flex gap-3 text-body-sm text-ink/65">
              <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent-deep/60" />
              <span className="min-w-0">{t(h)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
