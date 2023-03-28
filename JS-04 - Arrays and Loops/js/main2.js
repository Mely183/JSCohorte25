//Write a JavaScript program to construct the following pattern, using a nested for loop.

let divAlert2 = document.getElementById("divAlert2");

// Define el número de filas que quieres imprimir
const numRows = 5;
let resultado = '';
let i = 1
let j = 1
// Itera sobre cada fila e imprime el patrón
for (i; i <= numRows; i++) {
  let row = '';

  // Crea la cadena de asteriscos para cada fila
  for (j ; j <= i; j++) {
    row += '*';
  }

  // Imprime la fila
  console.log(resultado += row );
}



// console.log("**************WHILE***************");
// let rows = 5;
// let result = '';
// let i = 1
// //while(i <= rows){
//     let rows = ' ';
//     let j = 1;
//     while(j <= i){
//         rows += '*';
//         j++;
//     }
// }


