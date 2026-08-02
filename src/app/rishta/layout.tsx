import type { Metadata } from "next";
import { Amiri, Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anas",
  description: "A short introduction.",
  // The root layout sets both of these to the full name; without an override
  // they are inherited and printed into this page's head.
  authors: [],
  keywords: [],
  // Unlisted: no search engine should ever index or archive this page.
  // Deliberately NOT added to robots.txt — a Disallow line would advertise
  // the path to anyone who reads the file.
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  openGraph: {
    title: "Anas",
    description: "A short introduction.",
    type: "profile",
  },
  // The root layout sets twitter.creator to @AnasKhan0607, which would
  // otherwise be inherited here and print the handle into this page's source.
  twitter: {},
};

export default function RishtaLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`rishta-root ${cormorant.variable} ${amiri.variable}`}>
      {children}
    </div>
  );
}
