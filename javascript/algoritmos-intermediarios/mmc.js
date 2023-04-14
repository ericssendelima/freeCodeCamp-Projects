/** Encontrar o menor múltiplo comum
 * Encontre o menor múltiplo comum dos parâmetros fornecidos
 * que podem ser divididos sem resto por ambos, bem como por 
 * todos os números sequenciais no intervalo entre esses parâmetros.
 */
function smallestCommons(arr) {
  let newArr = arr.sort((a, b) => a - b);//números em ordem
  let a = newArr[0];
  let b = newArr[1];//testar os multiplos do ultimo
  let range = [];
  let count = 1;//múltiplos de b
  let multiple = b * count;//inicia o primeiro múltiplo
  
  for(let i = a; i <= b; i++){
    range.push(i);//preencher um range com os números do intervalo
  };

  while(!range.every(n => multiple % n === 0)){
    multiple = b * count;
    count++;
  };/*
  * enquanto não encontra o múltiplo comum de todos os números de range, 
  * incrementa count e testa o múltiplo seguinte.
  */

  return multiple;
}

console.log(smallestCommons([5, 1]));//60
console.log(smallestCommons([2, 10]));//2520
console.log(smallestCommons([1, 13]));//360360
