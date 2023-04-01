/*
Verifique se uma string (primeiro argumento, str) termina com a sequência de caracteres de destino fornecida (segundo argumento, target).
*/
function confirmEnding(str, target) {
  return str.slice(-target.length) === target;
}

console.log(confirmEnding("Bastian","n"));



//o slice retornaa quantidade de caracteres, do tamanho do alvo, a partir do final da string
