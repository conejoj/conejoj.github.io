import Image from "next/image";
import Reveal from "@/lib/Reveal";
import { site } from "@/lib/site";

const interests = [
  "Designing systems",
  "Building software",
  "Working with people",
  "Experimenting with technology",
  "Creating practical solutions",
];

export default function About() {
  return (
    <section id="about" className="border-b border-ink/10 bg-stone-100">
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-10">
          {/* Portrait */}
          <div className="md:col-span-5">
            <Reveal>
              <div className="relative mx-auto max-w-sm md:mx-0">
                <div className="relative aspect-[4/5] w-full overflow-hidden border border-ink/15 bg-navy-900">
                  <Image
                    src="/images/portrait.jpg"
                    alt="Jose Conejo"
                    width={1000}
                    height={1250}
                    className="h-full w-full object-cover"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-navy-950/70 to-transparent p-5 font-mono text-[10px] uppercase tracking-wideish text-paper/70">
                    <span>Portrait</span>
                    <span>JC</span>
                  </div>
                </div>
                <div
                  className="absolute -top-5 -left-5 -z-10 hidden h-24 w-24 border border-ink/15 bg-cream md:block"
                  aria-hidden
                />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mx-auto mt-8 max-w-sm border-t border-ink/12 pt-6 md:mx-0">
                <div className="space-y-3">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-mono text-[10.5px] uppercase tracking-wideish text-ink/40">
                      Location
                    </span>
                    <span className="text-[13px] text-ink/70">{site.location}</span>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-mono text-[10.5px] uppercase tracking-wideish text-ink/40">
                      Education
                    </span>
                    <span className="text-[13px] text-ink/70">John Brown University</span>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-mono text-[10.5px] uppercase tracking-wideish text-ink/40">
                      Languages
                    </span>
                    <span className="text-[13px] text-ink/70">
                      Spanish (Native) &middot; English (C2)
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-mono text-[10.5px] uppercase tracking-wideish text-ink/40">
                      Availability
                    </span>
                    <span className="flex items-center gap-2 text-[13px] text-accent-deep">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent motion-safe:animate-pulse" />
                      Open to opportunities
                    </span>
                  </div>
                </div>
                <a
                  href={site.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-6 inline-flex items-center gap-2 border-b border-ink/25 pb-1 text-[13px] font-medium text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  Download Resume
                  <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                    ↓
                  </span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Copy */}
          <div className="md:col-span-7">
            <Reveal>
              <div className="mb-5 flex items-center gap-3 font-mono text-[12px] uppercase tracking-widest2 text-ink/50">
                <span className="h-px w-8 bg-ink/30" />
                About
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="text-balance font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-tight text-ink">
                Good technology should make someone&rsquo;s day easier, not
                just look good in a demo.
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-7 max-w-xl space-y-4 text-[15px] leading-relaxed text-ink/65">
                <p>
                  Jose is a Computer Science &amp; AI graduate from Costa
                  Rica, currently building software, automation, and AI-driven
                  tools for teams that need less manual busywork and more
                  visibility into what&rsquo;s actually happening in their
                  systems.
                </p>
                <p>
                  Before picking a framework, he wants to know what&rsquo;s
                  actually broken: who&rsquo;s dealing with it, what the real
                  constraints are, and what a good outcome looks like. The
                  tech comes after that, chosen for the problem instead of
                  the other way around.
                </p>
                <p>
                  He was selected for the Aspire Leaders Program, a global
                  leadership and AI innovation initiative taught by Harvard
                  faculty alongside students from dozens of countries, and
                  spent two years in student government at John Brown
                  University, first as a Senator, then as President.
                </p>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-ink/12 pt-8 sm:grid-cols-1 md:grid-cols-2">
                {interests.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <span className="h-1 w-1 shrink-0 bg-accent" />
                    <span className="text-[14px] text-ink/70">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
