"use client";

import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { useParams } from "next/navigation";

export default function WhoIsEkremPage() {
  const params = useParams();
  const lang = (params?.lang as string) || "en";

  return (
    <div className="pb-32 bg-[#050608] overflow-hidden text-zinc-300">
      <PageHeader 
        title="Who Is Ekrem İmamoğlu?" 
        subtitle="The rise of Istanbul's mayor and why his unbreakable democratic mandate became the central threat to the ruling power." 
      />
      
      <div className="container mx-auto px-6 max-w-6xl mt-24">
         
         {/* SECTION 1 & 2: PRESENT SIGNIFICANCE FIRST */}
         <div className="grid lg:grid-cols-12 gap-y-16 lg:gap-16 items-center mb-40">
            <div className="lg:col-span-5">
               <div className="aspect-[3/4] w-full bg-zinc-900 border border-white/5 relative group p-2 shadow-2xl">
                 <img src="/images/ChatGPT Image Apr 23, 2026, 01_40_16 AM.png" className="w-full h-full object-cover object-[center_top] grayscale-[30%] contrast-125 opacity-90 transition-all duration-1000 group-hover:scale-105" alt="Ekrem İmamoğlu" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-transparent opacity-80 pointer-events-none z-10"></div>
                 <div className="absolute bottom-6 left-6 z-20">
                   <span className="text-[0.6rem] font-bold tracking-widest uppercase text-primary bg-black/80 px-3 py-1">The Target</span>
                 </div>
               </div>
            </div>
            
            <div className="lg:col-span-7 relative z-10 lg:pl-10 space-y-16">
               <div>
                 <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">01 / The Central Threat</span>
                 <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6 leading-tight">
                   Dangerous Because He Cannot Be Defeated
                 </h2>
                 <p className="text-lg text-zinc-400 leading-relaxed text-balance">
                   Ekrem İmamoğlu did not become the prime target of the Turkish establishment because he broke the law; he became a target because he broke their monopoly on power. Remaining consistently immune to electoral defeat, he unified opposing political factions and cultivated an unbreakable democratic mandate that current ruling power perceives as an existential threat to its survival.
                 </p>
               </div>

               <div>
                 <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">02 / The Institutional Shift</span>
                 <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6 leading-tight">
                   The Judicial Weaponization
                 </h2>
                 <p className="text-lg text-zinc-400 leading-relaxed text-balance">
                   Unable to outcompete him at the ballot box, the state abandoned democratic norms, explicitly shifting the confrontation to the courts. By manufacturing sudden diploma annulments, prosecuting mere political speech as "insults," and seeking a sweeping multi-decade political ban, the establishment constructed a desperate legal mechanism to unilaterally erase the will of millions.
                 </p>
                 <Link href={`/${lang}/the-case`} className="inline-flex items-center gap-3 text-white border-b border-primary pb-1 mt-6 font-bold uppercase tracking-widest text-xs hover:text-primary transition-colors">
                   Examine The Complete Dossier <MoveRight className="w-4 h-4 ml-2" />
                 </Link>
               </div>
            </div>
         </div>

         <div className="w-full h-px bg-zinc-900 mb-40 relative flex justify-center">
             <div className="bg-[#050608] px-4 text-[0.6rem] font-mono tracking-widest uppercase text-zinc-700 absolute -top-2">Retrospective</div>
         </div>

         {/* SECTION 3 & 4: THE WIDENING MANDATE & BREAKTHROUGH */}
         <div className="grid lg:grid-cols-12 gap-y-16 lg:gap-16 items-start mb-40">
            <div className="lg:col-span-6 lg:order-1 order-2 space-y-16 lg:pr-10">
               <div>
                 <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">03 / The Widening Mandate</span>
                 <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6 leading-tight">
                   Istanbul and Beyond
                 </h2>
                 <p className="text-lg text-zinc-400 leading-relaxed text-balance">
                   His ascent to power began with the monumental 2019 "Istanbul Earthquake." President Erdoğan famously stated, "Whoever wins Istanbul, wins Turkey." İmamoğlu’s victory was a seismic shock to a ruling establishment that had held the city for 25 years. When the state illegally annulled the first election, an outraged electorate returned him to office months later with a historic 800,000-vote landslide. 
                 </p>
               </div>
               
               <div>
                 <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">04 / The Early Roots</span>
                 <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6 leading-tight">
                   From Local To National
                 </h2>
                 <p className="text-lg text-zinc-400 leading-relaxed text-balance">
                   Before taking the national stage, İmamoğlu governed the district of Beylikdüzü. His approach—heavily focusing on civic engagement, practical local governance, and neutralizing toxic polarized rhetoric—proved that alternative governance was possible. This unifying democratic strategy ultimately became the blueprint to unseat an entrenched national network.
                 </p>
               </div>
            </div>

            <div className="lg:col-span-6 lg:order-2 order-1 sticky top-32">
               <div className="aspect-square w-full bg-zinc-950 overflow-hidden relative border border-white/5 group shadow-2xl p-2">
                 <img src="/images/ChatGPT Image Apr 23, 2026, 01_40_24 AM.png" className="w-full h-full object-cover object-center grayscale mix-blend-luminosity opacity-70 group-hover:scale-105 transition-transform duration-1000" alt="The Mandate" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                 <div className="absolute bottom-6 left-6 right-6">
                    <blockquote className="font-serif text-2xl font-light text-white leading-relaxed italic border-l-2 border-primary pl-4">
                      "You cannot bend the will of millions. Every time you try to erase their vote, they will return to the ballot box louder and stronger."
                    </blockquote>
                 </div>
               </div>
            </div>
         </div>

         <div className="w-full h-px bg-zinc-900 mb-40"></div>

         {/* SECTION 5 & 6: THE HUMAN ELEMENT & GLOBAL RELEVANCE */}
         <div className="grid lg:grid-cols-12 gap-y-16 lg:gap-16 items-center">
            <div className="lg:col-span-5 relative">
               <div className="w-full bg-[#050608] relative group p-4 border border-white/5 pb-10 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                 <img src="/images/WhatsApp Image 2025-09-20 at 4.34.25 PM1.jpeg" className="w-full h-auto object-cover grayscale-[30%] opacity-90 contrast-125 hover:grayscale-0 transition-all duration-700" alt="Family Support" />
                 <div className="text-center mt-4 opacity-50 font-mono text-[0.6rem] uppercase tracking-widest text-zinc-500">Beyond the Podiums</div>
               </div>
            </div>

            <div className="lg:col-span-7 lg:pl-10 space-y-16">
               <div>
                 <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">05 / The Private Core</span>
                 <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6 leading-tight">
                   The Cost of Unyielding Service
                 </h2>
                 <p className="text-lg text-zinc-400 leading-relaxed text-balance">
                   Behind the intense legal battles and political maneuvering stands a family forced to navigate the extreme pressure of state hostility. Ekrem İmamoğlu is not simply a politician navigating a career; he is navigating a crucible alongside his wife Dilek and their three children. They have faced sudden threats, detentions, and constant state surveillance without abandoning their civic principles. The defense of his mandate is intertwined with profound personal resilience.
                 </p>
               </div>

               <div>
                 <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">06 / Global Relevance</span>
                 <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6 leading-tight">
                   Why He Matters Beyond One Politician
                 </h2>
                 <p className="text-lg text-zinc-400 leading-relaxed text-balance">
                   İmamoğlu's struggle is the vanguard of democratic survival amidst global democratic backsliding. If the most critically supported opposition figure in a NATO member state can be wiped from the political map by a loyalist bench, the framework for peaceful democratic transition fundamentally breaks. Defending his mandate is not just about defending a single mayor—it is defending the definitive stress test for democratic legitimacy in the 21st century.
                 </p>
               </div>
            </div>
         </div>

      </div>
    </div>
  );
}
