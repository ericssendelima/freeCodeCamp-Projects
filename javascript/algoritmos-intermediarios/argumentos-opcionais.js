/** Argumentos opcionais
 * Crie uma função que some dois argumentos juntos.
 * Se apenas um argumento for fornecido, então retorne
 * uma função que espera um argumento e retorna a sua soma.
 * Se algum argumento não for um número válido, retorne undefined.
 */
function addTogether() {
  let arr = [...arguments];
 
  if(arr.every((n) => Number.isInteger(n))){//se todos args são números
    if(arr.length === 2){//se são 2 números no args
        return arr.reduce((a, n) => a + n);
      }else{//se NÃO são 2 números no args 
        return  y => {
          if(Number.isInteger(y)){//testa se o segundo é
            return arr[0] + y;//retorna a soma dos 2
          }else{
            return undefined;
          };
        };
      };      
    }else{
      return undefined;
    };
};

console.log(addTogether(2)(8));//10
console.log(addTogether(5, [3]))//undefined
console.log(addTogether(5, 2))//7
console.log(addTogether(2, "3"));//10

