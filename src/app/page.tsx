"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Scanline overlay */}
      <div className="scanlines fixed inset-0 pointer-events-none z-50" />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
        {/* Animated background gradient */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF6B35] rounded-full blur-[128px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#5B9BD5] rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          {/* Pixel art title */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="font-pixel text-2xl md:text-4xl mb-4 bg-gradient-to-r from-[#FF6B35] to-[#E63946] bg-clip-text text-transparent">
              TRAINER CARD
            </h1>
          </motion.div>

          {/* Trainer info box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#121212] border-4 border-[#FF6B35] rounded-lg p-8 max-w-2xl mx-auto mt-8 pixel-border"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Avatar placeholder */}
              <div className="w-32 h-32 bg-gradient-to-br from-[#FF6B35] to-[#5B9BD5] rounded-lg flex items-center justify-center">
                <span className="font-pixel text-4xl">?</span>
              </div>

              {/* Info */}
              <div className="text-left flex-1">
                <p className="font-pixel text-xs text-[#888] mb-2">NAME</p>
                <p className="text-2xl font-bold mb-4">Developer</p>
                
                <p className="font-pixel text-xs text-[#888] mb-2">TYPE</p>
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#FF6B35] rounded text-sm font-bold">FIRE</span>
                  <span className="px-3 py-1 bg-[#5B9BD5] rounded text-sm font-bold">WATER</span>
                  <span className="px-3 py-1 bg-[#00FF41] rounded text-sm font-bold text-black">ELECTRIC</span>
                </div>

                <p className="font-pixel text-xs text-[#888] mb-2">SPECIALTY</p>
                <p className="text-sm text-[#ccc]">Infrastructure • Cloud • Agentic AI</p>
              </div>
            </div>

            {/* Stats bar */}
            <div className="mt-8 pt-6 border-t border-[#333]">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-pixel text-xs text-[#FF6B35]">EXP</p>
                  <p className="text-2xl font-bold">∞</p>
                </div>
                <div>
                  <p className="font-pixel text-xs text-[#5B9BD5]">PROJECTS</p>
                  <p className="text-2xl font-bold">--</p>
                </div>
                <div>
                  <p className="font-pixel text-xs text-[#00FF41]">BADGES</p>
                  <p className="text-2xl font-bold">--</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-12"
          >
            <p className="font-pixel text-xs text-[#888] animate-pulse">
              ▼ SCROLL TO EXPLORE ▼
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Pokédex Section Placeholder */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-pixel text-xl md:text-2xl mb-8 text-[#E63946]">
            POKÉDEX
          </h2>
          <p className="text-[#888] max-w-md mx-auto">
            Tech stack entries coming soon...
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            {['Kubernetes', 'Terraform', 'AWS', 'Python', 'TypeScript', 'Docker', 'Go', 'React'].map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#121212] border-2 border-[#333] rounded-lg p-4 hover:border-[#FF6B35] transition-colors cursor-pointer"
              >
                <p className="font-pixel text-xs">{tech}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Party Section Placeholder */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-pixel text-xl md:text-2xl mb-8 text-[#5B9BD5]">
            PARTY
          </h2>
          <p className="text-[#888] max-w-md mx-auto mb-12">
            Current projects in active development
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((slot) => (
              <motion.div
                key={slot}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: slot * 0.1 }}
                viewport={{ once: true }}
                className="aspect-square bg-[#121212] border-2 border-dashed border-[#333] rounded-lg flex items-center justify-center hover:border-[#5B9BD5] transition-colors"
              >
                <span className="font-pixel text-2xl text-[#333]">?</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-[#222]">
        <p className="font-pixel text-xs text-[#555]">
          BUILT WITH 🔥 AND 💧
        </p>
      </footer>
    </div>
  );
}
