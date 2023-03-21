let n = 0;
function factorialize(num) {
   if(num < 2){
     return 1       
   }else{     
   n = factorialize(num-1)  * num ;
   console.log(n);
  };
  return n; 
};
factorialize(5);
