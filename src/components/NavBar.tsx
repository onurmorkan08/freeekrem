"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getDictionary, type Locale } from "@/dictionaries";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar({ lang }: { lang: Locale }) {
  const [dict, setDict] = useState<any>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    getDictionary(lang).then(setDict);
    
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lang]);

  if (!dict) return <div className="h-20" />;

  const toggleLang = () => {
    const nextLang = lang === "en" ? "tr" : "en";
    let newPathname = pathname.replace(`/${lang}`, `/${nextLang}`);
    if (newPathname === pathname) {
      newPathname = `/${nextLang}${pathname}`;
    }
    router.push(newPathname);
  };

  const navLinks = [
    { href: `/${lang}`, label: dict.navigation.home },
    { href: `/${lang}/who-is-ekrem`, label: dict.navigation.whoIsEkrem },
    { href: `/${lang}/timeline`, label: dict.navigation.timeline },
    { href: `/${lang}/the-case`, label: dict.navigation.theCase },
    { href: `/${lang}/latest-case-updates`, label: dict.navigation.latestUpdates },
    { href: `/${lang}/chp-actions`, label: dict.navigation.chpActions },
    { href: `/${lang}/contact`, label: dict.navigation.contact },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-black border-white/10 py-4"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <Link href={`/${lang}`} className="font-serif text-xl sm:text-2xl font-black tracking-tighter uppercase text-white flex items-center gap-3">
          <div className="w-3 h-3 bg-primary mix-blend-screen"></div>
          Free Ekrem İmamoğlu
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-6">
          <nav className="flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[0.65rem] font-bold uppercase tracking-[0.1em] transition-colors relative group whitespace-nowrap",
                  pathname === link.href ? "text-primary" : "text-zinc-400 hover:text-white"
                )}
              >
                {link.label}
                {pathname === link.href && (
                   <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-primary"></span>
                )}
              </Link>
            ))}
          </nav>

          <div className="w-px h-6 bg-white/10 mx-2" />
          
          <button
            onClick={toggleLang}
            className="text-xs font-black uppercase tracking-[0.3em] text-white hover:text-primary transition-colors flex items-center gap-2"
          >
            <span>{lang === "en" ? "TR" : "EN"}</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="xl:hidden text-zinc-300" onClick={() => setIsMobileOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 right-0 h-screen bg-[#08090C] z-50 p-6 flex flex-col"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMobileOpen(false)} className="text-zinc-300">
                <X className="w-8 h-8" />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6 mt-12 mb-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-2xl font-serif text-zinc-300 hover:text-white transition-colors uppercase tracking-widest"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <button
              onClick={() => {
                toggleLang();
                setIsMobileOpen(false);
              }}
              className="mt-8 self-start text-lg font-bold uppercase tracking-wider bg-zinc-900 px-6 py-3 rounded-none text-zinc-300 border border-zinc-800"
            >
              Switch to {lang === "en" ? "Turkish" : "English"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
