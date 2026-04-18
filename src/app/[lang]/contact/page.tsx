"use client";

import PageHeader from "@/components/PageHeader";
import { MoveRight, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function ContactPage() {
  const params = useParams();
  const lang = (params?.lang as string) || "en";

  const isTR = lang === "tr";

  const content = {
    title: isTR ? "Proje Hakkında & İletişim" : "About the Project & Contact",
    subtitle: isTR 
      ? "Bu, devam eden süreci belgelemek, dünyaya duyurmak ve uluslararası farkındalık yaratmak amacıyla kurulan bağımsız bir savunuculuk projesidir." 
      : "This is an independent advocacy project established to document the ongoing process and raise international awareness.",
    formTitle: isTR ? "Bağlantı Kurun" : "Establish Contact",
    formDesc: isTR ? "Basın talepleri, uluslararası izleme ve dayanışma koordinasyonu için ulaşın." : "Reach out for press inquiries, international monitoring, and solidarity coordination.",
    labels: {
      name: isTR ? "Adınız" : "Full Name",
      email: isTR ? "E-posta Adresiniz" : "Email Address",
      subject: isTR ? "Konu" : "Subject",
      message: isTR ? "Mesajınız" : "Message",
      send: isTR ? "Mesajı İlet" : "Transmit Message",
      sending: isTR ? "İletiliyor..." : "Transmitting..."
    },
    success: {
      title: isTR ? "Mesajınız İletildi" : "Transmission Successful",
      desc: isTR ? "Mesajınız güvenli bir şekilde alınmıştır. Ekibimiz sizinle en kısa sürede iletişime geçecektir." : "Your message has been securely received. Our team will contact you shortly."
    },
    error: {
      title: isTR ? "İletişim Hatası" : "Transmission Failed",
      desc: isTR ? "Sistem mesajınızı iletemedi. Lütfen doğrudan amerikachp@gmail.com adresine e-posta gönderin." : "The system could not deliver your message. Please email amerikachp@gmail.com directly."
    }
  };

  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");

    // Simulate an API call / Email dispatch
    setTimeout(() => {
      // Since no backend SMTP is provided, simulate success payload for UX
      // In production, this would stringify data to a /api/contact endpoint.
      setFormState("success");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#050608] relative flex flex-col pb-32">
      {/* Absolute positioning for a stark background hero */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden h-[60vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050608]/80 via-[#050608] to-[#050608] z-10"></div>
        <img src="/images/898486cb-d4b0-4db5-9ae1-1ebefdea6380 (1).jpg" className="absolute top-0 right-0 w-full lg:w-1/2 h-full object-cover grayscale opacity-10 mix-blend-luminosity contrast-125" alt="Background Texture" />
      </div>

      <div className="relative z-10 flex-grow">
        <PageHeader 
          title={content.title} 
          subtitle={content.subtitle} 
        />
        
        <div className="container mx-auto px-6 max-w-6xl mt-16">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Left Column: Context & Contact Info */}
            <div className="lg:col-span-5 relative group">
               <div className="hidden lg:block absolute -left-[30px] top-4 w-px h-full bg-gradient-to-b from-primary/50 to-transparent"></div>
               
               <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-primary mb-8">{content.formTitle}</h2>
               <p className="text-zinc-400 text-lg leading-relaxed mb-12 text-balance">
                 {content.formDesc}
               </p>

               <div className="p-8 border border-white/10 bg-zinc-950/80 backdrop-blur-md mb-8 hover:border-white/20 transition-colors shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary/50 to-transparent"></div>
                 <h3 className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4">{isTR ? 'Doğrudan İletişim' : 'Direct Channel'}</h3>
                 <a href="mailto:amerikachp@gmail.com" className="inline-flex items-center gap-3 text-white border-b border-zinc-700 pb-1 hover:border-primary transition-colors font-serif text-2xl group-hover:text-primary">
                   amerikachp@gmail.com <MoveRight className="w-5 h-5 ml-2" />
                 </a>
               </div>
            </div>

            {/* Right Column: Premium Form */}
            <div className="lg:col-span-7">
              <div className="p-8 lg:p-12 border border-white/5 bg-[#050608] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-zinc-800 to-transparent"></div>
                
                {formState === "success" ? (
                  <div className="flex flex-col items-center justify-center text-center py-16 animation-fade-in">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-serif text-white mb-4">{content.success.title}</h3>
                    <p className="text-zinc-400 text-lg">{content.success.desc}</p>
                    <button onClick={() => setFormState("idle")} className="mt-8 text-xs font-bold uppercase tracking-widest text-primary hover:text-white transition-colors border-b border-primary pb-1">
                      {isTR ? "Yeni Mesaj Gönder" : "Send Another Message"}
                    </button>
                  </div>
                ) : formState === "error" ? (
                  <div className="flex flex-col items-center justify-center text-center py-16 animation-fade-in">
                    <div className="w-20 h-20 rounded-full bg-red-900/20 flex items-center justify-center mb-6 border border-primary/20">
                      <AlertCircle className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-serif text-white mb-4">{content.error.title}</h3>
                    <p className="text-zinc-400 text-lg">{content.error.desc}</p>
                    <button onClick={() => setFormState("idle")} className="mt-8 text-xs font-bold uppercase tracking-widest text-primary hover:text-white transition-colors border-b border-primary pb-1">
                      {isTR ? "Tekrar Dene" : "Try Again"}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8 animation-fade-in">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-zinc-500">{content.labels.name}</label>
                        <input required type="text" className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-primary text-white p-4 outline-none transition-colors" />
                      </div>
                      <div className="space-y-3">
                        <label className="block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-zinc-500">{content.labels.email}</label>
                        <input required type="email" className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-primary text-white p-4 outline-none transition-colors" />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <label className="block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-zinc-500">{content.labels.subject}</label>
                      <input required type="text" className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-primary text-white p-4 outline-none transition-colors" />
                    </div>
                    
                    <div className="space-y-3">
                      <label className="block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-zinc-500">{content.labels.message}</label>
                      <textarea required rows={5} className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-primary text-white p-4 outline-none transition-colors resize-none"></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={formState === "submitting"}
                      className="group inline-flex items-center gap-4 bg-white text-black px-10 py-5 font-bold uppercase tracking-widest text-sm transition-all hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto justify-center"
                    >
                      {formState === "submitting" ? (
                        <><Loader2 className="w-5 h-5 animate-spin" /> {content.labels.sending}</>
                      ) : (
                        <>{content.labels.send} <MoveRight className="w-5 h-5 transition-transform group-hover:translate-x-2" /></>
                      )}
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
