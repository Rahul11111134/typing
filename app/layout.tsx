import '../styles/globals.css';
import Script from 'next/script'; // Google Analytics के लिए

export const metadata = {
  title: 'Typing Speed Test',
  description: 'Test and improve your typing speed and accuracy online. Practice in multiple languages, track your progress, and read expert tips on our blog.'
};

export default function RootLayout({ children }) {
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
      <body>{children}</body>
    </html>
  );
}
