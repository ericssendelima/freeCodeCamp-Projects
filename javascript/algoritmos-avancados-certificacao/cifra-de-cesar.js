/* CIFRA DE CÉSAR
Os valores das letras são deslocados em 13 lugares. 
Da seguinte forma: A ↔ N, B ↔ O e assim por diante.

Escreva uma função que recebe uma string codificada de
ROT13 como entrada e retorna uma string decodificada.
*/

function rot13(str) {
  let arr = str.split("")//captura das letras das palavras passadas
  let result = arr.map(letter => {
    let uniL = letter.charCodeAt();//captura o unicode de cada letra
    let uniC = 0;//unicode cifrado 
    if(uniL >= 65 && uniL <= 77){
      uniC = uniL + 13;//cifra o unicode
      return String.fromCharCode(uniC);//retorna a letra correspondente ao unicode cifrado
    }else if(uniL >= 78 && uniL <= 90){//condição para os últimos 13 do alfabeto
      uniC = uniL - 13;//cifra o unicode
      return String.fromCharCode(uniC);//retorna a letra correspondente ao unicode cifrado
    }else{
      return String.fromCharCode(uniL);//retorna o que não for letra
    };
    }).join("");//junta tudo e transforma em string novamente
  return result;
};
console.log(rot13("FREE LOVE?"));
//SERR YBIR?
console.log(rot13("SERR PBQR PNZC"));
//FREE CODE CAMP
console.log(rot13("SERR CVMMN!"));
//FREE PIZZA!
console.log(rot13("SERR YBIR?"));
//FREE LOVE?
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
//THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
