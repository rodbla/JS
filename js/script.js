// let usuarioActivo = {};
let usuarioLogueado;

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
            if (passRecovery.length < 1) {
                alert("Por favor ingresa tu username.")
            } else {
            let usuarioEncontrado = usuarios.find(usuario => usuario.username == passRecovery.toLowerCase())
            if (usuarioEncontrado) {
                alert("Su clave es " + usuarioEncontrado.password +".");
                usuarioInvalido = false;
            } else {
                alert("El usuario ingresado no existe. Reintente por favor.")
            }
            }}
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
    if (newUser.length < 5 || newUser > 0) {
        alert("El username deben ser solo letras y tener una extension de al menos 5 caracteres.")
    } else {
        let passwordSelection = true;
        while (passwordSelection == true) {
        let newPassword = prompt("Por favor elige tu clave. Recuerda que debe ser un numero.");
        if (isNaN(newPassword) || newPassword.length < 5) {
            alert("No has elegido una clave valida. Debe ser un numero de al menos 5 caracteres.")
       }
       else {
        const usuario = new Usuario(newUser.toLowerCase(), parseInt(newPassword), 0);
        usuarios.push(usuario);
        usuario.assignId(usuarios);
        registroExitoso = true;
        passwordSelection = false;
        alert("Su registro ha sido exitoso!");
        landing();
    }
    }
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
        // usuarioActivo = usuarios.find(element => element.password == claveUsuarioIngresada);
        usuarioLogueado = usuarios.map(element => element.password).indexOf(claveUsuarioIngresada);
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
        alert("Su saldo es de " + usuarios[usuarioLogueado].saldo +".");
        break;
      case "2":
        let saldoCarga = parseInt(
          prompt(
            "Su saldo es " + usuarios[usuarioLogueado].saldo + ". Cuanto saldo quiere cargar?"
          )
        );
        if (saldoCarga > 0){
        usuarios[usuarioLogueado].saldo = usuarios[usuarioLogueado].saldo + saldoCarga;
        alert("Carga exitosa. Su nuevo saldo es de " + usuarios[usuarioLogueado].saldo + ".");
        break;
    } else {
        alert("El saldo a cargar debe ser un numero entero positivo (Ej. 50, 100, 2000).");
        break;
    }
      case "3":
        let montoValido = false;
        while (montoValido == false) {
            if (usuarios[usuarioLogueado].saldo !== 0) {
          let saldoRetira = parseInt(
            prompt(
              "Su saldo es " + usuarios[usuarioLogueado].saldo + ". Cuanto saldo quiere Retirar?"
            )
          );
          if (saldoRetira > 0 && saldoRetira <= usuarios[usuarioLogueado].saldo) {
            usuarios[usuarioLogueado].saldo = usuarios[usuarioLogueado].saldo - saldoRetira;
            alert("Retiro exitoso. Su nuevo saldo es de " + usuarios[usuarioLogueado].saldo + ".");
            montoValido = true;
          } else {
            alert("Monto invalido. Ingrese un nuevo monto.");
          }}
          else {
            alert("No puede retirar dado que su saldo es 0");
            montoValido = true;
          }
        }
        break;
      case "4":
        let montoJugado = false;
        while (montoJugado == false) {
            if (usuarios[usuarioLogueado].saldo !== 0) {
          let saldoJugado = parseInt(
            prompt("Tu saldo es de " + usuarios[usuarioLogueado].saldo + ". Cuanto quieres jugar?")
          );
          if (saldoJugado > 0 && saldoJugado <= usuarios[usuarioLogueado].saldo) {
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
                    usuarios[usuarioLogueado].saldo = usuarios[usuarioLogueado].saldo + saldoJugado;
                  alert(
                    "Has acertado el numero! ¡Muy bien! Has ganado un total de " +
                      saldoJugado +
                      "! El nuevo saldo de tu cuenta es de " +
                      usuarios[usuarioLogueado].saldo +
                      "."
                  );
                } else {
                    usuarios[usuarioLogueado].saldo = usuarios[usuarioLogueado].saldo - saldoJugado;
                  alert(
                    "Ouch! No has ganado esta vez. Vuelve a jugar, aun tienes " +
                    usuarios[usuarioLogueado].saldo +
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
              usuarios[usuarioLogueado].saldo +
                "."
            );
          }}
          else {
            alert("Tu saldo es 0, no puedes jugar. Por favor realiza una nueva carga y podras jugar nuevamente! Te esperamos!");
            montoJugado = true;
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