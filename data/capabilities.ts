export interface Capability {
  index: string;
  title: string;
  description: string;
}

export const capabilities: Capability[] = [
  {
    index: "01",
    title: "Software Engineering",
    description:
      "Building applications, APIs, dashboards, and internal tools around how a business actually works, from the data model to the interface.",
  },
  {
    index: "02",
    title: "AI & Automation",
    description:
      "Using AI, APIs, and workflow automation to cut repetitive work and make processes easier to track.",
  },
  {
    index: "03",
    title: "Web Development",
    description:
      "Building fast, responsive, accessible websites that are easy to use and easy to maintain.",
  },
  {
    index: "04",
    title: "DevOps & Cloud",
    description:
      "Setting up source control, CI/CD pipelines, and cloud deployments so code gets from development to production reliably.",
  },
];
