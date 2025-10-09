export default function Reviews(){
  const reviews = [
    {id:1, name:'Ayesha Khan', role:'Student', text:'Yeh website meri typing speed ko improve karne mein bohot madadgar rahi. UI clean aur passages ache hain.', img:'/images/person1.svg'},
    {id:2, name:'Rahul Verma', role:'Developer', text:'Multi-language support zabardast hai. Real-time WPM aur accuracy accurate nazar aate hain.', img:'/images/person2.svg'},
    {id:3, name:'Sara Ali', role:'Writer', text:'Design professional hai aur mobile pe bhi theek kaam karta hai. Export feature bhi useful hai.', img:'/images/person3.svg'}
  ]

  return (
    <section className="reviews card">
      <h2>Users' Reviews</h2>
      <div className="reviews-grid">
        {reviews.map(r => (
          <article key={r.id} className="review-item">
            <img src={r.img} alt={r.name} width="72" height="72" />
            <div className="review-body">
              <strong>{r.name}</strong>
              <span className="role">{r.role}</span>
              <p>{r.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
