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
         
         {/* SECTION 2 & 3: EARLY RISE & ISTANBUL BREAKTHROUGH */}
         <div className="grid lg:grid-cols-12 gap-y-16 lg:gap-16 items-center mb-40">
            <div className="lg:col-span-5">
               <div className="aspect-[3/4] w-full bg-zinc-900 border border-white/5 relative group p-2 shadow-2xl">
                 <img src="/images/898486cb-d4b0-4db5-9ae1-1ebefdea6380 (1).jpg" className="w-full h-full object-cover object-[center_top] grayscale-[50%] contrast-125 opacity-90 transition-all duration-1000 group-hover:scale-105" alt="Ekrem İmamoğlu" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-transparent opacity-80 pointer-events-none z-10"></div>
                 <div className="absolute bottom-6 left-6 z-20">
                   <span className="text-[0.6rem] font-bold tracking-widest uppercase text-primary bg-black/80 px-3 py-1">Political Profile</span>
                 </div>
               </div>
            </div>
            
            <div className="lg:col-span-7 relative z-10 lg:pl-10 space-y-16">
               <div>
                 <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">01 / The Early Rise</span>
                 <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6 leading-tight">
                   From District Unifier to National Operator
                 </h2>
                 <p className="text-lg text-zinc-400 leading-relaxed text-balance">
                   Before arriving on the national stage, İmamoğlu served as the district mayor of Beylikdüzü. His approach—focusing heavily on civic engagement, pragmatic governance, and avoiding polarized rhetoric—earned him a robust, cross-partisan mandate. He successfully communicated across traditional ideological lines, neutralizing the "us vs. them" narrative that the ruling party relied on to maintain power.
                 </p>
               </div>

               <div>
                 <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">02 / The Breakthrough</span>
                 <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6 leading-tight">
                   The Istanbul Earthquake
                 </h2>
                 <p className="text-lg text-zinc-400 leading-relaxed text-balance">
                   When he ran for Mayor of Istanbul in 2019, he brought this unifying democratic strategy to the national scale. Istanbul is not just a city; it represents nearly a fifth of Turkey's population and a massive portion of its economy. President Erdoğan famously stated, "Whoever wins Istanbul, wins Turkey." İmamoğlu’s initial victory in March 2019 was a seismic shock to a ruling establishment that had held the city for 25 years.
                 </p>
               </div>
            </div>
         </div>

         <div className="w-full h-px bg-zinc-900 mb-40"></div>

         {/* SECTION 4 & 5: CENTRAL THREAT & WIDENING MANDATE */}
         <div className="grid lg:grid-cols-12 gap-y-16 lg:gap-16 items-start mb-40">
            <div className="lg:col-span-6 lg:order-1 order-2 space-y-16 lg:pr-10">
               <div>
                 <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">03 / The Central Threat</span>
                 <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6 leading-tight">
                   Dangerous Because He Kept Winning
                 </h2>
                 <p className="text-lg text-zinc-400 leading-relaxed text-balance">
                   İmamoğlu did not become a target because he broke the law; he became a target because he could not be politically defeated. When the government pressured the Supreme Election Council to annul his March 2019 victory, they expected the opposition to fracture. Instead, İmamoğlu ran a campaign of radical calm. Recognizing the injustice of the annulment, a massive surge of voters propelled him to a second victory in June 2019, expanding a 13,000-vote margin into an 806,000-vote landslide. 
                 </p>
               </div>
               
               <div>
                 <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">04 / The Widening Mandate</span>
                 <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6 leading-tight">
                   Immune to Administrative Blockades
                 </h2>
                 <p className="text-lg text-zinc-400 leading-relaxed text-balance">
                   For five years, the central government attempted to paralyze his administration by blocking municipal funding, withholding signatures for public transit investments, and seizing municipal authority over public spaces. Despite this administrative siege, İmamoğlu delivered major infrastructure projects and retained immense public approval, culminating in another decisive re-election victory in March 2024.
                 </p>
               </div>
            </div>

            <div className="lg:col-span-6 lg:order-2 order-1 sticky top-32">
               <div className="aspect-square w-full bg-[#050608] overflow-hidden relative border border-white/5 group shadow-2xl p-6 flex flex-col justify-between">
                 <div className="flex justify-between items-start">
                   <div className="w-12 h-1 bg-primary"></div>
                   <span className="text-xs uppercase tracking-widest text-zinc-600 font-bold">The Mandate</span>
                 </div>
                 
                 <blockquote className="font-serif text-3xl font-light text-white leading-relaxed my-auto italic">
                   "You cannot bend the will of 16 million people. Every time you try to erase their vote, they will return to the ballot box louder and stronger."
                 </blockquote>
                 
                 <div className="text-right">
                   <span className="text-sm font-bold uppercase tracking-widest text-primary">Ekrem İmamoğlu</span>
                 </div>
               </div>
            </div>
         </div>

         <div className="w-full h-px bg-zinc-900 mb-40"></div>

         {/* SECTION 6 & 7: INSTITUTIONAL TARGET & WHY IT MATTERS */}
         <div className="grid lg:grid-cols-12 gap-y-16 lg:gap-16 items-center">
            <div className="lg:col-span-5 relative">
               <div className="aspect-[4/3] w-full bg-zinc-900 overflow-hidden relative border border-zinc-800 shadow-2xl">
                 <img src="/images/b193ed98-4d1c-4919-9dc5-20aa3d56bedd.jpg" className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-luminosity opacity-80" alt="Civic Resistance" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
               </div>
            </div>

            <div className="lg:col-span-7 lg:pl-10 space-y-16">
               <div>
                 <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">05 / The Institutional Target</span>
                 <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6 leading-tight">
                   From Elected Rival to Judicial Target
                 </h2>
                 <p className="text-lg text-zinc-400 leading-relaxed text-balance">
                   Unable to defeat him democratically or paralyze him administratively, the ruling establishment shifted the battle to the courts. The judiciary, heavily influenced by the executive branch since 2017, was weaponized to execute what voters refused to do. By opening multiple politically charged investigations—culminating in a manufactured conviction over the use of the word "fool"—the government engineered a legal mechanism to ban him from politics and seize the Istanbul municipality without an election.
                 </p>
                 <Link href={`/${lang}/the-case`} className="inline-flex items-center gap-3 text-white border-b border-primary pb-1 mt-6 font-bold uppercase tracking-widest text-xs hover:text-primary transition-colors">
                   Read The Case Dossier <MoveRight className="w-4 h-4 ml-2" />
                 </Link>
               </div>

               <div>
                 <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">06 / Global Relevance</span>
                 <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6 leading-tight">
                   Why He Matters Beyond One Politician
                 </h2>
                 <p className="text-lg text-zinc-400 leading-relaxed text-balance">
                   İmamoğlu's struggle is the vanguard of democratic survival in an era of rising authoritarianism. If the most popular opposition figure in a NATO member state can be erased from the political map by a loyalist judge, the framework for peaceful democratic transition collapses. The defense of İmamoğlu's mandate is not just about the Mayor of Istanbul; it is the definitive stress test for the future of democratic legitimacy in the region.
                 </p>
               </div>
            </div>
         </div>

      </div>
    </div>
  );
}
