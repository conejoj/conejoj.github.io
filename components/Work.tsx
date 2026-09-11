import SectionHeader from "@/components/SectionHeader";
import ProjectShowcase from "@/components/ProjectShowcase";
import { projects } from "@/data/projects";

export default function Work() {
  return (
    <section id="work" className="bg-cream">
      <div className="mx-auto max-w-content px-6 pb-6 pt-24 md:px-10 md:pb-8 md:pt-32">
        <SectionHeader
          eyebrow="Work"
          title="Selected Work"
          subtitle="A collection of software, automation, AI, and digital products I've helped design and build."
        />
      </div>

      <div>
        {projects.map((project, i) => (
          <ProjectShowcase key={project.slug} project={project} position={i} />
        ))}
      </div>
    </section>
  );
}
