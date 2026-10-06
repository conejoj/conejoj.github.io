"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/lib/Reveal";
import { capabilities } from "@/data/capabilities";
import { useT } from "@/lib/i18n";

/**
 * Pinned storytelling on desktop: the heading stays put on the left while
 * the four capabilities scroll past on the right. Whichever one is nearest
 * the middle of the screen is highlighted, and the counter follows along.
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
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
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
              <div className="mt-12 hidden items-center gap-4 font-mono text-[12px] text-paper/45 md:flex">
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
                    className={`grid grid-cols-1 gap-4 border-b border-paper/12 py-9 text-center transition-opacity duration-500 md:grid-cols-7 md:text-left md:gap-6 md:py-16 ${
                      isActive ? "md:opacity-100" : "md:opacity-35"
                    }`}
                  >
                    <div
                      className={`font-mono text-[13px] transition-colors duration-500 md:col-span-1 md:pt-2 ${
                        isActive ? "text-accent-bright" : "text-paper/35"
                      }`}
                    >
                      {cap.index}
                    </div>
                    <div className="md:col-span-6">
                      <h3 className="text-[clamp(1.4rem,2.4vw,1.85rem)] font-medium tracking-tightest text-paper">
                        {t(cap.title)}
                      </h3>
                      <p className="mx-auto mt-4 max-w-md text-[14.5px] leading-relaxed text-paper/60 md:mx-0">
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
