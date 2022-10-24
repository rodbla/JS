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

let usuarioLogueado;
let i = 2;
let pozoAcumulado = 5000;
localStorage.setItem("pozoAcumulado", JSON.stringify(pozoAcumulado));

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

const usuarios = [new Usuario("admin", "admin", 13579, 1000, 1)];

function login(user, password) {
    for (i; i >= 0; i--) {
        let userIdIngresado = user.toLowerCase();
        if (
            usuarios.some(
                (usuario) => usuario.username == userIdIngresado
            )
        ) {
            for (i; i >= 0; i--) {
                let claveUsuarioIngresada = parseInt(password);
                if (
                    usuarios.some((usuario) => usuario.password == claveUsuarioIngresada)
                ) {
                    usuarioLogueado = usuarios
                        .map((element) => element.password)
                        .indexOf(claveUsuarioIngresada);
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
                    welcome(usuarioActivo(localStorage));
                    mostrarInformacion(interruptor, "d-none");
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
                } i--;
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
                break;
            } else {
                Swal.fire({
                    text: "Has excedido el numero maximo de intentos de login. Deberas registrarte.",
                    icon: "warning",
                    backdrop: "#66f4ae55"
                });
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
        if (newUser.length < 5 || newUser > 0) {
            Swal.fire({
                text: "El usuario debe ser de al menos 5 letras.",
                icon: "warning",
                backdrop: "#66f4ae55"
            });
            break;
        } else {
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
                }
            }
            break;
        }
    }
    i = 2;
}

function mostrarPozo() {
    pozoAcumuladoCampo.innerHTML = `Pozo Acumulado: ${JSON.parse(localStorage.getItem("pozoAcumulado"))}`;
}

function verSaldo() {
    visualizadorSaldo.innerHTML = `Saldo disponible: ${usuarios[usuarioLogueado].saldo}`;
    saldoModalJugar.innerHTML = `Saldo disponible: ${usuarios[usuarioLogueado].saldo}`;
}

function welcome(usuario) {
    userName.innerHTML = `Bienvenido/a, <span>${usuario.name}</span>`
}

function usuarioActivo(storage) {
    let usuarioAlmacenado = JSON.parse(storage.getItem("usuarioLogueado"));
    return usuarioAlmacenado;
}

function mostrarInformacion(array, clase) {
    array.forEach(element => {
        element.classList.toggle(clase);
    });
}

function cargarSaldo(carga) {
    let saldoCarga = parseInt(carga);
    if (saldoCarga > 0) {
        usuarios[usuarioLogueado].saldo =
            usuarios[usuarioLogueado].saldo + saldoCarga;
        Swal.fire({
            text: "Carga exitosa. Su nuevo saldo es de " +
                usuarios[usuarioLogueado].saldo +
                ".",
            icon: "success",
            backdrop: "#66f4ae55"
        });
        verSaldo();
        modal3.hide();
    } else {
        Swal.fire({
            text: "El saldo a cargar debe ser un numero entero positivo (Ej. 50, 100, 2000).",
            icon: "warning",
            backdrop: "#66f4ae55"
        });
    }

}

