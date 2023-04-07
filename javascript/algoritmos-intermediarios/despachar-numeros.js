/*
Dado o array arr, faça iterações sobre ele e remova cada
elemento começando do primeiro elemento (o índice 0) ATÉ
que a função func retorne true quando o elemento iterado
for passado através dele.

Em seguida, retorne o resto do array uma vez que a condição
for satisfeita, caso contrário, arr deve ser retornado como
um array vazio.

ASSIM QUE A FUNÇÃO RETORNA TRUE, O CONTROL MUDA DE VALOR
E SIMPLESMENTE RETORNA O RESTO DOS ELEMENTOS DO ARRAY,
SEM PASSAR MAIS A FUNÇÃO  NELES, COMO SE UM INTERRUPTOR
FOSSE ACIONADO NAQUELE EXATO MOMENTO EM QUE QUE A FUNÇÃO 
RETORNA TRUE.
*/
function dropElements(arr, func) {
  let control = false;
  return arr.filter(n => {
    if(func(n)){
      control = true;//É UMA ESPÉCIE DE INTERRUPTOR
    };
    return control;    
    });
};

console.log(dropElements([1, 2, 3], function(n) {return n < 3;}));
//[ 1, 2, 3 ]
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
//[1, 0, 1]
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));
//[3, 9, 2]
console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}));
//[ 7, 4 ]
