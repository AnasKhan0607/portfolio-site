"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { id: "hero", label: "TRAINER", icon: "👤" },
  { id: "pokedex", label: "POKÉDEX", icon: "📕" },
  { id: "party", label: "PARTY", icon: "⚔️" },
  { id: "badges", label: "BADGES", icon: "🏅" },
  { id: "evolution", label: "EVOLUTION", icon: "🔄" },
  { id: "contact", label: "CONNECT", icon: "📡" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling past hero
      setIsVisible(window.scrollY > 300);
      
      // Determine active section
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));
      
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-40 hidden md:block"
          >
            <div className="max-w-4xl mx-auto px-6 py-4">
              <div className="bg-[#121212]/90 backdrop-blur-md border border-[#333] rounded-full px-6 py-3 flex items-center justify-center gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 rounded-full font-pixel text-[10px] transition-all flex items-center gap-2 ${
                      activeSection === item.id
                        ? "bg-[#FF6B35] text-white"
                        : "text-[#888] hover:text-white hover:bg-[#222]"
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span className="hidden lg:inline">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Navigation Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="fixed bottom-6 right-6 z-40 md:hidden w-14 h-14 bg-[#FF6B35] rounded-full flex items-center justify-center shadow-lg"
          >
            <span className="font-pixel text-lg">{isMobileMenuOpen ? "×" : "☰"}</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-30 md:hidden flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="flex flex-col gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-8 py-4 rounded-lg font-pixel text-sm flex items-center gap-4 ${
                    activeSection === item.id
                      ? "bg-[#FF6B35] text-white"
                      : "bg-[#222] text-[#888]"
                  }`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
