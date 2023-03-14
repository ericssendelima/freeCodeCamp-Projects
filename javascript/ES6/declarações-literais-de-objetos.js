//Use a abreviação de propriedade de objeto com literais de objeto para criar e retornar um objeto com as propriedades name, age e gender
const createPerson = (name, age, gender) => { return { name, age, gender } };

/*
createPerson("Zodiac Hasbro", 56, "male") deve retornar 
{name: "Zodiac Hasbro", age: 56, gender: "male"}.

const getMousePosition = (x, y) => ({
  x: x,
  y: y
});

const getMousePosition = (x, y) => ({ x, y }); É A MESMA COISA QUE O ANTERIOR
*/

//FUNÇÕES DECLARATIVAS
//Com ES6, você pode remover a palavra-chave function e dois pontos ao definir funções em objetos.
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
//
bicycle.setGear(3);
console.log(bicycle.gear);
