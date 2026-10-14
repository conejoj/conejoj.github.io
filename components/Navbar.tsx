"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks, resumeFileName, resumeLabel, site } from "@/lib/site";
import { useLang, useT, type Lang } from "@/lib/i18n";

/**
 * EN | ES segmented switch: a bordered box in the same style as the
 * "Get in Touch" button, with the active language filled in.
 * 44px tall on touch screens, 36px on desktop.
 */
function LanguageToggle() {
  const { lang, setLang } = useLang();
  const t = useT();
  const options: Lang[] = ["en", "es"];
  return (
    <div
      role="group"
      aria-label={t({ en: "Language", es: "Idioma" })}
      className="flex h-[46px] items-stretch border border-ink/20 font-mono text-label uppercase tracking-wideish md:h-9"
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
            className={`flex w-[44px] items-center justify-center transition-colors duration-200 md:w-[40px] ${
              i > 0 ? "border-l border-ink/20" : ""
            } ${
              active
                ? "bg-ink text-cream"
                : "text-ink/70 hover:bg-ink/5 hover:text-ink"
            }`}
          >
            {option.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}

/**
 * `base` prefixes the in-page anchors, so pages other than the homepage
 * (the 404) can link back to its sections with base="/".
 */
export default function Navbar({ base = "" }: { base?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const t = useT();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // While the mobile menu is open: lock page scroll, make the page behind
  // it inert (Tab stays in the header and menu), and let Escape close it,
  // returning focus to the menu button.
  const menuButton = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const lenis = (window as any).__lenis;
    if (open) lenis?.stop();
    else lenis?.start();
    const behind = Array.from(document.querySelectorAll<HTMLElement>("main, footer"));
    if (open) behind.forEach((el) => el.setAttribute("inert", ""));
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      behind.forEach((el) => el.removeAttribute("inert"));
      document.body.style.overflow = "";
      (window as any).__lenis?.start();
    };
  }, [open]);

  return (
    <>
      {/* Skip link: first Tab stop, visible only when focused */}
      <a
        href="#main"
        tabIndex={open ? -1 : undefined}
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("main")?.focus();
        }}
        className="fixed left-4 top-3 z-[60] -translate-y-24 bg-ink px-5 py-3 text-ui font-medium text-cream transition-transform duration-200 focus:translate-y-0 motion-reduce:transition-none"
      >
        {t({ en: "Skip to content", es: "Saltar al contenido" })}
      </a>

      {/* Scrim behind the mobile menu: dims the page and closes on tap */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-ink/40 lg:hidden"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}

      <header
        className={`fixed inset-x-0 top-0 z-50 transform-gpu transition-[background-color,border-color] duration-300 ${
          scrolled || open
            ? "bg-cream/95 border-b border-ink/10"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-content items-center justify-between gap-4 px-6 py-3 md:px-10 md:py-4">
          <a
            href={`${base}#home`}
            className="group flex min-h-11 min-w-0 items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <span className="flex h-[36px] w-[36px] shrink-0 items-center justify-center border border-ink/15 text-[0.8125rem] font-mono tracking-wide text-ink transition-colors duration-300 group-hover:border-accent group-hover:text-accent">
              JC
            </span>
            <span className="nav-name truncate text-[0.9375rem] font-medium tracking-tight text-ink">
              {site.name}
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`${base}${link.href}`}
                className="py-3 font-mono text-eyebrow uppercase tracking-wideish text-ink/70 transition-colors duration-200 hover:text-ink"
              >
                {t(link.label)}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <LanguageToggle />
            <a
              href={`${base}#contact`}
              className="group inline-flex items-center gap-2 border border-ink/20 px-5 py-2.5 text-ui font-medium text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              {t({ en: "Get in Touch", es: "Contáctame" })}
              <span
                className="transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden
              >
                →
              </span>
            </a>
          </div>

          <div className="flex shrink-0 items-center gap-3 lg:hidden">
            <div className="md:hidden">
              <LanguageToggle />
            </div>
            <button
              type="button"
              aria-label={t({ en: "Toggle menu", es: "Abrir o cerrar menú" })}
              aria-expanded={open}
              aria-controls="mobile-menu"
              ref={menuButton}
              onClick={() => setOpen((v) => !v)}
              className="flex h-[44px] w-[44px] flex-col items-center justify-center gap-[5px] border border-ink/15"
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
          <div
            id="mobile-menu"
            className="max-h-[calc(100svh-68px)] overflow-y-auto border-t border-ink/10 bg-cream px-6 pb-8 pt-2 lg:hidden"
          >
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={`${base}${link.href}`}
                  onClick={() => setOpen(false)}
                  className="border-b border-ink/10 py-4 font-mono text-ui uppercase tracking-wideish text-ink/75"
                >
                  {t(link.label)}
                </a>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`${base}#contact`}
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 bg-ink px-5 py-3 text-ui font-medium text-cream"
              >
                {t({ en: "Get in Touch", es: "Contáctame" })}
                <span aria-hidden>→</span>
              </a>
              <a
                href={site.resumeUrl}
                download={resumeFileName}
                className="inline-flex items-center gap-2 border border-ink/20 px-5 py-3 text-ui font-medium text-ink"
              >
                {t(resumeLabel)}
                <span className="border border-ink/20 px-1.5 py-0.5 font-mono text-label font-normal uppercase tracking-wideish text-ink/65">PDF</span>
                <span aria-hidden>↓</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
