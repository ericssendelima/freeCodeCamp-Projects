const Person = function(firstAndLast) {
  // Altere apenas o código abaixo desta linha
  // Complete o método abaixo e implemente os outros da mesma forma
  let fullName = firstAndLast;

  this.setFirstName = function(first){
    fullName = first + " " + fullName.split(" ")[1];
    };
  this.setLastName = function(last){
    fullName = fullName.split(" ")[0] + " " + last;
    };
  this.setFullName = function(name){
     fullName = name;
    };
 
 
  this.getFirstName = function(){
    return fullName.split(" ")[0];
    };
  this.getLastName = function(){
    return fullName.split(" ")[1];
    };
  this.getFullName = function(){
    return fullName;
    };
};

const bob = new Person('Bob Ross');
console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(Object.keys(bob));
