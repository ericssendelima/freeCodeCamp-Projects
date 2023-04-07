/* 
Converta os caracteres &, <, >, " (aspas duplas)
 e ' (aspas simples), em uma string para suas 
 entidades HTML correspondentes.
*/

function convertHTML(str) {
  let txt = str.match(/./g);
  let result = "";  
    
  txt.map(char => {
    if((/\W/).test(char)){
      switch(char){
        case "&":
          char = "&amp;";
          break;
        case "<":
          char = "&lt;";
          break;
        case ">":
          char = "&gt;";
          break;
        case "\"":
          char = "&quot;";
          break;
        case "\'":
          char = "&apos;";
          break;
        default:
          char = " ";
          break;
      };
    };
    result+=char
 });
  return result;
};

console.log(convertHTML("Dolce & Gabbana"));//Dolce &amp; Gabbana

/*
& == &amp;
< == &lt;
> == &gt;
" == &quot;
' == &apos;
*/
