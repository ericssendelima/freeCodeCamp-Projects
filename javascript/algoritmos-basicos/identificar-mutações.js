/*Retorne true se a string no primeiro elemento do array contém todas as letras da string no segundo elemento do array. */

function mutation(arr) {
  let a = arr[0].toLowerCase();
  let b = arr[1].toLowerCase().split("");
  let test = b.filter(l => a.includes(l))
  
  return test.length === b.length ? true : false
};

console.log(mutation(["hello", "hey"]));
