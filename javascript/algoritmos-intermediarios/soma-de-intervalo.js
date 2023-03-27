/*
Retorne a soma desses dois números mais a soma de todos os números entre eles. O menor número nem sempre chegará primeiro. 
*/
function sumAll(arr) {
  const nArr = [...arr];
  nArr.sort((a, b) => a - b);//ordenando os numeros
  let init = nArr[0];
  let final = nArr[1];

  for(let i = init; i < final; i++){
    nArr.splice(i, 0, i);
  };
  nArr.shift();//foi preciso retirar o primeiro elemento que ficou repetido no laço acima
  
  return nArr.reduce((sum, num) => sum += num, 0)//somando os elementos;
};

console.log(sumAll([1, 4]));//10
console.log(sumAll([5, 10]));//45
