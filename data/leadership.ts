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
    meta: "John Brown University · 2025 - 2026",
    description:
      "Led and represented the student body while working with university leadership, student organizations, and students across campus.",
    highlights: [
      "Represented student perspectives in conversations with university leadership.",
      "Worked with different organizations and communities to address student needs and improve the campus experience.",
      "Helped coordinate initiatives and events involving students and campus organizations.",
      "Developed experience in leadership, communication, collaboration, and decision-making.",
    ],
    icon: "flag",
  },
  {
    title: "Multicultural Organization President",
    description:
      "Served as president of a multicultural student team focused on building community and creating opportunities for students from different cultural backgrounds to connect.",
    highlights: [
      "Led a multicultural team and helped coordinate its activities and initiatives.",
      "Worked with students from different countries, cultures, and backgrounds.",
      "Helped plan, organize, and put on cultural and community events for the campus.",
      "Collaborated with team members and other student organizations to create engaging events and experiences.",
      "Developed cross-cultural communication, teamwork, and event-planning experience.",
    ],
    icon: "globe",
  },
  {
    title: "Mentorship",
    description:
      "Served as a mentor to students as they adjusted to university life and developed academically and personally.",
    highlights: [
      "Provided guidance and support to students navigating college and campus life.",
      "Helped create a welcoming environment where students could ask questions, connect with others, and feel supported.",
      "Built relationships with students from a variety of backgrounds and experiences.",
    ],
    icon: "people",
  },
  {
    title: "Aspire Leaders Program",
    category: "Global Leadership & AI Innovation",
    description:
      "Participated in the Aspire Leaders Program and Leadership Accelerator Powered by AI, developing leadership skills through a global learning experience.",
    highlights: [
      "Collaborated and learned alongside participants from different countries and professional backgrounds.",
      "Explored leadership, innovation, AI, and approaches to solving real-world problems.",
    ],
    icon: "compass",
  },
];
