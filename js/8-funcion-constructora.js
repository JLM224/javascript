/* FUNCION CONSTRUCTORA: PERMITE CONSTRUIR MUCHOS OBJETOS A PARTIR DE ELLA MISMA
// SE EJECUTA Y CREA UN OBJETO: RECIBE LOS ARGUMENTOS Y RETORNA UN OBJETO */
// SE LE PASA LOS DATOS, CREA OBJETOS IDENTICOS PERO CON VALORES DISTINTOS */
function Persona(nombre, apellido, dni){
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;

    this.saludar = function(){
        console.log(`Hola soy ${this.nombre} ${this.apellido}`)
    }
}

// const persona1 = new Persona("Jorge", "Medina", "12345678")
// console.log(persona1)

const personas = []

const registerUser = () =>{
    let nombre = prompt("Ingresa tu nombre")
    let apellido = prompt("Ingresa tu apellido")
    let dni = prompt("Ingresa tu dni");

    const persona = new Persona(nombre, apellido, dni);
    personas.push(persona)
}

const getUsers = () =>{
    console.log(personas)
}