
function countdown(n){
  
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }

}

console.log(countdown(5));  //[5, 4, 3, 2, 1]

/*
function countdown(n){
   return n < 1 ? [] : [n, ...countdown(n - 1)];
}


se mudar a linha 8 para arr.push,
o resultado será [1, 2, 3, 4, 5]
*/
