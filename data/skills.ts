import type { L, Text } from "@/lib/i18n";

export interface SkillGroup {
  index: string;
  title: L;
  items: Text[];
}

export const skillGroups: SkillGroup[] = [
  {
    index: "01",
    title: { en: "Languages", es: "Lenguajes" },
    items: ["Python", "JavaScript", "TypeScript", "SQL", "C#", "Java", "HTML", "CSS"],
  },
  {
    index: "02",
    title: { en: "Frameworks & Development", es: "Frameworks y Desarrollo" },
    items: [
      "Next.js",
      "React",
      "Django",
      "FastAPI",
      { en: "REST APIs", es: "APIs REST" },
    ],
  },
  {
    index: "03",
    title: { en: "AI & Automation", es: "IA y Automatización" },
    items: [
      "n8n",
      { en: "OpenAI APIs", es: "APIs de OpenAI" },
      { en: "Anthropic APIs", es: "APIs de Anthropic" },
      "Machine Learning",
      { en: "AI Integrations", es: "Integraciones de IA" },
    ],
  },
  {
    index: "04",
    title: { en: "Data & Cloud", es: "Datos y Cloud" },
    items: ["MySQL", "SQL Server", "Firebase", "Azure", "Azure DevOps"],
  },
  {
    index: "05",
    title: { en: "Tools", es: "Herramientas" },
    items: ["Git", "GitHub", "Linux", "VS Code", "CI/CD"],
  },
];
