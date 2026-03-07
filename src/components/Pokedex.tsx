"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { techStack, typeColors, TechEntry } from "@/data/techStack";

function StatBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="font-pixel text-[8px] w-16 text-[#888]">{label}</span>
      <div className="flex-1 h-2 bg-[#222] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
      <span className="font-pixel text-[8px] w-8 text-right">{value}</span>
    </div>
  );
}

function PokedexCard({ entry, onClick }: { entry: TechEntry; onClick: () => void }) {
  const typeColor = typeColors[entry.type];
  
  return (
    <motion.div
      layoutId={`card-${entry.id}`}
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="bg-[#121212] border-2 rounded-lg p-4 cursor-pointer transition-colors relative overflow-hidden group"
      style={{ borderColor: `${typeColor}40` }}
    >
      {/* Rarity indicator */}
      {entry.rarity === "legendary" && (
        <div className="absolute top-2 right-2">
          <span className="font-pixel text-[8px] text-[#FFD93D]">★</span>
        </div>
      )}
      
      {/* Entry number */}
      <p className="font-pixel text-[8px] text-[#555] mb-2">
        #{String(entry.id).padStart(3, "0")}
      </p>
      
      {/* Name */}
      <h3 className="font-bold text-lg mb-2 group-hover:text-white transition-colors">
        {entry.name}
      </h3>
      
      {/* Type badge */}
      <span
        className="inline-block px-2 py-1 rounded text-xs font-bold uppercase"
        style={{ backgroundColor: typeColor, color: entry.type === "electric" ? "#000" : "#fff" }}
      >
        {entry.type}
      </span>
      
      {/* Category */}
      <p className="text-[#888] text-xs mt-2">{entry.category}</p>
      
      {/* Hover glow effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"
        style={{ background: `radial-gradient(circle at center, ${typeColor}, transparent 70%)` }}
      />
    </motion.div>
  );
}

function PokedexModal({ entry, onClose }: { entry: TechEntry; onClose: () => void }) {
  const typeColor = typeColors[entry.type];
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        layoutId={`card-${entry.id}`}
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
            className="w-20 h-20 rounded-lg flex items-center justify-center text-3xl font-bold"
            style={{ backgroundColor: `${typeColor}20`, color: typeColor }}
          >
            {entry.name.charAt(0)}
          </div>
          <div className="flex-1">
            <p className="font-pixel text-[10px] text-[#555]">
              #{String(entry.id).padStart(3, "0")}
            </p>
            <h2 className="text-2xl font-bold">{entry.name}</h2>
            <div className="flex gap-2 mt-2">
              <span
                className="inline-block px-3 py-1 rounded text-xs font-bold uppercase"
                style={{ backgroundColor: typeColor, color: entry.type === "electric" ? "#000" : "#fff" }}
              >
                {entry.type}
              </span>
              <span className="inline-block px-3 py-1 rounded text-xs font-bold uppercase bg-[#222] text-[#888]">
                {entry.rarity}
              </span>
            </div>
          </div>
        </div>
        
        {/* Category */}
        <div className="mb-4">
          <p className="font-pixel text-[10px] text-[#555] mb-1">CATEGORY</p>
          <p className="text-sm">{entry.category}</p>
        </div>
        
        {/* Description */}
        <div className="mb-6">
          <p className="font-pixel text-[10px] text-[#555] mb-1">DESCRIPTION</p>
          <p className="text-sm text-[#ccc] leading-relaxed">{entry.description}</p>
        </div>
        
        {/* Stats */}
        <div className="mb-6">
          <p className="font-pixel text-[10px] text-[#555] mb-3">BASE STATS</p>
          <div className="space-y-2">
            <StatBar label="POWER" value={entry.stats.power} color="#FF6B35" />
            <StatBar label="SPEED" value={entry.stats.speed} color="#00FF41" />
            <StatBar label="RELIABILITY" value={entry.stats.reliability} color="#5B9BD5" />
          </div>
        </div>
        
        {/* Habitat */}
        <div>
          <p className="font-pixel text-[10px] text-[#555] mb-1">HABITAT</p>
          <p className="text-sm text-[#888]">📍 {entry.habitat}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Pokedex() {
  const [selectedEntry, setSelectedEntry] = useState<TechEntry | null>(null);
  const [filter, setFilter] = useState<TechEntry["type"] | "all">("all");
  
  const filteredStack = filter === "all" 
    ? techStack 
    : techStack.filter(t => t.type === filter);
  
  const types: (TechEntry["type"] | "all")[] = ["all", "fire", "water", "electric", "steel", "grass", "psychic", "ghost", "dragon"];
  
  return (
    <section className="min-h-screen px-6 py-24" id="pokedex">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-pixel text-xl md:text-2xl mb-4 text-[#E63946]">
            POKÉDEX
          </h2>
          <p className="text-[#888] max-w-md mx-auto">
            Tech stack documented with stats, types, and habitats
          </p>
        </div>
        
        {/* Type filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-3 py-1 rounded font-pixel text-[10px] uppercase transition-all ${
                filter === type
                  ? "bg-[#FF6B35] text-white"
                  : "bg-[#222] text-[#888] hover:bg-[#333]"
              }`}
              style={filter === type && type !== "all" ? { backgroundColor: typeColors[type as TechEntry["type"]] } : {}}
            >
              {type}
            </button>
          ))}
        </div>
        
        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredStack.map((entry, i) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <PokedexCard entry={entry} onClick={() => setSelectedEntry(entry)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Entry count */}
        <p className="text-center mt-8 font-pixel text-xs text-[#555]">
          {filteredStack.length} / {techStack.length} ENTRIES
        </p>
      </motion.div>
      
      {/* Modal */}
      <AnimatePresence>
        {selectedEntry && (
          <PokedexModal entry={selectedEntry} onClose={() => setSelectedEntry(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
