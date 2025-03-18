/*OBJETOS: SE CONSTRUYE A TRAVES DE LLAVES, SE MEZCLAN DATOS Y FUNCIONES
// NO ES OBLIGATORIO TENER UNA FUNCION DENTRO DE UN OBJETO
// RECIBE CUALQUIER TIPO DE DATO
// NO HAY POSICIONES DENTRO DE UN OBJETO
// VALORES: (se separan por dos puntos :)
// PROPIEDADES: SON LOS DATOS (se separan con una coma ,)
// METODOS (FUNCIONALIDAD): ES UNA FUNCION DENTRO DE UN OBJETO */

// const persona = {
    /* DATO = PROPIEDAD; SE DIVIDE EN DOS */
    /* Clave (datos) : Valor (es lo dinamico) */
//     nombre: "Jorge",
//     apellido: "Medina",
//     dni: "12123412",
//     domicilio: "La Reduccion"
//     nacionalidad: "Argentino",
//     edad: 23
//     direccionesAnteriores:
//     localidad {
//     calle:,
//     altura:,
//
//     }, tyc:true
//  saludar: () =>{
//   console.log("Hola!") }
// }
// console.log(persona)

/* PARA OBTENER UNA PROPIEDAD */
// console.log(el objeto.propiedad)
// console.log(persona.apellido)
/* OTRA FORMA */
// console.log(objeto ["propiedad"]);
// console.log(persona ["edad"]);

/* AGREGAR UN DATO O ACTUALIZAR UNA PROPIEDAD */
// SE PONE (EL OBJETO).(NUEVAPROPIEDAD) = (EL VALOR/NUEVO VALOR)
// persona.educacion = "Terciario"
// persona.edad = "24; 
// console.log(persona);

/* PARA ELIMINAR UNA PROPIEDAD (DELETE: SOLO BORRA UNA PROPIEDAD) */
// SE USA DELETE (EL OBJETO).(PROPIEDAD QUE SE QUIERE BORRAR)
// delete persona.localidad
// console.log(persona)

/* COMO RECORRER UN OBJETO */
// FOR Y FOREACH (metodo de array) SE USAN PARA ARRAYS
// FOR IN Y FOR OF SE USAN PARA OBJETOS
/* PRIMERA MANERA "FOR IN" */
// for(variable que representa cada clave del objeto in (en que objeto esta)){
// console.log(variable) se accede a su valor: console.log(objeto[variable])
//}
// for(let = clave in persona){
// this.console.log(persona[clave])
// }

/* SEGUNDA MANERA "KEYS (recibe un objeto y retorna un array de las claves)"
// foreach saca las claves de la copia del objeto y retorna un array 
// Object.keys(persona).array.forEach((clave) => {
//     console.log(persona[clave])  
// })

//objet.entries - objet.values averiguar

/* METODOS DENTRO DE UN OBJETO */
// const auto = {
// marca:"Fiat",
// modelo:"Cronos",
// anio: 2020,
// info: function () {
//     console.log(this.marca, this.modelo, this.anio);
// },
// };

/* DENTRO DEL OBJETO NO PUEDO LLAMAR AL OBJETO */
/* THIS: APUNTA AL AMBIENTE DEL OBJETO (palabra reservada de los objetos) */
/* UNA FUNCION ANONIMA APUNTA SIEMPRE AL SCOPE MAS CERCANO DEL OBJETO */
/* LA FUNCION FLECHA ROMPE EL SCOPE Y APUNTA AL GLOBAL FUERA DEL OBJETO, POR LO TANTO,
// NO SE USA DENTRO DEL OBJETO */


/* EJERCICIO */
// Crear un objeto "banco" con nombre y apellido, tres funciones : ingresar , extraer, info de cuenta
// el extraer no debe exceder el saldo que tenga la cuenta */
const banco = {
    nombre: "Jorge",
    apellido: "Medina",
    saldo: 0,
    ingresar: function (dinero) {
        //let dinero = prompt("Ingresa un monto mayor a 0");
        if (dinero < 0) {
            alert("Valor incorrecto");
        }
        this.saldo += Number(dinero);
    },
    extraer: function (dinero) {
        // let dinero = prompt("Ingresa un monto mayor a 0");
        if (dinero < 0) {
            alert("Valor incorrecto");
            return
        }
        
        if (dinero > this.saldo) {
            alert("No podes extraer mas de lo que tenes", this.saldo);
            return //Sirve para cortar la ejecucion del condicional, se usa sino se quiere usar else
        }
    },
    informar: function () {
        console.log(this.saldo);
    },
};