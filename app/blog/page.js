import Head from 'next/head';
import BlogList from '../../components/BlogList';

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
          <BlogList />
        </div>
      </main>
    </>
  );
}
