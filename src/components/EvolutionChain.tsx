"use client";

import { motion } from "framer-motion";
import { careerStages, CareerStage } from "@/data/career";
import { typeColors } from "@/data/techStack";

function EvolutionCard({ stage, index }: { stage: CareerStage; index: number }) {
  const typeColor = typeColors[stage.type];
  const isLast = index === careerStages.length - 1;
  
  return (
    <div className="flex items-center">
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* Level badge */}
        <div
          className="absolute -top-3 -left-3 w-10 h-10 rounded-full flex items-center justify-center font-pixel text-[10px] z-10"
          style={{ backgroundColor: typeColor }}
        >
          <span className={stage.type === "electric" ? "text-black" : "text-white"}>
            {stage.level}
          </span>
        </div>
        
        <div
          className="bg-[#121212] border-2 rounded-lg p-5 w-64 md:w-72"
          style={{ borderColor: `${typeColor}60` }}
        >
          {/* Header */}
          <div className="mb-3">
            <h3 className="font-bold text-lg">{stage.name}</h3>
            <p className="text-sm text-[#888]">{stage.role}</p>
          </div>
          
          {/* Company & Period */}
          <div className="mb-3">
            <p className="font-pixel text-[10px]" style={{ color: typeColor }}>
              {stage.company}
            </p>
            <p className="text-xs text-[#555]">{stage.period}</p>
          </div>
          
          {/* Description */}
          <p className="text-xs text-[#888] mb-3 leading-relaxed">
            {stage.description}
          </p>
          
          {/* Skills */}
          <div className="flex flex-wrap gap-1">
            {stage.skills.slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="text-[10px] px-2 py-0.5 rounded bg-[#1a1a1a] text-[#888]"
              >
                {skill}
              </span>
            ))}
            {stage.skills.length > 3 && (
              <span className="text-[10px] text-[#555]">+{stage.skills.length - 3}</span>
            )}
          </div>
          
          {/* Current indicator */}
          {isLast && (
            <div className="mt-3 pt-3 border-t border-[#333]">
              <span className="font-pixel text-[8px] text-[#00FF41] animate-pulse">
                ● CURRENT FORM
              </span>
            </div>
          )}
        </div>
      </motion.div>
      
      {/* Evolution arrow */}
      {!isLast && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
          viewport={{ once: true }}
          className="hidden md:flex items-center px-4"
        >
          <div className="flex items-center gap-1">
            <div className="w-8 h-0.5 bg-gradient-to-r from-[#333] to-[#555]" />
            <span className="text-xl">→</span>
            <div className="w-8 h-0.5 bg-gradient-to-r from-[#555] to-[#333]" />
          </div>
        </motion.div>
      )}
      
      {/* Mobile arrow (vertical) */}
      {!isLast && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
          viewport={{ once: true }}
          className="md:hidden absolute left-1/2 -translate-x-1/2 mt-4"
        >
          <span className="text-xl text-[#555]">↓</span>
        </motion.div>
      )}
    </div>
  );
}

export default function EvolutionChain() {
  return (
    <section className="min-h-screen px-6 py-24" id="evolution">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-pixel text-xl md:text-2xl mb-4 text-[#7B68EE]">
            EVOLUTION CHAIN
          </h2>
          <p className="text-[#888] max-w-md mx-auto">
            Career progression through different forms
          </p>
        </div>
        
        {/* Evolution chain - horizontal on desktop, vertical on mobile */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
          {careerStages.map((stage, i) => (
            <EvolutionCard key={stage.id} stage={stage} index={i} />
          ))}
        </div>
        
        {/* Total experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="font-pixel text-xs text-[#555]">
            {careerStages.length} EVOLUTIONS COMPLETED
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
