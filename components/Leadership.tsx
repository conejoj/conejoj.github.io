import type { ReactNode } from "react";
import Reveal from "@/lib/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { leadershipEntries } from "@/data/leadership";
import type { LeadershipEntry } from "@/data/leadership";

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
  return (
    <section id="leadership" className="border-b border-ink/10 bg-stone-100">
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">
        <SectionHeader
          eyebrow="Leadership & Global Experience"
          title="Leadership beyond technology."
          subtitle="My experience extends beyond software development. Through student government, multicultural leadership, mentoring, and international programs, I've had the opportunity to lead teams, organize events, represent diverse communities, and work with people from different backgrounds."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7">
          {leadershipEntries.map((entry, i) => (
            <Reveal key={entry.title} className="reveal-card" delay={i * 110}>
              <div className="group relative flex h-full flex-col border border-ink/12 bg-cream p-7 shadow-[0_1px_2px_rgba(23,23,23,0.04)] transition-all duration-500 ease-out hover:-translate-y-[5px] hover:border-accent/40 hover:shadow-[0_28px_48px_-28px_rgba(23,23,23,0.3)] md:p-8">
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-accent/25 bg-accent/[0.08] text-accent-deep transition-all duration-500 ease-out group-hover:-rotate-3 group-hover:scale-110 group-hover:bg-accent/[0.16]">
                    <svg width="20" height="20" viewBox="0 0 22 22" fill="none" aria-hidden>
                      {ICONS[entry.icon]}
                    </svg>
                  </span>
                  <span className="font-mono text-[11px] text-ink/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-6 min-w-0 flex-1">
                  {entry.meta && (
                    <p className="font-mono text-[11px] uppercase tracking-wideish text-ink/40">
                      {entry.meta}
                    </p>
                  )}
                  <h3 className="mt-1 font-display text-[1.3rem] font-medium leading-tight tracking-tight text-ink transition-colors duration-300 group-hover:text-accent-deep">
                    {entry.title}
                  </h3>
                  {entry.category && (
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-wideish text-accent-deep">
                      {entry.category}
                    </p>
                  )}
                  <p className="mt-3 text-[14px] leading-relaxed text-ink/65">
                    {entry.description}
                  </p>
                  <ul className="mt-4 space-y-2 border-t border-ink/10 pt-4">
                    {entry.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-3 text-[13.5px] leading-relaxed text-ink/60"
                      >
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent-deep/60" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
