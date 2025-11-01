import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Syeda Gulzar Bano – Portfolio",
  description:
    "Frontend Developer & Designer crafting modern, elegant, and functional web experiences using React, Next.js, and TailwindCSS.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} bg-gray-950 text-gray-100 antialiased`}
        style={{
          fontFamily: "var(--font-inter)",
        }}
      >
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
