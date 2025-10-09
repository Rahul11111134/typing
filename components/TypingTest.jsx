import { useEffect, useMemo, useState, useRef } from 'react'
import TEXTS from '../data/texts'

export default function TypingTest() {
  const languages = Object.keys(TEXTS)
  const [lang, setLang] = useState('english')
  const [timerSec, setTimerSec] = useState(60)
  const [customSec, setCustomSec] = useState('')
  const [started, setStarted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(timerSec)
  const [typed, setTyped] = useState('')
  const [result, setResult] = useState(null)
  const [history, setHistory] = useState([])
  const [passageIndex, setPassageIndex] = useState(0)
  const intervalRef = useRef(null)
  const inputRef = useRef(null)

  const passage = useMemo(() => {
    const list = TEXTS[lang] || TEXTS['english']
    // choose passage by index (wrap)
    return list[passageIndex % list.length]
  }, [lang, passageIndex])

  useEffect(() => {
    const raw = localStorage.getItem('typing_results')
    if (raw) setHistory(JSON.parse(raw))
  }, [])

  useEffect(() => {
    setTimeLeft(timerSec)
    reset(false)
  }, [timerSec, lang])

  useEffect(() => {
    if (started && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((t) => t - 1)
      }, 1000)
    }
    return () => clearInterval(intervalRef.current)
  }, [started])

  useEffect(() => {
    if (timeLeft === 0 && started) finish()
  }, [timeLeft])

  function start() {
    setStarted(true)
    setResult(null)
    // focus input
    setTimeout(() => inputRef.current?.focus(), 50)
  }

  function reset(keepLang = true) {
    clearInterval(intervalRef.current)
    setStarted(false)
    setTimeLeft(timerSec)
    setTyped('')
    setResult(null)
  }

  function nextPassage() {
    // move to next passage and reset
    setPassageIndex((i) => i + 1)
    reset()
    setTimeout(() => inputRef.current?.focus(), 50)
  }

  function finish() {
    clearInterval(intervalRef.current)
    setStarted(false)
    const stats = computeStats(passage, typed, timerSec - timeLeft)
    const entry = { id: Date.now(), lang, timerSec, timestamp: new Date().toISOString(), ...stats }
    const newHistory = [entry, ...history].slice(0, 50)
    setHistory(newHistory)
    localStorage.setItem('typing_results', JSON.stringify(newHistory))
    setResult(entry)
  }

  function handleChange(e) {
    const value = e.target.value
    // start on first input
    if (!started && value.length > 0) start()
    // don't allow typing beyond passage length
    if (value.length > passage.length) return
    setTyped(value)
  }

  function exportCSV() {
    if (!history || history.length === 0) return
    const headers = ['id','timestamp','lang','timerSec','wpm','accuracy','errors','usedSec']
    const rows = history.map(h => [h.id, h.timestamp, h.lang, h.timerSec, h.wpm, h.accuracy, h.errors, h.usedSec])
    const csv = [headers, ...rows].map(r => r.join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `typing_history_${Date.now()}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  function clearHistory() {
    setHistory([])
    localStorage.removeItem('typing_results')
  }

  function computeStats(target, typedText, usedSec) {
    const correctChars = [...typedText].filter((c, i) => c === target[i]).length
    const totalTyped = typedText.length
    const errors = totalTyped - correctChars
    const minutes = Math.max(usedSec / 60, 1/60)
    const wpm = Math.round((correctChars / 5) / minutes)
    const accuracy = totalTyped === 0 ? 100 : Math.max(0, Math.round((correctChars / totalTyped) * 100))
    return { wpm, accuracy, errors, correctChars, totalTyped, usedSec }
  }

  function highlight() {
    const spans = []
    for (let i = 0; i < passage.length; i++) {
      const char = passage[i]
      const typedChar = typed[i]
      let cls = ''
      if (typedChar == null) cls = 'char'
      else if (typedChar === char) cls = 'char correct'
      else cls = 'char wrong'
      spans.push(
        <span key={i} className={cls}>
          {char}
        </span>
      )
    }
    return spans
  }

  return (
    <div className="card">
      <section className="controls">
        <label>
          Language
          <select value={lang} onChange={(e) => setLang(e.target.value)}>
            {languages.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </label>

        <label>
          Time
          <div style={{display:'flex',gap:8,alignItems:'center'}}>
            <select value={timerSec} onChange={(e) => setTimerSec(Number(e.target.value))}>
              <option value={15}>15s</option>
              <option value={30}>30s</option>
              <option value={60}>60s</option>
              <option value={120}>120s</option>
            </select>
            <input
              className="custom-time"
              placeholder="Custom (s)"
              value={customSec}
              onChange={(e) => setCustomSec(e.target.value.replace(/[^0-9]/g, ''))}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && customSec.trim()) {
                  const n = Number(customSec)
                  if (n > 0) setTimerSec(n)
                }
              }}
            />
          </div>
        </label>

        <div className="buttons">
          <button className="btn primary" onClick={() => { reset(); start(); }}>Start</button>
          <button className="btn" onClick={() => reset()}>Reset</button>
          <button className="btn" onClick={() => { setLang('english'); setTimerSec(60); reset(); }}>Default</button>
          <button className="btn" onClick={nextPassage}>Next</button>
        </div>
      </section>

      <section className="test">
        <div className="passage">{highlight()}</div>

        <textarea
          ref={inputRef}
          className="input"
          value={typed}
          onChange={handleChange}
          placeholder="Start typing here..."
          rows={4}
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          inputMode="text"
        />

        <div className="status">
          <div>Time: <strong>{timeLeft}s</strong></div>
          <div>WPM: <strong>{result ? result.wpm : computeStats(passage, typed, timerSec - timeLeft).wpm}</strong></div>
          <div>Accuracy: <strong>{result ? result.accuracy : computeStats(passage, typed, timerSec - timeLeft).accuracy}%</strong></div>
          <div>Errors: <strong>{result ? result.errors : computeStats(passage, typed, timerSec - timeLeft).errors}</strong></div>
        </div>

        {result && (
          <div className="result">
            <h3>Result</h3>
            <p>WPM: <strong>{result.wpm}</strong></p>
            <p>Accuracy: <strong>{result.accuracy}%</strong></p>
            <p>Errors: <strong>{result.errors}</strong></p>
            <p>Time used: <strong>{result.usedSec}s</strong></p>
          </div>
        )}

        <div className="history">
          <h4>Recent Results</h4>
          {history.length === 0 && <p>No results yet — your results will save locally.</p>}
          <div style={{display:'flex',gap:8,marginTop:8}}>
            <button className="btn" onClick={exportCSV} disabled={history.length===0}>Export CSV</button>
            <button className="btn" onClick={clearHistory} disabled={history.length===0}>Clear</button>
          </div>
          <ul>
            {history.map((h) => (
              <li key={h.id} className="history-item">
                <strong>{h.wpm} WPM</strong> • {h.accuracy}% • {h.errors} err • {h.lang} • {new Date(h.timestamp).toLocaleString()}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
