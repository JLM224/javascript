/* BUCLES: ES UN BLOQUE DE CODIGO QUE SE REPITE UNA CANTIDAD DEFINIDA O INDEFINIDA +/
/* TIPOS DE BUCLES */
/* WHILE: SIGNIFICA "MIENTRAS", PRIMERO PREGUNTA Y DESPUES EJECUTA
/* DO WHILE: PRIMERO EJECUTA, DESPUES PREGUNTA
/* FOR: SIGNIFICA "PARA" CONDICION , INCREMENTO, CONTADOR++
/* ELEMENTOS :CONTADOR ; CONDICION ; INCREMENTAR EL CONTADOR ++ = suma de a 1 */

/* CONTADOR WHILE: SIGNIFICA "MIENTRAS" */
// let contador=1
// while(contador <= 5){
//     console.log("Hola")
//     contador++
// }

// let numero = prompt('Ingese un número')
// let suma = 0

// while(numero !== null){
//     suma+= Number(numero)

//     numero = prompt('Ingresa otro número')
// }
// console.log(suma)


/* CONTADOR DO WHILE: */
// let contador=1

// do{
// console.log('Hola')
// contador++
// }while(contador <= 5)


/* CONTADOR FOR: SIGNIFICA "PARA" */
//DERIVADOS: FOR OF - FOR IN - ForEach */

// for(let contador = 1 ; contador < 5 ; contador++){
//     console.log("Hola")
// }

/* EN LOS BUCLES NO SE USAN MUCHO LOS = */

/*BUCLE ANIDADO O ANIDAMIENTO DE BUCLES */

/* TRIANGULO DE NUMEROS REPETIDOS */
for(let i = 1; i < 31; i++){
    for(let j =0; j<i; j++){
        document.write(i)
    }
    document.write('<br>')
}

/* EL BUCLE INTERNO SIEMPRE VA A DEPENDER DEL PADRE */
/* SE IMPRIME LAS VECES QUE EL PADRE SE REPITE DENTRO DEL HIJO */
/* EL HIJO DEPENDE DEL CONTADOR DEL PADRE */

/* TRIANGULO CON NÚMEROS NO REPETIDOS */
for(let i = 1; i < 32; i++){
    for(let j =1; j<i; j++){
        document.write(j)
    }
    document.write('<br>')
}

/*TRIANGULO INVERTIDO */
for(let i = 30; i > 0; i--){
    for(let j =30; j>=i; j--){
        document.write(j)
    }
    document.write('<br>')
}