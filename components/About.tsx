"use client";

import Image from "next/image";
import Reveal from "@/lib/Reveal";
import { site } from "@/lib/site";
import { useT } from "@/lib/i18n";

const labelClass =
  "font-mono text-[10.5px] uppercase tracking-wideish text-ink/40";
const valueClass = "mt-2 text-[15px] leading-snug text-ink/80";

export default function About() {
  const t = useT();
  return (
    <section id="about" className="border-b border-ink/10 bg-stone-100">
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-10">
          {/* Portrait */}
          <div className="md:col-span-5">
            <Reveal>
              <figure className="relative mx-auto max-w-sm md:mx-0 md:max-w-none">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-200">
                  <Image
                    src="/images/about-portrait-full.webp"
                    alt={t({
                      en: "Jose Conejo at the John Brown University Board of Trustees meeting, Fall 2025",
                      es: "Jose Conejo en la reunión del Board of Trustees (Junta Directiva) de John Brown University, otoño de 2025",
                    })}
                    width={960}
                    height={1280}
                    sizes="(min-width: 768px) 460px, 384px"
                    className="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-x-4 bottom-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-wideish text-ink/75">
                    <span className="bg-cream/75 px-2.5 py-1.5 backdrop-blur-sm">{t({ en: "Portrait", es: "Retrato" })}</span>
                    <span className="bg-cream/75 px-2.5 py-1.5 backdrop-blur-sm">JC</span>
                  </div>
                </div>
                <div
                  className="absolute -top-5 -left-5 -z-10 hidden h-24 w-24 border border-ink/15 bg-cream md:block"
                  aria-hidden
                />
                <figcaption className="mt-4 flex flex-col items-center gap-1 border-t border-ink/12 pt-4 text-center md:flex-row md:items-start md:gap-4 md:text-left">
                  <span className="shrink-0 pt-[3px] font-mono text-[10.5px] uppercase tracking-wideish text-ink/40">
                    {t({ en: "Fall 2025", es: "Otoño 2025" })}
                  </span>
                  <span className="text-[13px] leading-relaxed text-ink/60">
                    {t({
                      en: "Representing the Student Government Association as President at John Brown University\u2019s Board of Trustees meeting.",
                      es: "Representando a la Asociación de Gobierno Estudiantil como presidente en la reunión del Board of Trustees (Junta Directiva) de John Brown University.",
                    })}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* Copy + profile details */}
          <div className="text-center md:col-span-7 md:pl-6 md:text-left">
            <Reveal>
              <div className="mb-5 flex items-center justify-center gap-3 font-mono text-[12px] uppercase tracking-widest2 text-ink/50 md:justify-start">
                <span className="h-px w-8 bg-ink/30" />
                {t({ en: "About", es: "Sobre mí" })}
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="text-balance font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-tight text-ink">
                {t({
                  en: "Most of the projects I enjoy start with something that is more complicated than it needs to be.",
                  es: "La mayoría de los proyectos que disfruto empiezan con algo más complicado de lo necesario.",
                })}
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <div className="mx-auto mt-7 max-w-xl space-y-4 text-[15px] md:mx-0 leading-relaxed text-ink/65">
                <p>
                  {t({
                    en: "I\u2019m from Costa Rica and graduated from John Brown University with a degree in Computer Science & AI. Over the last few years, I\u2019ve built software for students and university staff, small businesses, and healthcare clients.",
                    es: "Soy de Costa Rica y me gradué de John Brown University en Ciencias de la Computación e IA. En los últimos años he desarrollado software para estudiantes y personal universitario, pequeñas empresas y clientes del sector salud.",
                  })}
                </p>
                <p>
                  {t({
                    en: "My work has ranged from a university service-hours platform to CRM automations and client websites. I enjoy understanding how something currently works, figuring out what could be better, and then actually building it.",
                    es: "Mi trabajo va desde una plataforma universitaria de horas de servicio hasta automatizaciones de CRM y sitios web para clientes. Me gusta entender cómo funciona algo hoy, descubrir qué podría ser mejor y luego construirlo de verdad.",
                  })}
                </p>
                <p>
                  {t({
                    en: "College was also a big part of how I grew outside of software. I served in student government first as a Senator and later as President, and I participated in the Aspire Leaders Program alongside students from around the world.",
                    es: "La universidad también fue clave en mi crecimiento fuera del software. Formé parte del gobierno estudiantil, primero como senador y luego como presidente, y participé en el Aspire Leaders Program junto a estudiantes de todo el mundo.",
                  })}
                </p>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <dl className="mx-auto mt-10 grid max-w-2xl grid-cols-1 border-t border-ink/12 sm:grid-cols-2 md:mx-0">
                <div className="border-b border-ink/12 py-5 sm:pr-6">
                  <dt className={labelClass}>{t({ en: "Location", es: "Ubicación" })}</dt>
                  <dd className={valueClass}>{site.location}</dd>
                </div>
                <div className="border-b border-ink/12 py-5 sm:border-l sm:pl-6">
                  <dt className={labelClass}>{t({ en: "Education", es: "Educación" })}</dt>
                  <dd className={valueClass}>John Brown University</dd>
                </div>
                <div className="border-b border-ink/12 py-5 sm:col-span-2">
                  <dt className={labelClass}>{t({ en: "Languages", es: "Idiomas" })}</dt>
                  <dd className={valueClass}>
                    {t({
                      en: "Spanish (Native) · Costa Rican Creole (Native) · English (C2) · French (B2) · Portuguese (B2)",
                      es: "Español (nativo) · Criollo limonense (nativo) · Inglés (C2) · Francés (B2) · Portugués (B2)",
                    })}
                  </dd>
                </div>
              </dl>
            </Reveal>

          </div>
        </div>

        {/* Resume: centered on the page, below both columns */}
        <Reveal delay={200}>
          <div className="mt-16 flex items-center gap-6 md:mt-20">
            <span className="h-px flex-1 bg-ink/15" aria-hidden />
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 bg-ink px-7 py-4 text-[14px] font-medium text-cream shadow-[0_14px_30px_-16px_rgba(18,24,31,0.55)] transition-colors duration-300 hover:bg-accent-deep"
            >
              {t({ en: "Download Resume", es: "Descargar CV" })}
              <span className="border border-cream/25 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wideish text-cream/70">
                PDF
              </span>
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
            <span className="h-px flex-1 bg-ink/15" aria-hidden />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
