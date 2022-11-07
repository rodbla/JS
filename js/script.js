// Mapeo de elementos DOM
const btnLogin = document.getElementById("login"),
    btnLogout = document.getElementById("btnLogout"),
    btnRegister = document.getElementById("register"),
    btnCargar = document.getElementById("cargar"),
    btnRetirar = document.getElementById("retirar"),
    btnJugar = document.getElementById("jugar"),
    btnModalJugar = document.getElementById("btnModalJugar"),
    btnModalRegister = document.getElementById("btnModalRegister"),
    btnModalRetirar = document.getElementById("btnModalRetirar"),
    btnMostrarSaldo = document.getElementById("btnMostrarSaldo"),
    mailLogin = document.getElementById("usernameLogin"),
    passLogin = document.getElementById("passwordLogin"),
    userRegister = document.getElementById("usernameRegister"),
    nameRegister = document.getElementById("nameRegister"),
    passRegister = document.getElementById("passwordRegister"),
    montoCarga = document.getElementById("montoCarga"),
    montoRetira = document.getElementById("montoRetira"),
    montoJugar = document.getElementById("montoJugar"),
    numeroJugar = document.getElementById("numeroJugar"),
    saldoModalJugar = document.getElementById("saldoModalJugar"),
    pozoAcumuladoCampo = document.getElementById("pozoAcumulado"),
    funFactCampo = document.getElementById("funFact"),
    userName = document.getElementById("userName"),
    interruptor = document.querySelectorAll(".toggles"),
    visualizadorSaldo = document.getElementById("visualizadorSaldo"),
    modalLog = document.getElementById("modalLogin"),
    modalReg = document.getElementById("modalRegister"),
    modalCarga = document.getElementById("modalCarga"),
    modalRetira = document.getElementById("modalRetira"),
    modalJugar = document.getElementById("modalJugar"),
    modal = new bootstrap.Modal(modalLog),
    modal2 = new bootstrap.Modal(modalReg),
    modal3 = new bootstrap.Modal(modalCarga),
    modal4 = new bootstrap.Modal(modalRetira),
    modal5 = new bootstrap.Modal(modalJugar);

// Variables globales
let usuarioLogueado;
let saldoUsuario;
let i = 2; //se utiliza una variable iteracion global para los 2 for en funcion login
let pozoAcumulado = 5000;
localStorage.setItem("pozoAcumulado", JSON.stringify(pozoAcumulado));

// Clase con funcion constructora para nuevos usuarios registrados, contiene metodo de asignacion de ID
class Usuario {
    constructor(username, name, password, saldo, id) {
        this.username = username;
        this.name = name;
        this.password = parseInt(password);
        this.saldo = parseInt(saldo);
        this.id = parseInt(id);
    }

    assignId(array) {
        this.id = array.length;
    }
}

// Construccion de array de usuarios utilizando la clase Usuario
const usuarios = [new Usuario("admin", "admin", 13579, 1000, 1)];

// Funcion asincrona recupero de usuarios "admin" del archivo JSON local
async function infoUsuarios() {
    const respuestaJson = await fetch('./js/users.json');
    const info = await respuestaJson.json();
    usuarios.push(...info);
}

// Funcion asincrona con conexion API - segun numero seleccionado en la pantalla jugar, trae un funfact en ingles (dato curioso)
async function datoCuriosoNumero(numero) {
    const respuestaJson = await fetch(`http://numbersapi.com/${numero}?json`);
    const info = await respuestaJson.json();
    funFactCampo.innerHTML = `<i><b>Dato curioso: </i></b><i>${info.text}</i>`;
}

