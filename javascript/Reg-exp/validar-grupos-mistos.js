/*
 valide os nomes Franklin Roosevelt e Eleanor Roosevelt levando em conta maiúsculas e minúsculas. A regex também deve permitir nomes do meio.

*/
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor) (([A-Z].|[A-Z][a-z]+) )?Roosevelt/; // Altere esta linha
let result = myRegex.test(myString); // Altere esta linha
// Depois de passar no experimento do desafio com myString e ver como o agrupamento funciona

console.log(result);
