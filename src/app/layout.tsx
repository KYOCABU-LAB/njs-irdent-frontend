import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideBar from "@/shared/components/sidebar/SideBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IrDent - Sistema de Gestión Dental",
  description: "Sistema moderno de gestión dental",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-background text-foreground`}
      >
        <div className="flex h-screen overflow-hidden">
          <SideBar />
          <main className="flex-1 overflow-auto  ">
            <div className="min-h-full">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
