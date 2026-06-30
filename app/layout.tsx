import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Megatha Tech — Premium Software House for High-Growth Startups",
  description:
    "We build production-ready web applications, Web3 infrastructure, and AI automation workflows for high-growth startups and enterprises. Book a discovery call today.",
  keywords: [
    "software house",
    "web development",
    "Next.js",
    "Web3",
    "AI agents",
    "blockchain",
    "startup engineering",
  ],
  openGraph: {
    title: "Megatha Tech — Premium Software House",
    description:
      "Engineering premium web applications, decentralized infrastructure, and AI-driven automation workflows with high-velocity deployment.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#111111]">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
