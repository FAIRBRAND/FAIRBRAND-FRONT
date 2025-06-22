import "./globals.css";
import Footer from "@/app/(components)/Footer";
import Providers from "./providers";
import Header from "../(components)/Header";


export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html>
      <body>
        <Providers locale={locale}>
          <>
            <Header />
            <main>{children}</main>
            <Footer />
          </>
        </Providers>
      </body>
    </html>
  );
}
