"use client";

import { motion } from "framer-motion";

interface PokeballProps {
  size?: number;
  className?: string;
  animate?: boolean;
  variant?: "regular" | "great" | "ultra" | "master";
}

const variants = {
  regular: { top: "#E63946", bottom: "#fff" },
  great: { top: "#5B9BD5", bottom: "#fff" },
  ultra: { top: "#FFD93D", bottom: "#222" },
  master: { top: "#7B68EE", bottom: "#E63946" },
};

export default function Pokeball({ 
  size = 40, 
  className = "", 
  animate = false,
  variant = "regular"
}: PokeballProps) {
  const colors = variants[variant];
  
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      animate={animate ? { 
        rotate: [0, 10, -10, 0],
        y: [0, -5, 0]
      } : {}}
      transition={animate ? { 
        duration: 2, 
        repeat: Infinity, 
        ease: "easeInOut" 
      } : {}}
    >
      {/* Top half */}
      <div 
        className="absolute top-0 left-0 right-0 rounded-t-full"
        style={{ 
          height: size / 2, 
          backgroundColor: colors.top,
          borderTop: `${size * 0.05}px solid #222`,
          borderLeft: `${size * 0.05}px solid #222`,
          borderRight: `${size * 0.05}px solid #222`,
        }} 
      />
      
      {/* Bottom half */}
      <div 
        className="absolute bottom-0 left-0 right-0 rounded-b-full"
        style={{ 
          height: size / 2, 
          backgroundColor: colors.bottom,
          borderBottom: `${size * 0.05}px solid #222`,
          borderLeft: `${size * 0.05}px solid #222`,
          borderRight: `${size * 0.05}px solid #222`,
        }} 
      />
      
      {/* Center line */}
      <div 
        className="absolute left-0 right-0 bg-[#222]"
        style={{ 
          top: size / 2 - size * 0.05, 
          height: size * 0.1 
        }} 
      />
      
      {/* Center button */}
      <div 
        className="absolute rounded-full bg-[#222]"
        style={{ 
          width: size * 0.35,
          height: size * 0.35,
          top: size / 2 - size * 0.175,
          left: size / 2 - size * 0.175,
        }}
      >
        <div 
          className="absolute rounded-full bg-white"
          style={{ 
            width: size * 0.2,
            height: size * 0.2,
            top: size * 0.075,
            left: size * 0.075,
          }}
        />
      </div>
    </motion.div>
  );
}
