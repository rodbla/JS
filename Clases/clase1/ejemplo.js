/* CALCULADORA DE INDICE DE MASA CORPORAL */

// let peso = parseInt(prompt("Ingrese su peso: "));
// let estatura = parseInt(prompt("Ingrese su estatura: "));
// let imc = peso / (estatura * estatura);

// console.log("El indice de masa corporal es de: " + (imc * 10000));

//multiplicamos el IMC asi saca los 0 de adelante

let peso = parseInt(prompt("Ingresa tu peso (kg):"));
let estatura = parseInt(prompt("Ingresa tu estatura (m):"));
let imc = (peso / (estatura * estatura)) * 10000;
console.log("Tu indice de masa corporal es " + imc);
alert("Tu indice de masa corporal es " + imc);
