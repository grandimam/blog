import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Grandimam",
  description:
    "I identify what needs to be done and get it done. Building meaningful solutions for problems that matter to the Muslim community using JavaScript, Express, and modern web technologies.",
  keywords: [
    "muslim community",
    "javascript developer",
    "express",
    "web development",
    "community solutions",
    "collective security",
    "institutional responsibility",
    "purposeful technology",
  ],
  authors: [{ name: "Grandimam" }],
  creator: "Grandimam",
  openGraph: {
    title: "Grandimam",
    description:
      "I identify what needs to be done and get it done. Building meaningful solutions for problems that matter to the Muslim community.",
    url: "https://grandimam.net",
    siteName: "Grandimam",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Grandimam",
    description:
      "I identify what needs to be done and get it done. Building meaningful solutions for problems that matter to the Muslim community.",
    creator: "@thegrandimam",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
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
