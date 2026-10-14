"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { resumeFileName, resumeLabel, site } from "@/lib/site";
import { useT } from "@/lib/i18n";

/** Client part of the branded 404 (language-aware copy). */
export default function NotFoundView() {
  const t = useT();

  return (
    <>
      <Navbar base="/" />
      <main id="main" tabIndex={-1} className="relative flex min-h-[100svh] items-center overflow-hidden bg-cream pt-24">
        <div
          className="pointer-events-none absolute inset-0 bg-grid-light bg-[length:64px_64px] opacity-[0.5] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
          aria-hidden
        />
        <div className="relative mx-auto w-full max-w-content px-6 text-center md:px-10 md:text-left">
          <p className="flex items-center justify-center gap-3 font-mono text-eyebrow uppercase tracking-widest2 text-ink/70 md:justify-start">
            <span className="h-px w-8 bg-ink/30" aria-hidden />
            {t({ en: "Error 404", es: "Error 404" })}
          </p>
          <h1 className="mt-6 max-w-3xl text-balance font-display text-[clamp(2.4rem,5.5vw,4.5rem)] font-medium leading-[1.04] tracking-tight text-ink">
            {t({
              en: "This page doesn’t exist.",
              es: "Esta página no existe.",
            })}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lead text-ink/70 md:mx-0">
            {t({
              en: "The link may be old or mistyped. Everything on this site lives on the homepage.",
              es: "Puede que el enlace sea antiguo o tenga un error. Todo el contenido del sitio está en la página principal.",
            })}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href="/"
              className="group inline-flex items-center gap-2 bg-ink px-6 py-3.5 text-ui font-medium text-cream transition-colors duration-300 hover:bg-accent-deep"
            >
              {t({ en: "Go to the homepage", es: "Ir a la página principal" })}
              <span aria-hidden>→</span>
            </a>
            <a
              href={site.resumeUrl}
              download={resumeFileName}
              className="inline-flex items-center gap-2 border border-ink/20 px-6 py-3.5 text-ui font-medium text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              {t(resumeLabel)}
              <span className="border border-ink/20 px-1.5 py-0.5 font-mono text-label font-normal uppercase tracking-wideish text-ink/65">PDF</span>
              <span aria-hidden>↓</span>
            </a>
          </div>
        </div>
      </main>
      <Footer base="/" />
    </>
  );
}
