import Footer from "@/components/footer";
import Header from "@/components/header";
import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Decentra - L'école du web et de la blockchain",
  description: "Decentra est une école du web et de la blockchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`antialiased bg-dark text-white `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
