/*
Converta uma string transformado os espaços em hifens.
Casos espinais são todas-as-palavras-minúsculas-unidas-por-traços.
*/

function spinalCase(str) {
  let a = str;
  let result = a.match(/[A-Z]?[a-z]+|(?!\W*)/g)
  /* .match() = captura
  [A-Z]? = Existência ou não de iniciais maiúsculas;
  [a-z]+ = ocorrência de 1 ou mais letras minísculas(palavras)
  (?!\W*) = não capturar não-palavras 0 ou mais vezes que se repetirem
  /g = quantas vezes isso se repetir
  */
  return result.join("-").toLowerCase();//junta tudo com "-" e transforma em minúsculo
}

console.log(spinalCase("thisIsSpinalTap"));//this-is-spinal-tap
console.log(spinalCase("The_Andy_Griffith_Show"));//the-andy-griffith-show
console.log(spinalCase("AllThe-small Things"));//the-andy-griffith-show
