/* BENDITA CAIXA REGISTRADORA
Implemente uma função de caixa registradora checkCashRegister() que aceita o preço de compra como o primeiro argumento (price),
pagamento como o segundo argumento (cash) e dinheiro na registradora (cid) como o terceiro argumento.

cid é um array de duas dimensões listando a moeda disponível e a quantidade.

A função checkCashRegister() deve sempre retornar um objeto com a chave status e uma chave change.

Retorne {status: "INSUFFICIENT_FUNDS", change: []} se o dinheiro no caixa for menor que o troco devido, ou se você não pode retornar o troco exato.

Retorne {status: "CLOSED", change: [...]} com dinheiro no caixa como o valor para a chave change se for igual ao troco devido.

Caso contrário, retorne {status: "OPEN", change: [...]}, com o troco devido em moedas e notas, ordenado do maior para o menor, como o valor da chave change.

Unidade de moeda	Quantidade
Penny	            $0,01 (PENNY)
Nickel	          $0,05 (NICKEL)
Dime	            $0,1 (DIME)
Quarter	          $0,25 (QUARTER)
Dólar	            $1 (ONE)
Cinco dólares	    $5 (FIVE)
Dez dólares	      $10 (TEN)
Vinte dólares	    $20 (TWENTY)
Cem dólares	      $100 (ONE HUNDRED)
*/
function checkCashRegister(price, cash, cid) {
  let cents = {"QUARTER": 0, "DIME": 0, "NICKEL": 0, "PENNY": 0};
  let dols = {"ONE HUNDRED": 0, "TWENTY": 0, "TEN": 0, "FIVE": 0, "ONE": 0};
  let result = {status: "", change: []};
  let money = Object.fromEntries(cid);
  let totalMoney = Object.values(money).reduce((a, b) => a + b) * 100;
  let troco = (cash - price) * 100;

  //INÍCIO FUNÇÕES
  function temSaldo(moeda){
    if(moeda === 10000){
      return dols["ONE HUNDRED"] !== 0;
    }else if(moeda === 2000){
      return dols.TWENTY !== 0;      
    }else if(moeda === 1000){
      return dols.TEN !== 0;
    }else if(moeda === 500){
      return dols.FIVE !== 0;
    }else if(moeda === 100){
      return dols.ONE !== 0;
    }else if(moeda === 25){
      return cents.QUARTER !== 0;
    }else if(moeda === 10){
      return cents.DIME !== 0;      
    }else if(moeda === 5){
      return cents.NICKEL !== 0;
    }else if(moeda === 1){
      return cents.PENNY !== 0;
    };
  };
  
  function chaging(nomeMoeda, valorMoeda, newTroco){
    let control = 0;
    if(newTroco > 100){//troco começando por dols

        while(newTroco >= valorMoeda){
          dols[nomeMoeda] -= valorMoeda;
          newTroco -= valorMoeda;
          control += valorMoeda/100;
          if(!temSaldo(valorMoeda)){
            result.status = "OPEN";
            result.change.push([nomeMoeda, control]);
            return newTroco;
          };
        };
        result.status = "OPEN";
        result.change.push([nomeMoeda, control]);
        return newTroco;

    }else{//TROCO SOMENTE DE cents; ENTRA DIRETO NO CENTS

        while(newTroco >= valorMoeda){
          cents[nomeMoeda] -= valorMoeda;
          newTroco -= valorMoeda;
          control += valorMoeda/100;
          if(!temSaldo(valorMoeda)){
            result.status = "OPEN";
            result.change.push([nomeMoeda, control]);
            return newTroco;
          };
        };
        result.status = "OPEN";
        result.change.push([nomeMoeda, control]);
        return newTroco;
    };
  };

  function passaTroco(trocoF){
    if(trocoF > 10000){

      if(temSaldo(10000)){
        trocoF = chaging("ONE HUNDRED", 10000, trocoF);
      }else if(temSaldo(2000)){
        trocoF = chaging("TWENTY", 2000, trocoF);
      }else if(temSaldo(1000)){
        trocoF = chaging("TEN", 1000, trocoF);
      }else if(temSaldo(500)){
        trocoF = chaging("FIVE", 500, trocoF);
      }else if(temSaldo(100)){
       trocoF = chaging("ONE", 100, trocoF);
      }else if(temSaldo(25)){
        trocoF = chaging("QUARTER", 25, trocoF);
      }else if(temSaldo(10)){
        trocoF = chaging("DIME", 10, trocoF);
      }else if(temSaldo(5)){
        trocoF = chaging("NICKEL", 5, trocoF);
      }else if(temSaldo(1)){
        trocoF = chaging("PENNY", 1, trocoF);
      }else{
        result.status = "INSUFFICIENT_FUNDS";
        result.change = [];
        return result;
      };

    }else if(trocoF > 2000){

      if(temSaldo(2000)){
        trocoF = chaging("TWENTY", 2000, trocoF);
      }else if(temSaldo(1000)){
        trocoF = chaging("TEN", 1000, trocoF);
      }else if(temSaldo(500)){
        trocoF = chaging("FIVE", 500, trocoF);
      }else if(temSaldo(100)){
       trocoF = chaging("ONE", 100, trocoF);
      }else if(temSaldo(25)){
        trocoF = chaging("QUARTER", 25, trocoF);
      }else if(temSaldo(10)){
        trocoF = chaging("DIME", 10, trocoF);
      }else if(temSaldo(5)){
        trocoF = chaging("NICKEL", 5, trocoF);
      }else if(temSaldo(1)){
        trocoF = chaging("PENNY", 1, trocoF);
      }else{
        result.status = "INSUFFICIENT_FUNDS";
        result.change = [];
        return result;
      };
      
    }else if(trocoF > 1000){

      if(temSaldo(1000)){
        trocoF = chaging("TEN", 1000, trocoF);
      }else if(temSaldo(500)){
        trocoF = chaging("FIVE", 500, trocoF);
      }else if(temSaldo(100)){
       trocoF = chaging("ONE", 100, trocoF);
      }else if(temSaldo(25)){
        trocoF = chaging("QUARTER", 25, trocoF);
      }else if(temSaldo(10)){
        trocoF = chaging("DIME", 10, trocoF);
      }else if(temSaldo(5)){
        trocoF = chaging("NICKEL", 5, trocoF);
      }else if(temSaldo(1)){
        trocoF = chaging("PENNY", 1, trocoF);
      }else{
        result.status = "INSUFFICIENT_FUNDS";
        result.change = [];
        return result;
      }; 

    }else if(trocoF > 500){

      if(temSaldo(500)){
        trocoF = chaging("FIVE", 500, trocoF);
      }else if(temSaldo(100)){
       trocoF = chaging("ONE", 100, trocoF);
      }else if(temSaldo(25)){
        trocoF = chaging("QUARTER", 25, trocoF);
      }else if(temSaldo(10)){
        trocoF = chaging("DIME", 10, trocoF);
      }else if(temSaldo(5)){
        trocoF = chaging("NICKEL", 5, trocoF);
      }else if(temSaldo(1)){
        trocoF = chaging("PENNY", 1, trocoF);
      }else{
        result.status = "INSUFFICIENT_FUNDS";
        result.change = [];
        return result;
      };

    }else if(trocoF > 100){

      if(temSaldo(100)){
       trocoF = chaging("ONE", 100, trocoF);
      }else if(temSaldo(25)){
        trocoF = chaging("QUARTER", 25, trocoF);
      }else if(temSaldo(10)){
        trocoF = chaging("DIME", 10, trocoF);
      }else if(temSaldo(5)){
        trocoF = chaging("NICKEL", 5, trocoF);
      }else if(temSaldo(1)){
        trocoF = chaging("PENNY", 1, trocoF);
      }else{
        result.status = "INSUFFICIENT_FUNDS";
        result.change = [];
        return result;
      };

    }else if(trocoF > 25){
      
      if(temSaldo(25)){
        trocoF = chaging("QUARTER", 25, trocoF);
      }else if(temSaldo(10)){
        trocoF = chaging("DIME", 10, trocoF);
      }else if(temSaldo(5)){
        trocoF = chaging("NICKEL", 5, trocoF);
      }else if(temSaldo(1)){
        trocoF = chaging("PENNY", 1, trocoF);
      }else{
        result.status = "INSUFFICIENT_FUNDS";
        result.change = [];
        return result;
      };    
       
    }else if(trocoF > 10){

      if(temSaldo(10)){
        trocoF = chaging("DIME", 10, trocoF);
      }else if(temSaldo(5)){
        trocoF = chaging("NICKEL", 5, trocoF);
      }else if(temSaldo(1)){
        trocoF = chaging("PENNY", 1, trocoF);
      }else{
        result.status = "INSUFFICIENT_FUNDS";
        result.change = [];
        return result;
      };

    }else if(trocoF > 5){

      if(temSaldo(5)){
        trocoF = chaging("NICKEL", 5, trocoF);
      }else if(temSaldo(1)){
        trocoF = chaging("PENNY", 1, trocoF);
      }else{
        result.status = "INSUFFICIENT_FUNDS";
        result.change = [];
        return result;
      };

    }else if(trocoF > 1){

      if(temSaldo(1)){
        trocoF = chaging("PENNY", 1, trocoF);
      }else{
        result.status = "INSUFFICIENT_FUNDS";
        result.change = [];
        return result;
      };
    };
      troco = trocoF;
      return troco;
  };
  //FIM FUNÇÕES

  for(let keyM in money){//atualização dos valores em caixa
    if(cents.hasOwnProperty(keyM)){
      cents[keyM] = Math.ceil(money[keyM] * 100);
    }else if(dols.hasOwnProperty(keyM)){
      dols[keyM] = money[keyM] * 100;
    };
  };

  if(troco === totalMoney){
    result.status = "CLOSED";
    result.change = cid;
    return result;
  }else if(troco > totalMoney){
    result.status = "INSUFFICIENT_FUNDS";
    return result;
  }else if(troco > 100){
    while(troco > 0){
      troco = passaTroco(troco);
     };
     return result;
  }else{
    while(troco > 0){
      troco = passaTroco(troco);
     };
     return result;
  };
};
//{ status: 'OPEN', change: [ [ 'QUARTER', 0.5 ] ] }
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25],
                                         ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

//{ status: 'OPEN', change: [ [ 'TWENTY', 60 ], [ 'TEN', 20 ], [ 'FIVE', 15 ], [ 'ONE', 1 ], ['QUARTER', 0.5 ], [ 'DIME', 0.2 ], [ 'PENNY', 0.04 ] ] }
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90],
                                          ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

//{status: "INSUFFICIENT_FUNDS", change: []}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0],
                                         ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

//{status: "INSUFFICIENT_FUNDS", change: []}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0],
                                         ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

//{ status: 'CLOSED', change: [ [ 'PENNY', 0.5 ], [ 'NICKEL', 0 ], [ 'DIME', 0 ], [ 'QUARTER', 0 ], [ 'ONE', 0 ], ['FIVE',0 ], [ 'TEN', 0 ],
//                            [ 'TWENTY', 0 ], [ 'ONE HUNDRED', 0 ] ] }
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0],
                                         ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
