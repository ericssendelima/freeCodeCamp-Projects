/*Os parâmetros resolve e reject passados para o argumento da promessa servem para este propósito.
resolve é utilizado quando a promessa for bem-sucedida, enquanto reject é utilizado quando ela falhar.
Ambos são métodos que recebem apenas um argumento

*/
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer está definido como falso para representar uma resposta sem sucesso de um servidor
  let responseFromServer = false;

  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error => {
  console.log(error);
}); //catch é o método usado quando a promessa é rejeitada. Ele é executado imediatamente após o método reject da promessa ser chamado. 
//Adicione o método catch à sua promessa. Use error como parâmetro de sua função de callback e exiba o valor de error no console.
