"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { preload } from "react-dom";
import HeroCaption from "@/components/HeroCaption";

const PORTRAIT = "/images/portrait-hero.webp";

/**
 * The hero's visual half: the full, uncropped portrait, set inside a
 * print-style layout — offset hairline frame, corner marks, generous
 * whitespace, and a figure caption with Jose's local time. Motion: a
 * one-time mask reveal on load, a very slow push-in on hover, and (with a
 * mouse) the photo and its mat drift apart a few pixels as the cursor
 * moves, like a print lifted off the page. All still for reduced motion.
 *
 * The reveal waits until the photo has actually loaded, so it never wipes
 * open an empty box and then has the picture pop in. The frame, corner
 * marks and caption follow it in, in that order.
 */
export default function HeroPortrait() {
  // The portrait is hidden below 640px, so only wider screens preload it
  // (high priority, it's the hero image there). The <img> itself is lazy,
  // which keeps phones from downloading it at all.
  preload(PORTRAIT, { as: "image", media: "(min-width: 640px)", fetchPriority: "high" });
  const ref = useRef<HTMLDivElement | null>(null);
  const [loaded, setLoaded] = useState(false);
  // Covers a photo that finished loading before React hydrated.
  useEffect(() => {
    if (ref.current?.querySelector("img")?.complete) setLoaded(true);
  }, []);
  return (
    <div ref={ref} className={`hero-portrait-wrap ${loaded ? "is-loaded" : ""}`}>
    <div className="hero-portrait relative pb-12 pr-12">
      {/* Offset hairline frame, sitting behind the photo like a mat */}
      <div
        className="hero-portrait-frame hero-drift-frame absolute bottom-0 left-12 right-0 top-12 border border-ink/15"
        aria-hidden
      />

      {/* Photo: box matches the image's own aspect ratio, so nothing is cropped */}
      <div className="hero-portrait-mask hero-drift-photo relative aspect-[1000/1140] w-full overflow-hidden bg-stone-200">
        <div className="hero-portrait-settle absolute inset-0">
          <Image
            src={PORTRAIT}
            alt="Jose Conejo"
            fill
            loading="lazy"
            sizes="(min-width: 768px) 480px, 100vw"
            onLoad={() => setLoaded(true)}
            className="hero-portrait-img object-cover [filter:saturate(0.72)_contrast(1.05)_sepia(0.07)]"
          />
        </div>
      </div>

      {/* Corner marks, same motif used on project visuals */}
      <svg
        className="hero-portrait-corner absolute -left-4 -top-4 opacity-30"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        aria-hidden
      >
        <path d="M0 0H32M0 0V32" stroke="currentColor" className="text-ink" strokeWidth="1.5" />
      </svg>
      <svg
        className="hero-portrait-corner absolute -bottom-4 -right-4 opacity-40"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        aria-hidden
      >
        <path
          d="M32 32H0M32 32V0"
          stroke="currentColor"
          className="text-accent"
          strokeWidth="1.5"
        />
      </svg>
    </div>
    <HeroCaption />
    </div>
  );
}
