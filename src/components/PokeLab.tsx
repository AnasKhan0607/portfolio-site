"use client";

import { motion } from "framer-motion";
import Pokeball from "./Pokeball";

interface LabMachine {
  id: number;
  name: string;
  type: string;
  status: "online" | "offline" | "sleeping";
  specs: string;
  services: string[];
}

const labMachines: LabMachine[] = [
  {
    id: 1,
    name: "OAK-SERVER",
    type: "Proxmox Host",
    status: "online",
    specs: "32GB RAM • 8 Cores • 2TB NVMe",
    services: ["K3s", "Portainer", "Traefik"],
  },
  {
    id: 2,
    name: "BLAINE-NAS",
    type: "TrueNAS",
    status: "online",
    specs: "16GB RAM • 4x 8TB HDD",
    services: ["SMB", "NFS", "Plex"],
  },
  {
    id: 3,
    name: "SURGE-PI",
    type: "Raspberry Pi 4",
    status: "online",
    specs: "8GB RAM • Pi-hole • DNS",
    services: ["Pi-hole", "Unbound", "WireGuard"],
  },
];

function ServerRack({ machine }: { machine: LabMachine }) {
  const statusColors = {
    online: "#00FF41",
    offline: "#E63946",
    sleeping: "#FFD93D",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      className="bg-[#0a0a0a] border-2 border-[#333] rounded-lg p-4 relative overflow-hidden"
    >
      {/* Status LED */}
      <div className="absolute top-3 right-3 flex items-center gap-2">
        <motion.div
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: statusColors[machine.status] }}
          animate={{ opacity: machine.status === "online" ? [1, 0.5, 1] : 1 }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <span className="font-pixel text-[8px] uppercase" style={{ color: statusColors[machine.status] }}>
          {machine.status}
        </span>
      </div>

      {/* Server icon */}
      <div className="w-12 h-12 bg-[#1a1a1a] rounded border border-[#333] flex items-center justify-center mb-3">
        <div className="space-y-1">
          <div className="w-6 h-1 bg-[#00FF41] rounded-full opacity-80" />
          <div className="w-6 h-1 bg-[#5B9BD5] rounded-full opacity-60" />
          <div className="w-6 h-1 bg-[#FF6B35] rounded-full opacity-40" />
        </div>
      </div>

      {/* Info */}
      <h3 className="font-pixel text-xs text-[#FF6B35] mb-1">{machine.name}</h3>
      <p className="text-sm text-white mb-1">{machine.type}</p>
      <p className="text-xs text-[#555] mb-3">{machine.specs}</p>

      {/* Services */}
      <div className="flex flex-wrap gap-1">
        {machine.services.map((service) => (
          <span
            key={service}
            className="text-[10px] px-2 py-0.5 bg-[#121212] border border-[#333] rounded text-[#888]"
          >
            {service}
          </span>
        ))}
      </div>

      {/* Decorative circuit lines */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00FF41]/20 to-transparent" />
    </motion.div>
  );
}

export default function PokeLab() {
  return (
    <section className="min-h-screen px-6 py-24 relative" id="pokelab">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10">
          <Pokeball size={100} variant="ultra" />
        </div>
        <div className="absolute bottom-10 right-10">
          <Pokeball size={80} variant="great" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Pokeball size={30} variant="ultra" />
            <h2 className="font-pixel text-xl md:text-2xl text-[#00FF41]">
              POKÉLAB
            </h2>
            <Pokeball size={30} variant="ultra" />
          </div>
          <p className="text-[#888] max-w-md mx-auto">
            Home infrastructure running 24/7 — self-hosted services and experiments
          </p>
        </div>

        {/* Lab diagram */}
        <div className="bg-[#121212] border-2 border-[#333] rounded-xl p-6 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-[#E63946]" />
            <div className="w-3 h-3 rounded-full bg-[#FFD93D]" />
            <div className="w-3 h-3 rounded-full bg-[#00FF41]" />
            <span className="font-pixel text-[10px] text-[#555] ml-2">PROFESSOR_OAK_LAB.exe</span>
          </div>

          {/* Server grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {labMachines.map((machine, i) => (
              <motion.div
                key={machine.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <ServerRack machine={machine} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Network status */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { label: "UPTIME", value: "99.9%", color: "#00FF41" },
            { label: "SERVICES", value: "12", color: "#5B9BD5" },
            { label: "CONTAINERS", value: "24", color: "#FF6B35" },
            { label: "POWER", value: "~150W", color: "#FFD93D" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#121212] border border-[#333] rounded-lg p-4"
            >
              <p className="font-pixel text-[10px] text-[#555] mb-1">{stat.label}</p>
              <p className="text-xl font-bold" style={{ color: stat.color }}>{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Lab quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-sm text-[#555] italic">
            &quot;Every good trainer needs a well-equipped lab&quot; — Prof. Oak, probably
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
