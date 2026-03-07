"use client";

import { motion } from "framer-motion";
import Pokeball from "./Pokeball";

export default function FloatingDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Pokeballs */}
      <motion.div
        className="absolute top-20 left-10"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Pokeball size={30} variant="regular" />
      </motion.div>
      
      <motion.div
        className="absolute top-40 right-20"
        animate={{ y: [0, -15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Pokeball size={25} variant="great" />
      </motion.div>
      
      <motion.div
        className="absolute top-[60%] left-5"
        animate={{ y: [0, -25, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <Pokeball size={35} variant="ultra" />
      </motion.div>
      
      <motion.div
        className="absolute top-[80%] right-10"
        animate={{ y: [0, -20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <Pokeball size={28} variant="master" />
      </motion.div>

      {/* Pixel stars */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#FFD93D]"
          style={{
            top: `${15 + i * 12}%`,
            left: `${5 + (i % 2) * 90}%`,
          }}
          animate={{ 
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{ 
            duration: 2 + i * 0.3, 
            repeat: Infinity, 
            delay: i * 0.4 
          }}
        />
      ))}

      {/* Chimchar-colored flame particles */}
      <motion.div
        className="absolute top-[30%] right-[15%] w-3 h-3 rounded-full bg-[#FF6B35]"
        animate={{ 
          y: [0, -30, 0],
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-[50%] left-[10%] w-2 h-2 rounded-full bg-[#E63946]"
        animate={{ 
          y: [0, -25, 0],
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
      />

      {/* Quagsire-colored water drops */}
      <motion.div
        className="absolute top-[45%] right-[8%] w-2 h-3 rounded-full bg-[#5B9BD5]"
        animate={{ 
          y: [0, 20, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      />
      <motion.div
        className="absolute top-[70%] left-[12%] w-2 h-3 rounded-full bg-[#7B68EE]"
        animate={{ 
          y: [0, 15, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
      />
    </div>
  );
}
