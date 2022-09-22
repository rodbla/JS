/* FUNCIONES */

// Que es una funcion?
// Es un conjunto de instrucciones que se agrupan para realizar una tarea concreta.

// Que ventajas tiene trabajar con funciones?
//Evitas instrucciones duplicadas
//Soluciona un problema complejo usando tareas sencillas
//Focaliza tareas prioritarias para el programa
//Aporta ordenamiiento y entendimiento al codigo
//Aporta facilidad y rapidez para hacer modificaciones

//Como trabajo con funciones:

//1. Declaro funciones: 

function holaMundo(){
    alert("Hola Mundo");
}

//2. Llamamos a la funcion

/* holaMundo(); */

//Se declara a travers de la palabra reservada function. Deben tener un nombre en minuscula
//y sin espacios, seguido de los ().
//El contenido de la funcion se escribe entre las {}.
//El nombre de la fucnion declarada no se puede repetir.

//Hay funciones simples que no necesitan ningun dato para funcionar.
//Pero otras mas complejas necesitan informacionque se recibe por "parametros".

//Los parametros se envian a la funcion mediante variables y se colocan
//entre los parentesis posteriores al nombre de la funcion.

function saludar(nombre) {
    alert ("Hola " + nombre + " bienvenido a la clase!!!");
}

let nombreAlumno = "Samuel";
/* saludar(nombreAlumno); */

//Otro ej

/* function tomas(){
    let nombre = prompt("Escriba su nombre");
    saludar(nombre);
} */

//Tenemos otras funciones que ademas me retornan un valor que me permite
//seguir trabajando con el

function sumaConRetorno(numeroA, numeroB){
    let resultado = numeroA + numeroB;
    return resultado;
}

let resultadoDeLaSuma = sumaConRetorno(40,100);
/* alert("El resultado de la suma con retorno es de " + resultadoDeLaSuma); */


////Vimos suma con retorno, veamos resta con retorno

function restaConRetorno(numeroA, numeroB){
    return numeroA - numeroB;
}

let resultadoDeLaResta = restaConRetorno(500,400);
console.log("Resta: ");
console.log(resultadoDeLaResta);

/* SCOPE O ALCANCE DE LAS VARIABLES */
//El scope o ambito de una variable es la zona del programa en la cual se define
//el contecto al que pertenece la misma dentro del algoritmo.

//JS define dos ambitos para las variables: gloabl y local.

let global = 10;
function ejemploA(){
    console.log(global);
}

ejemploA();

//Las variables globales son aquellas que estna declaradas por fuera de las funciones
//por ende se pueden usar en todas las funciones

//Ejemplo variable local

function ejemploB(){
    let resultadoEjemploB = 10 + 10;
}

/* console.log(resultadoEjemploB) */             //No lo va a leer xq esa variable es local

//FUNCION ANONIMA:

//Una funcion anonima es quella que se define sin nombre y se utiliza
//para ser pasada por parametro o asignada a una variable.

let sumaAnonima = function (a,b){
    return a + b;
}

console.log(sumaAnonima(1000,500));

//Ej resta anonima

let restaAnonima = function (a,b) {return a - b};

console.log(restaAnonima(10000,sumaAnonima(1500,1500))); //Hicimos inception de funciones

//FUNCION FLECHA:
//Identificamos a la funciones flecha como funciones anonimas de sintaxis simplificada.

let division = (a,b) => {
    return a / b;
}

console.log("Division con funcion flecha: ");
console.log(division(100,10));

//Otro ejemplo de funcion flecha con un unico parametro y retorno.

let nombre = nombre => console.log("Hola " + nombre);
nombre("Pepelepu");