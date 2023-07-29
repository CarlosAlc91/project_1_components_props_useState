/* function to get random quotes */
export const getRandom = (list) => {

  /* random method from Math object which gives a random number  */
  /* floor method from Math object which rounds down */
  const randomIndex = Math.floor(Math.random() * list.length)

  return list[randomIndex]
} 