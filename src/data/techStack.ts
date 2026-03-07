export interface TechEntry {
  id: number;
  name: string;
  type: "fire" | "water" | "electric" | "steel" | "grass" | "psychic" | "ghost" | "dragon";
  category: string;
  description: string;
  stats: {
    power: number;
    speed: number;
    reliability: number;
  };
  habitat: string;
  rarity: "common" | "uncommon" | "rare" | "legendary";
}

export const typeColors: Record<TechEntry["type"], string> = {
  fire: "#FF6B35",
  water: "#5B9BD5",
  electric: "#FFD93D",
  steel: "#718096",
  grass: "#48BB78",
  psychic: "#D53F8C",
  ghost: "#805AD5",
  dragon: "#7B68EE",
};

export const techStack: TechEntry[] = [
  {
    id: 1,
    name: "Kubernetes",
    type: "steel",
    category: "Container Orchestration",
    description: "A legendary orchestrator found managing vast clusters of containers. Known for its ability to self-heal and scale infinitely.",
    stats: { power: 95, speed: 80, reliability: 99 },
    habitat: "Production Clusters",
    rarity: "legendary",
  },
  {
    id: 2,
    name: "Terraform",
    type: "grass",
    category: "Infrastructure as Code",
    description: "This creature can shape entire cloud environments with a single command. Highly sought after by infrastructure trainers.",
    stats: { power: 90, speed: 75, reliability: 95 },
    habitat: "Cloud Providers",
    rarity: "rare",
  },
  {
    id: 3,
    name: "AWS",
    type: "electric",
    category: "Cloud Provider",
    description: "The most abundant cloud species. Offers over 200 services and can be found powering most of the internet.",
    stats: { power: 99, speed: 90, reliability: 99 },
    habitat: "Data Centers Worldwide",
    rarity: "legendary",
  },
  {
    id: 4,
    name: "Python",
    type: "grass",
    category: "Programming Language",
    description: "A friendly creature loved by beginners and experts alike. Known for its readable syntax and versatility.",
    stats: { power: 85, speed: 70, reliability: 90 },
    habitat: "Scripts & ML Pipelines",
    rarity: "common",
  },
  {
    id: 5,
    name: "TypeScript",
    type: "psychic",
    category: "Programming Language",
    description: "The evolved form of JavaScript. Gained the ability to see type errors before they happen.",
    stats: { power: 88, speed: 85, reliability: 92 },
    habitat: "Modern Web Apps",
    rarity: "uncommon",
  },
  {
    id: 6,
    name: "Docker",
    type: "water",
    category: "Containerization",
    description: "This creature can encapsulate any application and transport it anywhere. Essential companion for any developer.",
    stats: { power: 80, speed: 90, reliability: 95 },
    habitat: "Development Machines",
    rarity: "common",
  },
  {
    id: 7,
    name: "Go",
    type: "electric",
    category: "Programming Language",
    description: "A swift creature created by Google. Known for its simplicity and blazing fast compilation speeds.",
    stats: { power: 85, speed: 98, reliability: 90 },
    habitat: "CLI Tools & APIs",
    rarity: "uncommon",
  },
  {
    id: 8,
    name: "React",
    type: "fire",
    category: "Frontend Framework",
    description: "A component-based creature that can build interactive UIs. Its virtual DOM makes it remarkably efficient.",
    stats: { power: 88, speed: 85, reliability: 88 },
    habitat: "Web Browsers",
    rarity: "common",
  },
  {
    id: 9,
    name: "Redis",
    type: "fire",
    category: "In-Memory Database",
    description: "An incredibly fast creature that stores data in memory. Often found caching frequently accessed information.",
    stats: { power: 75, speed: 99, reliability: 85 },
    habitat: "Cache Layers",
    rarity: "uncommon",
  },
  {
    id: 10,
    name: "PostgreSQL",
    type: "water",
    category: "Relational Database",
    description: "A wise and ancient database creature. Known for its reliability and advanced features.",
    stats: { power: 90, speed: 75, reliability: 99 },
    habitat: "Data Stores",
    rarity: "rare",
  },
  {
    id: 11,
    name: "ArgoCD",
    type: "ghost",
    category: "GitOps",
    description: "A spectral creature that continuously watches Git repositories and syncs Kubernetes clusters automatically.",
    stats: { power: 80, speed: 85, reliability: 90 },
    habitat: "CI/CD Pipelines",
    rarity: "rare",
  },
  {
    id: 12,
    name: "Datadog",
    type: "psychic",
    category: "Observability",
    description: "An all-seeing creature that monitors everything. Can detect anomalies before they become incidents.",
    stats: { power: 85, speed: 95, reliability: 95 },
    habitat: "Monitoring Dashboards",
    rarity: "rare",
  },
];
