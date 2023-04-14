/** Localizar por valor
 * Faça uma função que olha através de um array de 
 * objetos (primeiro argumento) e retorna um array 
 * de todos os objetos que têm pares de nome e valor 
 * correspondentes (segundo argumento). Cada par de 
 * nome e valor do objeto fonte tem que estar presente
 * no objeto da coleção se ele for ser incluído no array
 * retornado.
 */
function whatIsInAName(collection, source) {
  let result = [...collection.filter(obj => {
      let control = 0;
      for(let keyS in source){//keyS = key -- source[keyS] = value
        if(obj[keyS] === source[keyS]){
          control++;
        };
      };//verifica se cada key de source em cada objeto tem os mesmos valores
      return control === Object.keys(source).length
      //retorna true se todos os valores do objeto source estão em cada objeto de collection
      })];
  return result
};
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));
//[ { apple: 1, bat: 2, cookie: 2 } ]
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
//[ { first: 'Tybalt', last: 'Capulet' } ]
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }));
//[ { apple: 1, bat: 2 }, { apple: 1, bat: 2, cookie: 2 } ]
console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}));
//[]
