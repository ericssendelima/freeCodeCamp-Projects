function reverseString(str) {
  let arr = "";  
  for(let i = str.length - 1; i >= 0; i--){
    arr += str[i];
  };
  return arr;
};

console.log(reverseString("hello"));
console.log(reverseString("Howdy"));

/*
function reverseString(str) {
  return str
    .split("") //separa
    .reverse() //reverte
    .join(""); //junta
}
*/ 
