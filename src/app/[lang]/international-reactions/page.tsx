import PageHeader from "@/components/PageHeader";

export default function InternationalReactionsPage() {
  const reactions = [
    {
      institution: "European Union",
      role: "Official Statement",
      quote: "The sentence is disproportionate and confirms the systemic lack of independence of the Turkish judiciary and the undue political pressure on judges.",
      bg: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
    },
    {
      institution: "United States State Department",
      role: "Diplomatic Briefing",
      quote: "We are deeply troubled and disappointed by the Turkish court's decision to sentence Istanbul Mayor Ekrem Imamoglu. This unjust sentence is inconsistent with respect for human rights.",
      bg: "https://images.unsplash.com/photo-1541872703874-fa7252ce7be9?auto=format&fit=crop&q=80"
    },
    {
      institution: "Human Rights Watch",
      role: "Global NGO",
      quote: "The conviction of Istanbul Mayor Ekrem İmamoğlu is an unjustified, politically calculated assault on the right to political opposition.",
      bg: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="pb-32 bg-[#050608]">
      <PageHeader 
        title="Global Outcry" 
        subtitle="The international community universally recognizes this verdict as a political execution rather than a judicial necessity." 
      />
      
      <div className="container mx-auto px-6 max-w-7xl mt-16">
        <div className="grid lg:grid-cols-2 gap-8">
           
           {/* Intro Card */}
           <div className="p-12 border border-zinc-800 bg-zinc-950 flex shadow-2xl items-center relative overflow-hidden h-[400px]">
             <div className="text-[12rem] absolute -right-10 -bottom-20 font-serif text-white/5 pointer-events-none">"</div>
             <p className="text-2xl text-zinc-300 font-serif leading-relaxed text-balance relative z-10">
               Diplomatic language is historically cautious. The response to Ekrem İmamoğlu's conviction, however, was uniform and immediate. Across the Atlantic and throughout Europe, the verdict was aggressively denounced.
             </p>
           </div>

           {/* Reaction Grid */}
           {reactions.map((reaction, i) => (
             <div key={i} className="relative aspect-video lg:aspect-auto lg:h-[400px] border border-white/10 overflow-hidden group">
                <div 
                  className="absolute inset-0 bg-cover bg-center grayscale opacity-20 mix-blend-luminosity contrast-[1.5] group-hover:scale-105 transition-transform duration-1000"
                  style={{ backgroundImage: `url('${reaction.bg}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/80 to-transparent"></div>
                
                <div className="absolute inset-0 p-10 flex flex-col justify-end z-10">
                   <div className="flex items-center gap-4 border-b border-zinc-800 pb-4 mb-6">
                      <div className={`w-2 h-2 ${i === 1 ? 'bg-primary' : 'bg-white'}`}></div>
                      <h3 className="text-sm font-bold tracking-widest uppercase text-white">{reaction.institution}</h3>
                      <span className="text-xs text-zinc-600 block ml-auto">{reaction.role}</span>
                   </div>
                   <p className="text-xl lg:text-2xl font-serif text-white leading-relaxed italic text-balance shadow-black text-shadow-sm">
                     &quot;{reaction.quote}&quot;
                   </p>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
