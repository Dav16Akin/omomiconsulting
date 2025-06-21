import type { Metadata } from "next";
import { Carlito } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/shared/Topbar";
import Footer from "@/components/shared/Footer";



const carlito = Carlito({
  variable: "--font-carlito",
  subsets: ["latin"],
  weight: ["400", "700"],
});


export const metadata: Metadata =  {
    title: "Home / Omomi Consulting",
    description:
      "Welcome to Omomi Consulting — empowering inclusive growth for institutions and businesses across Africa through strategic insights and innovative solutions.",
  };

  
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${carlito.variable} antialiased`}
      >
        <Topbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
