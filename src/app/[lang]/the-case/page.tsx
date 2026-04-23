"use client";

import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { useParams } from "next/navigation";

export default function TheCasePage() {
  const params = useParams();
  const lang = (params?.lang as string) || "en";

  return (
    <div className="pb-32 bg-[#050608] min-h-screen relative">
      
      {/* Background Hero Texture - Courthouse / Institutional Corridors */}
      <div className="absolute top-0 left-0 w-full h-[70vh] overflow-hidden pointer-events-none opacity-30 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-[#050608] z-10"></div>
        <img src="/images/3).png" className="w-full h-full object-cover object-top grayscale mix-blend-screen contrast-125 mask-image-bottom-fade" alt="Legal Pressure Context" />
      </div>

      <div className="relative z-10">
        <PageHeader 
          title="A Trial By Design" 
          subtitle="A forensic breakdown of the legal proceedings. Discover how the ruling establishment weaponizes the judiciary to execute a political coup." 
        />
        
        <div className="container mx-auto px-6 max-w-7xl mt-12 grid lg:grid-cols-12 gap-16">
          
          {/* LEFT SIDE - MAIN NARRATIVE */}
          <div className="lg:col-span-8 space-y-24">
            
            {/* 1. EXECUTIVE SUMMARY */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative relative"
            >
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-px bg-primary"></div>
                 <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Executive Summary</span>
              </div>
              <p className="text-2xl lg:text-3xl font-serif text-white leading-relaxed text-balance border-l border-white/10 pl-6 mb-8">
                Unable to defeat Ekrem İmamoğlu at the ballot box, the ruling establishment shifted its strategy from electoral politics to judicial manipulation. 
              </p>
              <p className="text-xl lg:text-2xl font-serif text-zinc-400 leading-relaxed text-balance border-l border-transparent pl-6">
                The series of cases against him are not standard legal procedures; they follow a clear trajectory of escalation designed to neutralize the government's strongest democratic rival before the next presidential cycle.
              </p>
            </motion.div>

            <div className="w-full h-px bg-zinc-900 my-16"></div>

            {/* 2. PRESENT STAKES: DETENTION & DIPLOMA */}
            <section className="p-10 border border-white/5 bg-zinc-950/50 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary ease-in-out"></div>
              <span className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-primary mb-4 block">Current Status</span>
              <h2 className="text-4xl font-serif text-white mb-8">The Detention and Diploma Annulment</h2>
              <div className="space-y-6 text-xl text-zinc-300 leading-relaxed">
                <p>Recognizing that typical criminal appeals processes were moving too slowly, the administrative state opened a new, sudden front. Over 30 years after his graduation, political bodies moved to annul İmamoğlu's university diploma.</p>
                <p>Under the Turkish Constitution, a university degree is a strict prerequisite for running for President of the Republic. By abruptly destroying his academic credentials, the establishment engineered a technical disqualification. Hours after this maneuver escalated, the state moved to detain him, igniting immediate nationwide protests.</p>
              </div>
            </section>

            <div className="my-16 relative aspect-[16/9] w-full border border-zinc-900 group shadow-2xl p-2 bg-black">
               <img src="/images/7.jpg" className="w-full h-full object-cover object-[center_20%] grayscale-[40%] contrast-125 opacity-90 transition-all duration-1000 group-hover:scale-105" alt="Judicial Pressure" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 pointer-events-none z-10"></div>
               <div className="absolute bottom-6 left-6 z-20">
                 <span className="text-[0.6rem] font-bold tracking-widest uppercase text-white bg-red-950/80 px-3 py-1">Legal Dossier</span>
               </div>
            </div>

            {/* 3. MULTIPLICATION OF FILES */}
            <section>
              <span className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-zinc-600 mb-4 block hover:text-primary transition-colors">Strategic Escalation</span>
              <h2 className="text-4xl font-serif text-white mb-8">The Multiplication of Files</h2>
              <div className="space-y-6 text-xl text-zinc-400 leading-relaxed">
                <p>To reach this breaking point, the state adopted a "buckshot" legal strategy over several years. Recognizing that one case might attract too much international condemnation or fall apart under public scrutiny, prosecutors systematically opened more than a dozen major investigation files.</p>
                <p>From baseless allegations of "terror-linked" municipal hiring practices to manufacturing public bid-rigging charges stemming from his time as a district mayor, the sheer volume of cases was designed to project an illusion of criminality and ensure maximum cumulative prison exposure.</p>
              </div>
            </section>

            {/* 4. THE "FOOL" REMARK */}
            <section>
              <span className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-zinc-600 mb-4 block hover:text-primary transition-colors">The Catalyst</span>
              <h2 className="text-4xl font-serif text-white mb-8">The "Fool" Remark</h2>
              <div className="space-y-6 text-xl text-zinc-400 leading-relaxed">
                <p>The foundation of this prolonged legal assault was laid in November 2019. Responding to the Interior Minister who called him a "fool" <i>(ahmak)</i>, İmamoğlu retorted: "Those who canceled the election on March 31 are the real fools."</p>
                <p>Over a year later, prosecutors violently stretched this political clapback, claiming it was a direct criminal insult aimed at the independent judges of the Supreme Election Council. This isolated, manufactured interpretation resulted in a conviction carrying a political ban, acting as a sword of Damocles over his entire tenure.</p>
              </div>
            </section>

            {/* 5. FROM BALLOT BOX TO BENCH */}
            <section>
              <span className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-zinc-600 mb-4 block hover:text-primary transition-colors">The Origin</span>
              <h2 className="text-4xl font-serif text-white mb-8">From Ballot Box to Bench</h2>
              <div className="space-y-6 text-xl text-zinc-400 leading-relaxed">
                <p>The entire judicial apparatus was activated because of one original failure: the inability to defeat İmamoğlu politically. When the ruling party lost control of Istanbul in March 2019, they pressured the Supreme Election Council to annul the results. The population corrected that by re-electing him with an historic 800,000-vote landslide.</p>
                <p>That second victory fundamentally proved he could not be removed democratically. Consequently, over the next four years, the battleground was permanently moved to the only sector the executive branch directly controlled: the courtrooms.</p>
              </div>
            </section>

            {/* 6. POLITICAL PROCESS & BEYOND TURKEY */}
            <section className="border-t border-b border-zinc-900 py-16">
              <h2 className="text-4xl font-serif text-white mb-8">A Judgment With Global Consequences</h2>
              <div className="space-y-6 text-xl text-zinc-400 leading-relaxed">
                <p>This escalating case load extends far beyond one politician or one country. Independent legal analysts point to grave irregularities: the sudden replacement of trial judges intended to acquit him, and the reliance on severely fragmented legal interpretations.</p>
                <p>If the electoral will of 16 million citizens in Europe's largest city can be arbitrarily erased by a loyalist bench, the framework for peaceful democratic transition collapses. The defense of İmamoğlu's mandate is the definitive stress test for the future of democratic legitimacy in NATO's eastern flank.</p>
              </div>
            </section>

            {/* 7. CORE DEMOCRATIC QUESTION & CTA */}
            <section className="text-center pt-8">
              <h2 className="text-5xl font-serif text-white mb-8 font-black tracking-tight">The Democratic Question</h2>
              <p className="text-2xl font-serif text-zinc-400 leading-relaxed max-w-3xl mx-auto mb-16 text-balance">
                Will the international community and the Turkish public allow the bench to steal what the ballot box secured?
              </p>
              <Link href={`/${lang}/chp-actions`} className="inline-flex items-center gap-4 bg-white text-black px-10 py-6 font-bold uppercase tracking-widest text-sm transition-all hover:bg-zinc-200 shadow-2xl">
                View The Public Resistance <MoveRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </Link>
            </section>

          </div>

          {/* RIGHT SIDE - FLOATING DATA BLOCKS */}
          <div className="lg:col-span-4 space-y-8 relative">
            
            {/* Box 1: Scale of punishment */}
            <div className="sticky top-24">
               <div className="border border-[#750000] bg-[#120000] p-8 mb-8 shadow-2xl">
                 <h3 className="text-sm font-mono uppercase tracking-[0.3em] text-primary mb-6">Maximum Exposure</h3>
                 <div className="space-y-4">
                   <div>
                     <span className="block text-4xl font-serif text-white font-bold mb-1">2,489</span>
                     <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#a83232]">Years Attempted</span>
                   </div>
                   <p className="text-sm text-[#a83232]/80 leading-relaxed pt-4 border-t border-[#750000]/50">
                     The cumulative total of prison sentences requested across the 12 active politically motivated investigation files.
                   </p>
                 </div>
               </div>

               {/* Box 2: Key Mechanics */}
               <div className="border border-white/5 bg-zinc-950 p-8 mb-8 shadow-2xl">
                 <h3 className="text-sm font-mono uppercase tracking-[0.3em] text-zinc-500 mb-6">Article 53</h3>
                 <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                   The cornerstone of the state's legal strategy. Under the Turkish Penal Code, a conviction bearing a sentence over a specific threshold triggers an automatic political ban, stripping the individual of their right to hold or run for public office.
                 </p>
               </div>

               {/* Box 3: Diploma Danger */}
               <div className="border border-white/5 bg-black p-8 shadow-2xl">
                 <h3 className="text-sm font-mono uppercase tracking-[0.3em] text-zinc-500 mb-6">The Diploma Mechanism</h3>
                 <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                   Without a recognized university diploma, an individual is constitutionally barred from running for the Presidency in Turkey, creating a sudden fatal roadblock ahead of the 2028 elections.
                 </p>
               </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
