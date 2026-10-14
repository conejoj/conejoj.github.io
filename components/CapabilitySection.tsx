"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/lib/Reveal";
import { capabilities } from "@/data/capabilities";
import { useT } from "@/lib/i18n";

/**
 * Pinned storytelling on desktop: the heading stays put on the left while
 * the four capabilities scroll past on the right. Whichever one is nearest
 * the middle of the screen is lit (full white, teal number and rule, a
 * small nudge right) while the others dim to a still-readable grey, and a
 * big outlined numeral in the pinned column rolls to match.
 * On small screens it falls back to a normal stacked list.
 */
export default function CapabilitySection() {
  const t = useT();
  const listRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const rows = Array.from(list.querySelectorAll<HTMLElement>("[data-cap-row]"));
    let frame = 0;

    const update = () => {
      frame = 0;
      const mid = window.innerHeight * 0.5;
      let best = 0;
      let bestDist = Infinity;
      rows.forEach((row, i) => {
        const r = row.getBoundingClientRect();
        const dist = Math.abs(r.top + r.height / 2 - mid);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      setActive((prev) => (prev === best ? prev : best));
    };
    // Only measure while the section is on (or near) screen.
    let visible = true;
    const onScroll = () => {
      if (visible && !frame) frame = requestAnimationFrame(update);
    };
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) onScroll();
      },
      { rootMargin: "20% 0px" }
    );
    io.observe(list);

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const total = capabilities.length;

  return (
    <section className="border-b border-paper/10 bg-navy-900">
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          {/* Pinned heading + progress */}
          <div className="md:col-span-5">
            <div className="md:sticky md:top-32">
              <SectionHeader
                eyebrow={{ en: "What I Do", es: "Lo Que Hago" }}
                title={{
                  en: "Four ways I turn problems into working systems.",
                  es: "Cuatro formas en que convierto problemas en sistemas que funcionan.",
                }}
                tone="dark"
              />
              <div className="mt-12 hidden items-center gap-4 font-mono text-eyebrow text-paper/70 md:flex" aria-hidden>
                <span className="w-6 text-paper/80">
                  {String(active + 1).padStart(2, "0")}
                </span>
                <span className="relative block h-px w-32 bg-paper/15">
                  <span
                    className="absolute inset-y-0 left-0 w-full origin-left bg-accent-bright transition-transform duration-500 ease-studio"
                    style={{ transform: `scaleX(${(active + 1) / total})` }}
                  />
                </span>
                <span>{String(total).padStart(2, "0")}</span>
              </div>
              {/* Big outlined numeral: the stack of 01–04 rolls up so only
                  the active one shows through a one-line window. */}
              <div
                className="mt-8 hidden h-[1em] overflow-hidden font-display text-[clamp(6rem,11vw,10rem)] font-medium leading-none tracking-tight md:block"
                aria-hidden
              >
                <div className="cap-roll" style={{ transform: `translateY(${-active}em)` }}>
                  {capabilities.map((cap) => (
                    <div key={cap.index} className="cap-outline h-[1em]">
                      {cap.index}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Capabilities */}
          <div ref={listRef} className="border-t border-paper/12 md:col-span-7">
            {capabilities.map((cap, i) => {
              const isActive = i === active;
              return (
                <Reveal key={cap.index} delay={i * 70}>
                  <div
                    data-cap-row
                    className="relative grid grid-cols-1 gap-4 border-b border-paper/12 py-9 text-center md:grid-cols-7 md:gap-6 md:py-16 md:text-left"
                  >
                    <span
                      className={`absolute -top-px left-0 hidden h-px w-full origin-left bg-accent-bright transition-transform duration-500 ease-studio md:block ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                      aria-hidden
                    />
                    <div
                      aria-hidden
                      className={`font-mono text-[0.8125rem] transition-colors duration-500 md:col-span-1 md:pt-2 ${
                        isActive ? "text-accent-bright" : "text-paper/70"
                      }`}
                    >
                      {cap.index}
                    </div>
                    <div
                      className={`md:col-span-6 md:transition-transform md:duration-700 md:ease-studio motion-reduce:transition-none ${
                        isActive ? "md:translate-x-2" : ""
                      }`}
                    >
                      <h3
                        className={`font-display text-[clamp(1.5rem,2.4vw,2rem)] font-medium leading-[1.15] tracking-tight text-paper transition-colors duration-500 ${
                          isActive ? "" : "md:text-paper/50"
                        }`}
                      >
                        {t(cap.title)}
                      </h3>
                      {/* Dimmed text stays at ≥4.5:1 on navy */}
                      <p
                        className={`mx-auto mt-4 max-w-md text-body leading-[1.7] transition-colors duration-500 md:mx-0 ${
                          isActive ? "text-paper/75" : "text-paper/75 md:text-paper/55"
                        }`}
                      >
                        {t(cap.description)}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
