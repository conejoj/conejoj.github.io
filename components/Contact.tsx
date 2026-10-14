"use client";

import { useState, type ReactNode } from "react";
import Reveal from "@/lib/Reveal";
import { availability, resumeFileName, resumeLabel, site } from "@/lib/site";
import { useT } from "@/lib/i18n";

/**
 * Copies the email address, for visitors whose "Email Me" click does
 * nothing (no mail app set up). Confirms in place for 2s; the width is
 * fixed so the row doesn't shift when the label changes.
 */
function CopyEmailButton() {
  const t = useT();
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
    } catch {
      // Older browsers: select-and-copy through a temporary field
      const field = document.createElement("textarea");
      field.value = site.email;
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      field.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex min-h-11 min-w-[4.75rem] shrink-0 items-center justify-center border border-paper/30 px-3 font-mono text-label uppercase tracking-wideish text-paper/80 transition-colors duration-200 hover:border-paper hover:text-paper"
    >
      <span aria-live="polite">
        {copied ? t({ en: "Copied!", es: "¡Copiado!" }) : t({ en: "Copy", es: "Copiar" })}
      </span>
    </button>
  );
}

/**
 * One contact row: mono label over the value on the left, an action
 * (copy, ↗ or ↓) on the right. Rows share the column's height evenly.
 */
function Row({ label, value, action }: { label: string; value: ReactNode; action: ReactNode }) {
  return (
    <li className="flex flex-1 items-center justify-between gap-4 border-b border-paper/15 py-4">
      <div className="min-w-0">
        <span className="block font-mono text-label uppercase tracking-wideish text-paper/70">{label}</span>
        <div className="mt-1 min-w-0">{value}</div>
      </div>
      {action}
    </li>
  );
}

const valueLink =
  "inline-flex min-h-11 max-w-full items-center text-body text-paper transition-colors duration-200 hover:text-accent-bright";
const iconLink =
  "flex h-11 w-11 shrink-0 items-center justify-center border border-paper/25 text-paper/80 transition-colors duration-200 hover:border-paper hover:text-paper";

/**
 * Contact. Left: the heading, the pitch and the main action. Right: every
 * way to reach Jose as a stacked list that runs the height of the left side.
 */
export default function Contact() {
  const t = useT();
  return (
    <section id="contact" className="border-b border-paper/10 bg-accent-deep py-24 md:py-28">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-12 px-6 md:px-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
        {/* Heading, pitch, main action */}
        {/* Phones: heading block centered, paragraph left (site-wide rule) */}
        <div className="text-center md:text-left lg:col-span-7">
          <Reveal>
            <div className="mb-6 flex items-center justify-center gap-3 font-mono text-eyebrow uppercase tracking-widest2 text-paper/70 md:justify-start">
              <span className="eyebrow-rule h-px w-5 shrink-0 bg-paper/35 md:w-8" aria-hidden />
              {t({ en: "Contact", es: "Contacto" })}
              <span className="eyebrow-rule h-px w-5 shrink-0 bg-paper/35 md:hidden" aria-hidden />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-balance font-display text-[clamp(2.25rem,5vw,4.25rem)] font-medium leading-[1.04] tracking-tight text-paper">
              {t({ en: "Let\u2019s make something work better.", es: "Hagamos que algo funcione mejor." })}
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-xl text-left text-body leading-[1.7] text-paper/75 md:mx-0">
              {t({
                en: "For work opportunities, collaborations, or questions about my projects, feel free to reach out.",
                es: "Para oportunidades laborales, colaboraciones o preguntas sobre mis proyectos, no dudes en escribirme.",
              })}
            </p>
            <p className="mt-4 font-mono text-label uppercase leading-relaxed tracking-wideish text-paper/80">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent-bright align-middle" aria-hidden />
              {t(availability)}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <a
              href={`mailto:${site.email}`}
              className="group mt-9 inline-flex items-center gap-2 bg-paper px-7 py-4 text-ui font-medium text-ink transition-colors duration-300 hover:bg-cream"
            >
              {t({ en: "Email Me", es: "Escríbeme" })}
              <span className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden>
                →
              </span>
            </a>
          </Reveal>
        </div>

        {/* Every way to reach Jose */}
        <Reveal delay={260} className="flex lg:col-span-5">
          <ul className="flex w-full flex-col border-t border-paper/15">
            <Row
              label={t({ en: "Email", es: "Correo" })}
              value={
                <a href={`mailto:${site.email}`} className={valueLink}>
                  <span className="min-w-0 break-words">
                    {/* Preferred break point before "@" on narrow screens */}
                    {site.email.split("@")[0]}
                    <wbr />@{site.email.split("@")[1]}
                  </span>
                </a>
              }
              action={<CopyEmailButton />}
            />
            <Row
              label="LinkedIn"
              value={
                <a href={site.linkedin} target="_blank" rel="noreferrer" className={valueLink}>
                  linkedin.com/in/conejoj
                </a>
              }
              action={
                <a href={site.linkedin} target="_blank" rel="noreferrer" className={iconLink} aria-label="LinkedIn" tabIndex={-1}>
                  <span aria-hidden>↗</span>
                </a>
              }
            />
            <Row
              label="GitHub"
              value={
                <a href={site.github} target="_blank" rel="noreferrer" className={valueLink}>
                  <span className="min-w-0 break-words">
                    github.com/<wbr />joseconejochevez-prog
                  </span>
                </a>
              }
              action={
                <a href={site.github} target="_blank" rel="noreferrer" className={iconLink} aria-label="GitHub" tabIndex={-1}>
                  <span aria-hidden>↗</span>
                </a>
              }
            />
            <Row
              label={t({ en: "Resume", es: "CV" })}
              value={
                <a href={site.resumeUrl} download={resumeFileName} className={`${valueLink} gap-2`}>
                  {t(resumeLabel)}
                  <span className="border border-paper/25 px-1.5 py-0.5 font-mono text-label font-normal uppercase tracking-wideish text-paper/70">
                    PDF
                  </span>
                </a>
              }
              action={
                <a href={site.resumeUrl} download={resumeFileName} className={iconLink} aria-label={t(resumeLabel)} tabIndex={-1}>
                  <span aria-hidden>↓</span>
                </a>
              }
            />
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
