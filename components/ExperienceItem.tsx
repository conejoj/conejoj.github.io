import type { ExperienceEntry } from "@/data/experience";

interface ExperienceItemProps {
  entry: ExperienceEntry;
  index: number;
}

export default function ExperienceItem({ entry, index }: ExperienceItemProps) {
  return (
    <details className="group border-b border-ink/12 py-7 md:py-8" open={index === 0}>
      <summary className="grid cursor-pointer list-none grid-cols-1 gap-3 md:grid-cols-12 md:items-center md:gap-6">
        <span className="font-mono text-[13px] text-ink/35 md:col-span-1">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="md:col-span-4">
          <span className="block text-[clamp(1.3rem,2.2vw,1.6rem)] font-medium tracking-tightest text-ink">
            {entry.company}
          </span>
          <span className="mt-1 block text-[14px] text-ink/55">{entry.role}</span>
        </span>

        <span className="font-mono text-[12px] uppercase tracking-wideish text-ink/45 md:col-span-3">
          {entry.dates}
        </span>

        <span className="flex flex-wrap gap-2 md:col-span-3">
          {entry.focus.map((f) => (
            <span
              key={f}
              className="border border-accent-deep/25 bg-accent-deep/[0.06] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-accent-deep"
            >
              {f}
            </span>
          ))}
        </span>

        <span className="hidden justify-end md:col-span-1 md:flex">
          <span className="flex h-7 w-7 items-center justify-center border border-ink/15 text-ink/50 transition-transform duration-300 group-open:rotate-45">
            +
          </span>
        </span>
      </summary>

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
        <div className="hidden md:col-span-1 md:block" />
        <div className="md:col-span-7">
          <p className="text-[14.5px] leading-relaxed text-ink/65">
            {entry.description}
          </p>
          <ul className="mt-4 space-y-2">
            {entry.highlights.map((h) => (
              <li
                key={h}
                className="flex gap-3 text-[14px] leading-relaxed text-ink/60"
              >
                <span className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-accent-deep/50" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap content-start gap-2 md:col-span-4">
          {entry.tech.map((t) => (
            <span
              key={t}
              className="border border-ink/12 px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-wide text-ink/55"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </details>
  );
}
