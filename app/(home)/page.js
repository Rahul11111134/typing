
"use client";
import Head from 'next/head'
import TypingTest from '../../components/TypingTest'
import Reviews from '../../components/Reviews'

export default function Home() {
  return (
    <>
      <Head>
        <title>Typing Speed Test | Improve Your Typing Online</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content="Test and improve your typing speed and accuracy online. Practice in multiple languages, track your progress, and read expert tips on our blog." />
      </Head>
      <main className="page">
        <div className="container">
          <header className="header">
            <h1>Typing Speed Test</h1>
            <p className="subtitle">Test and improve your typing speed and accuracy online. Practice in multiple languages, track your progress, and read expert tips on our blog.</p>
            <nav style={{marginTop: '16px', marginBottom: '16px'}}>
              <a href="/about" className="btn primary" style={{marginRight: '12px'}}>About</a>
              <a href="/blog" className="btn primary">Blog</a>
            </nav>
          </header>

          <TypingTest />
          <Reviews />

          <footer className="footer">Built with   Professional starter UI</footer>
        </div>
      </main>
    </>
  )
}
