"use client";

import Reveal from "@/lib/Reveal";
import { useT, type Text } from "@/lib/i18n";

interface SectionHeaderProps {
  eyebrow: Text;
  title: Text;
  subtitle?: Text;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "light",
}: SectionHeaderProps) {
  const isDark = tone === "dark";
  const t = useT();
  return (
    <div
      className={`flex flex-col ${
        align === "center"
          ? "items-center text-center"
          : "items-center text-center md:items-start md:text-left"
      }`}
    >
      <Reveal>
        <div className="mb-5 flex items-center gap-3">
          <span
            className={`eyebrow-rule h-px w-5 shrink-0 md:w-8 ${isDark ? "bg-paper/40" : "bg-ink/30"}`}
            aria-hidden
          />
          <span
            className={`font-mono text-eyebrow uppercase tracking-widest2 ${
              isDark ? "text-paper/70" : "text-ink/65"
            }`}
          >
            {t(eyebrow)}
          </span>
          {/* Matching rule on the right while the label is centered, so the
              word itself sits on the center line */}
          <span
            className={`eyebrow-rule h-px w-5 shrink-0 md:w-8 ${isDark ? "bg-paper/40" : "bg-ink/30"} ${
              align === "center" ? "" : "md:hidden"
            }`}
            aria-hidden
          />
        </div>
      </Reveal>
      <Reveal delay={80}>
        <h2
          className={`max-w-3xl text-balance font-display text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.08] tracking-tight ${
            isDark ? "text-paper" : "text-ink"
          }`}
        >
          {t(title)}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={140}>
          <p
            className={`mx-auto mt-5 max-w-xl text-balance md:mx-0 text-body ${
              isDark ? "text-paper/70" : "text-ink/65"
            }`}
          >
            {t(subtitle)}
          </p>
        </Reveal>
      )}
    </div>
  );
}
