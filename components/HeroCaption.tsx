"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";

/**
 * Magazine-style figure caption under the hero portrait, with Jose's live
 * local time in Costa Rica. Before hydration (or without JS) it shows the
 * place only, so the server HTML never disagrees with the client.
 */
export default function HeroCaption() {
  const { lang } = useLang();
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 15_000);
    return () => window.clearInterval(id);
  }, []);

  let time: { hm: [string, string]; suffix: string } | null = null;
  if (now) {
    const parts = new Intl.DateTimeFormat(lang === "es" ? "es-CR" : "en-US", {
      timeZone: "America/Costa_Rica",
      hour: "numeric",
      minute: "2-digit",
      hour12: lang !== "es",
    }).formatToParts(now);
    const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
    const period = get("dayPeriod").replace(/\./g, "").toUpperCase();
    time = { hm: [get("hour"), get("minute")], suffix: period ? ` ${period}` : "" };
  }

  return (
    <p className="hero-caption mt-4 flex items-baseline justify-between gap-4 pr-12 font-mono text-label uppercase tracking-wideish text-ink/60">
      {/* "Fig. 01" only where the column is wide enough to keep one line */}
      <span className="whitespace-nowrap">
        <span className="hidden lg:inline">
          Fig. 01<span aria-hidden> — </span>
          <span className="sr-only">, </span>
        </span>
        Costa Rica
      </span>
      {/* Time sits on its own, so filling it in doesn't shift anything */}
      <span className="whitespace-nowrap text-right text-ink/80">
        {time && (
          <>
            <span className="sr-only">{lang === "es" ? "Hora local: " : "Local time: "}</span>
            {time.hm[0]}
            <span className="hero-clock-colon">:</span>
            {time.hm[1]}
            {time.suffix}
          </>
        )}
      </span>
    </p>
  );
}
