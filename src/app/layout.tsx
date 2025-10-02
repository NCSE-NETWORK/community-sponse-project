import Navbar from "@/components/navbar";
import StructuredData from "@/components/structured-data";
import LocalSEO from "@/components/local-seo";
import PerformanceOptimization from "@/components/performance-optimization";
import Script from "next/script";
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
  title: "NCSE Network - 賦能學生社群，共創技術未來",
  description: "NCSE Network 致力於為學生社團、技術社群以及非營利組織提供免費的雲端基礎設施服務，包括 VPS、網頁主機、技術支援和 Public IP tunnel，支持組織運作與發展。",
  keywords: [
    "NCSE Network",
    "學生社群",
    "技術社群",
    "雲端服務",
    "VPS",
    "網頁主機",
    "技術支援",
    "Public IP tunnel",
    "非營利組織",
    "免費服務",
    "學生社團",
    "程式設計",
    "資訊科技"
  ],
  authors: [{ name: "NCSE Network" }],
  creator: "NCSE Network",
  publisher: "NCSE Network",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sponsor-dev.pages.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NCSE Network - 賦能學生社群，共創技術未來",
    description: "NCSE Network 致力於為學生社團、技術社群以及非營利組織提供免費的雲端基礎設施服務，包括 VPS、網頁主機、技術支援和 Public IP tunnel，支持組織運作與發展。",
    url: "https://sponsor-dev.pages.dev",
    siteName: "NCSE Network",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NCSE Network - 賦能學生社群，共創技術未來",
      },
    ],
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NCSE Network - 賦能學生社群，共創技術未來",
    description: "NCSE Network 致力於為學生社團、技術社群以及非營利組織提供免費的雲端基礎設施服務，包括 VPS、網頁主機、技術支援和 Public IP tunnel，支持組織運作與發展。",
    images: ["/og-image.png"],
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
  verification: {
    google: "your-google-verification-code", // 需要替換為實際的 Google Search Console 驗證碼
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <head>
        <PerformanceOptimization />
        <StructuredData />
        <LocalSEO />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NJJY3WWTNG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NJJY3WWTNG');
          `}
        </Script>
      </body>
    </html>
  );
}
