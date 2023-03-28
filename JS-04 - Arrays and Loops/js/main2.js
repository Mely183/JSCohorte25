//Write a JavaScript program to construct the following pattern, using a nested for loop.

let divAlert2 = document.getElementById("divAlert2");

//--------------------Ciclo FOR---------------------------------------

// Define el número de filas que quieres imprimir
const numRows = 5;
let resultado = '';
let i = 1
let j = 1
// Itera sobre cada fila e imprime el patrón
for (i; i <= numRows; i++) {
  let row = '';

  // Crea la cadena de asteriscos para cada fila
  for (j; j <= i; j++) {
    row += '*';
  }

  // Imprime la fila
  console.log(resultado += row );
}

console.log('\n') //---> asi podemos hacer salto de linea en JS 

//--------------------Ciclo WHILE---------------------------------------

console.log("**************WHILE***************");
console.log('\n')
let rows = 5;
let result = '';
let m = 1;
let n = 1;
 while(m <= rows){
     let rows = ' ';
     let n = 1;
    while(n <= m){
        rows += '*';
        n++;
    }
    console.log(result += rows);
    m++
}


