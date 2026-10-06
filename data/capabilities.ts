import type { L } from "@/lib/i18n";

export interface Capability {
  index: string;
  title: L;
  description: L;
}

export const capabilities: Capability[] = [
  {
    index: "01",
    title: { en: "Software Engineering", es: "Ingeniería de Software" },
    description: {
      en: "Building applications, APIs, dashboards, and internal tools around how a business actually works, from the data model to the interface.",
      es: "Desarrollo de aplicaciones, APIs, dashboards y herramientas internas basadas en cómo funciona realmente un negocio, desde el modelo de datos hasta la interfaz.",
    },
  },
  {
    index: "02",
    title: { en: "AI & Automation", es: "IA y Automatización" },
    description: {
      en: "Using AI, APIs, and workflow automation to cut repetitive work and make processes easier to track.",
      es: "Uso de IA, APIs y automatización de flujos para reducir el trabajo repetitivo y hacer que los procesos sean más fáciles de seguir.",
    },
  },
  {
    index: "03",
    title: { en: "Web Development", es: "Desarrollo Web" },
    description: {
      en: "Building fast, responsive, accessible websites that are easy to use and easy to maintain.",
      es: "Creación de sitios web rápidos, adaptables y accesibles, fáciles de usar y de mantener.",
    },
  },
  {
    index: "04",
    title: { en: "DevOps & Cloud", es: "DevOps y Cloud" },
    description: {
      en: "Setting up source control, CI/CD pipelines, and cloud deployments so code gets from development to production reliably.",
      es: "Configuración de control de versiones, pipelines de CI/CD y despliegues en la nube para que el código pase de desarrollo a producción de forma confiable.",
    },
  },
];
