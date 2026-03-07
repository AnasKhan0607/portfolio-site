"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Pokedex from "@/components/Pokedex";
import Party from "@/components/Party";
import GymBadges from "@/components/GymBadges";
import EvolutionChain from "@/components/EvolutionChain";
import Contact from "@/components/Contact";
import KonamiCode from "@/components/KonamiCode";
import CursorFollower from "@/components/CursorFollower";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Easter Eggs */}
      <KonamiCode />
      <CursorFollower />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Scanline overlay */}
      <div className="scanlines fixed inset-0 pointer-events-none z-20" />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 relative">
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
              {/* Avatar */}
              <div className="w-32 h-32 rounded-lg overflow-hidden border-4 border-[#FF6B35]">
                <Image
                  src="https://avatars.githubusercontent.com/u/76663779?v=4"
                  alt="Anas Khan"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="text-left flex-1">
                <p className="font-pixel text-xs text-[#888] mb-2">NAME</p>
                <p className="text-2xl font-bold mb-4">Anas Khan</p>
                
                <p className="font-pixel text-xs text-[#888] mb-2">TYPE</p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-3 py-1 bg-[#718096] rounded text-sm font-bold">STEEL</span>
                  <span className="px-3 py-1 bg-[#FFD93D] rounded text-sm font-bold text-black">ELECTRIC</span>
                  <span className="px-3 py-1 bg-[#7B68EE] rounded text-sm font-bold">PSYCHIC</span>
                </div>

                <p className="font-pixel text-xs text-[#888] mb-2">SPECIALTY</p>
                <p className="text-sm text-[#ccc]">Production Engineering • Cloud Infrastructure • Agentic AI</p>
              </div>
            </div>

            {/* Stats bar */}
            <div className="mt-8 pt-6 border-t border-[#333]">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-pixel text-xs text-[#FF6B35]">EXP</p>
                  <p className="text-2xl font-bold">3+ YRS</p>
                </div>
                <div>
                  <p className="font-pixel text-xs text-[#5B9BD5]">REPOS</p>
                  <p className="text-2xl font-bold">25</p>
                </div>
                <div>
                  <p className="font-pixel text-xs text-[#00FF41]">BADGES</p>
                  <p className="text-2xl font-bold">7</p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="mt-6 pt-6 border-t border-[#333]">
              <p className="text-sm text-[#888] italic text-center">&quot;Expert Vibe Coder&quot;</p>
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

      {/* Pokédex Section */}
      <Pokedex />

      {/* Party Section */}
      <Party />

      {/* Gym Badges Section */}
      <GymBadges />

      {/* Evolution Chain Section */}
      <EvolutionChain />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="py-12 text-center border-t border-[#222]">
        <p className="font-pixel text-xs text-[#555]">
          BUILT WITH 🔥 AND 💧
        </p>
        <p className="text-xs text-[#333] mt-2">
          © {new Date().getFullYear()} Anas Khan • Inspired by Pokémon
        </p>
      </footer>
    </div>
  );
}
