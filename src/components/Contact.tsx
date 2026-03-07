"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const socials = [
  {
    name: "GitHub",
    icon: "🐙",
    url: "https://github.com/AnasKhan0607",
    color: "#333",
    handle: "@AnasKhan0607",
    pokemon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png", // Porygon
    pokemonName: "Porygon",
  },
  {
    name: "Twitter/X",
    icon: "🐦",
    url: "https://x.com/AnasKhan0607",
    color: "#1DA1F2",
    handle: "@AnasKhan0607",
    pokemon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png", // Pidgeot
    pokemonName: "Pidgeot",
  },
  {
    name: "LinkedIn",
    icon: "💼",
    url: "https://linkedin.com/in/anas-k",
    color: "#0A66C2",
    handle: "in/anas-k",
    pokemon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png", // Alakazam
    pokemonName: "Alakazam",
  },
  {
    name: "Email",
    icon: "📧",
    url: "mailto:anas.k2001@icloud.com",
    color: "#FF6B35",
    handle: "anas.k2001@icloud.com",
    pokemon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png", // Delibird
    pokemonName: "Delibird",
  },
];

export default function Contact() {
  return (
    <section className="px-6 py-24" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        {/* Header */}
        <h2 className="font-pixel text-xl md:text-2xl mb-4 text-[#00FF41]">
          CONNECT
        </h2>
        <p className="text-[#888] max-w-md mx-auto mb-12">
          Want to trade friend codes? Reach out!
        </p>
        
        {/* Social links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {socials.map((social, i) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#121212] border-2 border-[#333] rounded-lg p-4 hover:border-opacity-100 transition-all group relative overflow-hidden"
              style={{ borderColor: `${social.color}40` }}
            >
              {/* Pokemon sprite */}
              <motion.div 
                className="absolute -right-2 -bottom-2 opacity-20 group-hover:opacity-50 transition-opacity"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src={social.pokemon}
                  alt={social.pokemonName}
                  width={50}
                  height={50}
                  style={{ imageRendering: "pixelated" }}
                />
              </motion.div>

              <div className="relative z-10">
                <div className="w-12 h-12 mx-auto mb-2 rounded-lg overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
                  <Image
                    src={social.pokemon}
                    alt={social.pokemonName}
                    width={40}
                    height={40}
                    className="group-hover:scale-110 transition-transform"
                    style={{ imageRendering: "pixelated" }}
                  />
                </div>
                <p className="font-pixel text-[10px] text-white mb-1">{social.name}</p>
                <p className="text-[10px] text-[#555] truncate">{social.handle}</p>
              </div>
            </motion.a>
          ))}
        </div>
        
        {/* Message box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-[#121212] border-2 border-[#333] rounded-lg p-6"
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl">💬</span>
            <div className="text-left">
              <p className="font-pixel text-[10px] text-[#888] mb-2">ANAS SAYS:</p>
              <p className="text-sm text-[#ccc] leading-relaxed">
                &quot;Building in public, breaking prod in private. Always down to chat about 
                infrastructure, AI agents, or startup ideas. Let&apos;s connect!&quot;
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Availability indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#00FF41]/10 rounded-full">
            <span className="w-2 h-2 bg-[#00FF41] rounded-full animate-pulse" />
            <span className="font-pixel text-[10px] text-[#00FF41]">OPEN TO OPPORTUNITIES</span>
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
