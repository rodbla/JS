/* ciclo y bucles son sinonimos */

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

//la forma que ya sabemos para imprimir una secuencia en consola

/* PERO ESTO SE PUEDE HACER CON UN CICLO */

//Los ciclos son herramientas que nos permiten repetir un bloque de
//instrucciones cierta cantidad de veces

/* QUE TIPOS DE CICLOS TENEMOS EN JS? */

//Ciclos por conteo y ciclos condicioneales.
//Ciclo por conteo: repite un bloque de codigo un numero de veces especifico. 
//Por ej, ciclo for
//Ciclo condicional: Repite un bloque de codigo mientras la condicion evaluada sea verdadera.
// Por ej ciclo while - do while

/* CICLO FOR */
/* 
    SINTAXIS:
    for(desde; hasta; actualizacion){
        CODIGO QUE SE REPITE
    }

*/

//Ejemplo A. Quiero mostrar "Hola Mundo" 10 veces por consola:

console.log("Ejemplo A:")

for(let i = 0; i < 10; i = i + 1){
    console.log("Hola Mundo");
}

//Ejemplo B. Si quiero que me comience a contar desde 1 y que incluya al 10.

console.log("Ejemplo B: ")

for(let i = 1; i <= 10; i = i + 1){
    console.log("Hola Mundo, otra vez", i)
}

//La actualizacion es que valor va a tomar i en cada vuelta del ciclo
// i = i + 1
// 1 = 1 + 1
// si no, en vez del i + 1, se puede escribir como i++

//Ejemplo C. Si quiero que cuente desde 10 hasta 0.

console.log("Ejemplo C: ")

for(let i = 10; i >= 0; i--){
    console.log("Chau Mundo", i)
}

//Ejemplo D. Si quiero mostrar por consola los numeros pares entre 0 y 10

console.log("Ejemplo D: ")

for(let i = 0; i <= 10; i = i + 2){
    console.log(i)
}

//Otra forma de hacerlo

console.log("Otra forma de hacerlo: ")

for(let i = 0; i <= 10; i++){
    if(i % 2 == 0){
        console.log(i, "Es par")
    }
}

/* Sentencia break: Me permite interrumpir un ciclo.*/

//Ejemplo E. Pido una contra al usuario hasta que la ingrese correctamente.

/* let passwordUsuario = prompt("Ingrese su contra: ");
const passwordAutorizado = 1234;

for( let i = 0; i < 2; i++){
    if(passwordUsuario == passwordAutorizado){
        console.log("Contra correcta, podes pasar pa");
        break;
    } else{
        passwordUsuario = prompt("Contra incorrecta, intenta nuevamente: ")
    }
} */

/* Sentencia continue: me permite saltear una iteracion. */

//Ejemplo F: Muestro los numeros del 0 al 6 pero salteando los num pares.

console.log("Ejemplo F: ")

for(let i = 0; i <= 6; i++){
    if( i % 2 == 0){
        continue
    }
    console.log(i)
}

// El operador % nos retorna el resto de la division.
// Si el resto es 0, es par.
// Si el resto es 1, es impar

/* CICLO WHILE */
//El ciclo While es un ciclo que se ejecuta mientras la condicion evaluada sea verdadera.

//Ejemplos While

//Ejemplo G. Ingresa tu nombre, si pones salir, te lo deja de pedir

/* console.log("Ejemplo G: ")

let nombre = prompt("Ingrese su nombre: (Para salir ingrese salir)")

while(nombre != "salir"){
    console.log(nombre);
    nombre = prompt("Ingrese su nombre: (Para salir ingrese salir)");
} */

// CUIDADO CON LOS CICLOS INFINITOS

/* CICLO DO WHILE */
//La dif del do while con el while, es que el do while se ejecuta al menos una vez

//Ejemplo H

/* console.log("Ejemplo H: ")

const pass = 1234;
let passIngresado;

do{
    passIngresado = prompt("Ingrese su password: ");
}while(passIngresado != pass); */

/* ESTRUCTURA SWITCH */

//Esta especialmente diseñado para manejar de forma sencilla multiples condiciones sobre
//la misma variable

/* let clima = prompt("Ingrese el clima de su ciudad: ");

switch(clima){
    case "lluvia":
        console.log("Mira netflix tranquilo en tu casa");
        break;
    case "nublado":
        console.log("Hermoso dia para un asado");
        break;
    case "soleado":
        console.log("Nos vamos a la playa");
        break;
    case "frio":
        console.log("A mimir");
        break;
    default:
        console.log("Pusiste cualquier cosa");
        break;
} */

/* EJEMPLO CALCULADORA CON SWITCH */

let valorUno = parseInt(prompt("Ingrese el primer valor: "))
let valorDos = parseInt(prompt("Ingrese el segundo valor: "))
let operacion = prompt("Ingrese la operacion a realizar: (+, -. *, /)")
while (operacion != "+" && operacion != "-" && operacion != "*" && operacion != "/"){
    operacion = prompt("Ingrese la operacion a realizar: (+, -. *, /)")
}

switch(operacion){
    case "+":
        console.log(valorUno + valorDos)
        break
    case "-":
        console.log(valorUno - valorDos)
        break
    case "*":
        console.log(valorUno * valorDos)
        break
    case "/":
        console.log(valorUno / valorDos)
        break
    default:
        console.log("Esto no se va a ejecutar nunca porque ya lo validamos antes")
        break
}