// Seccion funciones sincronicas
function login(user, password) {
    for (i; i >= 0; i--) {
        let userIdIngresado = user.toLowerCase();
        let usuarioExiste = usuarios
        .map((element) => element.username)
        .indexOf(userIdIngresado);
        if (
            usuarios.some(
                (usuario) => usuario.username == userIdIngresado
            )
        ) {
            for (i; i >= 0; i--) {
                let claveUsuarioIngresada = parseInt(password);
                if (
                    usuarios[usuarioExiste].password == claveUsuarioIngresada)
                 {
                    usuarioLogueado = usuarioExiste;
                    saldoUsuario = usuarios[usuarioLogueado].saldo;
                    let usuarioEncontrado = usuarios.find(
                        (userInfo) => userInfo.username == userIdIngresado
                    );
                    let passwordEncontrado = usuarios.find(
                        (userInfo) => userInfo.password == claveUsuarioIngresada
                    );
                    (usuarioEncontrado.username == userIdIngresado &&
                        passwordEncontrado.password == claveUsuarioIngresada
                    ) &&
                        localStorage.setItem(
                            "usuarioLogueado",
                            JSON.stringify(usuarioEncontrado)
                        );
                    modal.hide();
                    resetInputs();
                    saludoBienvenidaUsuario(usuarioActivo(localStorage));
                    cambiarVista(interruptor, "d-none");
                    verSaldo();
                    mostrarPozo();
                    break;
                } else {
                    i >= 1 ? Swal.fire({
                        text: "Contraseña invalida, intente nuevamente. Quedan " + i + " intentos.",
                        icon: "warning",
                        backdrop: "#66f4ae55"
                    }) : Swal.fire({
                        text: "Cuenta bloqueada. Espere 1 hora e intente nuevamente.",
                        icon: "warning",
                        backdrop: "#66f4ae55"
                    });
                }
                resetPassInput();
                i--;
                break;
            }
            break;
        } else {
            if (i >= 1) {
                Swal.fire({
                    text: "Usuario invalido, intente nuevamente. Quedan " + i + " intentos.",
                    icon: "warning",
                    backdrop: "#66f4ae55"
                });
                i--;
                resetInputs();
                break;
            } else {
                Swal.fire({
                    text: "Has excedido el numero maximo de intentos de login. Deberas registrarte.",
                    icon: "warning",
                    backdrop: "#66f4ae55"
                });
                resetInputs();
                btnModalRegister.click();
            };
        }
    }
}

function registrarme(username, name, password) {
    registroExitoso = false;
    while (registroExitoso == false) {
        let newUser = username.toLowerCase();
        let newName = name.toLowerCase();
        let usuarioExistente = usuarios.some(
            (userInfo) => userInfo.username == newUser);
        if (newUser.length < 5 || newUser > 0)  {
            Swal.fire({
                text: "El usuario debe ser de al menos 5 letras.",
                icon: "warning",
                backdrop: "#66f4ae55"
            });
            break;
        } else {
            if (usuarioExistente) {
                Swal.fire({
                    text: "El username ya existe, por favor intenta con otro.",
                    icon: "warning",
                    backdrop: "#66f4ae55"
                });
                break;
            } else {
            if (newName) {
                let passwordSelection = true;
                while (passwordSelection == true) {
                    let newPassword = password;
                    if (isNaN(newPassword) || newPassword.length < 5) {
                        Swal.fire({
                            text: "No has elegido una clave valida. Debe ser un numero de al menos 5 caracteres.",
                            icon: "warning",
                            backdrop: "#66f4ae55"
                        });
                        break;
                    } else {
                        const usuario = new Usuario(
                            newUser.toLowerCase(),
                            newName.toLowerCase(),
                            parseInt(newPassword),
                            0
                        );
                        usuarios.push(usuario);
                        usuario.assignId(usuarios);
                        registroExitoso = true;
                        passwordSelection = false;
                        Swal.fire({
                            text: "Su registro ha sido exitoso!",
                            icon: "success",
                            backdrop: "#66f4ae55"
                        });
                        modal2.hide();
                        resetInputs();
                    }
                }
                break;
            } else {
                Swal.fire({
                    text: "Debes completar tu nombre.",
                    icon: "warning",
                    backdrop: "#66f4ae55"
                });
                break;
            }}
        }
    }
    i = 2;
}

function mostrarPozo() {
    pozoAcumuladoCampo.innerHTML = `Pozo Acumulado: ${JSON.parse(localStorage.getItem("pozoAcumulado"))}`;
}

function verSaldo() {
    visualizadorSaldo.innerHTML = `Saldo disponible: ${saldoUsuario}`;
    saldoModalJugar.innerHTML = `Saldo disponible: ${saldoUsuario}`;
}

