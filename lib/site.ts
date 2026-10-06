import type { L } from "@/lib/i18n";

export const site = {
  name: "Jose Conejo",
  monogram: "JC",
  role: "Software Developer",
  tagline: {
    en: "Software · AI · Automation",
    es: "Software · IA · Automatización",
  } as L,
  email: "joseconejochevez@gmail.com",
  linkedin: "https://www.linkedin.com/in/conejoj/",
  github: "https://github.com/joseconejochevez-prog",
  resumeUrl: "/jose-conejo-resume.pdf",
  location: "Costa Rica",
};

export const navLinks: { label: L; href: string }[] = [
  { label: { en: "Home", es: "Inicio" }, href: "#home" },
  { label: { en: "Work", es: "Proyectos" }, href: "#work" },
  { label: { en: "Experience", es: "Experiencia" }, href: "#experience" },
  { label: { en: "About", es: "Sobre mí" }, href: "#about" },
  { label: { en: "Contact", es: "Contacto" }, href: "#contact" },
];

export const expertiseLabels: L[] = [
  { en: "Software Engineering", es: "Ingeniería de Software" },
  { en: "AI", es: "IA" },
  { en: "Automation", es: "Automatización" },
  { en: "DevOps", es: "DevOps" },
];
