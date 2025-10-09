import Head from 'next/head';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Typing Speed Test</title>
        <meta name="description" content="Read the latest articles, tips, and updates about typing, productivity, and technology." />
      </Head>
      <main className="page">
        <div className="container">
          <header className="header">
            <h1>Blog</h1>
            <p className="subtitle">Read the latest articles, tips, and updates about typing, productivity, and technology.</p>
          </header>
          <section className="card">
            <p>
              Welcome to our blog! Here you will find helpful articles, typing tips, productivity hacks, and updates about our app and the world of technology. Stay tuned for regular posts and insights.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
