import type { L, Text } from "@/lib/i18n";

export interface ExperienceEntry {
  company: Text;
  role: L;
  dates: L;
  description: L;
  highlights: L[];
  tech: Text[];
  focus: L[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "NOVA Solutions",
    role: {
      en: "Automation, AI & Web Development",
      es: "Automatización, IA y Desarrollo Web",
    },
    dates: { en: "2025–Mar 2026", es: "2025–mar. 2026" },
    description: {
      en: "Contributed to automation, CRM integrations, AI-assisted development, and web development initiatives.",
      es: "Contribuí a iniciativas de automatización, integraciones de CRM, desarrollo asistido por IA y desarrollo web.",
    },
    highlights: [
      {
        en: "Built automation workflows connecting CRM systems, APIs, cloud data sources, and third-party tools to support internal business processes and data movement.",
        es: "Construí flujos de automatización que conectan sistemas CRM, APIs, fuentes de datos en la nube y herramientas externas para apoyar procesos internos y el movimiento de datos.",
      },
      {
        en: "Used AI tools to assist with web development, automation design, debugging, documentation, and workflow improvement.",
        es: "Usé herramientas de IA para apoyar el desarrollo web, el diseño de automatizaciones, la depuración, la documentación y la mejora de procesos.",
      },
      {
        en: "Supported a website rebuild by improving front-end layout, refining page structure, and helping optimize load times for a smoother user experience.",
        es: "Apoyé la reconstrucción de un sitio web mejorando el diseño front-end, refinando la estructura de las páginas y ayudando a optimizar los tiempos de carga para una experiencia más fluida.",
      },
    ],
    tech: [
      "n8n",
      { en: "CRM Integrations", es: "Integraciones CRM" },
      "APIs",
      { en: "Web Performance", es: "Rendimiento Web" },
    ],
    focus: [
      { en: "Process Automation", es: "Automatización de Procesos" },
      { en: "Systems Integration", es: "Integración de Sistemas" },
      { en: "Front-End", es: "Front-End" },
    ],
  },
  {
    company: "Prime Software Solutions",
    role: {
      en: "Software Developer, Capstone",
      es: "Desarrollador de Software, Capstone",
    },
    dates: { en: "2025–2026", es: "2025–2026" },
    description: {
      en: "Worked with a development team to design and deliver a modular internal business dashboard.",
      es: "Trabajé con un equipo de desarrollo para diseñar y entregar un dashboard interno modular para la empresa.",
    },
    highlights: [
      {
        en: "Developed PHP/MySQL application features and reusable dashboard components.",
        es: "Desarrollé funcionalidades en PHP/MySQL y componentes reutilizables para el dashboard.",
      },
      {
        en: "Implemented personalized layouts and collaborative announcement functionality.",
        es: "Implementé diseños personalizados por usuario y una función colaborativa de anuncios.",
      },
      {
        en: "Participated in testing, debugging, and iterative product development.",
        es: "Participé en pruebas, depuración y desarrollo iterativo del producto.",
      },
    ],
    tech: ["PHP", "MySQL", "JavaScript"],
    focus: [
      { en: "Full-Stack Development", es: "Desarrollo Full-Stack" },
      { en: "Product Development", es: "Desarrollo de Producto" },
    ],
  },
  {
    company: "Freelance",
    role: {
      en: "Websites, Automation & Digital Marketing",
      es: "Sitios Web, Automatización y Marketing Digital",
    },
    dates: { en: "2022–Present", es: "2022–Actualidad" },
    description: {
      en: "Building websites for small businesses, automating parts of how they deliver their services, and supporting their digital marketing.",
      es: "Creo sitios web para pequeñas empresas, automatizo partes de cómo ofrecen sus servicios y apoyo su marketing digital.",
    },
    highlights: [
      {
        en: "Designed, built, and maintained client websites with a focus on performance and clear page structure.",
        es: "Diseñé, construí y mantuve sitios web de clientes con enfoque en el rendimiento y una estructura clara.",
      },
      {
        en: "Set up service automations and supported digital marketing so clients could spend less time on repetitive tasks and reach more customers.",
        es: "Configuré automatizaciones de servicios y apoyé el marketing digital para que los clientes dedicaran menos tiempo a tareas repetitivas y llegaran a más personas.",
      },
    ],
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      { en: "Automation", es: "Automatización" },
    ],
    focus: [
      { en: "Website Building", es: "Creación de Sitios Web" },
      { en: "Digital Marketing", es: "Marketing Digital" },
    ],
  },
];
