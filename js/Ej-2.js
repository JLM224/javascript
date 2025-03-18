// ESCRIBE UN PROGRAMA QUE SOLICITE UNA NOTA (NUMERO) DE 0 A 10. LUEGO MOSTRAR LA CALIFICACION
// EN UN ALERT SEGÚN LOS SIGUIENTES RANGOS DE NOTA:
// 0-2: Muy Deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente
// Si ingreso un numero que no este dentro del rango de 0 a 10 mostrar un mensaje de "numero erroneo". Si
// el numero ingresado no es valido mostrar el mensaje "Introduce un número válido" */
let nota = 10
if(nota <0 || nota >10){
    alert("Número Erroneo")
}
if(nota <= 2){
    alert("Muy Deficiente")
} else if(nota === 3 || nota === 4){
    alert("Insuficiente")
}    else if(nota === 5 || nota === 6){
        alert("Suficiente")
}    else if(nota === 7){
        alert("Bien")
}    else if(nota === 8 || nota === 9){
        alert("Notable")
}    else if(nota === 10){
    alert("Muy Sobresaliente")
}