"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Site-wide smooth scrolling (Lenis). Deliberately gentle: short duration,
 * native scrolling kept on touch devices, and fully disabled for visitors
 * who prefer reduced motion. Also handles in-page anchor links (#work, …).
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      anchors: true,
    });
    // Exposed so the mobile menu can pause scrolling while it's open.
    (window as any).__lenis = lenis;

    let frame = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      delete (window as any).__lenis;
    };
  }, []);

  return null;
}
