import Footer from "@/components/footer/Footer";
import { AppHeader } from "@/components/header/AppHeader";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diego Cabré - Portafolio",
  description: "Portafolio de Diego Cabré - Estudiante de Ciberseguridad G6",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" }, // para browsers clásicos
    ],
  },
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased flex flex-col min-h-screen bg-gradient-to-br from-amber-500 via-green-700 to-slate-900`}
      >
        <AppHeader />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
