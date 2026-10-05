"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type Mode =
  /** 0 when the element's top enters the bottom of the viewport → 1 when its bottom leaves the top */
  | "through"
  /** 0 while the element's top is at the viewport top → 1 when its bottom reaches the viewport top */
  | "exit"
  /** For tall sections with a sticky child: 0 when the top hits the viewport top → 1 when the bottom hits the viewport bottom */
  | "pin";

interface ScrollProgressProps {
  children?: ReactNode;
  mode?: Mode;
  className?: string;
  style?: CSSProperties;
  as?: keyof JSX.IntrinsicElements;
  id?: string;
}

/**
 * Writes the element's scroll progress (0 → 1) to a `--p` CSS variable on
 * itself, once per animation frame. Children read it in CSS (parallax,
 * pinned sequences) so React never re-renders while scrolling.
 */
export default function ScrollProgress({
  children,
  mode = "through",
  className = "",
  style,
  as = "div",
  id,
}: ScrollProgressProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    let visible = true;

    const update = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      let p: number;
      if (mode === "exit") p = -r.top / Math.max(r.height, 1);
      else if (mode === "pin") p = -r.top / Math.max(r.height - vh, 1);
      else p = (vh - r.top) / (vh + r.height);
      p = Math.min(1, Math.max(0, p));
      el.style.setProperty("--p", p.toFixed(4));
    };

    const onScroll = () => {
      if (visible && !frame) frame = requestAnimationFrame(update);
    };

    // Only do work while the element is on (or near) screen.
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) onScroll();
      },
      { rootMargin: "20% 0px" }
    );
    io.observe(el);

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [mode]);

  const Tag = as as any;
  return (
    <Tag ref={ref} id={id} className={className} style={style}>
      {children}
    </Tag>
  );
}
