//Write a JavaScript program to construct the following pattern, using a nested for loop.

let divAlert2 = document.getElementById("divAlert2");

// Define el número de filas que quieres imprimir
const numRows = 5;
let resultado = '';

// Itera sobre cada fila e imprime el patrón
for (let i = 1; i <= numRows; i++) {
  let row = '';

  // Crea la cadena de asteriscos para cada fila
  for (let j = 1; j <= i; j++) {
    row += '*';
  }

  // Imprime la fila
  console.log(resultado += row );
}

