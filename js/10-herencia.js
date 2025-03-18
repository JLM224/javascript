/* HERENCIA: (se necesita de una clase padre) ESA CLASE PADRE HEREDARÁ A LA CLASE HIJA TODOS SUS 
// ATRIBUTOS (propiedades y metodos), SI LA HERENCIA TIENE MAS PROPIEDADES/METODOS NO SIGNIFICA QUE 
// LA CLASE PADRE HEREDA ESOS VALORES, ESO ES PROPIO DE LA CLASE HIJA */
/* COMO SE CREA UNA HERENCIA?
// SE CRE LA CLASE Y SE COLOCA EXTENDS Y AL LADO VA LA CLASE PADRE, LAS LLAVES, CONSTRUCTOR 
// Y SUPER (busca en el padre los valores que el hijo necesita) */

class Roles extends Persona{
    constructor(nombre, apellido, dni, rol){
        super(nombre,apellido,dni);
        this.rol = rol;
    }

    mostrarRol(){
        console.log(`Mi nombre es ${this.nombre} ${this.apellido} y mi rol es ${this.rol}`);
    }
}
const persona = new Persona("Juan", "Diaz", "1234567890");
const rolAdmin = new Roles("Jorge", "Medina", "123456789", "admin");

console.log(persona1)
console.log(rolAdmin)


/* EJERCICIO */
// Hacer una clase = personaje, herencia = hechicero/guerrero */
class Personaje{
    constructor(nombre, apellido, dni){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni
    }
    saludar(){
        console.log(`Hola soy ${this.nombre} ${this.apellido}`)
    }

}
const Personaje = new Personaje("Jorge", "Medina", "1234567890")
console.log(Personaje)


class Roles extends Personaje{
    constructor(nombre, apellido, dni, rol){
        super(nombre,apellido,dni)
        this.rol = rol
    }

    mostrarRol(){
        console.log(`Mi nombre es ${this.nombre} ${this.apellido} y mi rol es ${this.rol}`)
    };
}
const Persona2 = new Persona("Juan", "Diaz", "1234567890")
const rolAdmin2 = new Roles("Jorge", "Medina", "123456789", "hechicero")

console.log(persona2)
console.log(rolAdmin2)