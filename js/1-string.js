/* String - Cadena - "" `` '' */
/* HARCODEAR es escribir un dato estatico */
// const nombre = 'Andres'
// const apellido = prompt('ingresa tu apellido')

/* CONCATENAR es unir */
// console.log('Hola ' + nombre + ' ' + apellido) */
/* Template string permite colocar variables, texto plano y enviar desde js etiquetas html */

/* INTERCOLAR ${variable} ${variable} */
// console.log(`Hola ${nombre} ${apellido}`) */
/* Colocar un dato de forma dinamica se hace poniendole a la variable un prompt que es un metodo
// que recibe un mensaje y puede devolver uno de dos valores: un string o un null a traves de una
// ventana emergente y en esa ventana el usuario puede escribir un valor, es decir, paso de tener
// un valor estatico a tener un valor dinamico (siempre retorna un string) */
// console.log(apellido)

/* ALERT muestra un mensaje */
// alert('Hola')

/* CONFIRM recibe un mensaje y devuelve un buleano */
// const confirmar = confirm('Estas seguro de eliminar el producto?')
// console.log(confirmar)
// const edad = prompt('ingresa tu apellido')
// console.log(edad)

/*LENGTH - TRIM - CHARART */
// const nombre = 'Andres'
// console.log(nombre.trim.length)
/* LENGTH cuenta los caracteres de la variable */

/* TRIM es un atributo que remueve el espacio en blanco de los extremos de una variable */

/* CHARART */
// 0 1 2 3 - POSICION - CharAt - Recibe un número y devuelve un string
// H O L A
// 1 2 3 4 - CANTIDAD - Length
// const frase = 'Hola Mundo'
// console.log(frase.charAt(5))
/* SUBSTRING - Corta de un determinado caracter en adelante */
// console.log(frase.substring(0, 3)) // Primero la Posicion y luego la cantidad //

/* COMO PASAR TODO A MAYUSCULA O MINUSCULA */
//const nombre = 'AnDres'
//console.log(nombre.toUpperCase()) /* Convierte el string en mayúscula */
//console.log(nombre.toLowerCase()) /* Convierte el string en minuscula */
/* En la base de datos mayormente se usa en minuscula */

//HOLA MUNDO
//H-O-L-A-M-U-N-D-O

/* SPLIT: (SEPARA) CONVIERTE UN STRING EN UN ARRAY */
const frase = prompt ('ingresa una frase')
const fraseArray = frase.split('')
console.log(fraseArray)

/* JOIN: (UNIR) UNE A TRAVES DE UN SEPARADOR */
console.log(fraseArray.join('-'))