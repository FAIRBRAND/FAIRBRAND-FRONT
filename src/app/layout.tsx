import "./globals.css";
import { Montserrat_Alternates, Open_Sans } from 'next/font/google';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserratAlternates = Montserrat_Alternates({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-title',
  weight: ['400', '700']
});

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['400', '700'],
  style: ['normal', 'italic']
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserratAlternates.variable} ${openSans.variable} font-body`}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
