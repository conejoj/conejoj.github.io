export interface ExperienceEntry {
  company: string;
  role: string;
  dates: string;
  description: string;
  highlights: string[];
  tech: string[];
  focus: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "NOVA Solutions",
    role: "Automation & AI Intern",
    dates: "2025 - Mar 2026",
    description:
      "Worked across automation, AI-assisted development, CRM integrations, and web development.",
    highlights: [
      "Worked on CRM integrations and automated data-processing workflows.",
      "Supported the rebuild of a company website and worked on improving page-load performance.",
    ],
    tech: ["n8n", "CRM Integrations", "APIs", "Web Performance"],
    focus: ["Automation Engineering", "AI-Assisted Development"],
  },
  {
    company: "Prime Software Solutions",
    role: "Software Developer, Capstone",
    dates: "2025 - 2026",
    description:
      "Worked with a development team to design and deliver a modular internal business dashboard.",
    highlights: [
      "Developed PHP/MySQL application features and reusable dashboard components.",
      "Implemented personalized layouts and collaborative announcement functionality.",
      "Participated in testing, debugging, and iterative product development.",
    ],
    tech: ["PHP", "MySQL", "JavaScript"],
    focus: ["Full-Stack Development", "Product Development"],
  },
  {
    company: "Freelance",
    role: "Web Developer",
    dates: "2022 - Present",
    description:
      "Delivered websites for small businesses and healthcare clients, with a focus on performance, clarity, and trust-building design.",
    highlights: [
      "Rebuilt and maintained client websites, including the Panama Cancer Clinic site, improving structure and load performance.",
      "Worked directly with clients to translate their goals into clear, accessible page layouts.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Accessibility (WCAG)"],
    focus: ["Web Development"],
  },
];
