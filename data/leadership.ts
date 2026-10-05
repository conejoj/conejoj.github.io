export interface LeadershipEntry {
  title: string;
  meta?: string;
  category?: string;
  description: string;
  highlights: string[];
  icon: "flag" | "globe" | "people" | "compass";
}

export const leadershipEntries: LeadershipEntry[] = [
  {
    title: "Student Government President",
    meta: "John Brown University · 2025–2026",
    description:
      "Led and represented the student body while working with university leadership, student organizations, and students across campus.",
    highlights: [
      "Represented student perspectives in conversations with university leadership.",
      "Worked with student organizations to address student needs and coordinate campus initiatives.",
    ],
    icon: "flag",
  },
  {
    title: "Multicultural Organization President",
    description:
      "Served as president of a multicultural student team focused on building community and helping students from different cultural backgrounds connect.",
    highlights: [
      "Planned and organized cultural and community events for the campus with other student organizations.",
      "Worked with students from different countries, cultures, and backgrounds.",
    ],
    icon: "globe",
  },
  {
    title: "Mentorship",
    description:
      "Served as a mentor to students as they adjusted to university life and developed academically and personally.",
    highlights: [
      "Guided and supported students navigating college and campus life.",
      "Helped create a welcoming environment where students could ask questions and feel supported.",
    ],
    icon: "people",
  },
  {
    title: "Aspire Leaders Program",
    category: "Global Leadership & AI Innovation",
    description:
      "Took part in the Aspire Leaders Program and Leadership Accelerator Powered by AI, a global leadership learning experience.",
    highlights: [
      "Learned alongside participants from different countries and professional backgrounds, exploring leadership, innovation, and AI.",
    ],
    icon: "compass",
  },
];
