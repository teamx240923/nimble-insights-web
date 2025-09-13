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
  title: "NimbleInsights - Turn Data Into Instant Answers",
  description: "Ask business questions in plain English and get real-time insights from your ERP, CRM, or spreadsheets — no SQL, no dashboards, no delays. AI-powered data insights for smarter business decisions.",
  keywords: "AI data insights, business intelligence, ERP integration, CRM analytics, natural language queries, data visualization, business analytics, automated reporting",
  authors: [{ name: "Jigsaw Networks" }],
  openGraph: {
    title: "NimbleInsights - Turn Data Into Instant Answers",
    description: "AI agents that unlock data insights from ERP, CRM, and Spreadsheets — in plain English.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NimbleInsights - Turn Data Into Instant Answers",
    description: "AI agents that unlock data insights from ERP, CRM, and Spreadsheets — in plain English.",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
