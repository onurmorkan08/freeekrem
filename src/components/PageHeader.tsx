"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="relative py-24 mb-16 border-b border-white/5 bg-[#0A0A0C]">
      {/* Subtle red accent line */}
      <div className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-primary to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight mb-6"
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-zinc-400 leading-relaxed text-balance"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}
