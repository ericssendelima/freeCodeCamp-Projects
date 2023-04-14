/** Somar todos os primos
 * Retorne a soma de todos os números primos 
 * que são menores ou iguais a num.
 */

function sumPrimes(num) {
  let arr = [];
  let primes = [];
  let result = 0;
  let count = 0;

  for(let i = 2; i <= num; i++){//Preenche um array com todos os numeros > 1 até num(inclusive)
    arr[i - 2] = i;//[i-2] é pra começar a preencher a partir da posição 0
  };

  arr.map(n => {
    if(n === 2){
      primes.push(n);
    }else{
      for(let divisor = 2; divisor < n; divisor++){//verifica se tem mais algum divisor
        if(n % divisor === 0){
          count++;
          if(count > 0) break;// se encontrar 1 divisor ele para de verificar
        };
      };
      if(count === 0){//se não tiver nenhum divisor(além de 1 e ele  mesmo), é primo.
        primes.push(n);
      };
    };
      count = 0;//zera o contador
    });
  result = primes.reduce((a, b) => a + b, 0);//soma os primos
  return result
}
console.log(sumPrimes(977));//73156
console.log(sumPrimes(10));//17
