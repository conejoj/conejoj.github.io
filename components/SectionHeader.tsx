import Reveal from "@/lib/Reveal";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
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
  return (
    <div
      className={`flex flex-col ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <Reveal>
        <div className="mb-5 flex items-center gap-3">
          <span
            className={`h-px w-8 ${isDark ? "bg-paper/40" : "bg-ink/30"}`}
          />
          <span
            className={`font-mono text-[12px] uppercase tracking-widest2 ${
              isDark ? "text-paper/60" : "text-ink/50"
            }`}
          >
            {eyebrow}
          </span>
        </div>
      </Reveal>
      <Reveal delay={80}>
        <h2
          className={`max-w-3xl text-balance font-display text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.08] tracking-tight ${
            isDark ? "text-paper" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={140}>
          <p
            className={`mt-5 max-w-xl text-balance text-[15px] leading-relaxed ${
              isDark ? "text-paper/65" : "text-ink/60"
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
