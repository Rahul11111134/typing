import blogs from '../../../data/blogs';
import Head from 'next/head';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const blog = blogs.find(b => b.slug === params.slug);
  if (!blog) return {};
  return {
    title: blog.seo.title,
    description: blog.seo.description
  };
}

export default function BlogPost({ params }) {
  const blog = blogs.find(b => b.slug === params.slug);
  if (!blog) return notFound();
  return (
    <>
      <Head>
        <title>{blog.seo.title}</title>
        <meta name="description" content={blog.seo.description} />
      </Head>
      <main className="page">
        <div className="container">
          <section className="card">
            <h1>{blog.title}</h1>
            <div style={{color:'#aaa',fontSize:'13px',marginBottom:'8px'}}>{blog.date}</div>
            <div dangerouslySetInnerHTML={{__html: blog.content}} />
          </section>
        </div>
      </main>
    </>
  );
}
