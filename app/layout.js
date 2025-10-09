import '../styles/globals.css';

export const metadata = {
  title: 'Typing Speed Test',
  description: 'Test and improve your typing speed and accuracy online. Practice in multiple languages, track your progress, and read expert tips on our blog.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
