"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { badges, Badge } from "@/data/badges";

function BadgeCard({ badge, onClick }: { badge: Badge; onClick: () => void }) {
  return (
    <motion.div
      whileHover={badge.unlocked ? { scale: 1.05, y: -4 } : {}}
      whileTap={badge.unlocked ? { scale: 0.95 } : {}}
      onClick={badge.unlocked ? onClick : undefined}
      className={`relative aspect-square rounded-xl flex flex-col items-center justify-center p-4 transition-all ${
        badge.unlocked
          ? "bg-[#121212] border-2 cursor-pointer hover:shadow-lg"
          : "bg-[#0a0a0a] border-2 border-dashed border-[#333] cursor-not-allowed"
      }`}
      style={{
        borderColor: badge.unlocked ? badge.color : undefined,
        boxShadow: badge.unlocked ? `0 0 20px ${badge.color}20` : undefined,
      }}
    >
      {/* Badge icon */}
      <div
        className={`text-4xl mb-3 ${badge.unlocked ? "" : "grayscale opacity-30"}`}
      >
        {badge.icon}
      </div>
      
      {/* Badge name */}
      <p
        className={`font-pixel text-[8px] text-center leading-tight ${
          badge.unlocked ? "text-white" : "text-[#333]"
        }`}
      >
        {badge.name}
      </p>
      
      {/* Year */}
      {badge.unlocked && (
        <p className="font-pixel text-[8px] mt-2" style={{ color: badge.color }}>
          {badge.year}
        </p>
      )}
      
      {/* Lock overlay */}
      {!badge.unlocked && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl opacity-50">🔒</span>
        </div>
      )}
      
      {/* Shine effect for unlocked badges */}
      {badge.unlocked && (
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.3, 0],
            backgroundPosition: ["200% 0", "-200% 0"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          style={{
            background: `linear-gradient(90deg, transparent, ${badge.color}40, transparent)`,
            backgroundSize: "200% 100%",
          }}
        />
      )}
    </motion.div>
  );
}

function BadgeModal({ badge, onClose }: { badge: Badge; onClose: () => void }) {
  const typeLabels = {
    certification: "CERTIFICATION",
    achievement: "ACHIEVEMENT",
    milestone: "MILESTONE",
  };

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
        className="bg-[#0a0a0a] border-4 rounded-xl p-8 max-w-sm w-full text-center relative"
        style={{ borderColor: badge.color }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 font-pixel text-xs text-[#888] hover:text-white transition-colors"
        >
          [X]
        </button>
        
        {/* Badge display */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.1 }}
          className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center"
          style={{ backgroundColor: `${badge.color}20`, border: `3px solid ${badge.color}` }}
        >
          <span className="text-5xl">{badge.icon}</span>
        </motion.div>
        
        {/* Badge info */}
        <span
          className="inline-block px-3 py-1 rounded font-pixel text-[8px] uppercase mb-4"
          style={{ backgroundColor: `${badge.color}30`, color: badge.color }}
        >
          {typeLabels[badge.type]}
        </span>
        
        <h3 className="text-xl font-bold mb-3">{badge.name}</h3>
        
        <p className="text-sm text-[#888] mb-4">{badge.description}</p>
        
        <p className="font-pixel text-xs" style={{ color: badge.color }}>
          OBTAINED: {badge.year}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function GymBadges() {
  const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null);
  
  const unlockedCount = badges.filter(b => b.unlocked).length;
  
  return (
    <section className="min-h-screen px-6 py-24" id="badges">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-pixel text-xl md:text-2xl mb-4 text-[#FFD93D]">
            GYM BADGES
          </h2>
          <p className="text-[#888] max-w-md mx-auto">
            Certifications, achievements, and milestones collected
          </p>
        </div>
        
        {/* Badge grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <BadgeCard badge={badge} onClick={() => setSelectedBadge(badge)} />
            </motion.div>
          ))}
        </div>
        
        {/* Badge count */}
        <div className="mt-12 text-center">
          <p className="font-pixel text-xs text-[#555]">
            {unlockedCount} / {badges.length} BADGES COLLECTED
          </p>
          
          {/* Progress bar */}
          <div className="max-w-xs mx-auto mt-4">
            <div className="h-2 bg-[#222] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(unlockedCount / badges.length) * 100}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="h-full bg-[#FFD93D] rounded-full"
              />
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Modal */}
      <AnimatePresence>
        {selectedBadge && (
          <BadgeModal badge={selectedBadge} onClose={() => setSelectedBadge(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
