"use client";

import { motion } from "framer-motion";

const socials = [
  {
    name: "GitHub",
    icon: "🐙",
    url: "https://github.com",
    color: "#333",
    handle: "@developer",
  },
  {
    name: "Twitter/X",
    icon: "🐦",
    url: "https://x.com",
    color: "#1DA1F2",
    handle: "@developer",
  },
  {
    name: "LinkedIn",
    icon: "💼",
    url: "https://linkedin.com",
    color: "#0A66C2",
    handle: "in/developer",
  },
  {
    name: "Email",
    icon: "📧",
    url: "mailto:hello@example.com",
    color: "#FF6B35",
    handle: "hello@example.com",
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
              className="bg-[#121212] border-2 border-[#333] rounded-lg p-4 hover:border-opacity-100 transition-all group"
              style={{ borderColor: `${social.color}40` }}
            >
              <span className="text-3xl mb-2 block group-hover:scale-110 transition-transform">
                {social.icon}
              </span>
              <p className="font-pixel text-[10px] text-white mb-1">{social.name}</p>
              <p className="text-[10px] text-[#555] truncate">{social.handle}</p>
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
              <p className="font-pixel text-[10px] text-[#888] mb-2">TRAINER SAYS:</p>
              <p className="text-sm text-[#ccc] leading-relaxed">
                &quot;Always looking for interesting projects, collaborations, 
                or just a good conversation about tech. Don&apos;t be a stranger!&quot;
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
            <span className="font-pixel text-[10px] text-[#00FF41]">AVAILABLE FOR BATTLES</span>
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
