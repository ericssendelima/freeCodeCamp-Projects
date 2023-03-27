/*
Retorna um novo array que transforma a altitude média dos elementos em seus períodos orbitais (em segundos).
O array conterá objetos no formato {name: 'name', avgAlt: avgAlt}.
Os valores devem estar arredondados para o número inteiro mais próximo. O corpo sendo orbitado é a Terra.
*/
function orbitalPeriod(arr) {
  const nArr = [...arr]
  let result = [];
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  for(let i in nArr){   
    let {name, avgAlt} = nArr[i];//desestrutura nArr
    let a = earthRadius + avgAlt;
    let orbitalPeriod = Math.round((2*Math.PI)*Math.sqrt((a**3)/GM));
    //round arredonda proximo inteiro
    result[i] = {name, orbitalPeriod};
  };
  return result;
};

console.log(orbitalPeriod([
{name: "iss", avgAlt: 413.6},
{name: "hubble", avgAlt: 556.7},
{name: "moon", avgAlt: 378632.553}]));

/*
[ { name: 'iss', orbitalPeriod: 5557 },
  { name: 'hubble', orbitalPeriod: 5734 },
  { name: 'moon', orbitalPeriod: 2377399 } ]
 */
