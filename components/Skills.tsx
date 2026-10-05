import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/lib/Reveal";
import { skillGroups } from "@/data/skills";

/**
 * Dark, multi-column index of tools. Each category is a column with its
 * number in teal, a hairline under the title, and a plain-text list.
 */
export default function Skills() {
  return (
    <section className="border-b border-paper/10 bg-navy-900">
      <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">
        <SectionHeader
          eyebrow="Skills & Technology"
          title="What I work with."
          tone="dark"
        />

        <div className="mt-16 grid grid-cols-1 gap-x-10 border-t border-paper/10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-8">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.title}
              delay={i * 70}
              className={`pt-8 text-center md:text-left ${
                // In the two-column layout, an odd last category sits centered
                // on its own row at the same width as the other columns.
                i === skillGroups.length - 1 && skillGroups.length % 2 === 1
                  ? "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-1.25rem)] md:col-span-1 md:mx-0 md:w-auto"
                  : ""
              }`}
            >
              <span className="font-mono text-[12px] text-accent-bright">
                {group.index}
              </span>
              <h3 className="mt-3 border-b border-paper/10 pb-5 text-[15px] font-medium leading-snug tracking-tight text-paper lg:min-h-[4.25rem]">
                {group.title}
              </h3>
              {/* Longer lists (Languages) flow into a second column so every
                  category is five rows tall. */}
              <ul
                className={`mt-5 pb-4 ${
                  group.items.length > 5
                    ? "grid grid-flow-col grid-rows-5 justify-center gap-x-6 gap-y-2.5 md:justify-start"
                    : "space-y-2.5"
                }`}
              >
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-[14.5px] leading-snug text-paper/60 transition-colors duration-200 hover:text-accent-bright"
                  >
                    {item}
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
