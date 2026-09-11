const PIPELINE_LINES: [string, string, string][] = [
  ["ink", "on:", " push:"],
  ["ink", "  branches:", " [main]"],
  ["ink", "jobs:", ""],
  ["accent", "  build:", ""],
  ["accent", "    runs-on:", " ubuntu-latest"],
  ["ink", "    steps:", ""],
  ["muted", "      - uses:", " actions/checkout@v4"],
  ["accent", "      - run:", " npm ci && npm run build"],
  ["accent", "      - run:", " curl -X POST $N8N_DEPLOY_HOOK"],
];

const lineColor: Record<string, string> = {
  ink: "text-paper/70",
  accent: "text-accent-bright",
  muted: "text-paper/40",
};

/**
 * The hero's visual half: a floating deploy-pipeline card plus a couple of
 * small stack badges, sitting on a quiet dot grid. A real, specific
 * artifact (his own CI/CD + n8n habit) rather than a generic dashboard.
 */
export default function HeroComposition() {
  return (
    <div className="relative h-full w-full">
      <div
        className="absolute inset-0 bg-dot-light bg-[length:26px_26px]"
        aria-hidden
      />

      {/* Main pipeline card */}
      <div className="absolute left-[6%] top-[10%] w-[84%] overflow-hidden rounded-sm border border-paper/10 bg-navy-900 shadow-[0_24px_60px_-20px_rgba(11,15,20,0.55)] motion-safe:animate-float">
        <div className="flex items-center gap-2 border-b border-paper/10 bg-navy-800 px-4 py-2.5">
          <div className="flex gap-1.5">
            {["#E5635A", "#E8B23D", "#3FAE72"].map((c) => (
              <span
                key={c}
                className="h-2 w-2 rounded-full"
                style={{ background: `${c}90` }}
              />
            ))}
          </div>
          <span className="ml-1.5 font-mono text-[11px] text-paper/40">
            deploy.yml
          </span>
        </div>
        <div className="px-5 py-4 font-mono text-[11.5px] leading-[1.85]">
          {PIPELINE_LINES.map(([tone, key, val], i) => (
            <div key={i}>
              <span className={lineColor[tone]}>{key}</span>
              <span className="text-paper/45">{val}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-paper/10 bg-navy-800 px-5 py-2.5">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-bright motion-safe:animate-pulse" />
            <span className="font-mono text-[10.5px] text-paper/50">
              Checks passed &middot; 1m 12s
            </span>
          </div>
          <span className="font-mono text-[10px] text-accent-bright">main ✓</span>
        </div>
      </div>

      {/* Stack badges */}
      <span className="absolute right-[2%] top-0 rounded-sm border border-accent/40 bg-accent/10 px-3 py-1.5 font-mono text-[10.5px] text-accent-deep motion-safe:animate-float [animation-delay:0.6s]">
        AI / ML
      </span>
      <span className="absolute bottom-[16%] left-0 rounded-sm border border-accent/40 bg-accent/10 px-3 py-1.5 font-mono text-[10.5px] text-accent-deep motion-safe:animate-float [animation-delay:1.2s]">
        n8n &middot; Automation
      </span>
      <span className="absolute bottom-[4%] right-[8%] rounded-sm border border-accent/40 bg-paper px-3 py-1.5 font-mono text-[10.5px] text-ink/60 shadow-sm motion-safe:animate-float [animation-delay:0.3s]">
        Azure &middot; Cloud
      </span>

      {/* Corner marks, echoing the same motif used on project visuals */}
      <svg
        className="absolute left-0 top-0 opacity-30"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        aria-hidden
      >
        <path d="M0 0H40M0 0V40" stroke="currentColor" className="text-ink" strokeWidth="1.5" />
      </svg>
      <svg
        className="absolute bottom-0 right-0 opacity-30"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        aria-hidden
      >
        <path
          d="M40 40H0M40 40V0"
          stroke="currentColor"
          className="text-accent"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}
