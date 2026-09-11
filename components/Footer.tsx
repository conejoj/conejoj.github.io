import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950">
      <div className="mx-auto max-w-content px-6 py-14 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center border border-paper/20 font-mono text-[12px] text-paper">
                JC
              </span>
              <span className="text-[15px] font-medium text-paper">
                {site.name}
              </span>
            </div>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-wideish text-paper/40">
              {site.tagline}
            </p>
          </div>

          <div className="flex gap-10">
            <FooterLinks
              title="Connect"
              links={[
                { label: "LinkedIn", href: site.linkedin },
                { label: "GitHub", href: site.github },
                { label: "Email", href: `mailto:${site.email}` },
              ]}
            />
            <FooterLinks
              title="Site"
              links={[
                { label: "Work", href: "#work" },
                { label: "Experience", href: "#experience" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ]}
            />
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-paper/10 pt-6 text-[12px] text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {year} {site.name}. All rights reserved.</span>
          <span>Designed &amp; built with intention.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <span className="font-mono text-[10px] uppercase tracking-wideish text-paper/35">
        {title}
      </span>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="text-[13px] text-paper/65 transition-colors duration-200 hover:text-paper"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
