/** Verificar se tudo é verdadeiro
 *  Você recebe uma coleção de array de objetos. 
 * O predicado pre será uma propriedade de objeto e 
 * você precisa retornar true se seu valor for truthy. 
 * Caso contrário, retorne false.
 */
function truthCheck(collection, pre) {
  let count = 0;
  for(let obj of collection){
    if(obj.hasOwnProperty(pre)){
      if(obj[pre]){
        count++;
      };
    };
  };
  return count === collection.length ? true : false
};

console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, 
                        {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"));//false
console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false},
                        {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name"));//true
