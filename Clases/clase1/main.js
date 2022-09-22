/* SINTAXIS */ //////////////////////////////////////////////////////////////
// Recuerden que la PC lee de arriba hacia abajo

// En JS tambien se pueden incluir comentarios
/*esto es un comentario en bloque*/
//esto es un comentario en linea

// No se tiene en cuenta los espacios en blanco y las nuevas lineas, igual que en HTML

//El console log es para ver valores en la consola del nav
console.log("Hola");
console.log("Mundo")

//Es case sensitive

let estoEsUnEjemplo; //Esto es camlelCase
let estoesunejemplo; //Esto es un mamarracho

//Pueden terminan cada linea sin el ";"

// Hay que tener cuidado con las palabras reservadas.
// Por ej, break, case, catch, continue, default, let, delete, do, else, finally, for
//function, if, in, instanceof, new, return, switch, this, throw, try, typeof, var,
//void, while, with, y varias mas

/* TIPOS DE DATOS / Valores */ //////////////////////////////////////////////////////////////

1234567890 // Number = numeros que vamos a utilizar en operaciones matematicas

"Esto es un string 12345 @" // String = cadena de caracteres
'Tambien se pueden utilizar las comillas simples'

true
false // Booleanos = puede tomar dos valores, verdadero o falso

null // Valor que es nulo

undefined // Valor que todavia no esta definido

/* VARIABLES */ //////////////////////////////////////////////////////////////

//Una variable es un espacio de memoria que reservamos para almacernar
//informacion importante durante la ejecucion del programa

//Declaramos variables

let nombreAlumno;
let edad;
let anioNacimiento; //Se puede usar la ñ, pero no es recomendado

//Asignamos valores

nombreAlumno = "Samuel";
console.log(nombreAlumno); //para ver el valor de la variable en la consola

//Inicializando variables
let nombre = "Pepelepu"; // Estoy declarando y asignando un valor al mismo tiempo

let curso = "JavaScript";
console.log(curso);
curso = 10; //Le cambiamos el valor a la variable
console.log(curso);
let cuotaAlDia = true;

/* CONSTANTES */

//Una constante recibe una unica asignacion al momento de su declaracion
//impidiendo que su valor se modifique despues

const iva = 1.21;
const pi = 3.1416;
const anioNacimientoAlumno = 1999;

/* OPERACIONES BASICAS CON VARIABLES */

//Puedo realizar operaciones matematicas con variables

let valorUno = 8;
let valorDos = 10;

let promedio = (valorUno + valorDos) / 2;
console.log(promedio); //chequeamos el resultado en la consola a ver si funciono

//Puedo concatenar datos

let nombreCliente = "Carlitos";
let valorCompra = 10000;

let mensaje = nombreCliente + " el valor de su compra es " + valorCompra;
console.log(mensaje)

/* SENTENCIAS PROMPT Y ALERT */
//La sentencia prompt mostrara un cuadro de dialogo en el medio del navegador para que el usuario
//ingrese un dato. Se puede proporcionar un mensaje que se colocara sobre el campo de texto.

let nombreAlumnoNuevo = prompt("Ingrese el nombre del alumno: "); //Aca se almacena como variable

//El prompt siempre devuelve un String o un Null. Para que te tome un number, usamos el parseInt
//Si al cuadro de dialogo le das cancelar, el valor queda como null

let notaPrimerParcial = parseInt(prompt("Ingrese la nota de su primer parcial: "));
let notaSegundoParcial = parseInt(prompt("Ingrese la nota de su segundo parcial: "));

console.log("El alumno " + nombreAlumnoNuevo + " Primer nota: " + notaPrimerParcial + 
" Segunda nota: " + notaSegundoParcial);

//El alert me muestra un mensaje en el navegador

let mensajeDespedida = "Chau nos vemos";
alert(mensajeDespedida);