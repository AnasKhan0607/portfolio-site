"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import Image from "next/image";

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
      {/* Chimchar sprite */}
      <motion.div
        animate={{
          scale: isClicking ? 0.8 : 1,
          rotate: isClicking ? -10 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="relative"
      >
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png"
          alt="Chimchar"
          width={40}
          height={40}
          style={{ imageRendering: "pixelated" }}
          className="drop-shadow-lg"
        />
        
        {/* Shadow */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-1 bg-black/20 rounded-full blur-sm" />
      </motion.div>
    </motion.div>
  );
}
