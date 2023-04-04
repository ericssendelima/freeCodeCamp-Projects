/*
Escreva uma regex que, junto dos métodos apropriados de string,
remove os espaços em branco do começo e do fim delas.
Observação: normalmente, usaríamos String.prototype.trim() para isso,
mas a sua tarefa é fazer o mesmo usando expressões regulares.
*/


let hello = "   Hello, World!  ";
let wsRegex = /(\w+.)\s(\w+.)/; // Altere esta linha
let result = hello.match(wsRegex)[0]; // Altere esta linha

console.log(result); //Hello, World!

/* O MAIS INDICADO ESTÁ A SEGUIR, POIS SELECIONA APENAS OS ESPAÇOS EM BRANCO
AFINAL, O MÉTODO ACIMA NÃO FUNCIONARIA CASO A STRING FOSSE DIFERENTE OU MAIOR

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line
*/
