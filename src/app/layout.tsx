import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: "Grandimam - Data Intelligence & AI Engineer",
  description: "Building data-intelligence platforms that fetch messy data, enrich it with AI/LLMs, and expose insights via scalable APIs. Expert in data pipelines, machine learning, and intelligent systems.",
  keywords: ["data intelligence", "AI engineer", "machine learning", "data pipelines", "APIs", "LLM integration", "data platforms", "AI systems"],
  authors: [{ name: "Grandimam" }],
  creator: "Grandimam",
  openGraph: {
    title: "Grandimam - Data Intelligence & AI Engineer",
    description: "Building data-intelligence platforms that fetch messy data, enrich it with AI/LLMs, and expose insights via scalable APIs.",
    url: "https://grandimam.dev",
    siteName: "Grandimam",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Grandimam - Data Intelligence & AI Engineer", 
    description: "Building data-intelligence platforms that fetch messy data, enrich it with AI/LLMs, and expose insights via scalable APIs.",
    creator: "@grandimam",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body className="antialiased min-h-screen bg-slate-50 dark:bg-slate-900">
        {children}
      </body>
    </html>
  );
}