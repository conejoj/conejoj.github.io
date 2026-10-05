import Reveal from "@/lib/Reveal";
import ScrollProgress from "@/lib/ScrollProgress";
import HeroPortrait from "@/components/HeroPortrait";
import { expertiseLabels, site } from "@/lib/site";

export default function Hero() {
  return (
    <ScrollProgress
      as="section"
      id="home"
      mode="exit"
      className="relative flex flex-col overflow-hidden border-b border-ink/10 bg-cream pb-20 pt-28 md:min-h-[100svh] md:pb-16 md:pt-32"
    >
      {/* subtle background grid system */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid-light bg-[length:64px_64px] opacity-[0.5] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
        aria-hidden
      />

      <div className="relative mx-auto flex w-full max-w-content flex-1 flex-col px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-12 sm:items-center sm:gap-6 md:my-auto">
          {/* Left: positioning statement */}
          <div className="sp-hero-text text-center sm:col-span-7 sm:text-left">
            <Reveal>
              <div className="mb-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:justify-start">
                <div className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-widest2 text-ink/50">
                  <span className="h-px w-8 bg-ink/30" />
                  Jose Conejo / Software Engineer
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
              className="text-balance font-display text-[clamp(2.4rem,5.9vw,5.5rem)] font-medium leading-[1.02] tracking-tight text-ink"
            >
              I build software,<br className="hidden sm:inline" /> automation,
              and<br className="hidden sm:inline" /> AI&nbsp;systems.
            </Reveal>

            <Reveal delay={200}>
              <p className="mx-auto mt-9 max-w-2xl text-pretty sm:mx-0 text-[17px] leading-relaxed text-ink/65 md:text-[18px]">
                Computer Science &amp; AI graduate with hands-on experience
                building web applications, automation workflows, and
                machine-learning projects.
              </p>
            </Reveal>

            <Reveal delay={280}>
              <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-2 sm:justify-start gap-y-1 text-[14px] font-medium text-ink/80 sm:gap-x-3 sm:text-[15px]">
                {expertiseLabels.map((label, i) => (
                  <li key={label} className="flex items-center gap-2 sm:gap-3">
                    {label}
                    {i < expertiseLabels.length - 1 && (
                      <span className="text-ink/30" aria-hidden>
                        &middot;
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={360}>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:justify-start">
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
                  Get in Touch
                </a>
              </div>
            </Reveal>

            <Reveal delay={440}>
              <div className="mt-12 flex items-center justify-center gap-5 font-mono sm:justify-start text-[12px] uppercase tracking-wideish text-ink/45">
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

          {/* Right: editorial portrait */}
          <div className="sp-hero-visual relative hidden sm:col-span-5 sm:block">
            <div className="relative mx-auto w-full max-w-[min(100%,calc((100svh-240px)/1.14+48px))]">
              <HeroPortrait />
            </div>
          </div>
        </div>
      </div>

    </ScrollProgress>
  );
}
