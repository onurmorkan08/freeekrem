"use client";

import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";

export default function TimelinePage() {
  const events = [
    // PHASE 1: 2019
    {
      phase: "Phase 1: Electoral Breakthrough",
      date: "March 31, 2019",
      subtitle: "The Initial Victory",
      text: "Ekrem İmamoğlu narrowly wins the Istanbul mayoral election, ending 25 years of conservative rule. The loss of Turkey's economic powerhouse triggers immediate panic and legally dubious demands for recounts from the ruling party.",
      img: "/images/898486cb-d4b0-4db5-9ae1-1ebefdea6380.jpg",
    },
    {
      date: "May 6, 2019",
      subtitle: "The Annulment",
      text: "Under immense political pressure, the Supreme Election Council (YSK) controversially annuls the mayoral election results, claiming irregularities. The mandate of 16 million citizens is temporarily erased. A rerun is scheduled.",
      img: "/images/b193ed98-4d1c-4919-9dc5-20aa3d56bedd.jpg",
    },
    {
      date: "June 23, 2019",
      subtitle: "The Decisive Blow",
      text: "In the re-run election, İmamoğlu crushes the ruling party candidate with an overwhelming 806,415 vote majority. He emerges significantly stronger than before, proving that the public mandate cannot be dictated.",
      img: "/images/898486cb-d4b0-4db5-9ae1-1ebefdea6380 (1).jpg",
    },
    
    // PHASE 2: 2020-2022
    {
      phase: "Phase 2: Escalation and Signaling",
      date: "November 4, 2019",
      subtitle: "The Pretext",
      text: "In response to an insult from the Interior Minister, İmamoğlu calls the officials who canceled the first election 'fools'. Over a year later, this single remark is weaponized as the foundation for criminal prosecution.",
      img: "/images/898486cb-d4b0-4db5-9ae1-1ebefdea6380.jpg",
    },
    {
      date: "December 14, 2022",
      subtitle: "The Weaponized Verdict",
      text: "A Turkish court sentences him to 2 years and 7 months in prison and imposes a political ban under Article 53. Rather than weakening him, the conviction ignites massive regional protests and global condemnation, cementing his democratic leadership.",
      img: "/images/b193ed98-4d1c-4919-9dc5-20aa3d56bedd.jpg",
    },

    // PHASE 3: 2023-2024
    {
      phase: "Phase 3: Widening Relevance",
      date: "May 2023",
      subtitle: "The National Campaign",
      text: "Operating under the shadow of the looming political ban from the 'fool' trial, İmamoğlu campaigns heavily across Anatolia for the opposition alliance in the Presidential elections. Despite the opposition's ultimate loss, his rallies draw massive crowds, demonstrating his unique national reach.",
      img: "https://images.unsplash.com/photo-1554188289-4b2a8eddbcd4?auto=format&fit=crop&q=80",
    },
    {
      date: "March 31, 2024",
      subtitle: "The Re-Election Landslide",
      text: "Navigating immense state hostility, administrative blockades, and legal threats, İmamoğlu runs for a second term as Mayor of Istanbul. He wins a resounding victory with over 1 million votes, proving his support transcends the immediate post-2019 backlash. State panic accelerates.",
      img: "/images/898486cb-d4b0-4db5-9ae1-1ebefdea6380 (1).jpg",
    },

    // PHASE 4: 2025-Present
    {
      phase: "Phase 4: Disqualification & Detention",
      date: "Early 2025",
      subtitle: "The Multi-Front Legal Assault",
      text: "Recognizing his undisputed dominance ahead of the 2028 presidential race, the state opens a barrage of secondary investigations. From alleged 'terror-linked' municipal hiring to historic bid-rigging charges, the goal is to secure at least one conviction to ban him from politics.",
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66cb85?auto=format&fit=crop&q=80",
    },
    {
      date: "March 2025",
      subtitle: "The Diploma Annulment",
      text: "In an unprecedented administrative maneuver, state loyalists engineer the annulment of his university diploma over three decades after graduation. This is designed to technically bar him from presidential eligibility under constitutional requirements.",
      img: "/images/898486cb-d4b0-4db5-9ae1-1ebefdea6380.jpg",
    },
    {
      date: "Current Standing",
      subtitle: "Detention and The Ongoing Struggle",
      text: "Following the diploma annulment, authorities move to detain the mayor, triggering severe international outcry and widespread domestic protest. The legal struggle is no longer just about one political figure; it is the frontline defense of Turkey's democratic future.",
      img: "/images/b193ed98-4d1c-4919-9dc5-20aa3d56bedd.jpg",
    }
  ];

  return (
    <div className="pb-32 bg-[#050608] min-h-screen relative">
      {/* Background Hero Texture */}
      <div className="absolute top-0 left-0 w-full h-[60vh] overflow-hidden pointer-events-none opacity-20 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-[#050608] z-10"></div>
        <img src="/images/898486cb-d4b0-4db5-9ae1-1ebefdea6380.jpg" className="w-full h-full object-cover object-top grayscale mix-blend-screen mask-image-bottom-fade" alt="Historical Timeline" />
      </div>

      <div className="relative z-10">
        <PageHeader 
          title="Chronicle of Resistance" 
          subtitle="He repeatedly defeated the ruling establishment at the ballot box. Emerging stronger after every attack, his political survival forced the regime to weaponize the administrative state and the courts." 
        />
        <div className="container mx-auto px-6 max-w-6xl mt-16">
          
          <div className="relative">
            {/* Premium Timeline Axis */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block z-0"></div>

            <div className="space-y-40 relative z-10">
              {events.map((event, i) => (
                <div key={i} className="relative">
                  
                  {/* Phase Marker */}
                  {event.phase && (
                    <div className="absolute -top-24 left-1/2 -translate-x-1/2 bg-black border border-white/10 px-8 py-3 z-20 text-center shadow-2xl">
                      <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs">{event.phase}</span>
                    </div>
                  )}

                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''} pt-12`}
                  >
                     
                     {/* Text Module */}
                     <div className={`lg:w-1/2 ${i % 2 === 1 ? 'lg:text-right' : 'lg:text-left'} relative`}>
                        <motion.div 
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          className={`absolute top-8 ${i % 2 === 1 ? '-left-[61px]' : '-right-[61px]'} w-4 h-4 bg-primary border-2 border-black rounded-full z-10 hidden lg:block shadow-[0_0_20px_rgba(227,10,23,0.5)]`}
                        />
                        <div className="text-xl font-bold uppercase tracking-widest text-[#cfcfcf] md:text-zinc-500 mb-4 flex items-center md:inline-flex gap-3">
                          {i % 2 === 0 ? <span className="w-8 h-px bg-primary hidden md:block"></span> : null}
                          {event.subtitle}
                          {i % 2 === 1 ? <span className="w-8 h-px bg-primary hidden md:block"></span> : null}
                        </div>
                        <h3 className="text-5xl font-serif text-white mb-6 border-b border-white/10 pb-4 inline-block">{event.date}</h3>
                        <p className="text-lg text-zinc-300 md:text-zinc-400 leading-relaxed text-balance">
                           {event.text}
                        </p>
                     </div>

                     {/* Archival Image Module */}
                     <div className="w-full lg:w-1/2 aspect-video relative border border-white/10 bg-zinc-950 overflow-hidden group p-2">
                        <div 
                          className="absolute inset-0 bg-cover bg-center grayscale opacity-80 mix-blend-luminosity group-hover:scale-105 group-hover:grayscale-[50%] transition-transform duration-[2000ms]"
                          style={{ backgroundImage: `url('${event.img}')` }}
                        />
                        <div className={`absolute bottom-6 px-4 py-2 border text-[0.65rem] font-mono tracking-widest uppercase bg-black/90 backdrop-blur-sm ${i % 2 === 1 ? 'right-6 border-white/20 text-zinc-300' : 'left-6 border-primary/50 text-white'}`}>
                          Record #{i+1}
                        </div>
                     </div>

                  </motion.div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
