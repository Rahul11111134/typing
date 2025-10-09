
"use client";
import Head from 'next/head'

import TypingTest from '../../components/TypingTest'
import Reviews from '../../components/Reviews'
import Comments from '../../components/Comments'

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
          <section className="hero" style={{display:'flex',alignItems:'center',gap:'32px',marginBottom:'32px'}}>
            <img src="/images/person1.svg" alt="Typing Hero" style={{width:'160px',height:'160px',borderRadius:'50%',background:'#181f2e',boxShadow:'0 4px 24px #0002'}} />
            <div>
              <h1 style={{fontSize:'2.5rem',margin:'0 0 12px 0'}}>Typing Speed Test</h1>
              <p className="subtitle" style={{fontSize:'1.2rem',marginBottom:'0'}}>Boost your typing speed and accuracy with real-time feedback, multi-language support, and detailed analytics.</p>
            </div>
          </section>
          <TypingTest />
          <Comments />
          <Reviews />
          <footer className="footer">
            <div style={{marginBottom:'8px'}}>Built with ❤️ — Professional starter UI</div>
            <nav>
              <a href="/about" className="btn primary" style={{marginRight:'12px'}}>About</a>
              <a href="/blog" className="btn primary">Blog</a>
            </nav>
          </footer>
        </div>
      </main>
    </>
  )
}
