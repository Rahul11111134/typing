import { useState, useEffect } from 'react';

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('typing-comments');
    if (saved) setComments(JSON.parse(saved));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('typing-comments', JSON.stringify(comments));
  }, [comments]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !text.trim() || rating === 0) return;
    setComments([
      { name, text, rating, date: new Date().toLocaleString() },
      ...comments,
    ]);
    setName('');
    setText('');
    setRating(0);
    setHover(0);
  }

  return (
    <section className="card" style={{marginTop:'32px'}}>
      <h2 style={{marginTop:0}}>User Comments & Ratings</h2>
      <form onSubmit={handleSubmit} style={{marginBottom:'18px'}}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={e => setName(e.target.value)}
          style={{padding:'8px',borderRadius:'6px',border:'1px solid #222',marginRight:'8px'}}
          required
        />
        <span style={{marginRight:'8px'}}>
          {[1,2,3,4,5].map(star => (
            <span
              key={star}
              style={{cursor:'pointer',color: (hover||rating) >= star ? '#fbbf24' : '#ccc',fontSize:'1.5rem'}}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              title={star + ' star'}
            >★</span>
          ))}
        </span>
        <br />
        <textarea
          placeholder="Write your comment..."
          value={text}
          onChange={e => setText(e.target.value)}
          style={{width:'100%',marginTop:'8px',padding:'8px',borderRadius:'6px',border:'1px solid #222'}}
          rows={2}
          required
        />
        <br />
        <button type="submit" className="btn primary" style={{marginTop:'8px'}}>Submit</button>
      </form>
      <div>
        {comments.length === 0 && <div style={{color:'#888'}}>No comments yet. Be the first!</div>}
        {comments.map((c, i) => (
          <div key={i} style={{borderTop:'1px solid #222',padding:'10px 0'}}>
            <div style={{fontWeight:'bold'}}>{c.name} <span style={{color:'#fbbf24'}}>{'★'.repeat(c.rating)}</span></div>
            <div style={{color:'#aaa',fontSize:'12px'}}>{c.date}</div>
            <div>{c.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
