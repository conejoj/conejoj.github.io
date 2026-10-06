"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";
import { useLang, useT, type Lang } from "@/lib/i18n";

/**
 * EN | ES segmented switch: a bordered box in the same style as the
 * "Get in Touch" button, with the active language filled in.
 */
function LanguageToggle() {
  const { lang, setLang } = useLang();
  const t = useT();
  const options: Lang[] = ["en", "es"];
  return (
    <div
      role="group"
      aria-label={t({ en: "Language", es: "Idioma" })}
      className="flex h-9 items-stretch border border-ink/20 font-mono text-[11px] uppercase tracking-wideish"
    >
      {options.map((option, i) => {
        const active = lang === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => setLang(option)}
            aria-pressed={active}
            lang={option}
            title={option === "en" ? "English" : "Español"}
            className={`flex w-10 items-center justify-center transition-colors duration-200 ${
              i > 0 ? "border-l border-ink/20" : ""
            } ${
              active
                ? "bg-ink text-cream"
                : "text-ink/60 hover:bg-ink/5 hover:text-ink"
            }`}
          >
            {option.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const t = useT();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const lenis = (window as any).__lenis;
    if (open) lenis?.stop();
    else lenis?.start();
    return () => {
      document.body.style.overflow = "";
      (window as any).__lenis?.start();
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transform-gpu transition-[background-color,border-color] duration-300 ${
        scrolled
          ? "bg-cream/95 border-b border-ink/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#home"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center border border-ink/15 text-[13px] font-mono tracking-wide text-ink transition-colors duration-300 group-hover:border-accent group-hover:text-accent">
            JC
          </span>
          <span className="hidden text-[15px] font-medium tracking-tight text-ink sm:block">
            Jose Conejo
          </span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[12px] uppercase tracking-wideish text-ink/60 transition-colors duration-200 hover:text-ink"
            >
              {t(link.label)}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageToggle />
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 border border-ink/20 px-5 py-2.5 text-[13px] font-medium text-ink transition-all duration-300 hover:border-accent hover:text-accent"
          >
            {t({ en: "Get in Touch", es: "Contáctame" })}
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
        <button
          aria-label={t({ en: "Toggle menu", es: "Abrir o cerrar menú" })}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] border border-ink/15"
        >
          <span
            className={`h-px w-4 bg-ink transition-transform duration-300 ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-4 bg-ink transition-all duration-300 ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-ink/10 bg-cream px-6 pb-8 pt-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink/8 py-4 font-mono text-sm uppercase tracking-wideish text-ink/70"
              >
                {t(link.label)}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center gap-2 border border-ink/20 px-5 py-3 text-sm font-medium text-ink"
          >
            {t({ en: "Get in Touch", es: "Contáctame" })} →
          </a>
          <div className="mt-6 flex gap-5 font-mono text-xs uppercase tracking-wideish text-ink/50">
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
