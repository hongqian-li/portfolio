import type { Metadata } from "next";
import { Inter, Syne, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
  weight: ["400", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Hongqian Li — AI & Cloud Engineer",
  description:
    "I build AI systems — and I can explain them to anyone in the room. Cloud engineer, AI developer, and communicator based in Tampere, Finland.",
  keywords: [
    "AI engineer",
    "cloud engineer",
    "Azure",
    "GDPR",
    "RAG",
    "MCP server",
    "Terraform",
    "Finland",
    "Hongqian Li",
  ],
  authors: [{ name: "Hongqian Li" }],
  creator: "Hongqian Li",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Hongqian Li — AI & Cloud Engineer",
    description:
      "I build AI systems — and I can explain them to anyone in the room.",
    siteName: "Hongqian Li Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hongqian Li — AI & Cloud Engineer",
    description:
      "I build AI systems — and I can explain them to anyone in the room.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
