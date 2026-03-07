"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const KONAMI_CODE = [
  "ArrowUp", "ArrowUp",
  "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight",
  "ArrowLeft", "ArrowRight",
  "b", "a"
];

export default function KonamiCode() {
  const [inputSequence, setInputSequence] = useState<string[]>([]);
  const [activated, setActivated] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const key = e.key;
    
    setInputSequence(prev => {
      const newSequence = [...prev, key].slice(-KONAMI_CODE.length);
      
      // Check if matches
      if (newSequence.length === KONAMI_CODE.length) {
        const matches = newSequence.every((k, i) => k.toLowerCase() === KONAMI_CODE[i].toLowerCase());
        if (matches && !activated) {
          setActivated(true);
          setShowMessage(true);
          
          // Hide message after 5 seconds
          setTimeout(() => setShowMessage(false), 5000);
          
          // Store in localStorage
          localStorage.setItem("konami-unlocked", "true");
        }
      }
      
      return newSequence;
    });
  }, [activated]);

  useEffect(() => {
    // Check if already unlocked
    if (localStorage.getItem("konami-unlocked") === "true") {
      setActivated(true);
    }
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      {/* Secret unlocked message */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] bg-[#FFD93D] text-black px-6 py-4 rounded-lg shadow-2xl"
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">🎮</span>
              <div>
                <p className="font-pixel text-xs">SECRET UNLOCKED!</p>
                <p className="text-sm mt-1">You found the Konami Code!</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Shiny mode indicator */}
      {activated && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed bottom-6 left-6 z-40"
        >
          <div className="bg-[#FFD93D]/20 border border-[#FFD93D] rounded-full px-3 py-1 flex items-center gap-2">
            <span className="text-sm">✨</span>
            <span className="font-pixel text-[8px] text-[#FFD93D]">SHINY MODE</span>
          </div>
        </motion.div>
      )}

      {/* Add rainbow shimmer to page when activated */}
      {activated && (
        <style jsx global>{`
          .pixel-border {
            animation: rainbow-border 3s linear infinite;
          }
          
          @keyframes rainbow-border {
            0% { border-color: #FF6B35; }
            25% { border-color: #FFD93D; }
            50% { border-color: #00FF41; }
            75% { border-color: #5B9BD5; }
            100% { border-color: #FF6B35; }
          }
        `}</style>
      )}
    </>
  );
}
