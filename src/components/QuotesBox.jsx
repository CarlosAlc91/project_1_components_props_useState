import './styles/QuoteBox.css'

const QuotesBox = ({ handlerChangeQuote, quote }) => {

  console.log(quote)
  return (

    <section className='container'>
      {/* titlte */}


      <h1 className='container__title'>Fortune cookies</h1>


      {/* button and quotes card */}
      <section className='quoteBox'>
        {/* button */}
        <div className='btn'>
          <button className='btn btn__try' onClick={handlerChangeQuote}>Try luck</button>
        </div>
        <article className='phrases'>
          {/* quotes */}
          <p className='phrases__quotes'>
            {quote.phrase}
          </p>
        </article>

      </section>

      {/* footer */}
      <footer className='footer'>
        {/* authors */}
        <h4 className='footer__title'>Source: {quote.author}</h4>
      </footer>

    </section>
  )
}
export default QuotesBox