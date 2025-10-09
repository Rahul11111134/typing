import Head from 'next/head'
import TypingTest from '../components/TypingTest'
import Reviews from '../components/Reviews'

export default function Home() {
  return (
    <>
      <Head>
        <title>Typing Speed Test</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <main className="page">
        <div className="container">
          <header className="header">
            <h1>Typing Speed Test</h1>
            <p className="subtitle">Practice typing in multiple languages — realtime WPM, accuracy & results saved.</p>
          </header>

          <TypingTest />
          <Reviews />

          <footer className="footer">Built with ❤️ — Professional starter UI</footer>
        </div>
      </main>
    </>
  )
}
