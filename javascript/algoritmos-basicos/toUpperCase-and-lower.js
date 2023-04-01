function titleCase(str) {
  let result = str.split(" ")
                  .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase())
  return result.join(" ");
};

/*function titleCase(str) {
  let arr = str.split(" ")
  let result = "";
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === "the" || arr[i] === "of"){
      result += arr[i].toUpperCase();
    }else{
      result += arr[i].charAt(0).toUpperCase();
      for(let j = 1; j < arr[i].length; j++){
        result += arr[i].charAt(j).toLowerCase();
      };
    };
    result += " ";
  };
  return result;
}
*/
console.log(titleCase("I'm a little tea pot"));
