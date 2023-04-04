/*
fixRegex, que usa três grupos de captura para procurar cada palavra na string one two three.
Depois atualize a variável replaceText para trocar de one two three para three two one.
*/

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Altere esta linha
let replaceText = "$3 $2 $1"; // Altere esta linha
let result = str.replace(fixRegex, replaceText);

console.log(result);//three two one