function retiraSaldo(retira) {
    let montoValido = false;
    while (montoValido == false) {
        if (usuarios[usuarioLogueado].saldo !== 0) {
            let saldoRetira = parseInt(retira);
            if (
                saldoRetira > 0 &&
                saldoRetira <= usuarios[usuarioLogueado].saldo
            ) {
                usuarios[usuarioLogueado].saldo =
                    usuarios[usuarioLogueado].saldo - saldoRetira;
                Swal.fire({
                    text: "Retiro exitoso. Su nuevo saldo es de " +
                        usuarios[usuarioLogueado].saldo +
                        ".",
                    icon: "success",
                    backdrop: "#66f4ae55"
                });
                montoValido = true;
                modal4.hide();
                verSaldo();
            } else {
                Swal.fire({
                    text: "Monto invalido. Ingrese un nuevo monto.",
                    icon: "warning",
                    backdrop: "#66f4ae55"
                });
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
        }
    }
}

function jugar(monto, numero) {
    let montoJugado = false;
    while (montoJugado == false) {
        let saldoJugado = parseInt(monto);
        if (
            saldoJugado > 0 &&
            saldoJugado <= usuarios[usuarioLogueado].saldo
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
                        usuarios[usuarioLogueado].saldo =
                            usuarios[usuarioLogueado].saldo +
                            saldoJugado +
                            JSON.parse(localStorage.getItem("pozoAcumulado"));
                        Swal.fire({
                            text: "Con tu numero: " +
                                numeroJugado +
                                " has acertado el numero y ademas ganado el pozo acumulado! ¡Muy bien! Has ganado un total de " +
                                saldoJugado +
                                " por tu apuesta y " +
                                pozoAcumulado +
                                " por haber ganado el pozo! El nuevo saldo de tu cuenta es de " +
                                usuarios[usuarioLogueado].saldo +
                                ".",
                            icon: "success",
                            backdrop: "#66f4ae55"
                        });
                        pozoAcumulado = 0;
                        localStorage.setItem(
                            "pozoAcumulado",
                            JSON.stringify(pozoAcumulado)
                        );
                    } else {
                        usuarios[usuarioLogueado].saldo =
                            usuarios[usuarioLogueado].saldo + saldoJugado;
                        Swal.fire({
                            text: "Con tu numero: " +
                                numeroJugado +
                                ". No has ganado el pozo acumulado, pero si has acertado el numero del sorteo! ¡Muy bien! Has ganado un total de " +
                                saldoJugado +
                                "! El nuevo saldo de tu cuenta es de " +
                                usuarios[usuarioLogueado].saldo +
                                ".",
                            icon: "success",
                            backdrop: "#66f4ae55"
                        });
                    }
                } else {
                    usuarios[usuarioLogueado].saldo =
                        usuarios[usuarioLogueado].saldo - saldoJugado;
                    pozoAcumulado =
                        Math.round(
                            JSON.parse(localStorage.getItem("pozoAcumulado"))
                            +
                            saldoJugado / 2);
                    localStorage.setItem(
                        "pozoAcumulado",
                        JSON.stringify(pozoAcumulado)
                    );
                    usuarios[usuarioLogueado].saldo == 0 ? Swal.fire({
                        text: "Te has quedado sin saldo. Para seguir jugando deberas realizar una carga.",
                        icon: "warning",
                        backdrop: "#66f4ae55"
                    }) : toast(numeroGanador);
                }
            }
        } else {
            Swal.fire({
                text: "El saldo jugado es invalido. Debes jugar entre 1 y " +
                    usuarios[usuarioLogueado].saldo +
                    ".",
                icon: "warning",
                backdrop: "#66f4ae55"
            });
            break;
        }
    }
}

function toast(numeroGanador) {
    Swal.fire({
        text: "Ouch! El numero sorteado fue el: " +
            numeroGanador +
            ". No has ganado esta vez. Aun tienes un saldo de   " +
            usuarios[usuarioLogueado].saldo +
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

btnLogin.addEventListener("click", (e) => {
    e.preventDefault();
    login(mailLogin.value, passLogin.value);
});

btnRegister.addEventListener("click", (e) => {
    e.preventDefault();
    registrarme(userRegister.value, nameRegister.value, passRegister.value);
});

btnLogout.addEventListener("click", () => {
    mostrarInformacion(interruptor, "d-none");
    i = 2;
});

btnCargar.addEventListener("click", (e) => {
    e.preventDefault();
    cargarSaldo(montoCarga.value);
});

btnModalRetirar.addEventListener("click", (e) => {
    if (usuarios[usuarioLogueado].saldo > 0) {
    } else {
        modal4.hide();
        Swal.fire({
            text: "No puede retirar dado que su saldo es 0",
            icon: "warning",
            backdrop: "#66f4ae55"
        });
    }
});

btnRetirar.addEventListener("click", (e) => {
    e.preventDefault();
    retiraSaldo(montoRetira.value);
});

btnModalJugar.addEventListener("click", (e) => {
    if (usuarios[usuarioLogueado].saldo > 0) {
    } else {
        modal5.hide();
        Swal.fire({
            text: "No puede jugar dado que su saldo es 0",
            icon: "warning",
            backdrop: "#66f4ae55"
        });
    }
});

btnJugar.addEventListener("click", (e) => {
    e.preventDefault();
    jugar(montoJugar.value, numeroJugar.value);
    mostrarPozo();
    verSaldo();
});