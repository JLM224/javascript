/* CONDICIONALES: ES UNA TOMA DE DECISION, DONDE EL PROGRAMA TIENE QUE DECIDIR QUE HACER
CON UN DATO O UN PROCESO */
/* CONDICIONES SIMPLES: CUANDO HAY UN SOLO CAMINO "TRUE" */
// let edad = 18
// if(edad >= 18){
//     alert("Podes tener la licencia")
//


/* IF: ES LA CONDICION Y ELSE:SINO */
// if(edad >= 18){
//     alert("Podés tener la licencia")
// } else if (edad === 16 || edad === 17){
//     alert("Tenés licencia gracias a tus padres")
// } else {
//     alert("Eres menor de edad")
// }
/* SIEMPRE QUE SE USA UN IF O UN ELSE IF VA UN ELSE */

/* TIPOS DE FALSE
// 0 - FALSE - " " - NULL - ANDERFICE */

/* const nombreUsuario = "1"
if(!nombreUsuario){
    alert("Campo nombre de usuario vacío")
} */

/* CONDICIONES MULTIPLES */
// if (edad >= 18 && edad <=75) {
//     alert ("Podés tener la licencia")
// } else if (edad === 16 || edad === 17)
//     alert("Tenés licencia gracias a tus padres")
//  else {
//     alert("No podés tener la licencia")
// }

/* CONDICION ABREVIADA: SE USA MUCHO EN VARIABLES */
/* TERNARIO: ES UNA CONDICION QUE DA DOS CAMINOS */
// let edad = 18
// edad >=18 ? console.log("Mayor de edad") :
// console.log("Menor de edad") */
// edad >=18 && console.log("Mayor de edad")

// SWITCH: PERMITE HACER CONDICIONES MULTIPLES, ES LARGO Y NO MUY USADO, TIENE 2 FORMAS DE USARSE
let nota = 4

// switch(nota){
//     case 0:
//         console.log("Muy Deficiente")
//         break
// }

// switch(nota){
//     case 1:
//         console.log("Muy Deficiente")
//         break
// }
// switch(nota){
//     case 2:
//         console.log("Muy Deficiente")
//         break
// }
// switch(nota){
//     case 3:
//         console.log("Insuficiente")
//         break
// }
// switch(nota){
//     case 4:
//         console.log("Insuficiente")
//         break
// }
// switch(nota){
//     case 5:
//         console.log("Suficiente")
//         break
// }
// switch(nota){
//     case 6:
//         console.log("Suficiente")
//         break
// }
// switch(nota){
//     case 7:
//         console.log("Bien")
//         break
// }
// switch(nota){
//     case 8:
//         console.log("Notable")
//         break
// }
// switch(nota){
//     case 9:
//         console.log("Notable")
//         break
// }
// switch(nota){
//     case 10:
//         console.log("Sobresaliente")
//         break
    
//     default:
//         console.log("Nota Incorrecta")
//         break
// }
// BREAK: CORTA LA EJECUCIÓN DE SWITCH

switch (true) {
    case nota >= 0 && nota <= 2:
        console.log("Muy Deficiente")
        break

        case nota === 3 || nota === 4:
        console.log("Deficiente")
        break


        default:
            console.log("Dato Incorrecto")
            break
}