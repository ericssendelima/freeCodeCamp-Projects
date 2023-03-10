//Escreva uma função recursiva, sum(arr, n), que retorna a soma dos primeiros n elementos de um array arr.

function sum(arr, n) {
 
  if (n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }

  
}
