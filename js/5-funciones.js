/* FUNCION: INSTRUCCIONES PUESTAS EN UN BLOQUE Y PARA QUE ESTA FUNCIONE DEBE SER INVOCADA
SON REUTILIZABLES */
/* SE INVOCA CON EL NOMBRE Y LOS () */
/* UNA FUNCION PUEDE RECIBIR PARAMETROS O ARGUMENTOS */
/* PARAMETRO ES CUANDO EL DATO QUE SE RECIBE ES A TRAVES DE ALGO DINAMICO (UNA VARIABLE) */
/* ARGUMENTO ES CUANDO EL DATO QUE SE RECIBE ES HARCODEADO */

/* FUNCION DECLARATIVA: TIENE UN NOMBRE, SE PUEDE EJECUTAR DESDE CUALQUIER LADO DEL CODIGO */
// function saludar(){
//     alert('Hola')
// }
//saludar()

// /* FUNCION ANONIMA: NO TIENE NOMBRE, SE GUARDAN DENTRO DE UNA CONSTANTE QUE SI TIENE NOMBRE Y
// SU IDENTIFICADOR ES LA VARIABLE, PRIMERO DEBE EXISTIR LA VARIABLE PARA ACCEDER A SU CONTENIDO */
// const mensaje = function(){
//     alert("Hola Mundo")
// }
// mensaje()

// /* FUNCION FLECHA: ES LO MISMO QUE LA FUNCION ANONIMA, SE GUARDA EN UNA VARIABLE CONSTANTE,
// RETORNAN LOS VALORES Y PERMITE COLOCAR TODA UNA FUNCION EN UNA SOLA LINEA */
// const suma = () => {
//  return 1 + 1
// }
// console.log(suma())

/* FUNCION IIFE: ES LA QUE SE AUTOINVOCA CUANDO SE TERMINA DE CREAR, SE EJECUTA UNA SOLA VEZ*/
//  (
//     ()=> {
//     console.log("Hola soy una IIFE")
//  }
// )()

/* DIFERENCIA ENTRE PARAMETROS Y ARGUMENTOS */
/* PARAMETRO ES CUANDO EL DATO QUE SE RECIBE ES A TRAVES DE ALGO DINAMICO (UNA VARIABLE) */
/* ARGUMENTO ES CUANDO EL DATO QUE SE RECIBE ES HARCODEADO */
// let nombreUsuario = 'Jorge2022'
// const formulario = (nombre="", apellido="", dni="") =>{
//    console.log(`${nombre} ${apellido} ${dni}`)
// }

// const suma = (a=0,b=0) =>{
//    return a + b
// }

// console.log(suma(1,2))
// formulario(nombreUsuario, "Medina", "")

/* FUNCION DENTRO DE OTRA FUNCION */
// CUANDO UNA FUNCION INVOCA A OTRA */
// const numeroAleatorio = () =>{
//    const numero = Math.round(Math.random() * 100)
//    return numero
// }

// const numeroUsuario = () =>{
//    const numero = prompt('Ingresa un numero del 1 al 100')
//    return Number (numero)
// }

// const juego = () =>{
//    const numeroMaquina = numeroAleatorio()
//    console.log(numeroMaquina)
//    const numeroPersona = numeroUsuario()

//    if(numeroMaquina === numeroPersona){
//       alert('Ganaste')
//    } else{
//       alert('Sos un perdedor')
//    }
// }

/* CALLBACKS: RECIBO UNA FUNCION COMO PARAMETRO */
/* ES CUANDO PASO POR PARAMETRO UNA FUNCION, PUEDE SER INTERNO Y EXTERNO
//SON FUNCIONES NO REUTILIZABLES, SE USAN PARA RESOLVER ALGO ESPECIFICO POR ESO SE LO HACE INTERNAMENTE
//CADA CALLBACKS RESUELVE UN PROBLEMA */

//  const suma = (a=0,b=0) =>{
//     return a + b
//  }

//  const resta = (a=0,b=0) =>{
//    return a - b
// }

// const multiplicacion = (a=0,b=0) =>{
//    return a * b
// }

//  const resultado = (funcion) =>{
//     console.log(funcion(8,5))
//  }

//  resultado(suma)
//  resultado(resta)
//  resultado(multiplicacion)
//  resultado((a,b) => a+b) /*CALLBACK INTERNO */

/* DIFERENCIA ENTRE AMBIENTE GLOBAL Y AMBIENTE LOCAL */
// AMBIENTE GLOBAL O SCOPE: ES TODO LO QUE ESTA FUERA DE LA FUNCION, CONDICIONAL, BUCLE 
// LO PODES LLAMAR DE DONDE QUIERAS */
// const nombre = 'Jorge'
// AMBIENTE LOCAL: LO QUE ESTÁ DENTRO DE UN BLOQUE {}, FUNCION, CONDICIONAL O BUCLE
// NO LO PODES LLAMAR DESDE EL AMBIENTE GLOBAL */
// if(nombre){
//    /*ambiente local*/
// }
// while(nombre){
//    /*ambiente local*/
// }
// const nombre =() =>{
//    /*ambiente local*/
// }

/* VAR SE SALE DEL AMBIENTE LOCAL Y APUNTA AL AMBIENTE GLOBAL POR ESO SE RECOMIENDA USAR LET 
// VAR ROMPE EL SCOPE (AMBIENTE) */

/* CREAR UNA VARIABLE PARA METERLA DENTRO DE UNA FUNCION PARA OBTENER UN DATO SE CONSIDERA MALA PRACTICA */