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
  pokemon: string; // Pokemon sprite URL
  pokemonName: string;
}

export const activeProjects: Project[] = [
  {
    id: 1,
    name: "FlipPilot",
    description: "AI-powered resale automation platform. Find deals, track inventory, and maximize profits. Almost ready for launch!",
    type: "electric",
    hp: 90,
    maxHp: 100,
    level: 38,
    status: "evolving",
    moves: ["Next.js", "AI Analysis", "Inventory", "Analytics"],
    github: "https://github.com/AnasKhan0607/FlipPilot",
    demo: "https://flippilot.ca",
    pokemon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/405.png", // Luxray
    pokemonName: "Luxray",
  },
  {
    id: 2,
    name: "Tornado",
    description: "Video generation platform for automated content creation. Built and sold to a client. 💰",
    type: "dragon",
    hp: 100,
    maxHp: 100,
    level: 50,
    status: "active",
    moves: ["Video Gen", "AI Voices", "Automation", "Client Sold"],
    pokemon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png", // Rayquaza
    pokemonName: "Rayquaza",
  },
  {
    id: 3,
    name: "KhanAI",
    description: "Personal AI assistant powered by OpenClaw. Multi-channel messaging, automation, cron jobs, and agent capabilities.",
    type: "electric",
    hp: 95,
    maxHp: 100,
    level: 42,
    status: "active",
    moves: ["Discord Bot", "WhatsApp", "Cron Jobs", "Web Search"],
    pokemon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/474.png", // Porygon-Z
    pokemonName: "Porygon-Z",
  },
  {
    id: 4,
    name: "Sussy",
    description: "One phone. All the games. Mobile-first party game PWA that went viral. Multiple hit games in one app!",
    type: "fire",
    hp: 100,
    maxHp: 100,
    level: 35,
    status: "active",
    moves: ["PWA", "Party Games", "Mobile-First", "Viral"],
    github: "https://github.com/AnasKhan0607/sussy",
    demo: "https://sussy.xyz",
    pokemon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png", // Infernape
    pokemonName: "Infernape",
  },
  {
    id: 5,
    name: "TikTok Pipeline",
    description: "Automated short-form video generation with AI voices, word-level subtitles, and FFmpeg compositing.",
    type: "psychic",
    hp: 100,
    maxHp: 100,
    level: 30,
    status: "active",
    moves: ["Fish.audio", "Deepgram", "FFmpeg", "Python"],
    pokemon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png", // Rotom
    pokemonName: "Rotom",
  },
  {
    id: 6,
    name: "Learning Mode AI",
    description: "AI-powered video learning platform. 200 users, lessons learned. First startup attempt.",
    type: "ghost",
    hp: 0,
    maxHp: 100,
    level: 20,
    status: "resting",
    moves: ["Next.js", "OpenAI", "Vercel", "PostgreSQL"],
    pokemon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png", // Gengar
    pokemonName: "Gengar",
  },
];

// Fill remaining slots with empty placeholders
export const partySlots = 6;
