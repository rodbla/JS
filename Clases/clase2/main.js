/* TIPOS DE DATOS: BOOLEANO */ /////////////////////////////////////////////////
//Admite dos valores: verdadero o falso

let verdadero = true;
let falso = false;

console.log(verdadero, typeof verdadero); //esto lo hacemos para ver el valor en la consola del navegador
console.log(falso, typeof falso);

//typeof = me permite saber que tipo de dato esta almacenado en una variable

let number = "Hola mundo";
console.log(number, typeof number);

/* CONDICIONALES */ /////////////////////////////////////////////////


let esSoleado = true;

//Si es soleado es true, muestra el primer alert y dsps el segundo, sino se saltea el primero y
//muestra el segundo
/* if(esSoleado) {
    alert("Es un dia soleado, nos vamos a la playa"); LO COMENTE ASI NO MOLESTA MAS ADELANTE
}
alert("Fin del codigo, gracias vuelva prontos"); */

// Las varialbes booleanas pueden recibir el valor a partir de una evaluacion booleana
// sobre otras variables.

let ejemploUno = 3 > 0; //esto da verdadero o falso? es TRUE, entonces se almacena un true
console.log("Ejemplo uno: ");
console.log(ejemploUno, typeof ejemploUno);

/* OPERADORES LOGICOS */ /////////////////////////////////////////////////
// Estos operadores son comunes a todos los lenguajes de programacion.

// == Igual, el doble = se usa para verificar que dos datos sean iguales

let ejemploDos = (54 == 53); //Esto es false
console.log("Ejemplo Dos: ");
console.log(ejemploDos, typeof ejemploDos);

// === Estrictamente igual, compara el valor y el tipo de dato

let ejemploTres = (54 === "54"); //Esto es false
console.log("Ejemplo Tres: ");
console.log(ejemploTres, typeof ejemploTres);

// != es distinto // !== estrictamente distinto

let ejemploCuatro = (76 !== "76"); //Esto es true, porque son diferentes tipos de datos
console.log("Ejemplo Cuatro: ");
console.log(ejemploCuatro);

// menor <, menor o igual <=, mayor >, mayor o igual =>

let ejemploCinco = (10 >= 10); //Esto es true
console.log("Ejemplo Cinco: ");
console.log(ejemploCinco);

/* OPERADOR NOT !*/ /////////////////////////////////////////////////

let clima = "soleado";

let ejemploSeis = (clima != "lluvioso"); //clima NO es igual a lluvioso, pero ende es true
console.log("Ejemplo Seis: ")
console.log(ejemploSeis)

/* OPERADOR AND && Y OR  ||*/ /////////////////////////////////////////////////

let temperatura = 30;

let ejemploSiete = (temperatura >= 40) && (clima == "soleado");//Esto es false, xq la primera condicion no se cumple
console.log("Ejemplo Siete: ");
console.log(ejemploSiete);

// && = se tienen que cumplir las dos condiciones para que sea true.
// || = se tiene que cumplir una condicion por lo menos para que de true.

/* PRACTICAMOS CON CONDICIONALES */ /////////////////////////////////////////////////

/* let edad = parseInt(prompt("Ingrese su edad: ")); //el pareint es para que tome la rta como dato numerico
// comente para hacer otros ejemplos
if(edad < 12 ){
    alert("Sos un niño!");
}else if(edad >= 12 && edad <= 16){
    alert("Estas en la pubertad!");
}else if(edad > 16 && edad <= 19){
    alert("Estas en la adolesencia!");
}else{
    alert("Estas viejo!");
} */

//Si todo es falso, se ejecuta el ultimo else

/* EJEMPLO USUARIO -- CONTRASEÑA */ /////////////////////////////////////////////////

/* let usuarioAutorizado = "stocaimaza";
let passwordAutorizado = "pepelepu";

let usuarioIngresado = prompt("Ingrese su nombre de usuario: ");
let passwordIngresado = prompt("Ingrese su password");

if (usuarioIngresado === usuarioAutorizado && passwordIngresado === passwordAutorizado){
    alert("Los datos son correctos, puede ingresar.");
}else{
    alert("Los datos son incorrectos!");
} */ //comentado para que no moleste

/* EJEMPLO NOMBRE DE USUARIO */ /////////////////////////////////////////////////

/* let nombre = prompt("Ingrese su nombre: ");

if (nombre === "samuel" || nombre === "SAMUEL"){
    alert("Bienvenido Samuel!");
}else{
    alert("Quien sos vos?");
} */ // comentado para que no moleste

/* EJEMPLO PROMEDIO DE NOTAS */

let notaUno = parseInt(prompt("Ingrese la nota del primer parcial: "));
let notaDos = parseInt(prompt("Ingrese la nota del segundo parcial: "));

let promedio = (notaUno + notaDos) / 2;
alert("El promedio del alumno es: " + promedio)

if(promedio == 10){
    alert("Excelente! Calificacion Perfecta!")
}else if (promedio >= 7 && promedio < 10){
    alert ("Muy bien! Aprobado!")
}else if(promedio >= 1 && promedio < 7){
    alert("Lo lamento, tendras que recursar.")
}else{
    alert("Pusiste cualquier cosa, intenta nuevamente")
}