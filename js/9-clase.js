/* CLASE: Funciona como un molde que nos permite crear objetos individuales, permitiendo definir 
los atributos y métodos que describen su comportamiento y estados. */
/* INSTANCIO: cuando le paso los valores, la clase los trabaja y retorna un objeto (instancia). */
class Persona{
    constructor(nombre, apellido, dni ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }

    /* Metodo */
    saludar(){
        console.log(`Hola soy ${this.nombre} ${this.apellido}`);
    }

}
const persona1 = new Persona("Jorge", "Medina", "1234567890")
console.log(persona1)

// INVESTIGAR PRO Y CONTRAS EN USAR FUNCION CONSTRUCTORA Y CLASE /*
/* THIS: APUNTA AL AMBIENTE DEL OBJETO O CLASE*/

/* EJERCICIO: */
// NOMBRE APELLLIDO SALDO
// 3 METODOS INGRESAR, EXTRAER, INFORMAR
// RECIBIR POR PARAMETRO EL DINERO QUE VAN A SUMAR Y RESTAR

class Banco{
    constructor(nombre, apellido){
        this.nombre= nombre;
        this.apellido= apellido;
        this.saldo = 0
    }
    ingresar(dinero){
        this.saldo += dinero;
    }
    extraer(dinero){
        this.saldo -= dinero;
        if(dinero + saldo){
            alert("No posees esta cantidad en tu cuenta")
        }
    }
    informar(){
        console.log(this.saldo);
    }
}
const cuenta1 = new Banco("Jorge", "Medina");
cuenta1.ingresar(1000)