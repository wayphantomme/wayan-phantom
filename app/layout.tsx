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
  title: "Wayan Phantom — AI Automation & n8n Specialist",
  description:
    "I build AI automation systems, n8n workflows, and intelligent bots that eliminate manual work and scale your operations. Available for freelance projects.",
  keywords: [
    "AI automation",
    "n8n",
    "workflow automation",
    "AI chatbots",
    "LLM integration",
    "freelance automation",
    "n8n specialist",
    "Wayan Phantom",
  ],
  openGraph: {
    title: "Wayan Phantom — AI Automation & n8n Specialist",
    description:
      "I automate the work you hate so you can focus on what matters. AI workflows, n8n integrations, and intelligent bots built for real business impact.",
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
