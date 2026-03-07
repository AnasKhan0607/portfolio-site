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
    name: "Junior Dev",
    role: "Site Reliability Engineer",
    company: "Ecobee",
    period: "May 2022 - Apr 2023",
    type: "grass",
    level: 5,
    description: "First evolution! Learned the fundamentals of SRE, Kubernetes, and cloud infrastructure.",
    skills: ["Kubernetes", "Terraform", "GCP", "ArgoCD"],
  },
  {
    id: 2,
    name: "Software Engineer",
    role: "Software Engineer",
    company: "Ecobee",
    period: "Sept 2023 - May 2024",
    type: "fire",
    level: 18,
    description: "Evolved into full-stack development with Go, TypeScript, and GraphQL.",
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
    description: "Multi-cloud evolution! Mastered Azure, GCP, and advanced Terraform patterns.",
    skills: ["Azure", "GCP", "Terraform", "Kubernetes"],
  },
  {
    id: 4,
    name: "Prod Engineer",
    role: "Production Engineer",
    company: "Clio",
    period: "Jan 2025 - Present",
    type: "steel",
    level: 42,
    description: "Current form. Database provisioning, GitOps, and production excellence.",
    skills: ["AWS", "Datadog", "MySQL", "Ansible", "Terraform"],
  },
];
