/*
A aridade de uma função é o número de argumentos que ela toma.
Realizar currying em uma função significa transformar uma função de aridade N 
em N funções de aridade 1.
*/

function curried(x) {
  return function(y) {
    return x + y;
  }
}

//const curried = x => y => x + y

curried(1)(2)

/*
Isso é útil quando você não pode fornecer todos os argumentos para uma função de uma só vez.
Você pode salvar cada chamada de função em uma variável,
que será uma referência à função retornada que recebe o próximo argumento quando ele estiver disponível. 
*/

const funcForY = curried(1);
console.log(funcForY(2)); // 3

/*
aplicação de alguns argumentos a uma função
e o retorno de outra função
à qual é aplicada a mais argumentos.
*/

function impartial(x, y, z) {
  return x + y + z;
}

const partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13



function add(x) {
   return y => z => x + y + z 
}

console.log(add(10)(20)(30));//60
