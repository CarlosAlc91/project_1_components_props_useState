
import { useState } from 'react'
import './App.css'

/* importing json db */
import quotes from './db/quote.json'
/* importing get random */
import { getRandom } from './utils/random'
import QuotesBox from './components/QuotesBox'


function App() {

  /* 
  // CREACION DE ESTADO
  */
  /* useState es el hook y un hook es el que nos permite crear los estados.
  //Por lo tanto para almacenar la funcion de getRandom necesitamos almacenarla en un esstado que es creado con el hook useState.
  */
  const [quote, setQuote] = useState(getRandom(quotes))

  /* we can pass info from father to son but not all the way around */

  /* this function will change quotes when the buttos is pressed */
  const handlerChangeQuote = () => {
    setQuote(getRandom(quotes))
  }


  return (
    <main>
      <QuotesBox handlerChangeQuote={handlerChangeQuote} quote={quote} />
    </main>
  )
}

export default App
