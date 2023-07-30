const QuotesBox = ({ handlerChangeQuote, quote }) => {

  console.log(quote)
  return (

    <section>
      {/* titlte */}
      <h1>Fortune cookies</h1>

      {/* button and quotes card */}
      <section>
        {/* button */}
        <button onClick={handlerChangeQuote}>Try luck</button>
        <article>
          {/* quotes */}
          <p>
            {quote.phrase}
          </p>
        </article>

      </section>

      {/* footer */}
      <footer>
        {/* authors */}
        <h4>Source: {quote.author}</h4>
      </footer>

    </section>
  )
}
export default QuotesBox