/* function to get random quotes */

/* array is inside list */
export const getRandom = (list) => {

  /* random method from Math object which gives a random number between 0 and 9.99999 */
  /* floor method from Math object which rounds down */
  /* randomIndex = va a aproximar hacia abajo(el redondeo de la multiplicacion de la longitud de la lista) */
  const randomIndex = Math.floor(Math.random() * list.length)

  /* we're returning a possible random element */
  return list[randomIndex]
}
