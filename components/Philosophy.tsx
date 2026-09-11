import Reveal from "@/lib/Reveal";

const lines = ["Build with purpose.", "Keep it practical.", "Make it better."];

export default function Philosophy() {
  return (
    <section className="relative overflow-hidden border-b border-paper/10 bg-navy-950 py-28 md:py-40">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-dark bg-[length:72px_72px] opacity-40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-paper/15 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-content px-6 md:px-10">
        <Reveal>
          <div className="mb-10 flex items-center gap-3 font-mono text-[12px] uppercase tracking-widest2 text-paper/50">
            <span className="h-px w-8 bg-paper/30" />
            Philosophy
          </div>
        </Reveal>

        <div>
          {lines.map((line, i) => (
            <Reveal key={line} delay={i * 130}>
              <h2
                className={`text-balance font-display text-[clamp(2.75rem,8vw,6.5rem)] font-medium leading-[1.02] tracking-tight text-paper ${
                  i === 1 ? "italic font-normal" : ""
                }`}
              >
                {line}
              </h2>
            </Reveal>
          ))}
        </div>

        <Reveal delay={420}>
          <p className="mt-10 max-w-lg text-balance border-l border-paper/20 pl-6 text-[15px] leading-relaxed text-paper/60">
            Figure out what&rsquo;s actually broken before opening the editor. Pick
            tools because they fit the problem, not because they&rsquo;re trendy.
            Build things people can actually use.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
