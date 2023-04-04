/*
- Se uma palavra começar com uma consoante,
 tire a primeira consoante ou grupo de consoantes,
  mova-a para o final da palavra e adicione ay a ela.

- Se uma palavra começar com uma vogal, basta adicionar way no final.
 */
function translatePigLatin(str) {
  let control = /^[aeiou]/;//Vogal no início

  if(control.test(str)){
    return `${str}way`;//repete a string + "way"
  }else{
    return `${str.replace(/(^[^aeiou]+)([aeiou]+\w+)/g, '$2$1')}ay`;
    //captura todas consoantes até a vogal, as coloca no final + "ay"
  };
};

console.log(translatePigLatin("glove"));//oveglay
console.log(translatePigLatin("eight"));//eightway
