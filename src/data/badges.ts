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
    name: "UTM Graduate",
    description: "Honours BSc in Computer Science & CCIT from University of Toronto Mississauga",
    type: "milestone",
    icon: "🎓",
    year: 2025,
    color: "#002A5C",
    unlocked: true,
  },
  {
    id: 2,
    name: "First Deploy",
    description: "Successfully shipped first production application at Ecobee",
    type: "milestone",
    icon: "🚀",
    year: 2022,
    color: "#00FF41",
    unlocked: true,
  },
  {
    id: 3,
    name: "Cloud Wanderer",
    description: "Worked across GCP, Azure, and AWS - true multi-cloud experience",
    type: "achievement",
    icon: "☁️",
    year: 2024,
    color: "#FF9900",
    unlocked: true,
  },
  {
    id: 4,
    name: "Kubernetes Tamer",
    description: "Orchestrated containers across multiple production clusters",
    type: "achievement",
    icon: "⎈",
    year: 2023,
    color: "#326CE5",
    unlocked: true,
  },
  {
    id: 5,
    name: "Founder Spirit",
    description: "Built Learning Mode AI - 200 users, infinite lessons learned",
    type: "milestone",
    icon: "💡",
    year: 2024,
    color: "#FFD93D",
    unlocked: true,
  },
  {
    id: 6,
    name: "AI Whisperer",
    description: "Built AI agents, TTS pipelines, and LLM integrations",
    type: "achievement",
    icon: "🤖",
    year: 2025,
    color: "#7B68EE",
    unlocked: true,
  },
  {
    id: 7,
    name: "Vibe Coder",
    description: "Achieved the legendary status of Expert Vibe Coder",
    type: "achievement",
    icon: "✨",
    year: 2025,
    color: "#FF6B35",
    unlocked: true,
  },
  {
    id: 8,
    name: "Founder Mode",
    description: "Raise seed round and go full-time founder...",
    type: "milestone",
    icon: "🦄",
    year: 2026,
    color: "#E63946",
    unlocked: false,
  },
];
