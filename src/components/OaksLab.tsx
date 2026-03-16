"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PokeballOption {
  id: string;
  label: string;
  description: string;
  icon: string;
  action: () => void;
  color: string;
}

const PokeballSVG = ({ 
  onClick, 
  isSelected, 
  isDisabled,
  color 
}: { 
  onClick: () => void; 
  isSelected: boolean;
  isDisabled: boolean;
  color: string;
}) => (
  <motion.div
    onClick={!isDisabled ? onClick : undefined}
    className={`relative cursor-pointer ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    whileHover={!isDisabled ? { scale: 1.1, rotate: [-5, 5, -5, 0] } : {}}
    whileTap={!isDisabled ? { scale: 0.95 } : {}}
    animate={isSelected ? { scale: [1, 1.2, 0], opacity: [1, 1, 0] } : {}}
    transition={{ duration: isSelected ? 0.5 : 0.3 }}
  >
    {/* Pokeball SVG */}
    <svg width="120" height="120" viewBox="0 0 120 120" className="drop-shadow-2xl">
      {/* Outer circle */}
      <circle cx="60" cy="60" r="55" fill="#1a1a1a" stroke="#333" strokeWidth="4" />
      
      {/* Top half */}
      <path
        d="M 5 60 A 55 55 0 0 1 115 60"
        fill={color}
        stroke="#333"
        strokeWidth="2"
      />
      
      {/* Bottom half */}
      <path
        d="M 5 60 A 55 55 0 0 0 115 60"
        fill="#f0f0f0"
        stroke="#333"
        strokeWidth="2"
      />
      
      {/* Middle band */}
      <rect x="5" y="55" width="110" height="10" fill="#1a1a1a" />
      
      {/* Center button outer */}
      <circle cx="60" cy="60" r="18" fill="#1a1a1a" stroke="#333" strokeWidth="3" />
      
      {/* Center button inner */}
      <circle cx="60" cy="60" r="12" fill="#f0f0f0" stroke="#333" strokeWidth="2" />
      
      {/* Shine effect */}
      <ellipse cx="40" cy="35" rx="12" ry="8" fill="rgba(255,255,255,0.3)" />
    </svg>
    
    {/* Glow effect on hover */}
    <motion.div
      className="absolute inset-0 rounded-full"
      style={{ 
        background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
        filter: 'blur(10px)'
      }}
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
    />
  </motion.div>
);

const PokeballOpen = ({ 
  option, 
  onClose 
}: { 
  option: PokeballOption; 
  onClose: () => void;
}) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Flash effect */}
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Dark overlay */}
      <motion.div
        className="absolute inset-0 bg-black/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        onClick={onClose}
      />
      
      {/* Content emerging */}
      <motion.div
        className="relative z-10 bg-[#121212] border-4 rounded-lg p-8 max-w-md mx-4"
        style={{ borderColor: option.color }}
        initial={{ scale: 0, rotate: -180, y: 100 }}
        animate={{ scale: 1, rotate: 0, y: 0 }}
        exit={{ scale: 0, rotate: 180, y: 100 }}
        transition={{ 
          type: "spring", 
          stiffness: 200, 
          damping: 20,
          delay: 0.2 
        }}
      >
        {/* Sparkle effects */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0], 
              scale: [0, 1, 0],
            }}
            transition={{ 
              duration: 0.8, 
              delay: 0.3 + i * 0.1,
              repeat: Infinity,
              repeatDelay: 2
            }}
          />
        ))}
        
        {/* Icon */}
        <motion.div
          className="text-6xl text-center mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {option.icon}
        </motion.div>
        
        {/* Title */}
        <motion.h3
          className="font-pixel text-lg text-center mb-2"
          style={{ color: option.color }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {option.label}
        </motion.h3>
        
        {/* Description */}
        <motion.p
          className="text-[#888] text-center text-sm mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {option.description}
        </motion.p>
        
        {/* Action button */}
        <motion.button
          className="w-full py-3 px-6 font-pixel text-xs rounded-lg transition-all"
          style={{ 
            backgroundColor: option.color,
            color: option.id === 'github' ? '#fff' : '#000'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            option.action();
            onClose();
          }}
        >
          {option.id === 'resume' ? 'DOWNLOAD' : 'VISIT'}
        </motion.button>
        
        {/* Close hint */}
        <motion.p
          className="text-[#555] text-xs text-center mt-4 font-pixel"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          TAP OUTSIDE TO CLOSE
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default function OaksLab() {
  const [selectedBall, setSelectedBall] = useState<PokeballOption | null>(null);
  const [hasChosen, setHasChosen] = useState(false);

  const options: PokeballOption[] = [
    {
      id: 'resume',
      label: 'RESUME',
      description: 'A strong, reliable choice. Contains years of battle experience.',
      icon: '📄',
      color: '#FF6B35',
      action: () => {
        window.open('/resume.pdf', '_blank');
      }
    },
    {
      id: 'github',
      label: 'GITHUB',
      description: 'Wild and unpredictable. Full of mysterious code creatures.',
      icon: '💻',
      color: '#333',
      action: () => {
        window.open('https://github.com/AnasKhan0607', '_blank');
      }
    },
    {
      id: 'linkedin',
      label: 'LINKEDIN',
      description: 'Evolved through many professional battles.',
      icon: '💼',
      color: '#5B9BD5',
      action: () => {
        window.open('https://linkedin.com/in/anas-k', '_blank');
      }
    }
  ];

  const handleSelect = (option: PokeballOption) => {
    setHasChosen(true);
    setSelectedBall(option);
  };

  const handleClose = () => {
    setSelectedBall(null);
    setTimeout(() => setHasChosen(false), 300);
  };

  return (
    <section id="oaks-lab" className="min-h-screen flex flex-col items-center justify-center px-6 py-24 relative overflow-hidden">
      {/* Oak's Lab background effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#228B22] to-transparent" />
        <div 
          className="absolute bottom-0 left-0 w-full h-1/2"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #333 1px, transparent 1px),
              linear-gradient(180deg, #333 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        {/* Title */}
        <motion.h2
          className="font-pixel text-xl md:text-2xl mb-4 text-[#00FF41]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          OAK&apos;S LAB
        </motion.h2>

        {/* Dialog box */}
        <motion.div
          className="bg-[#121212] border-4 border-[#fff] rounded-lg p-6 mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="font-pixel text-xs md:text-sm leading-relaxed text-left">
            <span className="text-[#00FF41]">PROF. OAK:</span>
            <br /><br />
            Welcome! There are 3 POKéBALLS on the table.
            <br /><br />
            Each contains something special...
            <br />
            <span className="animate-blink">▼</span>
          </p>
        </motion.div>

        {/* Pokeballs */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-8">
          {options.map((option, index) => (
            <motion.div
              key={option.id}
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.15 }}
              viewport={{ once: true }}
            >
              <PokeballSVG
                onClick={() => handleSelect(option)}
                isSelected={selectedBall?.id === option.id && hasChosen}
                isDisabled={hasChosen && selectedBall?.id !== option.id}
                color={option.color}
              />
              <p className="font-pixel text-[10px] text-[#888]">
                {option.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Hint */}
        <motion.p
          className="font-pixel text-[10px] text-[#555]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
        >
          CLICK A POKéBALL TO REVEAL
        </motion.p>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedBall && (
          <PokeballOpen option={selectedBall} onClose={handleClose} />
        )}
      </AnimatePresence>
    </section>
  );
}
