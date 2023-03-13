class Vegetable{
  constructor(name){
    this.name = name;
  }
};

const veg = new Vegetable("carrot");

console.log(veg.name);

// GETTER AND SETTER
/*
Funções getter tem a finalidade de simplesmente retornar (get)
o valor de uma variável privada de um objeto para o usuário sem
que o usuário acesse diretamente a variável privada.
Funções setter tem a finalidade de modificar, ou definir (set),
o valor de uma variável privada de um objeto baseado no valor 
passado dentro da função setter. 
*/

/*
Use a palavra-chave class para criar a classe Thermostat.
O constructor aceita uma temperatura Fahrenheit.
Na classe, crie um getter para obter a temperatura em Celsius
e um setter para definir a temperatura em Celsius.
*/

class Thermostat{
  constructor(t){
    this._temp = ((5/9) * (t - 32));
  }
  get temperature() {
    return this._temp;
  }
  set temperature(updateTemp) {
    this._temp = updateTemp;
  }
}

const thermos = new Thermostat(76); // Definição na escala Fahrenheit
let temp = thermos.temperature; // 24,44 em Celsius

thermos.temperature = 26;

temp = thermos.temperature; // 26 em Celsius
