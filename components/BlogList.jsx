import Link from 'next/link';
import blogs from '../data/blogs';

export default function BlogList() {
  return (
    <section className="card" style={{marginTop:'32px'}}>
      <h2 style={{marginTop:0}}>Latest Blog Posts</h2>
      <ul style={{listStyle:'none',padding:0}}>
        {blogs.map(blog => (
          <li key={blog.slug} style={{marginBottom:'18px',borderBottom:'1px solid #222',paddingBottom:'12px'}}>
            <h3 style={{margin:'0 0 6px 0'}}>
              <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
            </h3>
            <div style={{color:'#aaa',fontSize:'13px',marginBottom:'4px'}}>{blog.date}</div>
            <div style={{color:'#888',marginBottom:'4px'}}>{blog.description}</div>
            <Link href={`/blog/${blog.slug}`} className="btn primary" style={{fontSize:'13px'}}>Read More</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
