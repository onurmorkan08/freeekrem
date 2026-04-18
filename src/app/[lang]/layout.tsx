import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "@/app/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Free Ekrem İmamoğlu",
  description: "Advocacy platform documenting the political case and ban of Ekrem İmamoğlu.",
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'tr' }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  return (
    <html lang={lang} className={`${inter.variable} ${playfair.variable} dark`}>
      <body className="antialiased min-h-screen flex flex-col pt-20 relative bg-black">
        {/* Background gradient overlay for a premium dark look */}
        <div className="fixed inset-0 z-[-1] bg-grad-dark opacity-100"></div>
        
        <NavBar lang={lang as 'en' | 'tr'} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer lang={lang as 'en' | 'tr'} />
      </body>
    </html>
  );
}
