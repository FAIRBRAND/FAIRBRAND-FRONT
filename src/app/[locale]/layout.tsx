import "./globals.css";
//import { Montserrat_Alternates, Open_Sans } from "next/font/google";
import Footer from "@/app/(components)/Footer";
import Providers from "./providers";
import Header from "../(components)/Header";
import { headers } from "next/headers";

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
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || headersList.get("x-invoke-path") || "";
  const isAuthPage = pathname.includes("/auth");

  return (
    <Providers locale={locale}>
      <>
        {!isAuthPage && <Header />}
        <main>{children}</main>
        {!isAuthPage && <Footer />}
      </>
    </Providers>
  );
}
