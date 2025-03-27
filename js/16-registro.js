/* EVENTO: se refiere a la accion que el usuario hace en la pagina (clickeado,escribir,scroll) */
// Todo evento es capturable
const Usuario = document.getElementById("Usuario")
const Email = document.getElementById("Email");
const Contrasenia = document.getElementById("Contrasenia");
const Contrasenia2 = document.getElementById("Contrasenia2");
const inputCheck = document.getElementById("idCheck")
const BotonRegistro = document.getElementById("idBotonRegistro");

/* CAPTURAR UN EVENTO (hay tres maneras) */
// PRIMERA MANERA
const capturarEventoClick = (event) => {
    event.preventDefault(); // metodo que previene que la pagina se recargue
    console.log(event);
    console.log(Usuario.value); // obtiene el valor que se escribe en el input de usuario en el formulario
    if (!Usuario.value){ // (condicional) si el input está vacio
        Usuario.classList.add("is-invalid") // el input se vuelve de color rojo
        divErrorUsuario.classList.remove("d-none"); // muestra un mensaje: (campo vacio)
}
    if (Usuario.value && 
        Email.value && 
        Contrasenia.value && 
        Contrasenia2.value && 
        inputCheck.checked){
        if(Contrasenia.value === Contrasenia2.value){ // condicional (pregunta si las contraseñas son iguales)
        const usuariosLs = JSON.parse(localStorage.getItem("usuarios")) || []; //si no hay nada devuelve array vacio
        const usuarioExistente = usuariosLs.find((usuario) => usuario.nombreUsuario === Usuario.value)
        // no permite dos usuarios repetidos
        const emailExistente = usuariosLs.find((usuario) => usuario.emailUsuario === Email.value)
        // no permite dos email repetidos
        if(usuarioExistente || emailExistente){
            alert("Usuario y/o Email no están disponibles") // mensaje que se muestra si hay usuarios repetidos
            return; // corta la ejecucion del condicional 
        }
        const nuevoUsuario = {
            id: usuariosLs[usuariosLs.length -1]?.id + 1 || 1,
            nombreUsuario: Usuario.value,
            emailUsuario: Email.value,
            contrasenia: Contrasenia.value,
            roll: "usuario",
            login: false,
            status: "enabled",
        };
        usuariosLs.push(nuevoUsuario);

        // Limpieza de formulario
        Usuario.value = "";
        Email.value = "";
        Contrasenia.value = "";
        Contrasenia2.value = "";
        inputCheck.checked = false;
        alert("El registro fue exitoso"); // mensaje que se muestra si el registro es exitoso
        localStorage.setItem("usuarios", JSON.stringify(usuariosLs));
        location.href = "../paginas/iniciar-sesion.html";
        } else {
            alert("Las contraseñas no son iguales") // mensaje que muestra si las contraseñas no coinciden
        }
}
};

const divErrorUsuario = document.getElementById("idErrorUsuario"); // funcion del mensaje (campo vacio)
divErrorUsuario.classList.add("d-none"); // el mensaje queda oculto

// addEventListener: metodo que recibe una clave (evento que se quiere controlar) y un listener (funcion)
// todos los eventos devuelven a la funcion de al lado un objeto de informacion que pertenece a ese evento
BotonRegistro.addEventListener("click", capturarEventoClick);