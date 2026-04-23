import { getDictionary } from "@/dictionaries";
import LiveCounter from "@/components/LiveCounter";
import StatBlock from "@/components/StatBlock";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "en" | "tr" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 
        HERO SECTION
        Premium, Dignified & Activist. 
        Clean portrait as primary left anchor, text on the right.
      */}
      <section className="relative min-h-[95vh] flex items-center bg-black overflow-hidden border-b border-zinc-900">
        
        {/* Background Atmosphere - Restrained dark civic texture */}
        <div className="absolute inset-0 z-0">
          <img 
             src="/images/4.png" 
             className="absolute inset-0 w-full h-full object-cover opacity-[0.15] grayscale mix-blend-luminosity"
             alt="Civic Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050608] via-[#050608]/80 to-[#050608] z-10"></div>
        </div>

        <div className="container mx-auto px-6 relative z-20 h-full py-32 lg:py-0">
          <div className="grid lg:grid-cols-12 gap-12 items-center h-full min-h-[80vh]">
            
            {/* Left: Full Height Portrait Anchor */}
            <div className="lg:col-span-5 xl:col-span-6 relative h-[60vh] lg:h-[85vh] w-full flex items-end justify-center lg:justify-start">
               {/* Subtle backglow */}
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-[80%] h-[60%] bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>
               
               <img 
                 src="/images/8.jpg" 
                 alt="Ekrem İmamoğlu" 
                 className="relative z-10 w-full h-full object-cover object-top drop-shadow-2xl grayscale-[20%] contrast-110"
                 style={{ WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%)' }}
               />
               <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#050608] to-transparent z-20 pointer-events-none"></div>
            </div>

            {/* Right: Text Payload & Counter */}
            <div className="lg:col-span-7 xl:col-span-6 flex flex-col items-start text-left relative z-30 lg:pl-10">
              
              <div className="inline-flex items-center gap-4 px-4 py-2 border border-primary/30 bg-primary/5 backdrop-blur-md mb-8">
                <span className="w-2 h-2 bg-primary animate-pulse" />
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-white">Emergency Dossier</span>
              </div>
              
              <img src="/images/13.png" alt="Ekrem İmamoğlu Signature" className="w-48 opacity-80 mb-6 drop-shadow-lg filter brightness-0 invert" />
              <h1 className="text-6xl md:text-7xl xl:text-8xl font-serif font-black text-white mix-blend-plus-lighter mb-8 leading-[0.9] drop-shadow-2xl tracking-tight">
                {dict.home.headline}
              </h1>
              
              <p className="text-xl md:text-2xl text-zinc-400 max-w-xl leading-relaxed text-balance mb-12 font-medium">
                {dict.home.subheadline}
              </p>

              <div className="w-full">
                <LiveCounter labels={dict.home.detentionCounter} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STAT BLOCK: Main Data Points */}
      <StatBlock stats={dict.home.stats} />

      {/* THE HUMAN SIDE / CHILD PHOTO SECTION */}
      <section className="py-24 bg-[#0a0b0e] relative border-b border-zinc-900 overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
           <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="relative aspect-[4/3] group">
                <div className="absolute inset-0 bg-primary/20 translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
                <img src="/images/1.jpeg" className="w-full h-full object-cover object-center grayscale contrast-125 brightness-90 shadow-2xl" alt="Ekrem İmamoğlu with Child" />
             </div>
             <div className="flex flex-col justify-center">
                <div className="w-12 h-px bg-primary mb-8 mt-2"></div>
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight tracking-tight">
                  Beyond the Political Target
                </h2>
                <p className="text-xl text-zinc-400 leading-relaxed mb-6">
                  Behind the judicial pressure and coordinated political blockade stands a mayor whose primary mandate derived from a direct, unmediated connection with the millions of Istanbul residents.
                </p>
                <p className="text-lg text-zinc-500 leading-relaxed">
                  His unprecedented 2019 dual victories broke a 25-year systemic cycle, making him a central symbol of democratic resilience.
                </p>
             </div>
           </div>
        </div>
      </section>

      {/* DIPLOMA ANNULMENT / DETENTION STRIP */}
      <section className="py-24 bg-primary relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[url('/images/7.jpg')] bg-cover bg-[center_top] opacity-10 mix-blend-multiply grayscale"></div>
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
           <div className="flex flex-col md:flex-row items-center justify-between gap-12">
             <div className="md:w-1/3 flex flex-col items-start border-l-4 border-black pl-6">
                <span className="text-sm font-bold uppercase tracking-widest text-[#050608] mb-2">{dict.home.annulment?.date}</span>
                <h3 className="text-4xl font-serif font-black text-black leading-tight tracking-tight">{dict.home.annulment?.title}</h3>
             </div>
             <div className="md:w-2/3">
                <p className="text-xl md:text-2xl text-[#1a0101] font-medium leading-relaxed">
                  {dict.home.annulment?.text}
                </p>
             </div>
           </div>
        </div>
      </section>

      {/* CINEMATIC QUOTE - Resilient Leadership */}
      <section className="py-32 relative border-b border-zinc-900 bg-[#050608] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          <img src="/images/9.jpg" alt="Leadership" className="absolute inset-0 w-full h-full object-cover opacity-[0.05] grayscale scale-105 mask-image-bottom-fade bg-center" />
        </div>
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <div className="w-16 h-px bg-primary mx-auto mb-12"></div>
          <blockquote className="font-serif text-3xl md:text-5xl text-white leading-tight font-light mb-12 text-balance">
            {dict.home.quote}
          </blockquote>
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Ekrem İmamoğlu</span>
        </div>
      </section>

      {/* ELECTION PROGRESSION: "He Kept Winning" */}
      <section className="py-32 bg-[#050608] border-b border-white/5 relative">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
           <div className="text-center mb-24">
             <h2 className="text-5xl md:text-6xl font-serif text-white mb-6 tracking-tight">{dict.home.elections?.title}</h2>
             <p className="text-xl text-zinc-400 max-w-2xl mx-auto">{dict.home.elections?.subtitle}</p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connecting Line */}
              <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-zinc-800 via-primary/50 to-zinc-800 hidden md:block -z-10 -translate-y-1/2"></div>
              
              {/* Card 1 */}
              <div className="bg-black border border-zinc-800 p-10 text-center flex flex-col justify-center relative overflow-hidden group shadow-2xl">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-zinc-700 transition-colors group-hover:bg-primary"></div>
                 <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">{dict.home.elections?.elec1.date}</span>
                 <span className="font-serif text-5xl text-white mb-4 block">{dict.home.elections?.elec1.margin || "13,729"}</span>
                 <span className="text-sm uppercase tracking-widest text-zinc-400">{dict.home.elections?.elec1.label}</span>
              </div>

              {/* Card 2 */}
              <div className="bg-black border border-zinc-800 p-10 text-center flex flex-col justify-center relative overflow-hidden group shadow-2xl scale-105 z-10">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-primary"></div>
                 <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">{dict.home.elections?.elec2.date}</span>
                 <span className="font-serif text-6xl text-white mb-4 block scale-110">{dict.home.elections?.elec2.margin || "806,415"}</span>
                 <span className="text-sm uppercase tracking-widest text-primary">{dict.home.elections?.elec2.label}</span>
              </div>

              {/* Card 3 */}
              <div className="bg-black border border-zinc-800 p-10 text-center flex flex-col justify-center relative overflow-hidden group shadow-2xl">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-zinc-700 transition-colors group-hover:bg-primary"></div>
                 <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">{dict.home.elections?.elec3.date}</span>
                 <span className="font-serif text-5xl text-white mb-4 block">{dict.home.elections?.elec3.margin || "1,048,185"}</span>
                 <span className="text-sm uppercase tracking-widest text-zinc-400">{dict.home.elections?.elec3.label}</span>
              </div>
           </div>
        </div>
      </section>

      {/* DOSSIER / THE CASE PREVIEW */}
      <section className="py-32 relative border-b border-white/5 bg-[#08090b]">
        <div className="container mx-auto px-6 max-w-7xl">
           <div className="grid lg:grid-cols-12 gap-16 items-center">
             
             {/* Left Text */}
             <div className="lg:col-span-6 relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-px bg-primary"></div>
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">01 / The Case</span>
                </div>
                <h2 className="font-serif text-5xl md:text-7xl text-white mb-8 leading-[0.9] font-black">
                  {dict.home.theCase || dict.theCase.title}
                </h2>
                <p className="text-xl text-zinc-400 leading-relaxed mb-12 text-balance border-l border-white/10 pl-6">
                  {dict.home.theCaseSummary || dict.theCase.summary}
                </p>
                <Link href={`/${lang}/the-case`} className="group inline-flex items-center gap-4 bg-white text-black px-8 py-5 font-bold uppercase tracking-widest text-sm transition-all hover:bg-zinc-200">
                  {dict.home.readDossier || dict.theCase.readDossier} <MoveRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                </Link>
             </div>

             {/* Right Cinematic Image Frame */}
             <div className="lg:col-span-6 relative">
                <div className="relative aspect-[4/5] border-t border-r border-white/10 bg-zinc-950 overflow-hidden group z-10 shadow-2xl">
                  {/* Document texture blending */}
                  <img src="/images/10.jpg" className="absolute inset-0 w-full h-full object-cover object-[center_30%] grayscale mix-blend-overlay opacity-50 z-20 pointer-events-none" alt="Legal Pressure" />
                  
                  <img src="/images/6.jpg" className="absolute inset-0 w-full h-full object-cover object-center grayscale mix-blend-luminosity opacity-80 group-hover:scale-105 transition-transform duration-1000 z-10" alt="The Legal Fight" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090b] via-transparent to-transparent z-30"></div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* LATEST DEVELOPMENTS PREVIEW */}
      <section className="py-24 bg-[#050608] border-b border-white/5 relative">
        <div className="container mx-auto px-6 max-w-6xl">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
             <div>
               <h2 className="text-4xl md:text-5xl font-serif text-white mb-4 tracking-tight">{dict.home.latest?.title}</h2>
               <p className="text-zinc-400">{dict.home.latest?.summary}</p>
             </div>
             <Link href={`/${lang}/latest-case-updates`} className="inline-flex items-center gap-3 text-primary hover:text-white transition-colors font-bold uppercase tracking-widest border-b border-primary pb-1 shrink-0 text-sm">
               {dict.home.latest?.readAll} <MoveRight className="w-4 h-4 ml-1" />
             </Link>
           </div>

           <div className="grid md:grid-cols-2 gap-8">
             {/* Simulated Anka Preview Card 1 */}
             <div className="border border-white/5 bg-zinc-950/50 hover:bg-zinc-900 transition-colors p-8 group">
               <span className="text-[0.65rem] font-bold tracking-widest uppercase text-primary mb-4 block">Anka Haber / Recent</span>
               <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-primary transition-colors">Detention Executed Amidst Protests</h3>
               <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">In a shocking escalation, police forces detained the Istanbul mayor following the controversial annulment of his university diploma. Tens of thousands gather outside courthouses.</p>
             </div>
             {/* Simulated Anka Preview Card 2 */}
             <div className="border border-white/5 bg-zinc-950/50 hover:bg-zinc-900 transition-colors p-8 group">
               <span className="text-[0.65rem] font-bold tracking-widest uppercase text-primary mb-4 block">Anka Haber / Previous</span>
               <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-primary transition-colors">Diploma Officially Annulled</h3>
               <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">In a sudden administrative escalation, the Higher Education Council has successfully pushed through the annulment of Ekrem İmamoğlu's university diploma, severely endangering his constitutional eligibility.</p>
             </div>
           </div>
        </div>
      </section>

      {/* ACTIONS / PROTESTS PREVIEW */}
      <section className="py-24 bg-[#0a0b0e] border-b border-white/5 relative">
        <div className="container mx-auto px-6 max-w-6xl">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
             <div>
               <h2 className="text-4xl md:text-5xl font-serif text-white mb-4 tracking-tight">{dict.home.actions?.title}</h2>
               <p className="text-zinc-400">{dict.home.actions?.summary}</p>
             </div>
             <Link href={`/${lang}/chp-actions`} className="inline-flex items-center gap-3 text-primary hover:text-white transition-colors font-bold uppercase tracking-widest border-b border-primary pb-1 shrink-0 text-sm">
               {dict.home.actions?.readAll} <MoveRight className="w-4 h-4 ml-1" />
             </Link>
           </div>

           <div className="grid md:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900 overflow-hidden">
             {/* Civic Action Render */}
             <div className="aspect-[4/5] relative group bg-black">
                <img src="/images/11.png" className="absolute inset-0 w-full h-full object-cover object-center grayscale opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" alt="Action" />
             </div>
             <div className="aspect-[4/5] relative group bg-black">
                <img src="/images/12.jpg" className="absolute inset-0 w-full h-full object-cover object-top grayscale opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" alt="Protest" />
             </div>
             <div className="aspect-[4/5] relative group bg-black">
                <img src="/images/4.png" className="absolute inset-0 w-full h-full object-cover object-center grayscale opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" alt="Solidarity" />
             </div>
           </div>
        </div>
      </section>

      {/* WHY THE WORLD SHOULD CARE */}
      <section className="py-32 bg-[#050608] relative border-b border-zinc-900">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[150px] pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
           <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-primary mb-8">{dict.home.world?.title}</h2>
           <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-white leading-relaxed text-balance">
             {dict.home.world?.text}
           </p>
        </div>
      </section>

      {/* FINAL CTA / TRANSITION */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('/images/5.png')] bg-cover bg-[center_30%] mix-blend-multiply pointer-events-none grayscale"></div>
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
           <h2 className="text-4xl md:text-6xl font-serif text-[#050608] font-black mb-6">{dict.home.cta?.title}</h2>
           <p className="text-xl text-[#1a0101] font-medium mb-12 max-w-lg mx-auto">{dict.home.cta?.text}</p>
           <Link href={`/${lang}/contact`} className="inline-flex items-center gap-4 bg-[#050608] text-white px-10 py-6 font-bold uppercase tracking-widest text-sm transition-all hover:bg-zinc-800 shadow-2xl">
             Join the Defense <MoveRight className="w-5 h-5" />
           </Link>
        </div>
      </section>
    </div>
  );
}
