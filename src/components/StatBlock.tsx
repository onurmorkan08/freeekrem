"use client";

import { motion } from "framer-motion";

export default function StatBlock({ stats }: { stats: any }) {
  return (
    <section className="py-32 bg-black border-y border-white/5 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20 text-center">
            <h2 className="text-xl font-bold tracking-[0.4em] uppercase text-primary border-b border-zinc-800 pb-4 inline-block">{stats.title}</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900">
           <div className="bg-[#050608] p-12 flex flex-col items-center text-center justify-center min-h-[300px]">
             <span className="font-serif text-6xl lg:text-8xl text-white font-bold mb-6">{stats.files}</span>
             <span className="text-sm font-bold uppercase tracking-widest text-zinc-500">{stats.filesLabel}</span>
           </div>
           
           <div className="bg-[#0f0404] p-12 flex flex-col items-center text-center justify-center min-h-[300px] border-x-grid border-primary/20">
             <span className="font-serif text-6xl lg:text-8xl text-primary font-bold mb-6">{stats.years}</span>
             <span className="text-sm font-bold uppercase tracking-widest text-primary/70">{stats.yearsLabel}</span>
           </div>

           <div className="bg-[#050608] p-12 flex flex-col items-center text-center justify-center min-h-[300px]">
             <span className="font-serif text-6xl lg:text-8xl text-white font-bold mb-6">{stats.signatures}</span>
             <span className="text-sm font-bold uppercase tracking-widest text-zinc-500">{stats.signaturesLabel}</span>
           </div>
        </div>
      </div>
    </section>
  );
}
