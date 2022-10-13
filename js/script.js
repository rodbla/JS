let saldoCliente = 100;
let usuarioActivo = {};
console.log(usuarioActivo);

class Usuario {
    constructor (username, password, saldo, id) {
        this.username = username;
        this.password = parseInt(password);
        this.saldo = parseInt(saldo);
        this.id = parseInt(id);
    }

        assignId(array){
            this.id = array.length;
        }

        cambiarClave () {
            let nuevaClave = prompt("Tipea tu nueva clave");
            this.password = nuevaClave;
        }

    }

const usuarios = [
    new Usuario("admin", 12345, 1000, 1),
]
// let userIdIngresado = prompt("Ingrese su nombre de usuario...");
// if (usuarios.some(usuario => usuario.username == userIdIngresado.toLowerCase())){
// let claveUsuarioIngresada = parseInt(
//     prompt("Ingrese su contraseña...")
//   );
//   if (usuarios.some(usuario => usuario.password == claveUsuarioIngresada)){
//     alert("Login exitoso!");
//   usuarioActivo = usuarios.find(element => element.password == claveUsuarioIngresada);
//   }}
//   console.log(usuarioActivo.saldo);

function landing() {
    let userChoice = "2";
    while (userChoice != "1"){
    userChoice = prompt("Elegí una opción: \n1 - Loguearme \n2 - Recuperar contraseña \n3 - Registrarme");
    switch(userChoice){
        case "1":
            login();
            break;
        case "2":
            let usuarioInvalido = true;
            while (usuarioInvalido == true) {
            let passRecovery = prompt("Ingrese su nombre de usuario.");
            let usuarioEncontrado = usuarios.find(usuario => usuario.username == passRecovery.toLowerCase())
            if (usuarioEncontrado) {
                alert("Su clave es " + usuarioEncontrado.password +".");
                usuarioInvalido = false;
            } else {
                alert("El usuario ingresado no existe. Reintente por favor.")
            }
            }
            break;
        case "3":
            registrarme();
            break;
        default:
            alert("Elegiste una opción inválida. Elige nuevamente.");
            break;
    }
}
}

landing();

function registrarme() {
    registroExitoso = false;
    while (registroExitoso == false) {
    let newUser = prompt("Gracias por elegirnos. Para registrarte, por favor elige tu username.");
    let newPassword = parseInt(prompt("Por favor elige tu clave. Recuerda que debe ser un numero."));
    if (isNaN(newPassword)) {
        alert("No has elegido una clave valida.")
   }
else {
    const usuario = new Usuario(newUser.toLowerCase(), newPassword, 0);
    usuarios.push(usuario);
    usuario.assignId(usuarios);
    registroExitoso = true;
    alert("Su registro ha sido exitoso!");
    landing();
}
}
}

function login() {
  for (let i = 2; i >= 0; i--) {
    let userIdIngresado = prompt("Ingrese su nombre de usuario...");
        if (usuarios.some(usuario => usuario.username == userIdIngresado.toLowerCase())){
      for (let i = 2; i >= 0; i--) {
        let claveUsuarioIngresada = parseInt(
          prompt("Ingrese su contraseña...")
        );
        if (usuarios.some(usuario => usuario.password == claveUsuarioIngresada)){
          alert("Login exitoso!");
        usuarioActivo = usuarios.find(element => element.password == claveUsuarioIngresada);
          coreProgram();
          break;
        } else {
          if (i >= 1) {
            alert(
              "Contraseña invalida, intente nuevamente. Quedan " +
                i +
                " intentos."
            );
          } else {
            alert("Cuenta bloqueada. Espere 1 hora e intente nuevamente.");
          }
        }
      }
      break;
    } else {
      if (i >= 1) {
        alert(
          "Usuario invalido, intente nuevamente. Quedan " + i + " intentos."
        );
      } else {
        alert("Has excedido el numero maximo de intentos de login. Seras llevado a la pagina de nuevos registros.");
        registrarme();
      }
    }
  }
}
function coreProgram() {
  let opcionInvalida = true;
  while (opcionInvalida == true) {
    let userChoice = prompt(
      "Elegí una opción: \n1 - Ver saldo disponible \n2 - Cargar Saldo \n3 - Retirar Saldo \n4 - Jugar \n5 - Salir"
    );
    switch (userChoice) {
      case "1":
        alert("Su saldo es de " + usuarioActivo.saldo +".");
        break;
      case "2":
        let saldoCarga = parseInt(
          prompt(
            "Su saldo es " + usuarioActivo.saldo + ". Cuanto saldo quiere cargar?"
          )
        );
        if (saldoCarga > 0){
        usuarioActivo.saldo = usuarioActivo.saldo + saldoCarga;
        alert("Carga exitosa. Su nuevo saldo es de " + usuarioActivo.saldo + ".");
        break;
    } else {
        alert("El saldo a cargar debe ser un numero entero positivo (Ej. 50, 100, 2000).");
        break;
    }
      case "3":
        let montoValido = false;
        while (montoValido == false) {
          let saldoRetira = parseInt(
            prompt(
              "Su saldo es " + usuarioActivo.saldo + ". Cuanto saldo quiere Retirar?"
            )
          );
          if (saldoRetira > 0 && saldoRetira <= usuarioActivo.saldo) {
            usuarioActivo.saldo = usuarioActivo.saldo - saldoRetira;
            alert("Retiro exitoso. Su nuevo saldo es de " + usuarioActivo.saldo + ".");
            montoValido = true;
          } else {
            alert("Monto invalido. Ingrese un nuevo monto.");
          }
        }
        break;
      case "4":
        let montoJugado = false;
        while (montoJugado == false) {
          let saldoJugado = parseInt(
            prompt("Tu saldo es de " + usuarioActivo.saldo + ". Cuanto quieres jugar?")
          );
          if (saldoJugado > 0 && saldoJugado <= usuarioActivo.saldo) {
            let numeroInvalido = true;
            while (numeroInvalido == true) {
              let numeroJugado = parseInt(
                prompt(
                  "Acierta el numero (1 al 10) y ganaras " + saldoJugado + "!!!"
                )
              );
              if (numeroJugado >= 1 && numeroJugado <= 10) {
                alert("Realizando sorteo!");
                numeroInvalido = false;
                montoJugado = true;
                let numeroGanador = Math.ceil(Math.random()*10);
                if (numeroJugado == numeroGanador) {
                    usuarioActivo.saldo = usuarioActivo.saldo + saldoJugado;
                  alert(
                    "Has acertado el numero! ¡Muy bien! Has ganado un total de " +
                      saldoJugado +
                      "! El nuevo saldo de tu cuenta es de " +
                      usuarioActivo.saldo +
                      "."
                  );
                } else {
                    usuarioActivo.saldo = usuarioActivo.saldo - saldoJugado;
                  alert(
                    "Ouch! No has ganado esta vez. Vuelve a jugar, aun tienes " +
                    usuarioActivo.saldo +
                      " disponible para jugar."
                  );
                }
              } else {
                alert(
                  "Numero invalido, recuerda que debe ser entre 1 y 10. Vuelve a intentarlo."
                );
              }
            }
          } else {
            alert(
              "El saldo jugado es invalido. Debes jugar entre 1 y " +
              usuarioActivo.saldo +
                "."
            );
          }
        }
        break;
      case "5":
        alert(
          "Gracias por utilizar nuestra plataforma. Esperamos verte pronto!"
        );
        opcionInvalida = false;
        landing();
        break;
      default:
        alert("Elegiste una opción inválida. Elige nuevamente.");
    }
  }
}