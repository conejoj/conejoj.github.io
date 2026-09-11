import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/lib/Reveal";
import { capabilities } from "@/data/capabilities";

export default function CapabilitySection() {
  return (
    <section className="border-b border-paper/10 bg-navy-900">
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">
        <SectionHeader
          eyebrow="What I Do"
          title="Four ways I turn problems into working systems."
          tone="dark"
        />

        <div className="mt-16 border-t border-paper/12">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.index} delay={i * 70}>
              <div className="group grid grid-cols-1 gap-4 border-b border-paper/12 py-9 transition-colors duration-300 hover:bg-paper/[0.03] md:grid-cols-12 md:items-center md:gap-6 md:px-4">
                <div className="font-mono text-[13px] text-paper/35 md:col-span-1">
                  {cap.index}
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-[clamp(1.4rem,2.4vw,1.85rem)] font-medium tracking-tightest text-paper transition-colors duration-300 group-hover:text-accent-bright">
                    {cap.title}
                  </h3>
                </div>
                <div className="md:col-span-7">
                  <p className="max-w-md text-[14.5px] leading-relaxed text-paper/60">
                    {cap.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
