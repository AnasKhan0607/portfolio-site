export interface Badge {
  id: number;
  name: string;
  description: string;
  type: "certification" | "achievement" | "milestone";
  icon: string;
  year: number;
  color: string;
  unlocked: boolean;
}

export const badges: Badge[] = [
  {
    id: 1,
    name: "AWS Solutions Architect",
    description: "Mastered the art of architecting cloud solutions on AWS",
    type: "certification",
    icon: "☁️",
    year: 2023,
    color: "#FF9900",
    unlocked: true,
  },
  {
    id: 2,
    name: "Kubernetes Expert",
    description: "Tamed the container orchestration beast",
    type: "certification",
    icon: "⎈",
    year: 2024,
    color: "#326CE5",
    unlocked: true,
  },
  {
    id: 3,
    name: "First Deploy",
    description: "Successfully shipped first production application",
    type: "milestone",
    icon: "🚀",
    year: 2020,
    color: "#00FF41",
    unlocked: true,
  },
  {
    id: 4,
    name: "Open Source Contributor",
    description: "Made meaningful contributions to open source projects",
    type: "achievement",
    icon: "🌟",
    year: 2023,
    color: "#FFD93D",
    unlocked: true,
  },
  {
    id: 5,
    name: "100 Commits",
    description: "Pushed 100 commits in a single month",
    type: "achievement",
    icon: "💻",
    year: 2024,
    color: "#E63946",
    unlocked: true,
  },
  {
    id: 6,
    name: "Infrastructure Master",
    description: "Built and maintained production infrastructure at scale",
    type: "milestone",
    icon: "🏗️",
    year: 2024,
    color: "#718096",
    unlocked: true,
  },
  {
    id: 7,
    name: "AI Whisperer",
    description: "Integrated AI/ML into production applications",
    type: "achievement",
    icon: "🤖",
    year: 2025,
    color: "#7B68EE",
    unlocked: true,
  },
  {
    id: 8,
    name: "???",
    description: "This badge is still locked...",
    type: "achievement",
    icon: "❓",
    year: 2025,
    color: "#333",
    unlocked: false,
  },
];
