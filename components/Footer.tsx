"use client";

import { site } from "@/lib/site";
import { useT } from "@/lib/i18n";

export default function Footer() {
  const t = useT();
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950">
      <div className="mx-auto max-w-content px-6 pb-10 pt-16 md:px-10 md:pt-20">
        <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-12 md:gap-8 md:text-left">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-5">
            <div className="flex items-center justify-center gap-3 md:justify-start">
              <span className="flex h-9 w-9 items-center justify-center border border-paper/20 font-mono text-[12px] text-paper">
                JC
              </span>
              <span className="text-[16px] font-medium text-paper">{site.name}</span>
            </div>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-wideish text-paper/40">
              {t(site.tagline)}
            </p>
          </div>

          {/* Links */}
          <FooterLinks
            className="md:col-span-2 md:col-start-7"
            title={t({ en: "Connect", es: "Contacto" })}
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
              { label: t({ en: "Work", es: "Proyectos" }), href: "#work" },
              { label: t({ en: "Experience", es: "Experiencia" }), href: "#experience" },
              { label: t({ en: "About", es: "Sobre mí" }), href: "#about" },
              { label: t({ en: "Contact", es: "Contacto" }), href: "#contact" },
            ]}
          />

          {/* Back to top */}
          <div className="flex justify-center sm:col-span-2 md:col-span-2 md:justify-end">
            <a
              href="#home"
              className="group inline-flex h-fit items-center gap-3 font-mono text-[11px] uppercase tracking-wideish text-paper/55 transition-colors duration-200 hover:text-paper"
            >
              {t({ en: "Back to top", es: "Volver arriba" })}
              <span className="flex h-9 w-9 items-center justify-center border border-paper/20 text-paper/70 transition-colors duration-200 group-hover:border-accent-bright group-hover:text-accent-bright">
                ↑
              </span>
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-3 border-t border-paper/10 pt-6 text-center text-[12px] text-paper/40 md:flex-row md:justify-between md:text-left">
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
      <span className="font-mono text-[10px] uppercase tracking-wideish text-paper/35">
        {title}
      </span>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="text-[14px] text-paper/65 transition-colors duration-200 hover:text-paper"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
