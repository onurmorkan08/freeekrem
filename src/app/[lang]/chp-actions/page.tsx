"use client";

import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";

export default function CHPActionsPage() {
  const actions = [
    {
      id: "act-1",
      date: "Day 0",
      city: "Istanbul, Saraçhane",
      title: "The Initial Defiance",
      source: "Anka Haber",
      url: "https://ankahaber.net/",
      description: "Minutes after the detention order was executed following the diploma annulment, tens of thousands converged on the municipality headquarters. A clear civic message was sent: The electorate will not surrender their victory to a compromised administrative state.",
      participantCount: "~ 150,000",
      images: ["/images/11.png"]
    },
    {
      id: "act-2",
      date: "Day 1",
      city: "Ankara & Izmir",
      title: "The Spark Spreads",
      source: "Anka Haber",
      url: "https://ankahaber.net/",
      description: "Simultaneous massive demonstrations erupted in the capital, Ankara, and the Aegean stronghold of Izmir. Civic platforms, labor unions, and all major opposition parties threw their weight behind the protests.",
      participantCount: null,
      images: ["/images/12.jpg"]
    },
    {
      id: "act-3",
      date: "Day 3",
      city: "Nationwide (60+ Cities)",
      title: "The Republic Mobilizes",
      source: "Anka Haber",
      url: "https://ankahaber.net/",
      description: "Nightly 'cacerolazo' style protests (pots and pans) begin at 9:00 PM across the country. Neighborhood assemblies take over local squares. The resistance is no longer localized to Istanbul; it is a national referendum on democracy.",
      participantCount: "Millions across cities",
      images: ["/images/4.png"]
    },
    {
      id: "act-4",
      date: "Day 7",
      city: "Istanbul, Çağlayan",
      title: "The Legal Siege",
      source: "Anka Haber",
      url: "https://ankahaber.net/",
      description: "Over 5,000 lawyers assemble in front of the primary courthouse in their official robes to protest the illegal detention of a sitting mayor.",
      participantCount: "5,000+ Lawyers",
      images: ["/images/5.png"]
    },
    {
      id: "act-5",
      date: "Ongoing",
      city: "National Coordination",
      title: "Permanent Resistance",
      source: "Anka Haber",
      url: "https://ankahaber.net/",
      description: "Opposition leadership declares establishing a 'Democratic Blockade.' Boycotts of state-aligned media and rotating democratic vigils outside detention centers continue.",
      participantCount: null,
      images: ["/images/10.jpg"]
    }
  ];

  return (
    <div className="pb-32 bg-[#050608] min-h-screen">
      <PageHeader 
        title="Civic Resistance" 
        subtitle="The detention of Ekrem İmamoğlu acted as the final trigger point. What began as a legal defense has transformed into a nationwide mobilization to reclaim the republic." 
      />
      
      <div className="container mx-auto px-6 max-w-6xl mt-20">
        
        {/* FRAMING: The Trigger Point */}
        <section className="mb-32 relative overflow-hidden bg-primary/5 border border-primary/20 p-8 lg:p-16 text-center lg:text-left">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] pointer-events-none"></div>
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-6">The Post-Detention Wave</h2>
          <p className="text-2xl font-serif text-white leading-relaxed text-balance mb-6 max-w-4xl border-l border-primary/50 pl-6 mx-auto lg:mx-0">
            When bureaucratic maneuvers and manufactured court cases failed to extinguish public support, the state crossed its final red line by detaining Turkey's most popular elected official. 
          </p>
          <p className="text-xl text-zinc-400 leading-relaxed text-balance max-w-4xl border-l border-transparent pl-6 mx-auto lg:mx-0">
            This triggered an immediate, unprecedented wave of civic resistance across the nation. The archive below documents the live, ongoing pushback against the collapse of democratic institutions.
          </p>
        </section>

        {/* CITY BY CITY CHRONICLE */}
        <section>
          <div className="flex items-center gap-4 mb-20 border-b border-white/5 pb-6">
             <div className="w-12 h-px bg-primary"></div>
             <h2 className="text-2xl font-serif font-bold tracking-tight text-white uppercase">The National Mobilization</h2>
          </div>

          <div className="space-y-32">
            {actions.map((protest, index) => (
              <div key={protest.id} className="relative group">
                {/* Timeline Connector Line */}
                {index !== actions.length - 1 && (
                  <div className="absolute top-24 left-[15px] md:left-[27px] w-[2px] h-[calc(100%+3rem)] bg-gradient-to-b from-primary/30 via-white/5 to-transparent hidden md:block"></div>
                )}
                
                <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                  
                  {/* Meta Information */}
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/3 shrink-0 relative"
                  >
                     <div className="hidden md:block absolute -right-8 top-2 w-4 h-4 rounded-full bg-primary ring-4 ring-[#050608] z-10 shadow-[0_0_15px_rgba(227,10,23,0.5)]"></div>
                     
                     <div className="sticky top-32">
                       <div className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-4 flex items-center gap-4">
                          <span className="w-8 h-px bg-primary md:hidden"></span>
                          {protest.city}
                       </div>
                       <h2 className="text-4xl font-serif text-white font-bold leading-tight mb-2 tracking-tight">{protest.date}</h2>
                       <h3 className="text-xl text-zinc-300 font-medium mb-6">{protest.title}</h3>
                       
                       {protest.participantCount && (
                         <div className="mb-6 inline-flex items-center gap-2 border border-primary/20 bg-primary/5 px-3 py-1">
                           <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                           <span className="text-[0.65rem] font-bold tracking-widest uppercase text-white">Turnout: {protest.participantCount}</span>
                         </div>
                       )}

                       <p className="text-zinc-400 leading-relaxed mb-6">
                         {protest.description}
                       </p>
                       
                       <a href={protest.url} target="_blank" rel="noopener noreferrer" className="inline-block text-[0.6rem] font-mono tracking-[0.1em] uppercase px-3 py-1 border border-zinc-800 text-zinc-500 hover:text-white transition-colors">
                         Verified Source: {protest.source}
                       </a>
                     </div>
                  </motion.div>

                  {/* Imagery Grid */}
                  <div className="md:w-2/3">
                    <div className={`grid gap-4 ${protest.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                       {protest.images.map((img: string, imgIndex: number) => (
                        <motion.div 
                          key={imgIndex} 
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 1, delay: imgIndex * 0.2 }}
                          className="relative aspect-[4/3] group-hover:border-primary/50 transition-colors border-2 border-white/5 bg-zinc-950 overflow-hidden shadow-2xl flex items-center justify-center"
                        >
                          <img 
                            src={img}
                            alt="Protest Action"
                            className="w-full h-full object-contain object-center grayscale opacity-70 hover:grayscale-[20%] mix-blend-luminosity transition-all duration-700 hover:scale-105"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
