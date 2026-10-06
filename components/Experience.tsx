"use client";

import SectionHeader from "@/components/SectionHeader";
import ExperienceItem from "@/components/ExperienceItem";
import Reveal from "@/lib/Reveal";
import { experience } from "@/data/experience";
import { site } from "@/lib/site";
import { useT } from "@/lib/i18n";

export default function Experience() {
  const t = useT();
  return (
    <section id="experience" className="border-b border-ink/10 bg-cream">
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-end">
          <SectionHeader
            eyebrow={{ en: "Experience", es: "Experiencia" }}
            title={{
              en: "Roles across software development and automation.",
              es: "Roles en desarrollo de software y automatización.",
            }}
          />
          <Reveal delay={120}>
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 border border-ink/20 px-5 py-3 text-[13px] font-medium text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              {t({ en: "Download Resume", es: "Descargar CV" })}
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </Reveal>
        </div>

        <div className="mt-14 border-t border-ink/12">
          {experience.map((entry, i) => (
            <Reveal key={entry.role.en} delay={i * 60}>
              <ExperienceItem entry={entry} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
