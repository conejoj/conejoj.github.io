export interface Capability {
  index: string;
  title: string;
  description: string;
}

export const capabilities: Capability[] = [
  {
    index: "01",
    title: "Software Development",
    description:
      "Building applications, APIs, dashboards, and internal tools around real business requirements, from data model to interface.",
  },
  {
    index: "02",
    title: "AI & Automation",
    description:
      "Using artificial intelligence, APIs, integrations, and workflow automation to reduce repetitive work and create smarter, more visible systems.",
  },
  {
    index: "03",
    title: "Web Development",
    description:
      "Creating responsive digital experiences focused on usability, performance, accessibility, and long-term maintainability.",
  },
  {
    index: "04",
    title: "DevOps & Cloud",
    description:
      "Working with CI/CD pipelines, source control, cloud services, deployments, infrastructure, and development environments.",
  },
];
