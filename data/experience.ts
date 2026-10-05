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
    dates: "2025–Mar 2026",
    description:
      "Contributed to automation, CRM integrations, AI-assisted development, and web development initiatives.",
    highlights: [
      "Worked on CRM integrations and automated data-processing workflows.",
      "Supported the rebuild of a company website and worked on improving page-load performance.",
    ],
    tech: ["n8n", "APIs", "Web Performance", "AI-Assisted Development"],
    focus: ["Automation Engineering", "CRM Integrations"],
  },
  {
    company: "Prime Software Solutions",
    role: "Software Developer, Capstone",
    dates: "2025–2026",
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
    role: "Websites, Automation & Digital Marketing",
    dates: "2022–Present",
    description:
      "Building websites for small businesses, automating parts of how they deliver their services, and supporting their digital marketing.",
    highlights: [
      "Designed, built, and maintained client websites with a focus on performance and clear page structure.",
      "Set up service automations and supported digital marketing so clients could spend less time on repetitive tasks and reach more customers.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Automation"],
    focus: ["Website Building", "Digital Marketing"],
  },
];
