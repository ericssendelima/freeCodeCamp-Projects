/*
Use os lookaheads na pwRegex para que correspondam a senhas
de mais de 5 caracteres 
e que tenham dois algarismos consecutivos.
*/
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\w*\d\d)/; // Altere esta linha
let result = pwRegex.test(sampleWord);



