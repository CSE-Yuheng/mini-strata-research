import { useState } from 'react'
import './App.css'

function App() {
  const [price, setPrice] = useState('')
  const [shares, setShares] = useState('')
  const [total, setTotal] = useState(null)

  function calculateValue() {
    setTotal(Number(price) * Number(shares))
  }

  return (
    <div className="container">
      <h1>Mini Strata</h1>
      <p>Simple Investment Calculator</p>

      <label>Stock Price ($)</label>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <label>Number of Shares</label>
      <input
        type="number"
        value={shares}
        onChange={(e) => setShares(e.target.value)}
      />

      <button onClick={calculateValue}>Calculate</button>

      {total !== null && (
        <h2>Total Value: ${total.toFixed(2)}</h2>
      )}
    </div>
  )
}

export default App