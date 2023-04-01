/*
Retorne o menor índice em que um valor (segundo argumento) deve ser inserido no array (primeiro argumento)
 assim que tenha sido ordenado. O valor retornado deve ser um número.
*/
function getIndexToIns(arr, num) {
  let result = [];
  arr.sort((a, b) => a - b);
  
  if(num > arr[arr.length - 1]){//se num for maior que o ultimo dado do array, adiciona ele em result
    result.push(arr[arr.length - 1])    
  }else if(arr.includes(num)){//se num for igual a algum dado em arr, retorna o indice desse dado em arr
    result.push(arr[arr.indexOf(num)])
    return arr.indexOf(result[0]);
  }else{
    result = arr.filter(function(n){
      if(arr[arr.indexOf(n)] <= num && arr[arr.indexOf(n) + 1] >= num){    
//se num está em um intervalo dentro de arr, retorna o menor índice em que um valor (segundo argumento) deve ser inserido no array
        return true
      };
    });
  };

  return arr.indexOf(result[0]) + 1;
};

console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([2, 20, 10], 19));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));


/*
function getIndexToIns(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}

getIndexToIns([1, 3, 4], 2);
*/

 
