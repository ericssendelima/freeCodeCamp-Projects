/*
Trunque uma string (primeiro argumento) se ela for maior que o comprimento máximo da string (segundo argumento). Retorne a string truncada com ... (reticências) ao final.

function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}
*/

function truncateString(str, num) {
  let arr = "";
  if(str.length > num){
    for(let i = 0; i < num; i++){
      arr += str[i];
    };
  }else{
    return str
  };
  return `${arr}...`;
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);
