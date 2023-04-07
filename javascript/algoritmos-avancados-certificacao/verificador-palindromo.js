/*          VERIFICADOR DE PALÍNDROMO
Retorne true se a string fornecida for um palíndromo.
Caso contrário, retorne false.
Observação: você precisará remover todos os caracteres
não alfanuméricos (pontuação, espaços e símbolos) e 
transforme tudo na mesma capitalização (letra em minúsculo
ou maiúsculo) para verificar se determinada palavra ou 
frase é um palíndromo.
*/

function palindrome(str) {
  let a = str.match(/[0-9]?[A-Z]?[a-z]*/g);
  let b = "";
  let newA = a.join("").toLowerCase();
  for(let i = newA.length - 1; i >= 0; i--){
    b += newA[i];
  };
  return newA === b;
};



console.log(palindrome("1 eye for of 1 eye."));//false
console.log(palindrome("My age is 0, 0 si ega ym."));//true
console.log(palindrome("My age is 0, 0 si ega ym."));//true
console.log(palindrome("0_0 (: /-\ :) 0-0"));//true