function saludoBienvenidaUsuario(usuario) {
    userName.innerHTML = `Bienvenido/a, <span>${usuario.name}</span>`
}

function usuarioActivo(storage) {
    let usuarioAlmacenado = JSON.parse(storage.getItem("usuarioLogueado"));
    return usuarioAlmacenado;
}

function cambiarVista(array, clase) {
    array.forEach(element => {
        element.classList.toggle(clase);
    });
}

function cargarSaldo(carga) {
    let saldoCarga = parseInt(carga);
    if (saldoCarga > 0) {
        saldoUsuario += saldoCarga;
        Swal.fire({
            text: "Carga exitosa. Su nuevo saldo es de " +
                saldoUsuario +
                ".",
            icon: "success",
            backdrop: "#66f4ae55"
        });
        verSaldo();
        modal3.hide();
        resetInputs();
    } else {
        Swal.fire({
            text: "El saldo a cargar debe ser un numero entero positivo (Ej. 50, 100, 2000).",
            icon: "warning",
            backdrop: "#66f4ae55"
        });
        resetInputs();
    }

}

function retiraSaldo(retira) {
    let montoValido = false;
    while (montoValido == false) {
        if (saldoUsuario !== 0) {
            let saldoRetira = parseInt(retira);
            if (
                saldoRetira > 0 &&
                saldoRetira <= saldoUsuario
            ) {
                saldoUsuario -= saldoRetira;
                Swal.fire({
                    text: "Retiro exitoso. Su nuevo saldo es de " +
                        saldoUsuario +
                        ".",
                    icon: "success",
                    backdrop: "#66f4ae55"
                });
                montoValido = true;
                modal4.hide();
                resetInputs();
                verSaldo();
            } else {
                Swal.fire({
                    text: "Monto invalido. Ingrese un nuevo monto.",
                    icon: "warning",
                    backdrop: "#66f4ae55"
                });
                resetInputs();
                break;
            }
        } else {
            Swal.fire({
                text: "No puede retirar dado que su saldo es 0",
                icon: "warning",
                backdrop: "#66f4ae55"
            });
            montoValido = true;
            modal4.hide();
            resetInputs();
        }
    }
}

function jugar(monto, numero) {
    let montoJugado = false;
    while (montoJugado == false) {
        let saldoJugado = parseInt(monto);
        if (saldoUsuario == 0) {
            Swal.fire({
                text: "No puedes jugar, te has quedado sin saldo. Te llevaremos a la seccion de carga de saldo.",
                icon: "warning",
                backdrop: "#66f4ae55"
            })
            modal5.hide();
            modal3.show();
            break;
        } else {
            if (
                saldoJugado > 0 &&
                saldoJugado <= saldoUsuario
            ) {
                let numeroInvalido = true;
                while (numeroInvalido == true) {
                    let numeroJugado = parseInt(numero);
                    numeroInvalido = false;
                    montoJugado = true;
                    let numeroGanador = Math.ceil(Math.random() * 10);
                    let pozoGanador = Math.ceil(Math.random() * 10);
                    if (numeroJugado == numeroGanador) {
                        if (numeroJugado == pozoGanador) {
                            saldoUsuario += saldoJugado +
                                JSON.parse(localStorage.getItem("pozoAcumulado"));
                            Swal.fire({
                                text: "Con tu numero: " +
                                    numeroJugado +
                                    " has acertado el numero y ademas ganado el pozo acumulado! ¡Muy bien! Has ganado un total de " +
                                    saldoJugado +
                                    " por tu apuesta y " +
                                    pozoAcumulado +
                                    " por haber ganado el pozo! El nuevo saldo de tu cuenta es de " +
                                    saldoUsuario +
                                    ".",
                                icon: "success",
                                backdrop: "#66f4ae55"
                            });
                            pozoAcumulado = 0;
                            localStorage.setItem(
                                "pozoAcumulado",
                                JSON.stringify(pozoAcumulado)
                            );
                            resetInputs();
                        } else {
                            saldoUsuario += saldoJugado;
                            Swal.fire({
                                text: "Con tu numero: " +
                                    numeroJugado +
                                    ". No has ganado el pozo acumulado, pero si has acertado el numero del sorteo! ¡Muy bien! Has ganado un total de " +
                                    saldoJugado +
                                    "! El nuevo saldo de tu cuenta es de " +
                                    saldoUsuario +
                                    ".",
                                icon: "success",
                                backdrop: "#66f4ae55"
                            });
                            resetInputs();
                        }
                    } else {
                        saldoUsuario -= saldoJugado;
                        pozoAcumulado +=
                            Math.round(saldoJugado / 2);
                        localStorage.setItem(
                            "pozoAcumulado",
                            JSON.stringify(pozoAcumulado)
                        );
                        saldoUsuario == 0 ? Swal.fire({
                            text: "Te has quedado sin saldo. Para seguir jugando deberas realizar una carga.",
                            icon: "warning",
                            backdrop: "#66f4ae55"
                        }) : toast(numeroGanador);
                        resetInputs();
                    }
                }
            } else if (saldoUsuario == 1) {
                Swal.fire({
                    text: "El saldo jugado es invalido. Debes jugar tu saldo restante, que es de 1.",
                    icon: "warning",
                    backdrop: "#66f4ae55"
                });
                resetInputs();
                break;
            }
            else {
                Swal.fire({
                    text: "El saldo jugado es invalido. Debes jugar entre 1 y " +
                        saldoUsuario +
                        ".",
                    icon: "warning",
                    backdrop: "#66f4ae55"
                });
                resetInputs();
                break;
            }
        }
    }
}

