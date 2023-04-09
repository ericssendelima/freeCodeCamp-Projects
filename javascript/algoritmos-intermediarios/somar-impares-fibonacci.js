/** Somar todos os números ímpares de Fibonacci
 * Dado um num inteiro e positivo, retorne a soma de todos
 * os números ímpares Fibonacci menores que ou iguais a num.
 * sumFibs(10) deve retornar 10 porque todos os números ímpares
 * de Fibonacci menores ou iguais a 10 são 1, 1, 3 e 5.
 */
function sumFibs(n) {
  let arr = [1, 1];
  let odd = [];
  let result = [];

  if(n < 2){
    return arr[n];
  };
  for(let i = 2; i < n; i++){
    arr[i] = arr[i-1] + arr[i-2];
  };
    odd = arr.filter(num => num % 2 !== 0 && num <= n);
    result = odd.reduce((a, n) => a + n);
  return result;
}

console.log(sumFibs(4));
