/*
A substring correspondente ao grupo é salva em uma "variável" temporária que pode ser acessada
dentro da mesma expressão regular usando uma barra invertida e o número do grupo de captura (ex.: \1).
Os grupos de captura são automaticamente numerados pela posição de abertura de seus parênteses (esquerda para direita),
começando em 1.


Use grupos de captura na regex reRegex para capturar em uma string um número que aparece exatamente três vezes, separados por espaços.
*/

let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1(?!.)/; //os símbolos no final e no início foram exigidos pela plataforma para que a string "42 42 42 42" não fosse capturada.
let result = reRegex.test(repeatNum);
let r = repeatNum.match(reRegex);

console.log(result);//true
console.log(r);
//[ '42 42 42', '42', index: 0, input: '42 42 42', groups: undefined ]
