/*
Achate um array aninhado. Você deve lidar com diferentes níveis de aninhamento.
*/
function steamrollArray(arr) {
  let control = [];
  for(let i of arr){
    if(Array.isArray(i)){
      control.push(...steamrollArray(i));
      /*A função vai cada vez mais profundo, quando chega no último,
      não é mais um array, e ai, começa a dar push nos números de volta,
      tudo isso dentro do push acima, com o auxílio do spread.
      São criadas várias versões de control, o spread copia da segunda
      em diante, deixando os números em ordem no final.
      [control1,...]
      */
    }else{
      control.push(i)
    };
  };
  return control;
};
console.log(steamrollArray([1, [2], [3, [[4]]]]));
//[ 1, 2, 3, 4 ]
