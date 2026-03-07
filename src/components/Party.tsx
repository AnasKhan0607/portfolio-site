"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { activeProjects, partySlots, Project } from "@/data/projects";
import { typeColors } from "@/data/techStack";

function HpBar({ hp, maxHp }: { hp: number; maxHp: number }) {
  const percentage = (hp / maxHp) * 100;
  const color = percentage > 50 ? "#00FF41" : percentage > 25 ? "#FFD93D" : "#E63946";
  
  return (
    <div className="flex items-center gap-2">
      <span className="font-pixel text-[8px] text-[#888]">HP</span>
      <div className="flex-1 h-2 bg-[#222] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
      <span className="font-pixel text-[8px] text-[#555]">{hp}/{maxHp}</span>
    </div>
  );
}

function StatusBadge({ status }: { status: Project["status"] }) {
  const config = {
    active: { color: "#00FF41", label: "ACTIVE" },
    evolving: { color: "#FFD93D", label: "EVOLVING" },
    resting: { color: "#888", label: "RESTING" },
  };
  
  const { color, label } = config[status];
  
  return (
    <span
      className="font-pixel text-[8px] px-2 py-0.5 rounded"
      style={{ backgroundColor: `${color}20`, color }}
    >
      {label}
    </span>
  );
}

function PartySlot({ project, index, onClick }: { project?: Project; index: number; onClick?: () => void }) {
  if (!project) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="aspect-[4/3] bg-[#121212] border-2 border-dashed border-[#333] rounded-lg flex flex-col items-center justify-center hover:border-[#555] transition-colors"
      >
        <span className="font-pixel text-3xl text-[#333] mb-2">?</span>
        <span className="font-pixel text-[8px] text-[#333]">EMPTY SLOT</span>
      </motion.div>
    );
  }
  
  const typeColor = typeColors[project.type];
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="aspect-[4/3] bg-[#121212] border-2 rounded-lg p-4 cursor-pointer relative overflow-hidden group"
      style={{ borderColor: `${typeColor}60` }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
        style={{ background: `radial-gradient(circle at center, ${typeColor}, transparent 70%)` }}
      />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-bold text-lg group-hover:text-white transition-colors">
              {project.name}
            </h3>
            <span className="font-pixel text-[8px] text-[#555]">Lv.{project.level}</span>
          </div>
          <StatusBadge status={project.status} />
        </div>
        
        {/* HP Bar */}
        <div className="mb-3">
          <HpBar hp={project.hp} maxHp={project.maxHp} />
        </div>
        
        {/* Type */}
        <span
          className="inline-block self-start px-2 py-0.5 rounded text-[10px] font-bold uppercase mb-2"
          style={{ backgroundColor: typeColor, color: project.type === "electric" ? "#000" : "#fff" }}
        >
          {project.type}
        </span>
        
        {/* Moves preview */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-1">
            {project.moves.slice(0, 2).map((move) => (
              <span key={move} className="text-[10px] text-[#888] bg-[#1a1a1a] px-2 py-0.5 rounded">
                {move}
              </span>
            ))}
            {project.moves.length > 2 && (
              <span className="text-[10px] text-[#555]">+{project.moves.length - 2}</span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const typeColor = typeColors[project.type];
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#0a0a0a] border-4 rounded-xl p-6 max-w-lg w-full relative"
        style={{ borderColor: typeColor }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 font-pixel text-xs text-[#888] hover:text-white transition-colors"
        >
          [X]
        </button>
        
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div
            className="w-20 h-20 rounded-lg flex items-center justify-center text-3xl font-bold shrink-0"
            style={{ backgroundColor: `${typeColor}20`, color: typeColor }}
          >
            {project.name.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-2xl font-bold truncate">{project.name}</h2>
              <span className="font-pixel text-[10px] text-[#555]">Lv.{project.level}</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              <span
                className="inline-block px-3 py-1 rounded text-xs font-bold uppercase"
                style={{ backgroundColor: typeColor, color: project.type === "electric" ? "#000" : "#fff" }}
              >
                {project.type}
              </span>
              <StatusBadge status={project.status} />
            </div>
          </div>
        </div>
        
        {/* HP */}
        <div className="mb-6">
          <HpBar hp={project.hp} maxHp={project.maxHp} />
        </div>
        
        {/* Description */}
        <div className="mb-6">
          <p className="font-pixel text-[10px] text-[#555] mb-1">DESCRIPTION</p>
          <p className="text-sm text-[#ccc] leading-relaxed">{project.description}</p>
        </div>
        
        {/* Moves */}
        <div className="mb-6">
          <p className="font-pixel text-[10px] text-[#555] mb-2">MOVES</p>
          <div className="grid grid-cols-2 gap-2">
            {project.moves.map((move) => (
              <div
                key={move}
                className="bg-[#1a1a1a] rounded px-3 py-2 text-sm text-center"
              >
                {move}
              </div>
            ))}
          </div>
        </div>
        
        {/* Links */}
        {(project.github || project.demo) && (
          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2 bg-[#222] hover:bg-[#333] rounded font-pixel text-xs transition-colors"
              >
                GITHUB
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2 rounded font-pixel text-xs transition-colors"
                style={{ backgroundColor: typeColor, color: project.type === "electric" ? "#000" : "#fff" }}
              >
                LIVE DEMO
              </a>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Party() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Create array with projects + empty slots
  const slots = Array.from({ length: partySlots }, (_, i) => activeProjects[i] || null);
  
  return (
    <section className="min-h-screen px-6 py-24" id="party">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-pixel text-xl md:text-2xl mb-4 text-[#5B9BD5]">
            PARTY
          </h2>
          <p className="text-[#888] max-w-md mx-auto">
            Current projects in active development
          </p>
        </div>
        
        {/* Party Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {slots.map((project, i) => (
            <PartySlot
              key={project?.id || `empty-${i}`}
              project={project || undefined}
              index={i}
              onClick={project ? () => setSelectedProject(project) : undefined}
            />
          ))}
        </div>
        
        {/* Party stats */}
        <div className="mt-12 text-center">
          <p className="font-pixel text-xs text-[#555]">
            {activeProjects.length} / {partySlots} SLOTS FILLED
          </p>
        </div>
      </motion.div>
      
      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
