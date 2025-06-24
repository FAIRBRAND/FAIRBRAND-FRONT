import "./globals.css";
//import { Montserrat_Alternates, Open_Sans } from "next/font/google";
import Footer from "@/app/(components)/Footer";
import Providers from "./providers";
import Header from "../(components)/Header";

/*
const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-title",
  weight: ["400", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});
*/

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <Providers locale={locale}>
      <>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    </Providers>
  );
}
