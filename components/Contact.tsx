import Reveal from "@/lib/Reveal";
import { site } from "@/lib/site";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-paper/10 bg-accent-deep py-28 md:py-36"
    >
      <div
        className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] -translate-y-1/3 translate-x-1/4 rounded-full border border-paper/15"
        aria-hidden
      />

      <div className="relative mx-auto max-w-content px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-end md:gap-6">
          <div className="md:col-span-8">
            <Reveal>
              <div className="mb-6 flex items-center gap-3 font-mono text-[12px] uppercase tracking-widest2 text-paper/55">
                <span className="h-px w-8 bg-paper/35" />
                Contact
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-balance font-display text-[clamp(2.25rem,5.5vw,4.25rem)] font-medium leading-[1.05] tracking-tight text-paper">
                Let&rsquo;s build something useful.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-md text-balance text-[15px] leading-relaxed text-paper/65">
                I&rsquo;m always interested in meaningful software, AI,
                automation, and technology projects, or simply connecting
                with people working on interesting problems.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <a
                href={`mailto:${site.email}`}
                className="group mt-9 inline-flex items-center gap-2 bg-paper px-7 py-4 text-[14px] font-medium text-ink transition-colors duration-300 hover:bg-cream"
              >
                Get in Touch
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </Reveal>
          </div>

          <div className="md:col-span-4">
            <Reveal delay={260}>
              <div className="flex flex-col gap-5 border-t border-paper/20 pt-6 md:border-t-0 md:border-l md:pl-8 md:pt-0">
                {[
                  { label: "Email", value: site.email, href: `mailto:${site.email}` },
                  { label: "LinkedIn", value: "linkedin.com/in/joseconejochevez", href: site.linkedin },
                  { label: "GitHub", value: "github.com/joseconejochevez", href: site.github },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === "Email" ? undefined : "_blank"}
                    rel={item.label === "Email" ? undefined : "noreferrer"}
                    className="group block"
                  >
                    <span className="block font-mono text-[10px] uppercase tracking-wideish text-paper/45">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-[14px] text-paper/85 transition-colors duration-200 group-hover:text-paper">
                      {item.value}
                    </span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
