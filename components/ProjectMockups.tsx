/**
 * Small illustrated UI mockups, one per project, standing in for real
 * screenshots. Each is a lightweight, hand-built approximation of the
 * actual product, in the site's own palette and type system, not a
 * generic stock image or a literal screenshot.
 */

function MockFrame({
  children,
  label,
  status,
}: {
  children: React.ReactNode;
  label: string;
  status?: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-paper/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-bright" />
          <span className="text-[12px] font-medium text-paper/85">{label}</span>
        </div>
        {status}
      </div>
      <div className="flex flex-1 flex-col">{children}</div>
    </div>
  );
}

export function NovaMockup() {
  const nodes = [
    { x: 10, y: 50, label: "CRM Trigger" },
    { x: 36, y: 26, label: "Transform" },
    { x: 36, y: 74, label: "Filter" },
    { x: 64, y: 50, label: "Sheets" },
    { x: 90, y: 50, label: "Notify" },
  ];
  const edges: [number, number][] = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
    [3, 4],
  ];
  return (
    <MockFrame
      label="Automation Workflow"
      status={
        <span className="flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-wideish text-accent-bright">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-bright motion-safe:animate-pulse" />
          Active
        </span>
      }
    >
      <div className="relative flex-1 p-4">
        <svg className="absolute inset-4" viewBox="0 0 100 100" preserveAspectRatio="none">
          {edges.map(([a, b], i) => (
            <line
              key={i}
              x1={`${nodes[a].x + 7}%`}
              y1={`${nodes[a].y}%`}
              x2={`${nodes[b].x - 7}%`}
              y2={`${nodes[b].y}%`}
              stroke="rgba(92,148,144,0.35)"
              strokeWidth="1"
              strokeDasharray="3,3"
            />
          ))}
        </svg>
        {nodes.map((n) => (
          <div
            key={n.label}
            className="absolute flex min-w-[52px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 rounded-sm border border-accent-bright/30 bg-accent-bright/10 px-2 py-1.5"
            style={{ left: `${n.x}%`, top: `${n.y}%` }}
          >
            <span className="text-[8.5px] leading-tight text-paper/75">{n.label}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-5 border-t border-paper/8 px-4 py-3">
        {[
          { v: "1,240+", l: "Runs / week" },
          { v: "99.8%", l: "Success" },
          { v: "5+ hrs", l: "Saved / week" },
        ].map((s) => (
          <div key={s.l}>
            <p className="text-[11px] font-medium text-accent-bright">{s.v}</p>
            <p className="text-[8.5px] text-paper/35">{s.l}</p>
          </div>
        ))}
      </div>
    </MockFrame>
  );
}

export function DashboardMockup() {
  const bars = [58, 76, 50, 88, 64, 82, 70];
  const widgets = [
    { label: "Announcements", value: "24" },
    { label: "Active Widgets", value: "9" },
    { label: "Admin Alerts", value: "1" },
  ];
  return (
    <MockFrame label="Prime Dashboard">
      <div className="grid grid-cols-3 gap-2 px-4 py-3.5">
        {widgets.map((w) => (
          <div
            key={w.label}
            className="rounded-sm border border-paper/8 bg-paper/[0.03] px-2.5 py-2"
          >
            <p className="text-[8.5px] text-paper/40">{w.label}</p>
            <p className="mt-1 text-[15px] font-medium text-paper/90">{w.value}</p>
          </div>
        ))}
      </div>
      <div className="flex-1 px-4 pb-4">
        <p className="mb-2 font-mono text-[9px] uppercase tracking-wideish text-paper/35">
          Weekly activity
        </p>
        <div className="flex h-16 items-end gap-1.5">
          {bars.map((h, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
              <div
                className={`w-full rounded-t-sm ${
                  i === 5 ? "bg-accent-bright" : "bg-accent-bright/25"
                }`}
                style={{ height: `${h}%` }}
              />
              <span className="text-[8px] text-paper/30">
                {["M", "T", "W", "T", "F", "S", "S"][i]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </MockFrame>
  );
}

export function JournalMockup() {
  const metrics = [
    { label: "Stress level", val: 68 },
    { label: "Sentiment", val: 42 },
    { label: "Energy", val: 55 },
  ];
  return (
    <MockFrame
      label="Daily Journal"
      status={<span className="font-mono text-[9.5px] text-paper/35">Sep 7</span>}
    >
      <div className="border-b border-paper/8 px-4 py-3.5">
        <p className="text-[11.5px] italic leading-relaxed text-paper/60">
          &ldquo;Back-to-back meetings again today. Hard to focus with the
          deadline this close...&rdquo;
        </p>
        <div className="mt-2.5 flex gap-1.5">
          {["Work", "Stress", "Focus"].map((t) => (
            <span
              key={t}
              className="rounded-full border border-accent-bright/25 bg-accent-bright/10 px-2 py-0.5 text-[8.5px] text-accent-bright"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="flex-1 px-4 py-3.5">
        <p className="mb-2.5 font-mono text-[9px] uppercase tracking-wideish text-paper/35">
          Model output
        </p>
        <div className="space-y-2">
          {metrics.map((m) => (
            <div key={m.label}>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-[9.5px] text-paper/50">{m.label}</span>
                <span className="font-mono text-[9px] text-accent-bright">{m.val}%</span>
              </div>
              <div className="h-1 rounded-full bg-paper/8">
                <div
                  className="h-full rounded-full bg-accent-bright"
                  style={{ width: `${m.val}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </MockFrame>
  );
}

export function WaltonMockup() {
  const rows = [
    { name: "A. Martínez", hours: "8.5", status: "Approved" },
    { name: "C. Ruiz", hours: "6.0", status: "Pending" },
    { name: "S. Kim", hours: "4.5", status: "Reviewing" },
    { name: "J. Chen", hours: "10.0", status: "Approved" },
  ];
  const statusStyle: Record<string, string> = {
    Approved: "text-accent-bright border-accent-bright/35 bg-accent-bright/10",
    Pending: "text-paper/60 border-paper/20 bg-paper/[0.04]",
    Reviewing: "text-paper/60 border-paper/20 bg-paper/[0.04]",
  };
  return (
    <MockFrame
      label="Service Hours"
      status={
        <span className="rounded-full border border-accent-bright/30 bg-accent-bright/10 px-2 py-0.5 text-[9px] text-accent-bright">
          12 approved
        </span>
      }
    >
      <div className="grid grid-cols-[1fr_36px_64px] gap-2 border-b border-paper/8 px-4 py-2 font-mono text-[8px] uppercase tracking-wideish text-paper/30">
        <span>Student</span>
        <span>Hrs</span>
        <span>Status</span>
      </div>
      <div className="flex-1">
        {rows.map((r, i) => (
          <div
            key={r.name}
            className={`grid grid-cols-[1fr_36px_64px] items-center gap-2 border-b border-paper/6 px-4 py-2 ${
              i % 2 === 1 ? "bg-paper/[0.02]" : ""
            }`}
          >
            <span className="text-[10.5px] text-paper/80">{r.name}</span>
            <span className="font-mono text-[10px] text-paper/50">{r.hours}</span>
            <span
              className={`w-fit rounded-full border px-1.5 py-0.5 text-[8px] ${statusStyle[r.status]}`}
            >
              {r.status}
            </span>
          </div>
        ))}
      </div>
    </MockFrame>
  );
}

export function HealthcareMockup() {
  return (
    <MockFrame label="Panama Cancer Clinic">
      <div className="flex-1 bg-gradient-to-br from-accent-deep/40 to-navy-900 px-4 py-5">
        <p className="mb-2 font-mono text-[9px] uppercase tracking-wideish text-accent-bright">
          Tu salud, nuestra prioridad
        </p>
        <p className="mb-3.5 text-[15px] font-medium leading-snug text-paper/90">
          Atención médica de calidad
        </p>
        <div className="mb-5 flex gap-2">
          <span className="rounded-sm bg-accent-bright px-2.5 py-1.5 text-[9.5px] font-medium text-navy-950">
            Agendar cita
          </span>
          <span className="rounded-sm border border-paper/20 px-2.5 py-1.5 text-[9.5px] text-paper/70">
            Ver servicios
          </span>
        </div>
        <div className="flex gap-5">
          {[
            { v: "25+", l: "Especialistas" },
            { v: "15", l: "Años" },
            { v: "WCAG", l: "Accesible" },
          ].map((s) => (
            <div key={s.l}>
              <p className="text-[12px] font-medium text-accent-bright">{s.v}</p>
              <p className="text-[8px] text-paper/40">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </MockFrame>
  );
}

export const PROJECT_MOCKUPS = [
  WaltonMockup,
  NovaMockup,
  HealthcareMockup,
  DashboardMockup,
  JournalMockup,
];
