/*
Realize uma busca e substitua na frase usando os 
argumentos fornecidos e retorne a nova frase.

Observação: preserve a capitalização do primeiro caractere
na palavra original quando você estiver substituindo. 
Por exemplo, se você quiser substituir a palavra Book
com a palavra dog, deve ser substituído com Dog
 */
function myReplace(str, before, after) {
  let a = str;
  let newAfter = "";
  let control = /^[A-Z]/;//controle de letra maiúscula no início da palavra
  if(control.test(before)){
    newAfter = after.replace(after.split("")[0], after.split("")[0].toUpperCase())
    //separa cada letra e a substitui por ela mesma alterada
    return a.replace(before, newAfter);//troca as palavras
  }else{
    newAfter = after.replace(after.split("")[0], after.split("")[0].toLowerCase())
    //separa cada letra e a substitui por ela mesma alterada
    return a.replace(before, newAfter);//troca as palavras
  };
};

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));
//A quick brown fox Leaped over the lazy dog