function toast(numeroGanador) {
    Swal.fire({
        text: "Ouch! El numero sorteado fue el: " +
            numeroGanador +
            ". No has ganado esta vez. Aun tienes un saldo de   " +
            saldoUsuario +
            " para jugar. El pozo acumulado a subido a " +
            pozoAcumulado +
            ".",
        icon: "warning",
        backdrop: "#66f4ae55"
    })
        .then((result) => {
            if (result.isConfirmed) {
                Toastify({
                    text: "Monto sumado",
                    duration: 2000,
                    style: {
                        color: "white",
                        width: "11vw",
                        height: 10,
                        background: "#5cb85c"
                    },
                    offset: {
                        x: 575,
                        y: 85,
                    },
                }).showToast();
            }
        });
}

function resetInputs() {
    let inputs = document.querySelectorAll('input');
    inputs.forEach(function (input) {
        input.value = "";
    });
}

function resetPassInput() {
    passLogin.value = "";
}

// Seccion EventListeners
document.addEventListener("DOMContentLoaded", () => {
    infoUsuarios();
});

btnLogin.addEventListener("click", (e) => {
    e.preventDefault();
    login(mailLogin.value, passLogin.value);
});

btnRegister.addEventListener("click", (e) => {
    e.preventDefault();
    registrarme(userRegister.value, nameRegister.value, passRegister.value);
});

btnLogout.addEventListener("click", () => {
    cambiarVista(interruptor, "d-none");
    usuarios[usuarioLogueado].saldo = saldoUsuario;
    localStorage.removeItem("usuarioLogueado");
    i = 2;
});

btnCargar.addEventListener("click", (e) => {
    e.preventDefault();
    cargarSaldo(montoCarga.value);
});

btnModalRetirar.addEventListener("click", () => {
    saldoUsuario == 0 &&
        Swal.fire({
            text: "No puede retirar dado que su saldo es 0",
            icon: "warning",
            backdrop: "#66f4ae55"
        }).then(() => {
            modal4.hide();
        });
});

btnRetirar.addEventListener("click", (e) => {
    e.preventDefault();
    retiraSaldo(montoRetira.value);
});

btnModalJugar.addEventListener("click", () => {
    saldoUsuario == 0 &&
    Swal.fire({
        text: "No puede jugar dado que su saldo es 0",
        icon: "warning",
        backdrop: "#66f4ae55"
    }).then(() => {
        modal5.hide();
    });
});

btnJugar.addEventListener("click", (e) => {
    e.preventDefault();
    jugar(montoJugar.value, numeroJugar.value);
    mostrarPozo();
    verSaldo();
});

numeroJugar.addEventListener("change", (e) => {
    e.preventDefault();
    datoCuriosoNumero(numeroJugar.value)
});