export interface Project {
  id: number;
  name: string;
  description: string;
  type: "fire" | "water" | "electric" | "steel" | "grass" | "psychic" | "ghost" | "dragon";
  hp: number;
  maxHp: number;
  level: number;
  status: "active" | "evolving" | "resting";
  moves: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export const activeProjects: Project[] = [
  {
    id: 1,
    name: "OpenClaw",
    description: "Personal AI assistant with multi-channel messaging, automation, and agent capabilities",
    type: "electric",
    hp: 95,
    maxHp: 100,
    level: 42,
    status: "active",
    moves: ["Discord Bot", "WhatsApp", "Cron Jobs", "Web Search"],
    github: "https://github.com/openclaw/openclaw",
  },
  {
    id: 2,
    name: "Portfolio",
    description: "Pokemon-themed portfolio site combining retro aesthetics with modern tech",
    type: "fire",
    hp: 60,
    maxHp: 100,
    level: 15,
    status: "evolving",
    moves: ["Next.js", "Framer Motion", "Tailwind", "TypeScript"],
    github: "https://github.com/AnasKhan0607/portfolio-site",
  },
  {
    id: 3,
    name: "HomeLab",
    description: "Self-hosted infrastructure with Kubernetes, monitoring, and automation",
    type: "steel",
    hp: 80,
    maxHp: 100,
    level: 30,
    status: "active",
    moves: ["K3s", "ArgoCD", "Prometheus", "Grafana"],
  },
  // Empty slots for future projects
];

// Fill remaining slots with empty placeholders
export const partySlots = 6;
