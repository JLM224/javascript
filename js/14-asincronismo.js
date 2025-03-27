/* ASINCRONISMO: es cuando una parte de la aplicacion queda esperando algo (pero no se colapsa) */
// Se usa cuando una tarea que tiene que hacer la aplicacion va a demorar mucho tiempo (ej funcion)

/* SINCRONISMO: es cuando la aplicacion tiene que esperar a que algo se resuelva (en espera) */
// Todas las aplicaciones son sincronicas (esperan a que se resuelvan ciertos problemas)

// JAVASCRIPT es Monohilo = son los hilos de ejecucion del lenguaje (un hilo principal de ejecucion)
// Multihilos = (dos o mas hilos de ejecucion)

// Cuando javascript tiene muchas funciones (tiene internamente los stacks) que son las pilas de 
// ejecucion que cuando procesa mucha informacion, coloca esa sentencia en una pila (macrotask) que 
// son funciones o acciones que llevan tiempo para ser procesadas (1 seg, 1 min).
// Cuando la funcion se ejecuta y el bloque es más corta la coloca dentro de una (microtask).
// Cuando es algo que esta dentro del entorno globar o si la funcion ya resolvio el problema 
// y debe mostrar algo se le llama (call stack) que es cuando el usuario ve el resultado.

//¿Que motor usa javascript?
//Javascript tiene el motor V8 y ese motor tiene internamente un bucle que administra las 
//funciones/datos. Cualquier cosa que js va procesando y cuanto mas demora en resolver lo va 
//poniendo en un stack más grande.

// Toda funcion lleva tiempo para ser ejecutada, cuanto más cosas tenga esa funcion 
// más tiempo va a tardar en ser ejecutada.

//API: ES UN SERVIDOR QUE PRESTA RECURSOS

/* PROMESA */
// ES CUANDO LA APP TIENE QUE ESPERAR A QUE SE RESUELVA ALGO DENTRO DE UNA PETICIÓN
// (ES UN TIEMPO DE ESPERA) SE USA DESDE UN FRONTEND HACIA UN SERVER (existe en todos los entornos)
// DEVUELVEN DOS RESPUESTAS: REJET = (ERROR) Y RESOLV = ()
// Las promesas tienen tres estados: pendiente (pending) - resuelto (resolv) - error (rejet)

// CREAR PROMESA (clase propia "Promise" recibe resolve y rejet y devuelve dos argumentos/parametros)
const promesa = new Promise((resolve, reject) => {
    // devuelve booleanos (true-false)
    const res = false

    if(res){
        resolve("La promesa se cumplio")
    }else{
        reject("La promesa no se cumplio")
    }
})

// METODOS PARA VER EL RESULTADO DE UNA PROMESA:
// then (captura el resolve) - catch (captura el rejet) "Se usan ambos siempre"
promesa
.then((res) => console.log(res))
// recibe un callback
.catch((error) => console.log(error))

// async - await (herramientas para resolver una promesa y van dentro de una funcion)
// estas herramientas convierten la funcion en asincronica
const mostrarResultado = async () =>{
    try { // se poner el resolve (la promesa se resuelve)
    //Intentar      espera
        const res = await promesa
    console.log(res)
    } catch (error) { // se pone el rejet (muestra el error)
    //Obtener/agarrar
        console.log(error)
    }
}

// CONSUMO DE UNA API
// Hay tres tipos de API: publica (uso publico) - privada (empresa-entidad) - socio (los vendedores)
// FETCH: Es metodo de js que permite consumir un servidor (local/externo)
// Este metodo recibe una url y devuelve una promesa. (utiliza por defecto el get)
// HTTP: Es un protocolo de comunicacion que permite enviar cualquier tipo de datos entre uno o 
// mas servidores.
// METODOS HTTP: GET (buscar y obtener) - POST (crear) - DELETE (borrar) - PUT (actualiza)
const productos = fetch("https://fakestoreapi.com/products")

/*productos
.then((res) => res.json()) //se resuelve la promesa de la api
.then((data) => console.log(data)) //se resuelve la promesa del json (muestra el array de productos)
.catch((error)=> console.log(error)) //muestra un error (solo uno) */

const obtenerProductos = async() => {
    try {
        const productos = await fetch("https://fakestoreapi.com/products"); //promesa del fetch
    const res = await productos.json(); //promesa del json
    console.log(res);
    } catch (error) {
        console.log(error);
    }
};

// DESESTRUCTURAMIENTO DE UN OBJETO (ahorra codigo repetido)
// punto - corchete - desestructuramiento (maneras de obtener valores de una propiedad)
const persona = {
    nombre: "Jorge",
    apellido: "Medina",
    dni: "123456789",
    edad: 23
}

// EJEMPLO DE DESESTRUCTURAMIENTO DE OBJETO (se tiene que llamar igual que en la propiedad del objeto)
const {nombre, apellido, dni, edad} = persona

console.log(nombre)
console.log(apellido)
console.log(dni)
console.log(edad)

// DESESTRUCTURAMIENTO DE UN ARRAY
const numero = [1.2,3]

// EJEMPLO DE DESESTRUCTURAMIENTO DE ARRAY (no es necesario tener el mismo nombre que en la propiedad)
// Creamos una variable (cualquiera), lo busca en el array (posicion) y lo toma como valor
const [uno, dos, tres] = numero
console.log(uno)
console.log(dos)
console.log(tres)

// SPREAD OPERATOR (funciona en arrays y objetos, saca una copia y se le puede agregar un valor nuevo)
const nuevoObjeto = {
    ...persona, // copia del objeto de persona
    status: false // false (baja logica)
}

console.log(nuevoObjeto)

// MANEJADORES DE TIEMPO (sirven para hacer redireccionamientos y eventos)
// setTimeout (es un callback, recibe un tiempo y se expresa en milisegundos "se ejecuta 1 vez
// pasando un tiempo")
setTimeout(() => {
    console.log("Hola")
}, 3000)

// setInterval (recibe un callback y recibe un tiempo "se ejecuta siempre")
const iDsetInterval = setInterval(() => {
    console.log("Hola")
}, 2000)

// parar el setInterval
const pararSetInterval = () => {
    clearInterval(iDsetInterval)
}