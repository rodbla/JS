const numeroGanador = 3;
let pozoAcumulado = 100;
let saldoCliente = 100;
let claveUsuario = 1234;
let userId = "RB";

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
            if (passRecovery == userId) {
                alert("Su clave es " +claveUsuario + ".");
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
    userId = prompt("Gracias por elegirnos. Para registrarte, por favor elige tu username.");
    claveUsuario = parseInt(prompt("Por favor elige tu clave."));
    alert("Su registro ha sido exitoso!");
    landing();
}

function login() {
  for (let i = 2; i >= 0; i--) {
    let userIdIngresado = prompt("Ingrese su nombre de usuario...");
    if (userIdIngresado === userId) {
      for (let i = 2; i >= 0; i--) {
        let claveUsuarioIngresada = parseInt(
          prompt("Ingrese su contraseña...")
        );
        if (claveUsuarioIngresada === claveUsuario) {
          alert("Login exitoso!");
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
        alert(saldoCliente);
        break;
      case "2":
        let saldoCarga = parseInt(
          prompt(
            "Su saldo es " + saldoCliente + ". Cuanto saldo quiere cargar?"
          )
        );
        saldoCliente = saldoCliente + saldoCarga;
        alert("Carga exitosa. Su nuevo saldo es de " + saldoCliente + ".");
        break;
      case "3":
        let montoValido = false;
        while (montoValido == false) {
          let saldoRetira = parseInt(
            prompt(
              "Su saldo es " + saldoCliente + ". Cuanto saldo quiere Retirar?"
            )
          );
          if (saldoRetira > 0 && saldoRetira <= saldoCliente) {
            saldoCliente = saldoCliente - saldoRetira;
            alert("Retiro exitoso. Su nuevo saldo es de " + saldoCliente + ".");
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
            prompt("Tu saldo es de " + saldoCliente + ". Cuanto quieres jugar?")
          );
          if (saldoJugado > 0 && saldoJugado <= saldoCliente) {
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
                if (numeroJugado == numeroGanador) {
                  saldoCliente = saldoCliente + saldoJugado;
                  alert(
                    "Has acertado el numero!. ¡Muy bien! Has ganado un total de " +
                      saldoJugado +
                      "!. El nuevo saldo de tu cuenta es de " +
                      saldoCliente +
                      "."
                  );
                } else {
                  saldoCliente = saldoCliente - saldoJugado;
                  alert(
                    "Ouch! No has ganado esta vez. Vuelve a jugar, aun tienes " +
                      saldoCliente +
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
              "El saldo jugado es invalido. Debes jugar entre 0 y " +
                saldoCliente +
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
