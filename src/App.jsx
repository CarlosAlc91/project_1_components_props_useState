
import { useState } from 'react'
import './App.css'

/* importing json db */
import quotes from './db/quote.json'

function App() {

  /* function to get random quotes */
  const getRandom = (list) => {

    /* random method from Math object which gives a random number  */
    /* floor method from Math object which rounds down */
    const randomIndex = Math.floor(Math.random() * list.length)

    return list[randomIndex]
  }

  const [quote, setQuote] = useState(getRandom(quotes))


  return (
    <>
      <h1>Entregable</h1>
    </>
  )
}

export default App
