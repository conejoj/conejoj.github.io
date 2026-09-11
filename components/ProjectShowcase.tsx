import Image from "next/image";
import Reveal from "@/lib/Reveal";
import { PROJECT_MOCKUPS } from "@/components/ProjectMockups";
import type { Project } from "@/data/projects";

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
  const bg = project.accent === "stone" ? "bg-stone-100" : "bg-cream";
  const Mockup = PROJECT_MOCKUPS[position] ?? PROJECT_MOCKUPS[0];

  return (
    <article className={`${bg} border-b border-ink/10`}>
      <div className="mx-auto max-w-content px-6 py-16 md:px-10 md:py-20">
        <div
          className={`grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-10 ${
            reversed ? "" : ""
          }`}
        >
          {/* Visual area */}
          <div
            className={`md:col-span-7 ${
              reversed ? "md:order-2" : "md:order-1"
            }`}
          >
            <Reveal>
              <ProjectVisual project={project} Mockup={Mockup} />
            </Reveal>
          </div>

          {/* Content */}
          <div
            className={`md:col-span-5 ${
              reversed ? "md:order-1" : "md:order-2"
            }`}
          >
            <Reveal delay={80}>
              <div className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-wideish text-ink/45">
                <span>{project.index}</span>
                <span className="h-px w-6 bg-ink/25" />
                <span>{project.year}</span>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <h3 className="mt-4 text-balance font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-[1.08] tracking-tight text-ink">
                {project.name}
              </h3>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-wideish text-accent-deep">
                {project.category}
              </p>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-6 text-[14.5px] leading-relaxed text-ink/70">
                {project.description}
              </p>
            </Reveal>

            <Reveal delay={260}>
              <ul className="mt-5 space-y-2.5">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-3 text-[14px] leading-relaxed text-ink/65"
                  >
                    <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent-deep/50" />
                    <span>{h}</span>
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
                  className="group mt-8 inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-[14px] font-medium text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  View Project
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              ) : (
                <span className="mt-8 inline-flex items-center gap-2 border-b border-ink/15 pb-1 text-[14px] font-medium text-ink/35">
                  Case Study Available on Request
                </span>
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
  return (
    <div
      className={`group relative w-full overflow-hidden rounded-sm border border-ink/12 bg-navy-900 shadow-[0_20px_50px_-24px_rgba(12,18,25,0.45)] transition-transform duration-500 ease-out hover:scale-[0.97] ${
        project.image ? "" : "aspect-[4/3] md:aspect-[16/11]"
      }`}
      style={project.image ? { aspectRatio: project.imageAspect } : undefined}
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={`${project.name} website`}
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

      <div
        className="absolute -right-10 -top-10 h-56 w-56 rounded-full border border-paper/10"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-accent-bright/70 via-paper/10 to-transparent"
        aria-hidden
      />
    </div>
  );
}
