const Usuario = document.getElementById("Usuario")
const Contrasenia = document.getElementById("Contrasenia");
const BotonIniciarSesion = document.getElementById("idBotonIniciarSesion");

const capturarEventoClick = (event) => {
    event.preventDefault(); // metodo que previene que la pagina se recargue
    const usuariosLs = JSON.parse(localStorage.getItem("usuarios")) || []; //si no hay nada devuelve array vacio
        const usuarioExistente = usuariosLs.find((usuario) => usuario.nombreUsuario === Usuario.value);
    if (!usuarioExistente){
        alert("Usuario y/o Contraseña no son correctos. USUARIO");
        return;
    }
    if (!Usuario.value){ // (condicional) si el input está vacio
        Usuario.classList.add("is-invalid") // el input se vuelve de color rojo
        divErrorUsuario.classList.remove("d-none"); // muestra un mensaje: (campo vacio)
}
    if (usuarioExistente.Contrasenia === Contrasenia.value){
        usuarioExistente.login = true
        localStorage.setItem("usuarios", JSON.stringify(usuariosLs)); // limpia el local storage
        sessionStorage.setItem("usuarioSS", JSON.stringify(usuarioExistente)); // obtiene el objeto usuario logueado

        if(usuarioExistente.rol === admin){
            location.href("../paginas/admin.html") // redirecciona a la pagina del administrador
        } else {
            location.href("../paginas/usuario.html") // redirecciona a la pagina de un usuario común
        }
        alert("Usuario y/o Contraseña no son correctos. CONTRASEÑA");
        return;
    };
}
const divErrorUsuario = document.getElementById("idErrorUsuario"); // funcion del mensaje (campo vacio)
divErrorUsuario.classList.add("d-none"); // el mensaje queda oculto

// addEventListener: metodo que recibe una clave (evento que se quiere controlar) y un listener (funcion)
// todos los eventos devuelven a la funcion de al lado un objeto de informacion que pertenece a ese evento
BotonIniciarSesion.addEventListener("click", capturarEventoClick);