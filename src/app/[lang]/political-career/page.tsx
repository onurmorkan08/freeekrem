import PageHeader from "@/components/PageHeader";

export default function PoliticalCareerPage() {
  return (
    <div className="pb-32 bg-[#050608]">
      <PageHeader 
        title="Commanding the Metropolis" 
        subtitle="The steady ascendancy of a democratic reformist, from Beylikdüzü to governing a metropolis representing one-third of Turkey's GDP." 
      />
      
      <div className="container mx-auto px-6 max-w-7xl mt-12">
        
        {/* Full width campaign shot */}
        <div className="relative w-full aspect-[21/9] bg-zinc-900 border-y border-white/10 mb-24 overflow-hidden group">
          <img src="https://images.unsplash.com/photo-1541872703874-fa7252ce7be9?auto=format&fit=crop&w=2000&q=80" className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale contrast-125 mix-blend-luminosity group-hover:scale-105 transition-transform duration-1000" alt="Campaign Shot" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-transparent"></div>
          <div className="absolute bottom-10 left-10 max-w-2xl">
             <div className="w-12 h-1 bg-primary mb-6"></div>
             <h2 className="text-4xl text-white font-serif leading-tight">A Cross-Partisan Mandate</h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center mb-32">
          <div className="prose prose-invert prose-lg prose-p:text-zinc-400 prose-headings:font-serif prose-headings:text-white max-w-none">
            <p className="lead text-2xl text-white font-medium mb-8">
              Beginning his political life at the district level, Ekrem İmamoğlu swiftly demonstrated an aptitude for modern administration that bridged traditional ideological divides.
            </p>
            <p>
              His campaign strategy explicitly avoided the exhausted, ultra-polarized rhetoric that defined national politics. Instead, he pioneered a strategy of &quot;Radical Love,&quot; which focused on repairing civic fabric, massive infrastructure modernization, and aggressive poverty alleviation.
            </p>
            <div className="my-12 p-8 border-l-4 border-primary bg-zinc-900 text-zinc-300 italic">
               &quot;He is not merely a technocrat; he is a politician who understood that competent governance is the most lethal weapon against populist autocracy.&quot;
            </div>
            <p>
              Understanding his career provides crucial context for why his removal from office is viewed by many as an existential threat to democratic competition rather than a routine legal grievance. They are attempting to preemptively ban the most successful electoral opponent the ruling party has faced in twenty years.
            </p>
          </div>

          <div className="space-y-8">
             <div className="aspect-[4/3] w-full border border-zinc-800 bg-black relative p-2 overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1555883000-75bb9dce061b?auto=format&fit=crop&w=800&q=80" className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-lighten opacity-50" alt="Leadership" />
                 <div className="absolute top-4 left-4 border border-primary/40 px-3 py-1 bg-black/80 backdrop-blur-sm text-xs font-mono tracking-widest text-primary uppercase">Figure 1. Leadership</div>
             </div>
             
             <div className="aspect-video w-full border border-zinc-800 bg-black relative p-2 ml-12 overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1460808169956-6c5d15c8c50c?auto=format&fit=crop&w=1200&q=80" className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-lighten opacity-40" alt="The Constituency" />
                 <div className="absolute top-4 left-4 border border-zinc-600 px-3 py-1 bg-black/80 backdrop-blur-sm text-xs font-mono tracking-widest text-zinc-400 uppercase">Figure 2. The Constituency</div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
