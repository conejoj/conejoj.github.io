export interface SkillGroup {
  index: string;
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    index: "01",
    title: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "C#", "Java", "HTML", "CSS"],
  },
  {
    index: "02",
    title: "Frameworks & Development",
    items: ["Next.js", "React", "Django", "FastAPI", "REST APIs"],
  },
  {
    index: "03",
    title: "AI & Automation",
    items: ["n8n", "OpenAI APIs", "Anthropic APIs", "scikit-learn", "AI Integrations"],
  },
  {
    index: "04",
    title: "Data & Cloud",
    items: ["MySQL", "SQL Server", "Firebase", "Azure", "Azure DevOps"],
  },
  {
    index: "05",
    title: "Tools",
    items: ["Git", "GitHub", "Linux", "VS Code", "CI/CD"],
  },
];
