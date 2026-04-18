"use client";

import { motion } from "framer-motion";

export default function CinematicQuote({ quote }: { quote: string }) {
  return (
    <section className="relative py-40 bg-zinc-950 flex items-center justify-center overflow-hidden border-y border-white/5">
      {/* Massive subtle quotation mark watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-watermark text-[40rem] font-serif leading-none opacity-5">
        &quot;
      </div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <div className="w-12 h-1 bg-primary mb-12"></div>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif text-white tracking-tight leading-[1.1] text-balance">
            {quote}
          </h2>
          <div className="mt-12 text-zinc-500 uppercase tracking-[0.3em] text-sm font-bold flex items-center gap-4">
             <span className="w-4 h-4 rounded-full border border-primary flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
             </span>
             Ekrem İmamoğlu
          </div>
        </motion.div>
      </div>
    </section>
  );
}
