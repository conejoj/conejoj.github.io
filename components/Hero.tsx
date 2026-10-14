"use client";

import { useEffect } from "react";
import Reveal from "@/lib/Reveal";
import ScrollProgress from "@/lib/ScrollProgress";
import HeroPortrait from "@/components/HeroPortrait";
import { availability, expertiseLabels, resumeFileName, resumeLabel, site } from "@/lib/site";
import { useLang, useT } from "@/lib/i18n";

export default function Hero() {
  const t = useT();
  const { lang } = useLang();

  // With a mouse, the portrait and its mat drift a few pixels in opposite
  // directions as the cursor moves (read in CSS from --mx / --my, -1 → 1).
  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || calm.matches) return;
    let frame = 0;
    let x = 0;
    let y = 0;
    const apply = () => {
      frame = 0;
      hero.style.setProperty("--mx", x.toFixed(3));
      hero.style.setProperty("--my", y.toFixed(3));
    };
    const onMove = (e: PointerEvent) => {
      const r = hero.getBoundingClientRect();
      x = ((e.clientX - r.left) / r.width) * 2 - 1;
      y = ((e.clientY - r.top) / r.height) * 2 - 1;
      if (!frame) frame = requestAnimationFrame(apply);
    };
    const onLeave = () => {
      x = 0;
      y = 0;
      if (!frame) frame = requestAnimationFrame(apply);
    };
    hero.addEventListener("pointermove", onMove);
    hero.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      hero.removeEventListener("pointermove", onMove);
      hero.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <ScrollProgress
      as="section"
      id="home"
      mode="exit"
      className="relative flex flex-col overflow-hidden border-b border-ink/10 bg-cream pb-20 pt-28 md:pb-16 md:pt-32 lg:min-h-[100svh]"
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
            <Reveal immediate>
              <div className="hero-eyebrow mb-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2">
                {/* Name and role: the first fact a recruiter needs, set in
                    readable sans rather than a small mono label */}
                <p className="flex items-center gap-3 text-[1.0625rem] leading-snug text-ink">
                  <span className="hidden h-px w-8 bg-ink/30 sm:block" aria-hidden />
                  <span>
                    <span className="font-medium">{site.name}</span>
                    {/* On narrow screens (under 22.5em: 360px at normal text
                        size, wider when the visitor enlarges text) the role
                        drops to its own line instead of leaving the dot stranded */}
                    <span className="hero-role-dot mx-2 text-ink/35" aria-hidden>·</span>
                    <span className="sr-only">, </span>
                    <span className="hero-role whitespace-nowrap text-ink/70">
                      {t({ en: "Software Engineer", es: "Ingeniero de Software" })}
                    </span>
                  </span>
                </p>
                <p className="max-w-[18rem] text-balance font-mono text-label uppercase leading-relaxed tracking-wideish text-accent-deep sm:max-w-none">
                  <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" aria-hidden />
                  {t(availability)}
                </p>
              </div>
            </Reveal>

            {/* Each line rises out of its own mask on load (pure CSS, no JS
                needed); still for reduced-motion visitors. */}
            <h1 className="text-balance font-display text-[clamp(min(2.4rem,11vw),5.9vw,5.5rem)] font-medium leading-[1.02] tracking-tight text-ink">
              {(lang === "es"
                ? ["Uso la tecnología", "para resolver", "problemas\u00a0reales."]
                : ["I use technology", "to solve", "real\u00a0problems."]
              ).map((line, i, lines) =>
                i === lines.length - 1 ? (
                  // Last line gets a hand-drawn teal pen stroke underneath,
                  // drawn in once the words have landed.
                  <span key={line} className="relative inline-block">
                    <span className="hero-line">
                      <span style={{ animationDelay: `${120 + i * 110}ms` }}>{line}</span>
                    </span>
                    <svg
                      className="hero-pen pointer-events-none absolute -bottom-[0.16em] left-[-2%] h-[0.22em] w-[104%] overflow-visible text-accent"
                      viewBox="0 0 400 24"
                      preserveAspectRatio="none"
                      aria-hidden
                    >
                      <path
                        d="M4 15 C 58 9, 132 7, 205 9 S 330 14, 372 9 C 384 7.5, 392 7, 396 8.5"
                        pathLength={1}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3.6"
                        strokeLinecap="round"
                      />
                      <path
                        d="M60 20 C 140 15, 250 14, 330 17"
                        pathLength={1}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        opacity="0.55"
                      />
                    </svg>
                  </span>
                ) : (
                  <span key={line} className="hero-line">
                    <span style={{ animationDelay: `${120 + i * 110}ms` }}>{line}</span>
                  </span>
                )
              )}
            </h1>

            <Reveal immediate delay={200}>
              <p className="hero-intro mx-auto mt-9 max-w-2xl text-pretty sm:mx-0 text-lead text-ink/65 md:text-lead-lg">
                {t({
                  en: "Computer Science & AI graduate with hands-on experience in web applications, automation workflows, and machine-learning projects.",
                  es: "Graduado en Ciencias de la Computación e IA, con experiencia práctica en aplicaciones web, flujos de automatización y proyectos de machine learning.",
                })}
              </p>
            </Reveal>

            <Reveal immediate delay={280}>
              <ul className="hero-chips mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-ui font-medium text-ink/80 sm:justify-start sm:gap-x-3 sm:text-body-sm">
                {expertiseLabels.map((label, i) => (
                  <li key={label.en} className="flex items-center gap-2 sm:gap-3">
                    {t(label)}
                    {i < expertiseLabels.length - 1 && (
                      <span className="hidden text-ink/30 sm:inline" aria-hidden>
                        &middot;
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal immediate delay={360}>
              <div className="hero-ctas mt-12 flex flex-wrap items-center justify-center gap-4 sm:justify-start">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 bg-ink px-6 py-3.5 text-ui font-medium text-cream transition-colors duration-300 hover:bg-accent-deep"
                >
                  {t({ en: "View My Work", es: "Ver mis proyectos" })}
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden>
                    →
                  </span>
                </a>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 border border-ink/20 px-6 py-3.5 text-ui font-medium text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  {t({ en: "Get in Touch", es: "Contáctame" })}
                </a>
              </div>
            </Reveal>

            <Reveal immediate delay={440}>
              <div className="hero-links mt-8 flex flex-wrap items-center justify-center gap-x-4 text-ui font-medium text-ink/75 sm:justify-start sm:gap-x-2">
                {[
                  { label: "LinkedIn", href: site.linkedin },
                  { label: "GitHub", href: site.github },
                  { label: t(resumeLabel), href: site.resumeUrl, download: true },
                ].map((link, i) => (
                  <span key={link.href} className="flex items-center gap-2">
                    {/* Dividers from 640px; on phones the row may wrap, so none */}
                    {i > 0 && <span className="hidden h-3.5 w-px bg-ink/20 sm:block" aria-hidden />}
                    <a
                      href={link.href}
                      {...(link.download
                        ? { download: resumeFileName }
                        : { target: "_blank", rel: "noreferrer" })}
                      className={`inline-flex min-h-11 items-center gap-2 px-2 transition-colors duration-200 hover:text-ink sm:first:pl-0 ${
                        link.download ? "text-ink" : ""
                      }`}
                    >
                      {link.label}
                      {link.download && (
                        <>
                          <span className="border border-ink/20 px-1.5 py-0.5 font-mono text-label font-normal uppercase tracking-wideish text-ink/65">PDF</span>
                          <span aria-hidden>↓</span>
                        </>
                      )}
                    </a>
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: editorial portrait */}
          <div className="sp-hero-visual relative hidden sm:col-span-5 sm:block">
            <div className="relative mx-auto w-full max-w-[min(100%,max(calc((100svh-280px)/1.14+48px),18rem))]">
              <HeroPortrait />
            </div>
          </div>
        </div>
      </div>

    </ScrollProgress>
  );
}
