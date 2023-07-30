
import { useState } from 'react'
import './App.css'

/* importing json db */
import quotes from './db/quote.json'
/* importing get random */
import { getRandom } from './utils/random'
import QuotesBox from './components/QuotesBox'

/* backgrouds array */
const bgs = ['bg1', 'bg2', 'bg3', 'bg4']

function App() {

  /* 
  // CREACION DE ESTADO
  */
  /* useState es el hook y un hook es el que nos permite crear los estados.
  //Por lo tanto para almacenar la funcion de getRandom necesitamos almacenarla en un esstado que es creado con el hook useState.
  */
  const [quote, setQuote] = useState(getRandom(quotes))

  /* this state changes background when page chanrges */
  /* adding bgs array since states reequires a readable array to read from */
  const [currentBg, setCurrentBg] = useState(getRandom(bgs))

  /* we can pass info from father to son but not all the way around */

  /* this function will change quotes when the buttos is pressed */
  const handlerChangeQuote = () => {
    setQuote(getRandom(quotes))
    /* adding setCurrentBg so backgrounds changes when button is clicked */
    setCurrentBg(getRandom(bgs))
  }

  return (
    <main className={`App ${currentBg}`}>
      <QuotesBox handlerChangeQuote={handlerChangeQuote} quote={quote} />

    </main>
  )
}

export default App
