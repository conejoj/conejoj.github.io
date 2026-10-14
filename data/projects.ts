import type { L } from "@/lib/i18n";

export interface Project {
  index: string;
  slug: string;
  name: L;
  category: L;
  description: L;
  highlights: L[];
  year: string;
  href?: string;
  image?: string;
  imageAspect?: string;
  imageAlt?: L;
  accent: "cream" | "stone";
}

export const projects: Project[] = [
  {
    index: "01",
    slug: "walton-service-hours",
    name: {
      en: "Walton Service Hours Platform",
      es: "Plataforma de Horas de Servicio Walton",
    },
    image: "/images/walton-dashboard.webp",
    imageAspect: "1600/906",
    imageAlt: {
      en: "Walton Service Hours Platform student dashboard showing 16 community service hours and approved reports",
      es: "Panel de estudiante de la Plataforma de Horas de Servicio Walton con 16 horas de servicio comunitario y reportes aprobados",
    },
    category: {
      en: "Full-Stack Development · Authentication · Azure",
      es: "Desarrollo Full-Stack · Autenticación · Azure",
    },
    description: {
      en: "Students needed one place to submit service hours, and administrators needed one place to review and approve them. Built as part of a team at John Brown University, this role-based platform handles both.",
      es: "Los estudiantes necesitaban un solo lugar para registrar sus horas de servicio, y los administradores, uno para revisarlas y aprobarlas. Desarrollada en equipo en John Brown University, esta plataforma basada en roles resuelve ambas cosas.",
    },
    highlights: [
      {
        en: "Worked on submission, review, and approval workflows with different student and administrator permissions.",
        es: "Trabajé en los flujos de envío, revisión y aprobación, con permisos distintos para estudiantes y administradores.",
      },
      {
        en: "Contributed to the Microsoft authentication integration using Azure AD/MSAL and claims-based access control.",
        es: "Contribuí a la integración de autenticación de Microsoft con Azure AD/MSAL y control de acceso basado en claims.",
      },
      {
        en: "Created structured student history views for tracking more than 300 recorded service hours.",
        es: "Creé vistas del historial de cada estudiante para dar seguimiento a más de 300 horas de servicio registradas.",
      },
    ],
    year: "2026",
    accent: "cream",
  },
  {
    index: "02",
    slug: "automation-systems",
    name: { en: "Automation Systems", es: "Sistemas de Automatización" },
    image: "/images/automation-workflow.webp",
    imageAspect: "1600/601",
    imageAlt: {
      en: "n8n workflow that triages incoming Gmail with AI, logs status changes, and creates Google Calendar alerts",
      es: "Flujo de n8n que clasifica con IA los correos entrantes de Gmail, registra cambios de estado y crea alertas en Google Calendar",
    },
    category: {
      en: "n8n · CRM · APIs · Workflow Automation",
      es: "n8n · CRM · APIs · Automatización de Flujos",
    },
    description: {
      en: "Business data had to move between CRMs, APIs, and cloud tools to keep internal processes running. These n8n workflows connect those systems so the data moves on its own.",
      es: "Los datos del negocio debían pasar entre CRMs, APIs y herramientas en la nube para mantener los procesos internos en marcha. Estos flujos de n8n conectan esos sistemas para que los datos se muevan solos.",
    },
    highlights: [
      {
        en: "Worked on n8n automation workflows connecting CRM platforms, APIs, cloud services, and internal tools.",
        es: "Trabajé en flujos de automatización con n8n que conectan plataformas CRM, APIs, servicios en la nube y herramientas internas.",
      },
      {
        en: "Contributed to CRM integrations and automated data-processing workflows.",
        es: "Contribuí a integraciones de CRM y a flujos automatizados de procesamiento de datos.",
      },
      {
        en: "Used AI-assisted development tools to support automation and workflow development.",
        es: "Usé herramientas de desarrollo asistidas por IA para apoyar el diseño y desarrollo de automatizaciones.",
      },
    ],
    year: "2025",
    accent: "stone",
  },
  {
    index: "03",
    slug: "panama-cancer-clinic",
    name: {
      en: "Panama Cancer Clinic Website",
      es: "Sitio Web de Panama Cancer Clinic",
    },
    image: "/images/panama-cancer-clinic.webp",
    imageAspect: "1600/862",
    imageAlt: {
      en: "Panama Cancer Clinic website homepage",
      es: "Página de inicio del sitio web de Panama Cancer Clinic",
    },
    category: {
      en: "Web Development · Performance · Website Rebuild",
      es: "Desarrollo Web · Rendimiento · Reconstrucción del Sitio",
    },
    description: {
      en: "The clinic’s website needed a clearer structure and faster pages. The rebuild reorganized its content and improved load times and responsiveness.",
      es: "El sitio web de la clínica necesitaba una estructura más clara y páginas más rápidas. La reconstrucción reorganizó su contenido y mejoró los tiempos de carga y la adaptación a distintos dispositivos.",
    },
    highlights: [
      {
        en: "Worked on rebuilding the clinic's website and improving its overall structure and user experience.",
        es: "Trabajé en la reconstrucción del sitio web de la clínica, mejorando su estructura y la experiencia del usuario.",
      },
      {
        en: "Helped improve page-loading performance and website responsiveness.",
        es: "Ayudé a mejorar la velocidad de carga y la adaptación del sitio a distintos dispositivos.",
      },
      {
        en: "Updated and refined website content and page structure to make information easier for visitors to navigate.",
        es: "Actualicé y ordené el contenido y la estructura de las páginas para que los visitantes encuentren la información más fácilmente.",
      },
    ],
    year: "2022",
    accent: "cream",
  },
  {
    index: "04",
    slug: "prime-software-dashboard",
    name: {
      en: "Prime Software Solutions Dashboard",
      es: "Dashboard de Prime Software Solutions",
    },
    image: "/images/prime-software-dashboard-v2.webp",
    imageAspect: "1600/772",
    imageAlt: {
      en: "Prime Software Solutions internal dashboard",
      es: "Dashboard interno de Prime Software Solutions",
    },
    category: {
      en: "PHP · MySQL · Product Development",
      es: "PHP · MySQL · Desarrollo de Producto",
    },
    description: {
      en: "Company information and tools lived in different places. This customizable internal dashboard brings them into one view that each employee can arrange for their own work.",
      es: "La información y las herramientas de la empresa estaban en lugares distintos. Este dashboard interno personalizable las reúne en una sola vista que cada empleado puede organizar según su trabajo.",
    },
    highlights: [
      {
        en: "Developed drag-and-drop widgets with layouts saved independently for each user.",
        es: "Desarrollé widgets de arrastrar y soltar, con diseños guardados de forma independiente para cada usuario.",
      },
      {
        en: "Built an announcements system with editing, pinning, likes, and administrative controls.",
        es: "Construí un sistema de anuncios con edición, fijado, likes y controles administrativos.",
      },
      {
        en: "Participated in application testing and usability improvements across dashboard components.",
        es: "Participé en las pruebas de la aplicación y en mejoras de usabilidad de los componentes del dashboard.",
      },
    ],
    year: "2025",
    accent: "stone",
  },
  {
    index: "05",
    slug: "ai-mental-health-journal",
    name: {
      en: "AI Mental Health Journal",
      es: "Diario de Salud Mental con IA",
    },
    image: "/images/ai-mental-health-journal.webp",
    imageAspect: "1600/790",
    imageAlt: {
      en: "AI Mental Health Journal stress-trend dashboard",
      es: "Panel de tendencias de estrés del Diario de Salud Mental con IA",
    },
    category: {
      en: "Django · Machine Learning · Python",
      es: "Django · Machine Learning · Python",
    },
    description: {
      en: "Built to help people notice stress patterns in their own writing: a Django app that pairs a private journal with machine-learning stress analysis.",
      es: "Creada para ayudar a las personas a notar patrones de estrés en lo que escriben: una aplicación en Django que combina un diario privado con análisis de estrés basado en machine learning.",
    },
    highlights: [
      {
        en: "Built authentication, journal management, and a personalized dashboard.",
        es: "Construí la autenticación, la gestión del diario y un panel personalizado.",
      },
      {
        en: "Integrated a scikit-learn model to analyze journal-related stress indicators.",
        es: "Integré un modelo de scikit-learn para analizar indicadores de estrés en las entradas del diario.",
      },
      {
        en: "Designed the project around turning machine-learning output into a simple user-facing experience.",
        es: "Diseñé el proyecto para convertir los resultados del modelo en una experiencia simple para el usuario.",
      },
    ],
    year: "2023",
    accent: "cream",
  },
];
