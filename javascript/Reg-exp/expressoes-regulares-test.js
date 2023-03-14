/*
=========EXPRESSÕES REGULARES===============

Expressões regulares são usadas em linguagens de programação
para encontrar e extrair partes de strings. 
Cria-se padrões que ajudam a encontrar tais partes.


 O método .test() aplica a regex à string dentro dos parênteses
 e retorna true caso encontre o padrão ou false caso contrário.

let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);

//retorna true

*/

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Altere esta linha

console.log(result);  //true
