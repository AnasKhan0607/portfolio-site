export interface CareerStage {
  id: number;
  name: string;
  role: string;
  company: string;
  period: string;
  type: "fire" | "water" | "electric" | "steel" | "grass" | "psychic";
  level: number;
  description: string;
  skills: string[];
}

export const careerStages: CareerStage[] = [
  {
    id: 1,
    name: "SRE",
    role: "Site Reliability Engineer",
    company: "Ecobee",
    period: "May 2022 - Apr 2023",
    type: "grass",
    level: 16,
    description: "First evolution! Mastered Kubernetes, Terraform, and GCP. Built CI/CD pipelines and kept production running smooth.",
    skills: ["Kubernetes", "Terraform", "GCP", "ArgoCD", "Docker"],
  },
  {
    id: 2,
    name: "SWE",
    role: "Software Engineer",
    company: "Ecobee",
    period: "Sept 2023 - May 2024",
    type: "fire",
    level: 24,
    description: "Evolved into full-stack! Shipped features with Go, TypeScript, and Next.js. GraphQL APIs and cloud-native development.",
    skills: ["Go", "TypeScript", "Next.js", "GraphQL", "GCP"],
  },
  {
    id: 3,
    name: "Cloud Platform",
    role: "Cloud Platform Engineer",
    company: "Kinaxis",
    period: "Sept 2024 - Mar 2025",
    type: "electric",
    level: 32,
    description: "Multi-cloud mastery! Azure, GCP, and advanced IaC patterns. Kubernetes at scale.",
    skills: ["Azure", "GCP", "Terraform", "Kubernetes"],
  },
  {
    id: 4,
    name: "Prod Eng",
    role: "Production Engineer",
    company: "Clio",
    period: "Jan 2025 - Present",
    type: "steel",
    level: 42,
    description: "Current form. AWS infrastructure, database provisioning, GitOps workflows, and production excellence.",
    skills: ["AWS", "Datadog", "MySQL", "Ansible", "Terraform", "Ruby"],
  },
];
