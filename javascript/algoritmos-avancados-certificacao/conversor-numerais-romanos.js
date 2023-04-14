function convertToRoman(num) {
  let mil = 0;
  let cent = 0;
  let dez = 0;
  let un = 0;
  let result = "";
  let rom = {
    1: "I", 4: "IV", 5: "V", 9: "IX", 10: "X", 40: "XL", 50: "L", 90: "XC", 100: "C", 400: "CD", 500: "D", 900: "CM", 1000: "M"
  };

  if(num.toString().length === 4){
    mil = Math.trunc(num/1000) * 1000
      
        
        if(mil === 3000){
          result += rom[1000].repeat(3);
        }else if(mil === 2000){
          result += rom[1000].repeat(2);
        }else{
          result += rom[1000];
        };
      

    cent = (Math.trunc(num/100) * 100) - mil;//700

    if(cent === 900) result += rom[900];
    if(cent > 500 && cent < 900){
      result += rom[500];
      if(cent - 500 === 300){
        result += rom[100].repeat(3);
      }else if(cent - 500 === 200){
        result += rom[100].repeat(2);
      }else{
        result += rom[100];
      };
    };
    if(cent === 500) result += rom[500];
    if(cent === 400) result += rom[400];
    if(cent >= 100 && cent < 400){
      if(cent - 400 === 300){
        result += rom[100].repeat(3);
      }else if(cent - 400 === 200){
        result += rom[100].repeat(2);
      }else{
        result += rom[100];
      };
    };

    dez = Math.trunc((num % 100) / 10) * 10;//90
     if(dez === 90){
       result += rom[90];
     }else if(dez > 50 && dez < 90){
        result += rom[50];
        if(dez - 50 === 30){
          result += rom[10].repeat(3);
        }else if(dez - 50 === 20){
          result += rom[10].repeat(2);
        }else{
          result += rom[10];
        };
      };
      if(dez === 50) result += rom[50];
      if(dez === 40) result += rom[40];
      if(dez >= 10 && dez < 40){
        if(dez === 30){
          result += rom[10].repeat(3);
        }else if(dez === 20){
          result += rom[10].repeat(2);
        }else{
          result += rom[10];
        };
      };

    un = (num % 100) % 10;//8
    if(un === 9) result += rom[9];
    if(un > 5 && un < 9){
        result += rom[5];
        if(un - 5 === 3){
          result += rom[1].repeat(3);
        }else if(un - 5 === 2){
          result += rom[1].repeat(2);
        }else{
          result += rom[1];
        };
      };
      if(un === 5) result += rom[5];
      if(un === 4) result += rom[4];
      if(un >= 1 && un < 4){
        if(un === 3){
          result += rom[1].repeat(3);
        }else if(un === 2){
          result += rom[1].repeat(2);
        }else{
          result += rom[1];
        };
      };


  }else if(num.toString().length === 3){
    cent = Math.trunc(num/100) * 100;//700
    if(cent === 900) result += rom[900];
    if(cent > 500 && cent < 900){
      result += rom[500];
      if(cent - 500 === 300){
        result += rom[100].repeat(3);
      }else if(cent - 500 === 200){
        result += rom[100].repeat(2);
      }else{
        result += rom[100];
      };
    };
    if(cent === 500) result += rom[500];
    if(cent === 400) result += rom[400];
    if(cent >= 100 && cent < 400){
      if(cent - 400 === 300){
        result += rom[100].repeat(3);
      }else if(cent - 400 === 200){
        result += rom[100].repeat(2);
      }else{
        result += rom[100];
      };
    };

    dez = Math.trunc((num % 100) / 10) * 10;//90
     if(dez === 90){
       result += rom[90];
     }else if(dez > 50 && dez < 90){
        result += rom[50];
        if(dez - 50 === 30){
          result += rom[10].repeat(3);
        }else if(dez - 50 === 20){
          result += rom[10].repeat(2);
        }else{
          result += rom[10];
        };
      };
      if(dez === 50) result += rom[50];
      if(dez === 40) result += rom[40];
      if(dez >= 10 && dez < 40){
        if(dez === 30){
          result += rom[10].repeat(3);
        }else if(dez === 20){
          result += rom[10].repeat(2);
        }else{
          result += rom[10];
        };
      };

    un = (num % 100) % 10;//8
    if(un === 9) result += rom[9];
    if(un > 5 && un < 9){
        result += rom[5];
        if(un - 5 === 3){
          result += rom[1].repeat(3);
        }else if(un - 5 === 2){
          result += rom[1].repeat(2);
        }else{
          result += rom[1];
        };
      };
      if(un === 5) result += rom[5];
      if(un === 4) result += rom[4];
      if(un >= 1 && un < 4){
        if(un === 3){
          result += rom[10].repeat(3);
        }else if(un === 2){
          result += rom[1].repeat(2);
        }else{
          result += rom[1];
        };
      };

  }else if(num.toString().length === 2){
    dez = Math.trunc((num % 100) / 10) * 10;
     if(dez === 90){
       result += rom[90];
     }else if(dez > 50 && dez < 90){
        result += rom[50];
        if(dez - 50 === 30){
          result += rom[10].repeat(3);
        }else if(dez - 50 === 20){
          result += rom[10].repeat(2);
        }else{
          result += rom[10];
        };
      };
      if(dez === 50) result += rom[50];
      if(dez === 40) result += rom[40];
      if(dez >= 10 && dez < 40){
        if(dez === 30){
          result += rom[10].repeat(3);
        }else if(dez === 20){
          result += rom[10].repeat(2);
        }else{
          result += rom[10];
        };
      };

    un = (num % 100) % 10;
    if(un === 9) result += rom[9];
    if(un > 5 && un < 9){
        result += rom[5];
        if(un - 5 === 3){
          result += rom[1].repeat(3);
        }else if(un - 5 === 2){
          result += rom[1].repeat(2);
        }else{
          result += rom[1];
        };
      };
      if(un === 5) result += rom[5];
      if(un === 4) result += rom[4];
      if(un >= 1 && un < 4){
        if(un === 3){
          result += rom[1].repeat(3);
        }else if(un === 2){
          result += rom[1].repeat(2);
        }else{
          result += rom[1];
        };
      };
    
  }else if(num.toString().length === 1){
    un = (num % 100) % 10;
    if(un === 9) result += rom[9];
    if(un > 5 && un < 9){
        result += rom[5];
        if(un - 5 === 3){
          result += rom[1].repeat(3);
        }else if(un - 5 === 2){
          result += rom[1].repeat(2);
        }else{
          result += rom[1];
        };
      };
      if(un === 5) result += rom[5];
      if(un === 4) result += rom[4];
      if(un >= 1 && un < 4){
        if(un === 3){
          result += rom[1].repeat(3);
        }else if(un === 2){
          result += rom[1].repeat(2);
        }else{
          result += rom[1];
        };
      };
    
  }
  return result;
}

console.log(convertToRoman(3999));// MMMCMXCIX

