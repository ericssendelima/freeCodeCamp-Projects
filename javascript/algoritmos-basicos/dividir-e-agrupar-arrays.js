/*
Escreva uma função que divida um array (primeiro argumento) 
em grupos com o comprimento de size (segundo argumento) 
e os retorne como um array bidimensional.
*/
function chunkArrayInGroups(arr, size) {
  let result = [...arr];
  let final = [];
  let nArr = [];

  while(result.length > 0){
    nArr = result.splice(0, size);
    final.push(nArr)
  };
  return final;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
//[ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ], [ 6, 7 ], [ 8 ] ]
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))
//[ [ 'a', 'b' ], [ 'c', 'd' ] ]

