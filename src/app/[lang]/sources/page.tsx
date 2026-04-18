import PageHeader from "@/components/PageHeader";

export default function SourcesPage() {
  const documents = [
    { id: "SYS-01", title: "Full Indictment Transcript", cat: "Legal", status: "Verified" },
    { id: "SYS-02", title: "YSK Nullification Order", cat: "Electoral", status: "Archived" },
    { id: "INT-01", title: "European Court of Human Rights Precedents", cat: "International", status: "Pending" },
    { id: "NGO-01", title: "Human Rights Watch Press Release", cat: "NGO", status: "Verified" },
    { id: "SYS-03", title: "Article 53 Penal Code Analysis", cat: "Legal", status: "Verified" },
    { id: "INT-02", title: "State Department Briefing Notes", cat: "Diplomatic", status: "Archived" },
  ];

  return (
    <div className="pb-32 bg-[#050608]">
      <PageHeader 
        title="The Evidence Archive" 
        subtitle="Raw documents, legal transcripts, and international briefings." 
      />
      
      <div className="container mx-auto px-6 max-w-7xl mt-12">
         {/* Controls Bar */}
         <div className="flex border-y border-zinc-800 py-4 mb-12 justify-between items-center text-xs font-mono uppercase tracking-widest text-zinc-500">
            <div className="flex gap-6">
               <span className="text-white">All Documents ({documents.length})</span>
               <span className="hover:text-white cursor-pointer transition-colors">Filter: Legal</span>
               <span className="hover:text-white cursor-pointer transition-colors">Filter: Intl</span>
            </div>
            <div>Database Access Level: Public</div>
         </div>

         {/* Dossier Matrix */}
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800">
            {documents.map((doc, i) => (
              <div key={i} className="bg-[#08090C] hover:bg-[#0a0b0e] p-8 relative group transition-colors min-h-[300px] flex flex-col justify-between cursor-pointer overflow-hidden">
                 {/* Decorative scanned aesthetics */}
                 <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80" className="absolute top-0 right-0 w-64 h-64 object-cover opacity-10 group-hover:opacity-20 transition-opacity mix-blend-overlay" alt="Scanned document" />
                 
                 <div className="relative z-10">
                   <div className="flex justify-between items-start mb-6">
                      <span className="text-xs font-mono tracking-widest text-primary font-bold">{doc.id}</span>
                      <span className="text-[0.6rem] uppercase tracking-widest px-2 py-1 border border-zinc-800 text-zinc-400">{doc.cat}</span>
                   </div>
                   <h3 className="text-2xl font-serif text-white mb-4 line-clamp-3">{doc.title}</h3>
                 </div>

                 <div className="flex justify-between items-center border-t border-zinc-800 pt-4">
                    <span className="text-xs uppercase tracking-widest text-zinc-600 flex items-center gap-2">
                       <div className={`w-1.5 h-1.5 rounded-full ${doc.status === 'Verified' ? 'bg-zinc-400' : 'bg-primary'}`}></div>
                       {doc.status}
                    </span>
                    <span className="text-xs font-mono tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity">Access &rarr;</span>
                 </div>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}
