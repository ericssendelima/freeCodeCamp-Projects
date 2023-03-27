/*
Compare dois arrays e retorne um novo array com qualquer item encontrado em apenas um dos dois arrays passados, mas não ambos.
Em outras palavras, retorne a diferença simétrica de dois arrays.
*/
function diffArray(arr1, arr2) {
  //filtrando nos 2 sentidos
  let newArr = arr1.filter(num => !arr2.includes(num));
  newArr.push(...arr2.filter(num => !arr1.includes(num)));
  //arr1.filter(num => arr2.includes(num)) - pega cada elemento do array  filtrado e o passa por uma condição
  //arr2.includes() - retorna verdadeiro ou falso 
  //so adiciona o que NÃO estiver no outro
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));//[4]
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));//[ 'pink wool' ]
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));//[1, 'calf', 3, 'piglet', 7, 'filly']
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));//['piglet', 4]
