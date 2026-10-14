"use client";

import { site } from "@/lib/site";
import { useT } from "@/lib/i18n";

/**
 * `base` prefixes the in-page anchors so the footer works on pages other
 * than the homepage (the 404 passes base="/").
 */
export default function Footer({ base = "" }: { base?: string }) {
  const t = useT();
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950">
      <div className="mx-auto max-w-content px-6 pb-10 pt-16 md:px-10 md:pt-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 text-center md:grid-cols-12 md:gap-8 md:text-left">
          {/* Brand */}
          <div className="col-span-2 md:col-span-5">
            <div className="flex items-center justify-center gap-3 md:justify-start">
              <span className="flex h-9 w-9 items-center justify-center border border-paper/20 font-mono text-[0.75rem] text-paper">
                JC
              </span>
              <span className="text-[1rem] font-medium text-paper">{site.name}</span>
            </div>
            <p className="mt-4 font-mono text-label uppercase tracking-wideish text-paper/70">
              {t(site.tagline)}
            </p>
          </div>

          {/* Links */}
          <FooterLinks
            className="md:col-span-2 md:col-start-7"
            title={t({ en: "Connect", es: "Conecta" })}
            links={[
              { label: "LinkedIn", href: site.linkedin },
              { label: "GitHub", href: site.github },
              { label: t({ en: "Email", es: "Correo" }), href: `mailto:${site.email}` },
            ]}
          />
          <FooterLinks
            className="md:col-span-2"
            title={t({ en: "Site", es: "Sitio" })}
            links={[
              { label: t({ en: "Work", es: "Proyectos" }), href: `${base}#work` },
              { label: t({ en: "Experience", es: "Experiencia" }), href: `${base}#experience` },
              { label: t({ en: "Leadership", es: "Liderazgo" }), href: `${base}#leadership` },
              { label: t({ en: "About", es: "Sobre mí" }), href: `${base}#about` },
            ]}
          />

          {/* Back to top */}
          <div className="col-span-2 flex justify-center md:col-span-2 md:justify-end">
            <a
              // On other pages (404) "back to top" stays on that page
              href={base ? "#main" : "#home"}
              className="group inline-flex h-fit min-h-11 items-center gap-3 whitespace-nowrap font-mono text-label uppercase tracking-wideish text-paper/70 transition-colors duration-200 hover:text-paper"
            >
              {t({ en: "Back to top", es: "Volver arriba" })}
              <span className="flex h-11 w-11 items-center justify-center border border-paper/20 text-paper/70 transition-colors duration-200 group-hover:border-accent-bright group-hover:text-accent-bright" aria-hidden>
                ↑
              </span>
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-3 border-t border-paper/10 pt-6 text-center text-meta text-paper/70 md:flex-row md:justify-between md:text-left">
          <span>&copy; {year} {site.name}. {t({ en: "All rights reserved.", es: "Todos los derechos reservados." })}</span>
          <span>{t({ en: "Built with Next.js.", es: "Hecho con Next.js." })}</span>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({
  title,
  links,
  className = "",
}: {
  title: string;
  links: { label: string; href: string }[];
  className?: string;
}) {
  return (
    <div className={className}>
      <span className="font-mono text-label uppercase tracking-wideish text-paper/70">
        {title}
      </span>
      <ul className="mt-2">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="inline-flex min-h-11 min-w-11 items-center justify-center text-ui text-paper/75 md:justify-start transition-colors duration-200 hover:text-paper"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
