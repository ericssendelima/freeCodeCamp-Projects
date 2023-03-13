/*
Use a sintaxe de template literal com crases para criar um array de strings de elementos de lista (li).
Analise a propriedade failure do objeto result.
O texto de cada elemento li deve ser um dos elementos contidos no array dentro da 
propriedade failure e cada li deve ter o atributo class com o valor text-warning.
A função makeList deve retornar um array de strings de elementos li.
Abaixo está um exemplo do array que você deve criar. Use um loop para criar o mesmo resultado.

[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
*/


const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Altere apenas o código abaixo desta linha
  const failureItems = [];

  for(let i in arr){
    failureItems[i] = `<li class="text-warning">${arr[i]}</li>`

  }
  // Altere apenas o código acima desta linha

  return failureItems;
}

const failuresList = makeList(result.failure);

console.log(failuresList);
