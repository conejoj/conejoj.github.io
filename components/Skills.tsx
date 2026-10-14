"use client";

import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/lib/Reveal";
import { skillGroups } from "@/data/skills";
import { useT } from "@/lib/i18n";

/**
 * Dark, multi-column index of tools. Each category is a column with its
 * number in teal, a hairline under the title, and a plain-text list.
 */
export default function Skills() {
  const t = useT();
  return (
    <section className="border-b border-paper/10 bg-navy-900">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-24">
        <SectionHeader
          eyebrow={{ en: "Skills & Technology", es: "Habilidades y Tecnología" }}
          title={{ en: "What I work with.", es: "Con lo que trabajo." }}
          tone="dark"
        />

        <div className="mt-12 grid grid-cols-1 gap-x-10 border-t border-paper/10 sm:grid-cols-2 md:mt-16 lg:grid-cols-5 lg:gap-x-8">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.index}
              delay={i * 70}
              className={`pt-8 text-center sm:text-left ${
                // In the two-column layout, an odd last category sits centered
                // on its own row at the same width as the other columns.
                i === skillGroups.length - 1 && skillGroups.length % 2 === 1
                  ? "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-1.25rem)] lg:col-span-1 lg:mx-0 lg:w-auto"
                  : ""
              }`}
            >
              <span className="font-mono text-eyebrow text-accent-bright">
                {group.index}
              </span>
              <h3 className="mt-2 border-b border-paper/10 pb-4 font-display sm:mt-3 sm:pb-5 text-[1.25rem] font-medium leading-snug tracking-tight text-paper lg:flex lg:min-h-[5.25rem] lg:items-end">
                {t(group.title)}
              </h3>
              {/* Longer lists (Languages) flow into a second column so every
                  category is five rows tall. */}
              <ul
                className={`mt-4 flex flex-wrap justify-center gap-2 pb-2 sm:mt-5 sm:justify-start sm:pb-4 ${
                  group.items.length > 5
                    ? "sm:grid sm:grid-flow-col sm:grid-rows-5 sm:justify-start sm:gap-x-6 sm:gap-y-2.5"
                    : "sm:block sm:space-y-2.5"
                }`}
              >
                {group.items.map((item) => (
                  <li
                    key={typeof item === "string" ? item : item.en}
                    className="border border-paper/15 px-3 py-1.5 text-body-sm leading-snug text-paper/80 sm:border-0 sm:p-0 sm:text-paper/75"
                  >
                    {t(item)}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
