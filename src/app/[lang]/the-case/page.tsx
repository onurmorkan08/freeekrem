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
        <img src="/images/898486cb-d4b0-4db5-9ae1-1ebefdea6380.jpg" className="w-full h-full object-cover object-center grayscale mix-blend-screen contrast-125 mask-image-bottom-fade" alt="Institutional Power" />
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
                The series of cases against him are not standard legal procedures; they are internationally recognized as weaponized political processes designed to neutralize the government's strongest democratic rival.
              </p>
            </motion.div>

            <div className="w-full h-px bg-zinc-900 my-16"></div>

            {/* 2. FROM BALLOT BOX TO BENCH */}
            <section>
              <span className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-zinc-600 mb-4 block hover:text-primary transition-colors">Phase 01</span>
              <h2 className="text-4xl font-serif text-white mb-8">From Ballot Box to Bench</h2>
              <div className="space-y-6 text-xl text-zinc-400 leading-relaxed">
                <p>When the ruling party lost control of Istanbul in March 2019, they pressured the Supreme Election Council to annul the results. Their logic was that the population made a mistake. When the population corrected that "mistake" by re-electing İmamoğlu with an historic 800,000-vote landslide, the tactical reality shifted.</p>
                <p>The state recognized that beating İmamoğlu in a fair election was increasingly unlikely. The administrative siege over municipal operations began immediately, but it was not enough to drain his popularity. Consequently, the battleground was moved to the only sector the executive branch directly controlled: the courtrooms.</p>
              </div>
            </section>

            {/* 3. THE "FOOL" REMARK */}
            <section className="p-10 border border-white/5 bg-zinc-950/50 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary ease-in-out"></div>
              <span className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-primary mb-4 block">The First Manufacture</span>
              <h2 className="text-4xl font-serif text-white mb-8">The "Fool" Remark</h2>
              <div className="space-y-6 text-xl text-zinc-300 leading-relaxed">
                <p>In November 2019, responding to Interior Minister Süleyman Soylu who called him a "fool" <i>(ahmak)</i> for criticizing the cancellation of the election in Europe, İmamoğlu retorted: "Those who canceled the election on March 31 are the real fools."</p>
                <p>Over a year later, prosecutors violently stretched this widely publicized political clapback, claiming it was a direct criminal insult aimed not at the Minister, but at the independent judges of the Supreme Election Council. This manufactured interpretation laid the groundwork for an unprecedented political ban.</p>
              </div>
            </section>

            {/* 4. THE DIPLOMA ESCALATION */}
            <section>
              <span className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-zinc-600 mb-4 block hover:text-primary transition-colors">Phase 02</span>
              <h2 className="text-4xl font-serif text-white mb-8">The Diploma Annulment Escalation</h2>
              <div className="space-y-6 text-xl text-zinc-400 leading-relaxed">
                <p>While the "fool verdict" was held pending appeal—acting as a permanent sword of Damocles over his political future—the administrative state opened a new front. More than 30 years after his graduation, political bodies suddenly moved to annul his university diploma.</p>
                <p>This was not an academic dispute. Under the Turkish Constitution, a university degree is a strict prerequisite for running for President of the Republic. By attacking his diploma, the establishment sought to engineer a technical disqualification without relying entirely on the slow, heavily scrutinized criminal appeals process. Hours after this maneuver escalated, sudden detention followed.</p>
              </div>
            </section>

            {/* 5. MULTIPLICATION OF FILES */}
            <section>
              <span className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-zinc-600 mb-4 block hover:text-primary transition-colors">The Strategy</span>
              <h2 className="text-4xl font-serif text-white mb-8">The Multiplication of Files</h2>
              <div className="space-y-6 text-xl text-zinc-400 leading-relaxed">
                <p>The state has adopted a "buckshot" legal strategy. Recognizing that one case might attract too much international condemnation or fall apart under public scrutiny, the Interior Ministry and state prosecutors opened more than a dozen major investigation files.</p>
                <p>From baseless allegations of "terror-linked" municipal hiring practices to manufacturing public bid-rigging charges stemming from his time as a district mayor years prior, the sheer volume of cases is designed to project an illusion of criminality and ensure that at least one political ban sticks.</p>
              </div>
            </section>

            {/* 6. POLITICAL PROCESS & BEYOND TURKEY */}
            <section className="border-t border-b border-zinc-900 py-16">
              <h2 className="text-4xl font-serif text-white mb-8">A Judgment With Global Consequences</h2>
              <div className="space-y-6 text-xl text-zinc-400 leading-relaxed">
                <p>Independent legal analysts point to grave irregularities: the sudden replacement of the initial trial judge—allegedly because he intended to acquit the mayor—and the reliance on severely fragmented legal interpretations.</p>
                <p>This case extends far beyond one politician or one country. If the electoral will of 16 million citizens in Europe's largest city can be erased by a loyalist judge, the framework for peaceful democratic transition collapses. The defense of İmamoğlu's mandate is the definitive stress test for the future of democratic legitimacy in NATO's eastern flank.</p>
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
