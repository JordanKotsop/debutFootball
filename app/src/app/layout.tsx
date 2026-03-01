import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Debut Football | FIFA Licensed Football Agent | North America to Europe",
  description:
    "Debut Football represents emerging players from North America on the path to professional careers overseas. FIFA Licensed Agent Michael Tait. Offices in Toronto, Miami, Barcelona, London.",
  keywords: [
    "football agent North America",
    "soccer agent USA Canada",
    "youth football agent",
    "FIFA licensed agent",
    "North American players Europe",
    "international football agent",
    "player representation MLS",
  ],
  openGraph: {
    title: "Debut Football | FIFA Licensed Football Agent",
    description:
      "From First Contract to First Team. Representing emerging players from North America on the path to professional careers overseas.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
