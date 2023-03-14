/*A função parseInt() analisa uma string e retorna um inteiro. É preciso um segundo argumento para o radix, que especifica a base do número na string. O radix pode ser um inteiro entre 2 e 36.

A chamada da função se parece com:

parseInt(string, radix);

Exemplo:

const a = parseInt("11", 2);

A variável radix diz que 11 está no sistema binário, ou base 2. Esse exemplo converte a string 11 para um inteiro 3.*/

function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");
