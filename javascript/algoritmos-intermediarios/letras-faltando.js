/*
Encontre a letra que falta no intervalo de letras passado e devolva-a.
Se todas as letras estiverem presentes no intervalo, retorne undefined.
*/
function fearNotLetter(str) {
  let arr = str.split("");
  let first = str.charCodeAt(0);//codigo da primeira letra
  let last = str.charCodeAt(str.length - 1);//codigo da segunda letra
  let control = [];//preencher com as letras de "first" to "last", para comparar qual esta faltando
  let result = ""; //a letra que falta
  const alphabet = {};

  for(let i = 97; i < 123; i++){
    alphabet[i] = String.fromCharCode(i);// preenche o alfabeto com a relação código unicode - letra
  };
  for(let i = first; i <= last; i++){//preencher com as letras de "first" to "last"
    control.push(String.fromCharCode(i))
  };

  
  result = control.filter(letra => {
       if(!arr.includes(letra)){
         return true;
       }})[0];
  
  return result;
};

console.log(fearNotLetter("abce"));//d


//'ABC'.charCodeAt(0); // retorna 65
//String.fromCharCode(65, 66, 67);// retorna "ABC"
