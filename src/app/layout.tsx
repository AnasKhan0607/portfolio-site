import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anas Khan | PokéInfra Portfolio",
  description: "Production Engineer & Expert Vibe Coder. Building infrastructure, AI agents, and startups.",
  keywords: ["Anas Khan", "portfolio", "developer", "infrastructure", "cloud", "AI", "production engineer"],
  authors: [{ name: "Anas Khan" }],
  openGraph: {
    title: "Anas Khan | PokéInfra Portfolio",
    description: "Production Engineer & Expert Vibe Coder. Building infrastructure, AI agents, and startups.",
    type: "website",
    images: ["https://avatars.githubusercontent.com/u/76663779?v=4"],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@AnasKhan0607",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-[#ededed]`}
      >
        {children}
      </body>
    </html>
  );
}
