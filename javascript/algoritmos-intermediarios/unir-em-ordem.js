/* UNIR EM ORDEM
Escreva uma função que recebe dois ou mais arrays e retorne um novo
array de valores únicos na ordem do array original fornecido.

Em outras palavras, todos os valores presentes de todos os arrays devem
ser incluídos na sua ordem original, mas sem valores duplicados no array final.

Os números únicos devem ser ordenados pela sua ordem original, mas
o array final não deve ser ordenado em ordem numérica.
*/
function uniteUnique(arr) {
  let a = [].concat(...arguments);
  return a.filter((n, i) => a.indexOf(n) === i); //exclui numeros repetidos dentro do array
}

console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));
//[ 1, 3, 2, 5, 4 ]
