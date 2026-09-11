export interface Project {
  index: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  highlights: string[];
  year: string;
  href?: string;
  image?: string;
  imageAspect?: string;
  accent: "cream" | "stone";
}

export const projects: Project[] = [
  {
    index: "01",
    slug: "walton-service-hours",
    name: "Walton Service Hours Platform",
    image: "/images/walton-service-hours.jpg",
    imageAspect: "1600/907",
    category: "Full-Stack Development · Authentication · Azure",
    description:
      "A role-based service-hour management platform built for students and administrators at John Brown University.",
    highlights: [
      "Built submission, review, and approval workflows with different student and administrator permissions.",
      "Integrated Microsoft authentication using Azure AD/MSAL and claims-based access control.",
      "Created structured student history views for tracking more than 300 recorded service hours.",
    ],
    year: "2022",
    accent: "cream",
  },
  {
    index: "02",
    slug: "automation-systems",
    name: "Automation Systems",
    image: "/images/automation-systems.jpg",
    imageAspect: "1600/1066",
    category: "n8n · CRM · APIs · Workflow Automation",
    description:
      "Automation work focused on improving internal workflows and connecting business systems.",
    highlights: [
      "Worked on n8n automation workflows connecting CRM platforms, APIs, cloud services, and internal tools.",
      "Worked on CRM integrations and automated data-processing workflows.",
      "Used AI-assisted development tools to support automation and workflow development.",
    ],
    year: "2025",
    accent: "stone",
  },
  {
    index: "03",
    slug: "panama-cancer-clinic",
    name: "Panama Cancer Clinic Website",
    image: "/images/panama-cancer-clinic.jpg",
    imageAspect: "1600/862",
    category: "Web Development · Performance · Website Rebuild",
    description:
      "A website rebuild focused on creating a cleaner user experience and improving overall site performance.",
    highlights: [
      "Worked on rebuilding the clinic's website and improving its overall structure and user experience.",
      "Helped improve page-loading performance and website responsiveness.",
      "Updated and refined website content and page structure to make information easier for visitors to navigate.",
    ],
    year: "2022",
    accent: "cream",
  },
  {
    index: "04",
    slug: "prime-software-dashboard",
    name: "Prime Software Solutions Dashboard",
    image: "/images/prime-software-dashboard.jpg",
    imageAspect: "1600/774",
    category: "PHP · MySQL · Product Development",
    description:
      "A customizable internal dashboard designed to centralize company information and tools.",
    highlights: [
      "Developed drag-and-drop widgets with layouts saved independently for each user.",
      "Built an announcements system with editing, pinning, likes, and administrative controls.",
      "Tested application performance and improved usability across dashboard components.",
    ],
    year: "2025",
    accent: "stone",
  },
  {
    index: "05",
    slug: "ai-mental-health-journal",
    name: "AI Mental Health Journal",
    image: "/images/ai-mental-health-journal.jpg",
    imageAspect: "1600/906",
    category: "Django · Machine Learning · Python",
    description:
      "A Django application combining private journaling with machine-learning-based stress analysis.",
    highlights: [
      "Built authentication, journal management, and a personalized dashboard.",
      "Integrated a scikit-learn model to analyze journal-related stress indicators.",
      "Designed the project around turning machine-learning output into a simple user-facing experience.",
    ],
    year: "2023",
    accent: "cream",
  },
];
