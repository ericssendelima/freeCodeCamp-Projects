/*
Dois princípios diferentes de programação funcional:

Não altere variáveis ou objetos: crie novas variáveis ou objetos e os retorne, caso necessário, de uma função. 

Declare parâmetros de funções: qualquer computação dentro de uma função depende apenas dos argumentos passados a ela; nunca de uma variável ou objeto global.
*/
// A variável global
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Altere o código abaixo desta linha
function add(arr, bookName) {
  let newBookList = [...arr];
  

  newBookList.push(bookName);
  return newBookList;

  // Altere o código acima desta linha
}

// Altere o código abaixo desta linha
function remove(arr, bookName) {
   let newBookList = [...arr];

  const book_index = newBookList.indexOf(bookName);
  if (book_index >= 0) {

    newBookList.splice(book_index, 1);
    return newBookList;

    // Altere o código acima desta linha
    }
}


console.log(add(bookList, "A Brief History of Time"));
/*[ 'The Hound of the Baskervilles',
  'On The Electrodynamics of Moving Bodies',
  'Philosophiæ Naturalis Principia Mathematica',
  'Disquisitiones Arithmeticae',
  'A Brief History of Time' ]
e bookList permanece inalterado!

  */
