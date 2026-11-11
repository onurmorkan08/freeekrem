import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Download, BookOpen } from "lucide-react";

const pdfUrl = "/books/my-nation-is-my-witness-en.pdf";

type BookPageProps = {
  params: Promise<{ lang: "en" | "tr" }>;
};

export async function generateMetadata({ params }: BookPageProps): Promise<Metadata> {
  const { lang } = await params;
  const title = lang === "tr" ? "Millet Şahidimdir — İngilizce E-Kitap" : "My Nation Is My Witness — English Edition";
  return {
    title: `${title} | Free Ekrem İmamoğlu`,
    description: "Read or download the English translation of Ekrem İmamoğlu's book, My Nation Is My Witness.",
  };
}

export default async function BookPage({ params }: BookPageProps) {
  const { lang } = await params;
  const tr = lang === "tr";
  return (
    <div className="min-h-screen bg-[#050608] text-white">
      <section className="border-b border-white/10 bg-[#08090b]">
        <div className="container mx-auto max-w-6xl px-6 pt-14 pb-12 md:pt-20 md:pb-16">
          <Link href={`/${lang}`} className="inline-flex items-center gap-2 text-xs tracking-[0.2em] font-bold uppercase text-zinc-400 hover:text-white transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> {tr ? "Ana sayfaya dön" : "Back to homepage"}
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-primary" />
            <span className="text-primary text-xs font-bold tracking-[0.25em] uppercase">{tr ? "İngilizce E-Kitap" : "English Edition"}</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95] mb-6">My Nation Is My Witness</h1>
          <p className="text-lg text-zinc-400 mb-8">Ekrem İmamoğlu · {tr ? "Önsöz: Özgür Özel" : "Foreword by Özgür Özel"}</p>
          <p className="text-zinc-500 leading-relaxed max-w-3xl mb-8">
            {tr ? "Kitabı aşağıdaki okuyucudan İngilizce olarak okuyabilir veya PDF'yi cihazınıza indirebilirsiniz. Bazı ek grafikler orijinal Türkçe görsellerini içermektedir." : "Read the English translation directly in your browser or download the PDF. Some appendix graphics retain their original Turkish labels."}
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={pdfUrl} download="Ekrem_Imamoglu_My_Nation_Is_My_Witness_EN.pdf" className="inline-flex items-center gap-3 bg-primary text-white px-7 py-4 font-bold text-sm uppercase tracking-widest hover:brightness-110 transition">
              <Download className="h-5 w-5" /> {tr ? "PDF İndir" : "Download PDF"}
            </a>
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 border border-white/20 text-white px-7 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition">
              <ArrowUpRight className="h-5 w-5" /> {tr ? "Yeni Sekmede Aç" : "Open in New Tab"}
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 sm:px-6 pt-10 pb-20">
        <div className="flex items-center justify-between gap-3 mb-5">
          <span className="text-zinc-400 uppercase tracking-widest font-bold text-xs inline-flex items-center gap-2"><BookOpen className="w-4 h-4 text-primary" /> {tr ? "Kitabı oku" : "Read the Book"}</span>
          <span className="text-zinc-600 text-xs">PDF · 331 {tr ? "sayfa" : "pages"}</span>
        </div>
        <div className="bg-[#121418] border border-white/10 shadow-2xl p-2 sm:p-3">
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=0`}
            title="My Nation Is My Witness — English PDF reader"
            className="block w-full h-[70vh] md:h-[82vh] min-h-[490px] bg-white"
            loading="lazy"
          />
        </div>
        <p className="mt-5 text-sm text-zinc-500">
          {tr ? "Cihazınızda PDF okuyucusu görünmüyorsa yukarıdaki Yeni Sekmede Aç seçeneğini kullanın." : "If your browser does not display the embedded PDF, use Open in New Tab above."}
        </p>
      </section>
    </div>
  );
}
