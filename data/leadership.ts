import type { L } from "@/lib/i18n";

export interface LeadershipEntry {
  title: L;
  meta?: L;
  category?: L;
  description: L;
  highlights: L[];
  icon: "flag" | "globe" | "people" | "compass" | "home";
}

export const leadershipEntries: LeadershipEntry[] = [
  {
    title: {
      en: "Student Government President",
      es: "Presidente del Gobierno Estudiantil",
    },
    meta: {
      en: "John Brown University · 2025–2026",
      es: "John Brown University · 2025–2026",
    },
    description: {
      en: "Led and represented the student body while working with university leadership, student organizations, and students across campus.",
      es: "Lideré y representé al cuerpo estudiantil, trabajando con la dirección de la universidad, organizaciones estudiantiles y estudiantes de todo el campus.",
    },
    highlights: [
      {
        en: "Represented student perspectives in conversations with university leadership.",
        es: "Representé las perspectivas de los estudiantes en conversaciones con la dirección de la universidad.",
      },
      {
        en: "Worked with student organizations to address student needs and coordinate campus initiatives.",
        es: "Trabajé con organizaciones estudiantiles para atender las necesidades de los estudiantes y coordinar iniciativas en el campus.",
      },
    ],
    icon: "flag",
  },
  {
    title: {
      en: "Residence Life · RA → Assistant Resident Director",
      es: "Vida Residencial · RA → Director Residente Asistente",
    },
    meta: {
      en: "John Brown University · 2023–2026",
      es: "John Brown University · 2023–2026",
    },
    description: {
      en: "Progressed from Resident Assistant for an all-men underclassmen community to Assistant Resident Director of a coed upperclassmen hall serving 200+ students.",
      es: "Pasé de asistente residente (RA) en una comunidad masculina de estudiantes de primeros años a director residente asistente de una residencia mixta de estudiantes avanzados con más de 200 residentes.",
    },
    highlights: [
      {
        en: "Worked closely with the Resident Director on residence hall operations and community needs.",
        es: "Trabajé de cerca con el director residente en la operación de la residencia y las necesidades de la comunidad.",
      },
      {
        en: "Mentored and supported a team of 6–7 Resident Assistants, handling situations that required leadership and sound judgment.",
        es: "Guié y apoyé a un equipo de 6–7 asistentes residentes, atendiendo situaciones que requerían liderazgo y buen criterio.",
      },
    ],
    icon: "home",
  },
  {
    title: {
      en: "CIF President (Multicultural Organization)",
      es: "Presidente de CIF (una Organización Multicultural)",
    },
    description: {
      en: "Served as president of a multicultural student team focused on building community and helping students from different cultural backgrounds connect.",
      es: "Fui presidente de un equipo estudiantil multicultural enfocado en construir comunidad y ayudar a estudiantes de distintos orígenes culturales a conectar.",
    },
    highlights: [
      {
        en: "Planned and organized cultural and community events for the campus with other student organizations.",
        es: "Planifiqué y organicé eventos culturales y comunitarios para el campus junto con otras organizaciones estudiantiles.",
      },
      {
        en: "Worked with students from different countries, cultures, and backgrounds.",
        es: "Trabajé con estudiantes de distintos países, culturas y contextos.",
      },
    ],
    icon: "globe",
  },
  {
    title: { en: "Mentorship", es: "Mentoría" },
    description: {
      en: "Served as a mentor to students as they adjusted to university life and developed academically and personally.",
      es: "Fui mentor de estudiantes durante su adaptación a la vida universitaria y su desarrollo académico y personal.",
    },
    highlights: [
      {
        en: "Guided and supported students navigating college and campus life.",
        es: "Guié y apoyé a estudiantes en su vida universitaria y en el campus.",
      },
      {
        en: "Helped create a welcoming environment where students could ask questions and feel supported.",
        es: "Ayudé a crear un ambiente acogedor donde los estudiantes podían hacer preguntas y sentirse apoyados.",
      },
    ],
    icon: "people",
  },
  {
    title: { en: "Aspire Leaders Program", es: "Aspire Leaders Program" },
    category: {
      en: "Global Leadership & AI Innovation",
      es: "Liderazgo Global e Innovación con IA",
    },
    description: {
      en: "Took part in the Aspire Leaders Program and Leadership Accelerator Powered by AI, a global leadership learning experience.",
      es: "Participé en el Aspire Leaders Program y en el Leadership Accelerator Powered by AI, una experiencia global de formación en liderazgo.",
    },
    highlights: [
      {
        en: "Learned alongside participants from different countries and professional backgrounds, exploring leadership, innovation, and AI.",
        es: "Aprendí junto a participantes de distintos países y trayectorias profesionales, explorando liderazgo, innovación e IA.",
      },
    ],
    icon: "compass",
  },
];
