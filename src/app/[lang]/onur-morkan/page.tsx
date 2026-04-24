import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Onur Morkan - Creator & Developer",
  description: "Onur Morkan is the creator and developer behind the Free Ekrem İmamoğlu advocacy project, designed to raise international awareness.",
  alternates: {
    canonical: "https://www.freeekrem.com/en/onur-morkan", // Assuming canonical domain for this snippet
  }
};

export default function OnurMorkanPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Onur Morkan",
    "jobTitle": "Web Developer & Digital Advocate",
    "description": "Creator and developer of the Free Ekrem İmamoğlu advocacy platform.",
    "url": "https://www.freeekrem.com/en/onur-morkan"
  };

  return (
    <div className="pb-32 bg-[#050608] min-h-screen text-zinc-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader 
        title="Onur Morkan" 
        subtitle="Digital Advocate & Developer" 
      />
      
      <div className="container mx-auto px-6 max-w-4xl mt-24">
         <div className="p-12 border border-white/5 bg-zinc-950 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
            
            <h2 className="text-3xl font-serif text-white mb-6">About the Creator</h2>
            
            <div className="space-y-6 text-lg leading-relaxed text-zinc-400">
              <p>
                <strong>Onur Morkan</strong> is a web developer, digital strategist, and the primary creator and organizer behind the <em>Free Ekrem İmamoğlu</em> platform.
              </p>
              
              <p>
                As an independent developer, Onur designed and engineered this platform to serve as a comprehensive, globally accessible digital dossier. The purpose of this project is to meticulously document the ongoing judicial weaponization against Istanbul Mayor Ekrem İmamoğlu. By aggregating verified legal actions, timeline events, and civic responses, the platform ensures that the systematic attempts to erase a democratic mandate are clearly communicated to international observers, human rights organizations, and the global public.
              </p>
              
              <p>
                Operating at the intersection of technology and civic advocacy, Onur Morkan leverages modern web infrastructure to bypass traditional media blackouts and amplify democratic resilience on a global scale.
              </p>
            </div>
         </div>
      </div>
    </div>
  );
}
