/*
Nomes de usuário só podem conter caracteres alfanuméricos.
Os números, se algum, precisam estar no fim da string. Pode haver zero ou mais números. Usernames não podem começar com números.
As letras podem ser maiúsculas ou minúsculas.
O tamanho de nomes de usuários precisa ser pelo menos dois. Um username de dois caracteres só pode conter letras.
*/

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/ig; // Altere esta linha
let result = userCheck.test(username);

console.log(result);
