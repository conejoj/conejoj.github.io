import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/lib/Reveal";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section className="border-b border-ink/10 bg-cream">
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">
        <SectionHeader
          eyebrow="Skills & Technology"
          title="Tools I reach for, organized by what they're for."
        />

        <div className="mt-16 border-t border-ink/12">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 60}>
              <div className="grid grid-cols-1 gap-3 border-b border-ink/12 py-7 md:grid-cols-12 md:gap-6 md:py-8">
                <div className="flex items-baseline gap-3 md:col-span-3">
                  <span className="font-mono text-[12px] text-ink/35">
                    {group.index}
                  </span>
                  <h3 className="text-[15px] font-medium tracking-tight text-ink">
                    {group.title}
                  </h3>
                </div>
                <p className="text-[14.5px] leading-relaxed md:col-span-9">
                  {group.items.map((item, idx) => (
                    <span key={item}>
                      <span className="text-ink/70 transition-colors duration-200 hover:text-accent">
                        {item}
                      </span>
                      {idx < group.items.length - 1 && (
                        <span className="mx-2 text-ink/20">·</span>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
