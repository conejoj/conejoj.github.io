import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/lib/Reveal";
import ProjectShowcase from "@/components/ProjectShowcase";
import { projects } from "@/data/projects";

export default function Work() {
  const years = projects.map((p) => Number(p.year));
  const count = String(projects.length).padStart(2, "0");
  const range = `${Math.min(...years)}\u2013${Math.max(...years)}`;

  return (
    <section id="work" className="bg-cream">
      <div className="mx-auto flex max-w-content flex-col items-center gap-6 px-6 pb-6 pt-24 md:flex-row md:items-end md:justify-between md:gap-10 md:px-10 md:pb-12 md:pt-32">
        <SectionHeader
          eyebrow="Work"
          title="Selected Work"
          subtitle="A collection of software, automation, AI, and digital products I've helped design and build."
        />
        <Reveal delay={200} className="hidden shrink-0 sm:block">
          <p className="pb-1 font-mono text-[11px] uppercase tracking-widest2 text-ink/45">
            {count} Projects / {range}
          </p>
        </Reveal>
      </div>

      <div>
        {projects.map((project, i) => (
          <ProjectShowcase key={project.slug} project={project} position={i} />
        ))}
      </div>
    </section>
  );
}
