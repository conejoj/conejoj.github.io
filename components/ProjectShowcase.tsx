"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import Reveal from "@/lib/Reveal";
import { PROJECT_MOCKUPS } from "@/components/ProjectMockups";
import type { Project } from "@/data/projects";
import { site } from "@/lib/site";
import { useT } from "@/lib/i18n";

interface ProjectShowcaseProps {
  project: Project;
  position: number; // 0-based index within the list, drives alternation
}

/**
 * Large, editorial project presentation. Layout direction and background
 * alternate per project so the section doesn't read as a repeated card grid.
 */
export default function ProjectShowcase({ project, position }: ProjectShowcaseProps) {
  const reversed = position % 2 === 1;
  // The first project sits closer to the "Selected Work" intro and aligns
  // its image to the top of its text, so the two read as one unit.
  const isFirst = position === 0;
  const bg = project.accent === "stone" ? "bg-stone-100" : "bg-cream";
  const Mockup = PROJECT_MOCKUPS[position] ?? PROJECT_MOCKUPS[0];
  const t = useT();
  const name = t(project.name);
  // Phones: the three bullets sit behind a toggle (like Experience) so the
  // Work section is shorter. Open until hydration, so they're readable
  // without JavaScript; from 768px up they're always shown.
  const detailsId = useId();
  const [open, setOpen] = useState<boolean | null>(null);
  useEffect(() => setOpen(false), []);
  // Walkthrough requests open an email that already names the project.
  const subject = t({ en: `Walkthrough: ${name}`, es: `Demostración: ${name}` });

  return (
    <article className={`${bg} border-b border-ink/10`}>
      <div
        className={`mx-auto max-w-content px-6 md:px-10 ${
          isFirst ? "pb-16 pt-6 md:pb-20 md:pt-2" : "py-16 md:py-20"
        }`}
      >
        {/* Image and text are centered on each other in every row */}
        <div className="grid grid-cols-1 items-center gap-8 md:gap-10 lg:grid-cols-12">
          {/* Visual area */}
          <div
            className={`lg:col-span-7 ${
              reversed ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <Reveal>
              <ProjectVisual project={project} Mockup={Mockup} />
            </Reveal>
          </div>

          {/* Content */}
          <div
            className={`text-left lg:col-span-5 ${
              reversed ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <Reveal delay={80}>
              <div className="flex items-center justify-center gap-3 font-mono text-eyebrow uppercase tracking-wideish text-ink/65 md:justify-start">
                <span aria-hidden>{project.index}</span>
                <span className="h-px w-6 bg-ink/25" aria-hidden />
                <span>{project.year}</span>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <h3 className="mt-4 text-balance text-center font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-[1.08] tracking-tight text-ink md:text-left">
                {t(project.name)}
              </h3>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-3 text-balance text-center font-mono text-label uppercase tracking-wideish text-accent-deep md:text-left">
                {t(project.category)}
              </p>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-6 max-w-xl text-body text-ink/70">
                {t(project.description)}
              </p>
            </Reveal>

            <Reveal delay={260}>
              <button
                type="button"
                aria-expanded={open !== false}
                aria-controls={detailsId}
                onClick={() => setOpen((v) => !(v ?? true))}
                className="mt-5 flex min-h-11 items-center gap-3 text-ui font-medium text-ink md:hidden"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-ink/20 text-ink/70" aria-hidden>
                  <span
                    className={`text-[1rem] leading-none transition-transform duration-300 ${
                      open !== false ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </span>
                {t({ en: "What I worked on", es: "En qué trabajé" })}
              </button>
              <ul
                id={detailsId}
                className={`max-w-xl space-y-2.5 md:mt-5 md:block ${
                  open === false ? "hidden" : "mt-4"
                }`}
              >
                {project.highlights.map((h) => (
                  <li
                    key={h.en}
                    className="flex gap-3 text-body-sm text-ink/65"
                  >
                    <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent-deep/50" />
                    <span className="min-w-0">{t(h)}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={300}>
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-8 inline-flex min-h-11 items-center gap-2 border-b border-ink/30 text-ui font-medium text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  {t({ en: "View Project", es: "Ver Proyecto" })}
                  <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                    →
                  </span>
                </a>
              ) : (
                // No public link: invite a walkthrough by email, with the
                // project already in the subject line.
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent(subject)}`}
                  className="group mt-8 inline-flex min-h-11 items-center gap-2 border-b border-ink/30 text-ui font-medium text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  {t({ en: "Ask me for a walkthrough", es: "Pídeme una demostración" })}
                  {/* Screen readers hear which project the link is about */}
                  <span className="sr-only">{t({ en: ` of ${name}`, es: ` de ${name}` })}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                    →
                  </span>
                </a>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectVisual({
  project,
  Mockup,
}: {
  project: Project;
  Mockup: () => React.ReactElement;
}) {
  const t = useT();
  return (
    <div
      className={`group relative w-full overflow-hidden rounded-sm shadow-[0_20px_50px_-24px_rgba(12,18,25,0.45)] transition-transform duration-500 ease-out hover:scale-[0.97] motion-reduce:transition-none motion-reduce:hover:scale-100 ${
        project.image ? "" : "aspect-[4/3] bg-navy-900 md:aspect-[16/11]"
      }`}
      style={project.image ? { aspectRatio: project.imageAspect } : undefined}
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={t(project.imageAlt ?? project.name)}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      ) : (
        <>
          <div
            className="absolute inset-0 bg-grid-dark bg-[length:40px_40px] opacity-40"
            aria-hidden
          />
          <div className="relative h-full">
            <Mockup />
          </div>
        </>
      )}

      {!project.image && (
        <div
          className="absolute -right-10 -top-10 h-56 w-56 rounded-full border border-paper/10"
          aria-hidden
        />
      )}
    </div>
  );
}
