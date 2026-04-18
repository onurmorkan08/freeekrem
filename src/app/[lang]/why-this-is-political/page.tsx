import PageHeader from "@/components/PageHeader";

export default function WhyThisIsPoliticalPage() {
  return (
    <div className="pb-32 bg-[#050608]">
      <PageHeader 
        title="The Anatomy of a Coup" 
        subtitle="This is not a courtroom drama. This is the preemptive elimination of democratic competition." 
      />
      
      <div className="container mx-auto px-6 max-w-7xl mt-12">
        
        {/* Massive Censorship Graphic Hero */}
        <div className="relative w-full aspect-video bg-zinc-950 mb-24 overflow-hidden flex items-center justify-center border border-white/5">
           <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1600&q=80" className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 contrast-150 mix-blend-overlay" alt="Censorship graphic" />
           <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80"></div>
           
           {/* Censorship Bars */}
           <div className="relative z-10 w-full max-w-4xl space-y-6">
              <div className="w-[80%] h-16 md:h-24 bg-primary mix-blend-exclusion hover:w-0 transition-all duration-[2000ms] cursor-crosshair"></div>
              <div className="w-[100%] h-16 md:h-24 bg-black border-2 border-primary/20"></div>
              <div className="w-[60%] h-16 md:h-24 bg-primary mix-blend-exclusion hover:w-0 transition-all duration-[2000ms] cursor-crosshair"></div>
           </div>
           
           <div className="absolute bottom-6 left-6 text-xs font-mono text-zinc-500 uppercase tracking-widest">
             Interaction: Hover to unmask
           </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 prose prose-invert prose-lg prose-p:text-zinc-400 prose-headings:font-serif prose-headings:text-white max-w-none">
            <h2 className="text-4xl text-white font-serif mb-8 border-l-4 border-primary pl-6">Eroding the Framework</h2>
            <p>
              The conviction of Ekrem İmamoğlu does not exist in a vacuum. It represents the apex of a decade-long systematic dismantling of institutional checks and balances in Turkey. When the electoral machinery failed to suppress the opposition in the 2019 municipal elections, the strategy shifted from the ballot box to the bench.
            </p>
            <p>
              Using the judiciary to eliminate viable political challengers is a hallmark of democratic backsliding. The highly subjective interpretation of penal code laws concerning "insulting public officials" acts as a legal smokescreen for overt political censorship.
            </p>
          </div>
          
          <div className="lg:col-span-4 space-y-8">
             <div className="p-8 bg-zinc-900 border border-zinc-800 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] group-hover:bg-primary/20 transition-colors"></div>
               <h3 className="text-xl font-serif text-white mb-4">The Precedent</h3>
               <p className="text-sm text-zinc-500 leading-relaxed mb-6">If the courts successfully uphold the ban against the mayor of Europe's largest city, it establishes a catastrophic precedent. No opposition figure will be safe from arbitrary removal based on speech.</p>
               <div className="w-full h-px bg-zinc-800"></div>
             </div>
             
             <div className="p-8 bg-[#0a0000] border border-primary/20 relative">
               <div className="w-2 h-2 bg-primary animate-ping absolute top-4 left-4"></div>
               <h3 className="text-xl font-serif text-primary mb-4 ml-6">Global Implications</h3>
               <p className="text-sm text-primary/70 leading-relaxed">The international community views this specific case as the definitive indicator of whether Turkey will retain any semblance of functional democracy heading into future elections.</p>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
