/* JSON: es un formato de lectura, transforma los objetos en string (para minimizar el peso de los 
// objetos/arrays y asi agilizar la transferencia de datos y no altera al original)
JS = JavaScript
O = Objetos
N = Notation */

/* A JSON lo encontramos de tres formas en JavaScript:
// .json (extension) - .json(metodo) - JSON (propiedad (más utilizado)) */

/* JSON (propiedad) TIENE DOS PROPIEDADES 
// stringify: transforma un objeto a string
// parce: transforma un string a objeto 
// SERIALIZAR (significa transformación)
// NO SE PUEDE TRANSFORMAR si dentro de un objeto hay una funcion (metodo) porque lo borra
// no soporta expresiones regulares y no maneja valores undefined 
// SI SE PUEDE TRANSFORMAR de objeto a string: un objeto puro, arrays, string, numeros, 
// booleanos y null */

const persona = {
    nombre: "Jorge",
    apellido: "Medina",
    domicilio: "Reduccion",
    edad: 23,
    dato: false,
    algo: undefined,
    function: () => {
        console.log("Hola");
    },
}

// VARIABLE PARA PASAR DE UN OBJETO A UN STRING (no altera al original)
const objetoAString = JSON.stringify(persona)
console.log(JSON.parse(objetoAString))

// VARIABLE PARA PASAR DE UN STRING A UN OBJETO (no altera al original)
const stringAObjeto = JSON.parse(objetoAString)
console.log(stringAObjeto)

// EJEMPLO CON ARRAY
const alumnos = [
    {
        nombre: "Jorge",
        apellido: "Medina",
        domicilio: "Reduccion",
        edad: 23,
        dato: false,
        algo: undefined,
        function: () => {
            console.log("Hola");
        },
    },
    {
        nombre: "Jorge",
        apellido: "Medina",
        domicilio: "Reduccion",
        edad: 23,
        dato: false,
        algo: undefined,
        function: () => {
            console.log("Hola");
        },
    },
];

const arrayAString = JSON.stringify(alumnos)
const stringArray =  JSON.parse(arrayAString)
console.log(stringArray)

// TYPEOF (propiedad): dice cual es el tipo de dato que tiene la variable que yo le asigno al lado
console.log(typeof persona)
console.log(typeof alumnos)

// POR QUE JAVASCRIPT TOMA AL OBJETO Y AL ARRAY COMO TIPO OBJETO
// Porque ambos nacen desde un mismo punto pero despues se diferencian