import type { L } from "@/lib/i18n";

export const site = {
  name: "Jose Conejo",
  monogram: "JC",
  role: "Software Engineer",
  tagline: {
    en: "Software · AI · Automation",
    es: "Software · IA · Automatización",
  } as L,
  email: "joseconejochevez@gmail.com",
  linkedin: "https://www.linkedin.com/in/conejoj/",
  github: "https://github.com/joseconejochevez-prog",
  resumeUrl: "/Jose_Conejo_CV.pdf",
  location: "Costa Rica",
  url: "https://joseconejo.me",
};

/** Shown next to the hero status dot and in the contact section. */
export const availability: L = {
  en: "Open to remote & Costa Rica roles",
  es: "Disponible para roles remotos y en Costa Rica",
};

// One résumé label everywhere. Every résumé link downloads the PDF (download
// attribute) under this file name instead of opening a new tab.
export const resumeLabel: L = { en: "Download Resume", es: "Descargar CV" };
export const resumeFileName = "Jose_Conejo_CV.pdf";

export const navLinks: { label: L; href: string }[] = [
  { label: { en: "Work", es: "Proyectos" }, href: "#work" },
  { label: { en: "Experience", es: "Experiencia" }, href: "#experience" },
  { label: { en: "Leadership", es: "Liderazgo" }, href: "#leadership" },
  { label: { en: "About", es: "Sobre mí" }, href: "#about" },
  { label: { en: "Contact", es: "Contacto" }, href: "#contact" },
];

export const expertiseLabels: L[] = [
  { en: "Software Engineering", es: "Ingeniería de Software" },
  { en: "AI", es: "IA" },
  { en: "Automation", es: "Automatización" },
  { en: "DevOps", es: "DevOps" },
];
