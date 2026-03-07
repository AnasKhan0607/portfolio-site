"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CursorFollower() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  // Smooth spring following
  const springConfig = { damping: 25, stiffness: 200 };
  const followerX = useSpring(cursorX, springConfig);
  const followerY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only show on desktop
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-[60] hidden md:block"
      style={{
        x: followerX,
        y: followerY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      {/* Chimchar-inspired sprite */}
      <motion.div
        animate={{
          scale: isClicking ? 0.8 : 1,
          rotate: isClicking ? -10 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="relative"
      >
        {/* Body */}
        <div className="relative w-8 h-8">
          {/* Face circle */}
          <div className="absolute inset-0 bg-[#FF6B35] rounded-full border-2 border-[#E63946]" />
          
          {/* Eyes */}
          <div className="absolute top-2 left-1.5 w-1.5 h-2 bg-white rounded-full">
            <div className="absolute bottom-0 left-0.5 w-1 h-1 bg-black rounded-full" />
          </div>
          <div className="absolute top-2 right-1.5 w-1.5 h-2 bg-white rounded-full">
            <div className="absolute bottom-0 right-0.5 w-1 h-1 bg-black rounded-full" />
          </div>
          
          {/* Mouth */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-1 border-b-2 border-[#E63946] rounded-full" />
          
          {/* Fire on head */}
          <motion.div
            animate={{ 
              scaleY: [1, 1.2, 1],
              opacity: [1, 0.8, 1],
            }}
            transition={{ 
              duration: 0.3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-2 left-1/2 -translate-x-1/2"
          >
            <div className="w-2 h-3 bg-gradient-to-t from-[#FF6B35] via-[#FFD93D] to-[#FFD93D] rounded-full" 
              style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
            />
          </motion.div>
        </div>
        
        {/* Shadow */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-1 bg-black/20 rounded-full blur-sm" />
      </motion.div>
    </motion.div>
  );
}
