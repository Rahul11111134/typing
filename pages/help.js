import React from 'react'
import fs from 'fs'
import path from 'path'

export default function Help({ content }){
  return (
    <main className="page">
      <div className="container">
        <div className="card">
          <h1>Help & Guide</h1>
          <div style={{whiteSpace:'pre-wrap',color:'var(--muted)'}}>{content}</div>
        </div>
      </div>
    </main>
  )
}

export async function getStaticProps(){
  const file = path.join(process.cwd(),'app','help.md')
  const content = fs.readFileSync(file,'utf8')
  return { props: { content } }
}
