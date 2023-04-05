/*
  Os pares de bases são representados pelos caracteres AT e CG.

A fileira do DNA está sem o elemento de que faz par com ele.
Escreva uma função que corresponda aos pares de base que faltam
para a fileira de DNA fornecida. Para cada caractere na string 
fornecida, encontre o caractere de par de bases.
Retorne os resultados em um array bidimensional.
*/
  function pairElement(str) {
    let arr = str.split("")

    return arr.map(letra => {
      if(letra === 'A'){
        return ["A","T"]
      }else if(letra === 'T'){
        return ["T","A"]
      }else if(letra === 'G'){
        return ["G","C"]
      }else if(letra === 'C'){
        return ["C","G"]
      }else{
        return "Não é uma base nitrogenada!"
      }
    });
  };

  console.log(pairElement("GCG"));
  //[ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]
  console.log(pairElement("TTGAG"));
  //[ [ 'T', 'A' ], [ 'T', 'A' ], [ 'G', 'C' ], [ 'A', 'T' ], [ 'G', 'C' ] ]
  console.log(pairElement("CTCTA"));
  //[ [ 'C', 'G' ], [ 'T', 'A' ], [ 'C', 'G' ], [ 'T', 'A' ], [ 'A', 'T' ] ]
