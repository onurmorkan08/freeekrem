"use client";

import { getDictionary, type Locale } from "@/dictionaries";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Footer({ lang }: { lang: Locale }) {
  const [dict, setDict] = useState<any>(null);

  useEffect(() => {
    getDictionary(lang).then(setDict);
  }, [lang]);

  if (!dict) return null;

  return (
    <footer className="border-t-4 border-primary bg-black pt-20 pb-12 mt-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] pointer-events-none mix-blend-screen rounded-full"></div>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
        <div className="lg:col-span-2 space-y-6">
           <h3 className="font-serif text-3xl font-black tracking-tighter uppercase text-white flex items-center gap-4">
            <div className="w-4 h-4 bg-primary mix-blend-screen shrink-0"></div>
            Free Ekrem İmamoğlu
          </h3>
          <p className="text-sm text-zinc-500 max-w-sm leading-relaxed">
            {dict.footer.disclaimer}
          </p>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4 tracking-wider uppercase text-xs">{dict.footer.links}</h4>
          <ul className="space-y-3">
            <li><Link href={`/${lang}/who-is-ekrem`} className="text-zinc-400 hover:text-white transition-colors text-sm">{dict.navigation.whoIsEkrem}</Link></li>
            <li><Link href={`/${lang}/political-career`} className="text-zinc-400 hover:text-white transition-colors text-sm">{dict.navigation.politicalCareer}</Link></li>
            <li><Link href={`/${lang}/the-case`} className="text-zinc-400 hover:text-white transition-colors text-sm">{dict.navigation.theCase}</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-white mb-4 tracking-wider uppercase text-xs">Resources</h4>
          <ul className="space-y-3">
            <li><Link href={`/${lang}/sources`} className="text-zinc-400 hover:text-white transition-colors text-sm">{dict.navigation.sources}</Link></li>
            <li><Link href={`/${lang}/contact`} className="text-zinc-400 hover:text-white transition-colors text-sm">{dict.navigation.contact}</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 gap-6">
        <span>© {new Date().getFullYear()} Free Ekrem İmamoğlu Advocacy</span>
        
        <div className="flex flex-col items-end gap-1 opacity-80 hover:opacity-100 transition-opacity pointer-events-auto">
           <img src="/images/ChatGPT Image Apr 23, 2026, 02_26_11 AM.png" className="w-[40px] h-auto object-contain brightness-0 invert" alt="Owner Signature" />
           <span className="text-[10px] font-mono tracking-widest uppercase text-white">Onur Morkan</span>
        </div>

        <div className="flex gap-4">
           <Link href={`/${lang}`} className="hover:text-zinc-400">Privacy Policy</Link>
           <Link href={`/${lang}`} className="hover:text-zinc-400">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
