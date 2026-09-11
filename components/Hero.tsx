import Reveal from "@/lib/Reveal";
import HeroComposition from "@/components/HeroComposition";
import { expertiseLabels, site } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-ink/10 bg-cream pb-20 pt-28 md:pb-24 md:pt-32"
    >
      {/* subtle background grid system */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid-light bg-[length:64px_64px] opacity-[0.5] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-content px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-6">
          {/* Left: positioning statement */}
          <div className="md:col-span-7">
            <Reveal>
              <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2">
                <div className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-widest2 text-ink/50">
                  <span className="h-px w-8 bg-ink/30" />
                  Software Developer · CS &amp; AI Graduate
                </div>
                <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wideish text-accent-deep">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent motion-safe:animate-pulse" />
                  Open to opportunities
                </span>
              </div>
            </Reveal>

            <Reveal
              delay={80}
              as="h1"
              className="text-balance font-display text-[clamp(2.5rem,5.4vw,4.75rem)] font-medium leading-[1.08] tracking-tight text-ink"
            >
              I build software and automation that people actually use.
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-9 max-w-lg text-balance text-[16px] leading-relaxed text-ink/65">
                I&rsquo;m a Computer Science &amp; AI graduate from Costa Rica
                who likes turning repetitive, manual work into automated
                systems, then building the software and interfaces around
                them.
              </p>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-10 flex flex-wrap gap-2.5">
                {expertiseLabels.map((label) => (
                  <span
                    key={label}
                    className="border border-ink/15 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wideish text-ink/60"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={360}>
              <div className="mt-12 flex flex-wrap items-center gap-4">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 bg-ink px-6 py-3.5 text-[14px] font-medium text-cream transition-colors duration-300 hover:bg-accent-deep"
                >
                  View My Work
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 border border-ink/20 px-6 py-3.5 text-[14px] font-medium text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  Let&rsquo;s Connect
                </a>
              </div>
            </Reveal>

            <Reveal delay={440}>
              <div className="mt-12 flex items-center gap-5 font-mono text-[12px] uppercase tracking-wideish text-ink/45">
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors duration-200 hover:text-ink"
                >
                  LinkedIn
                </a>
                <span className="h-3.5 w-px bg-ink/15" />
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors duration-200 hover:text-ink"
                >
                  GitHub
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: floating deploy-pipeline composition */}
          <div className="relative hidden md:col-span-5 md:block">
            <Reveal delay={220} className="relative h-[440px] lg:h-[480px]">
              <HeroComposition />
            </Reveal>
          </div>
        </div>

        {/* Minimal scroll cue: a thin label and a single animated
            chevron, in the same hairline/mono language as the rest of
            the page rather than a generic scroll-mouse icon */}
        <Reveal delay={520}>
          <div className="mt-14 flex justify-center md:mt-16">
            <a
              href="#work"
              className="group flex flex-col items-center gap-2.5 text-ink/35 transition-colors duration-300 hover:text-accent"
            >
              <span className="font-mono text-[10.5px] uppercase tracking-widest2">
                Scroll
              </span>
              <svg
                width="13"
                height="8"
                viewBox="0 0 13 8"
                fill="none"
                className="motion-safe:animate-bounce"
                aria-hidden
              >
                <path
                  d="M1 1L6.5 6.5L12 1"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
