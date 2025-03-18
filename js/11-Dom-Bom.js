/* ECMAScript: SON LAS REGLAS QUE TODOS LOS NAVEGADORES DEBEN CUMPLIR (CIERTOS ESTANDARES) PARA
// QUE JAVASCRIPT PUEDA FUNCIONAR */

/* DOM: SON LOS OBJETOS QUE TIENEN RELACION DIRECTA CON LA PAGINA CARGADA
// Es un standard y tiene varias versiones (llamadas levels) los navegadores implementan el DOM L1
// Document
// Objet
// Model */

/* BOM: SON LOS OBJETOS QUE TIENEN QUE VER CON COSAS QUE ESTÁN FUERA DE LA PAG (ventana navegador)
// No es un standard algunos objetos son soportados por los navegadores y otros no (ecmascript)
// Browser
// Objet
// Model 
// ESTA CONFORMADO POR UN OBJETO LLAMADO WINDOW (objeto grande de javascript)*/
/* BOMS COMUNES: window.location - window.history - window.navigator */

/* I CAN USE: pagina para ver que versiones de lenguaje soportan los navegadores*/

/* location: es un objeto que retorna toda la informacion de la pagina en la que estoy */
/* Info de donde estoy ahora => console.log(location.href) */
/* REDIRECCIONAMIENTOS INTERNO Y EXTERNO (heramientas de location) */
/* REDIRECCION INTERNA  HREF (propiedad que no necesita ser ejecutada) */
const redireccionInicioSesionHref = () => {
location.href = "./paginas/iniciar-sesion.html";
};
/* REDIRECCION INTERNA ASSIGN (metodo que debe ejecutarse) */
const redireccionInicioSesionAssign = () => {
    location.assign ("./paginas/iniciar-sesion.html");
};
/* REDIRECCION INTERNA REPLACE ( metodo que hace lo mismo que assign pero no deja historial) */
const redireccionInicioSesionReplace = () => {
    location.replace("./paginas/iniciar-sesion.html");
};
/* REDIRECCION EXTERNA */
const redireccionGoogle = () => {
    location.href = "https://google.com";
};

/* Metodo SEARCH (busca parametros)  */
console.log(location.search.split("=")[1])
/* OTRAS OPCIONES: */
/*const dniUsuario1 = new URL /*(metodo)*/ (location.href).searchParams.get('dni')
console.log(dniUsuario1)
/* EL MÁS USADO: */
const dniUsuario = new URLSearchParams(location.search.get)
console.log(dniUsuario)

/* OBTENER LA FECHA COMPLETA (metodo) */
console.log(new Date());

/* OBTENER EL DÍA */
console.log(fecha.getDate()); // NUMERO (FECHA)
console.log(fecha.getDay() +1); // LA POSICION DEL DIA EN LA SEMANA

/* OBTENER EL MES */
const fecha = new Date();
console.log(fecha.getMonth() + 1);

/* OBTENER EL AÑO */
console.log(fecha.getFullYear());

/* OBTENER LA HORA - MINUTOS - SEGUNDOS - MILISEGUNDOS */
console.log(fecha.getHours()); // HORAS
console.log(fecha.getMinutes()); // MINUTOS
console.log(fecha.getSeconds()); // SEGUNDOS
console.log(fecha.getMilliseconds()); // MILISEGUNDOS

/* DEVUELVE LAS COORDENADAS */
const dondeEstoy = navigator.geolocation.getCurrentPosition((coordenadas) => {
    const latitud = coordenadas.coords.latitude
    const longitud = coordenadas.coords.longitude
} )

/* DEVUELVE LA INFORMACION DE LA PLATAFORMA QUE SE ESTÁ USANDO */
window.navigator

/* PARA MANEJAR EL HISTORIAL => HISTORY (tiene tres metodos) */
history.forward() // PARA IR HACIA ADELANTE (siempre es 1)
history.back()   // PARA IR HACIA ATRÁS (siempre es 1)
history.go(-1)    // RECIBE UN NÚMERO (cualquiera) SI ES NEGATIVO (atras), SI ES POSITIVO (adelante)