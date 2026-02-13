import { useState } from 'react'
import './App.css'

function App() {
  const [accepted, setAccepted] = useState(false)
  const [noCount, setNoCount] = useState(0)

  const handleYes = () => setAccepted(true)

  const phrases = [
    'No',
    'Are you sure?',
    'Really sure?',
    'Think again!',
    'Last chance!',
    'Surely not?',
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart ;(",
    "Is that your final answer?",
    "You're breaking my heart ;(",
    "Plsss? :( You're breaking my heart",
  ]

  const handleNo = () => setNoCount((c) => c + 1)

  const noText = phrases[Math.min(noCount, phrases.length - 1)]

  if (accepted) {
    return (
      <div className="card card--success">
        <iframe
          src="https://media.tenor.com/P-VyTymrVJgAAAAj/bubu-dudu.gif"
          width="200"
          height="200"
          frameBorder="0"
          className="card__success-gif"
          allowFullScreen
          title="Bubu Dudu love"
        />
        <p className="card__date-text">It&apos;s a date! 💕</p>
        <p className="card__message">
          Happy Valentine&apos;s Day! I&apos;m so lucky to have you. 💕
        </p>
        <p className="card__signature">Love U sooooooo Much</p>
      </div>
    )
  }

  return (
    <div className="card">
      <img
        src="https://media.tenor.com/0IKwuW91-ZQAAAAi/mimibubu.gif"
        alt=""
        className="card__gif"
      />
      <p className="card__label">To my Beautiful <span>MonMon</span></p>
      <h1 className="card__title">Will you be my Valentine?</h1>
      <p className="card__subtitle">On 15th Feb because we are too cool 😎</p>

      <div className="card__actions">
        <button type="button" className="btn btn--yes" onClick={handleYes}>
          Yes! ❤️
        </button>
        <button type="button" className="btn btn--no" onClick={handleNo}>
          {noText}
        </button>
      </div>
    </div>
  )
}

export default App
