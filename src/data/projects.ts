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
    name: "KhanAI",
    description: "Personal AI assistant powered by OpenClaw. Multi-channel messaging, automation, cron jobs, and agent capabilities.",
    type: "electric",
    hp: 95,
    maxHp: 100,
    level: 42,
    status: "active",
    moves: ["Discord Bot", "WhatsApp", "Cron Jobs", "Web Search"],
  },
  {
    id: 2,
    name: "PokéInfra",
    description: "This portfolio! Pokemon-themed site combining retro pixel aesthetics with modern web tech.",
    type: "fire",
    hp: 80,
    maxHp: 100,
    level: 25,
    status: "evolving",
    moves: ["Next.js", "Framer Motion", "Tailwind", "TypeScript"],
    github: "https://github.com/AnasKhan0607/portfolio-site",
  },
  {
    id: 3,
    name: "TikTok Pipeline",
    description: "Automated short-form video generation with AI voices, word-level subtitles, and FFmpeg compositing.",
    type: "psychic",
    hp: 100,
    maxHp: 100,
    level: 30,
    status: "active",
    moves: ["Fish.audio", "Deepgram", "FFmpeg", "Python"],
  },
  {
    id: 4,
    name: "Learning Mode AI",
    description: "AI-powered video learning platform. 200 users, lessons learned. First startup attempt.",
    type: "ghost",
    hp: 0,
    maxHp: 100,
    level: 20,
    status: "resting",
    moves: ["Next.js", "OpenAI", "Vercel", "PostgreSQL"],
  },
  // Empty slots for future projects
];

// Fill remaining slots with empty placeholders
export const partySlots = 6;
