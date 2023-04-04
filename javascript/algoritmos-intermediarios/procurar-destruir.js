/*
Você receberá um array inicial (o primeiro argumento na função destroyer), seguido por um ou mais argumentos. 
Remova todos os elementos da matriz inicial que são do mesmo valor que esses argumentos. */

function destroyer(arr){
  let newArr = [...arr];
  let args = [...arguments]
  args.shift(); 

  for(let i of args){
    while(newArr.includes(i)){
      newArr.splice(newArr.indexOf(i), 1);
      };
  };
  return newArr;
};

console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));//[ 1, 5, 1 ]
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], 
                      "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));//[ 12, 92, 65 ]
