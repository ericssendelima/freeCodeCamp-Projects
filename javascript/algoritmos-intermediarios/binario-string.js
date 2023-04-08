/** Transformar de binário em string
 * Retorne uma frase traduzida para o inglês da string binária passada.
 */
function binaryAgent(str) {
  let arr = str.split(" ");//transforma a string em um array de vários binários
  return arr.map(letter => String.fromCharCode(parseInt(letter, 2))).join("");
};/*
  No return transforma cada binário em decimal(letter),
  transforma em letra com String.fromCharCode()
  e junta essas letras com o .join("").
*/

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000
                        01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
