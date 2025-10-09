import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About | Typing Speed Test</title>
        <meta name="description" content="Learn more about the Typing Speed Test app, its features, and the team behind it." />
      </Head>
      <main className="page">
        <div className="container">
          <header className="header">
            <h1>About Us</h1>
            <p className="subtitle">Learn more about the Typing Speed Test app, its features, and the team behind it.</p>
          </header>
          <section className="card">
            <p>
              Typing Speed Test is a professional web application designed to help users improve their typing speed and accuracy in multiple languages. Our mission is to provide a simple, fast, and effective way to practice typing, track progress, and achieve better results.
            </p>
            <p>
              Built with modern technologies and best practices, our app ensures a smooth user experience and reliable performance.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
