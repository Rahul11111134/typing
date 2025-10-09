import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from 'next/script'; // Analytics के लिए
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Online Typing Speed Test",
  description: "Test and improve your typing speed (WPM) and accuracy. Supports multiple languages including English, Hindi, and Punjabi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script - Aapke ID (G-MRQ6R0XQJ4) ke saath */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MRQ6R0XQJ4"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MRQ6R0XQJ4');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
