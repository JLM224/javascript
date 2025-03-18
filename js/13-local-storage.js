// BOM = BROWSER OBJET MODEL
/* MEMORIA LOCAL (local storage): LOS DATOS EXISTEN HASTA QUE YO LO BORRO 
// Toda pagina siempre guarda informacion en esta memoria y los valores cambian dependiendo de la 
// pagina (guarda las preferencias del usuario) /*
/* MEMORIA SESION (sesion storage): LOS DATOS EXISTEN HASTA QUE CIERRO LA PESTAÑA O EL NAVEGADOR 
// Se guarda informacion del usuario (id del usuario, tokem de logeo) todo esto existira mientras 
// el usuario este logeado en la pagina */

/*const alumnos = []

const persona = {
    nombre: "Jorge",
    apellido: "Medina"
}

const agregarAlumno = () => {
    alumnos.push({
        nombre: "Jorge",
        apellido: "Medina"
    }
    )
}

const mostrarAlumnos = () => {
    console.log(alumnos)
}

/* LOCAL STORAGE Y SESION STORAGE TIENEN TRES METODOS:
/* getItem - setItem - removeItem - Clear (limpia todo el local/sesion storage) */
// GET = Obtener
// SET = Crear o editar un elemento dentro del local storage
// REMOVE = Eliminar un dato dentro del local storage

/* Los Metodos reciben clave y valor (ambos deben ser string) */
/*localStorage.setItem("Nombre", "Jorge")
localStorage.setItem("Apellido", "Medina")

sessionStorage.setItem("Nombre", "Jorge")
sessionStorage.setItem("Apellido", "Medina")

/* Borrar un elemento */
//const borrarElementoLocalStorage = () => {
//    localStorage.removeItem("nombre")
    // remove recibe solamente la clave (debe ser string)
//}

/* Enviar un objeto o array (con el json lo hacemos string) */
//localStorage.setItem("persona", JSON.stringify(persona))

/* getItem sirve para buscar (recibe la clave que debe ser string) */
// const personaLocal = localStorage.getItem("persona")
// Devuelve un string
//const personaLocal = JSON.parse(localStorage.getItem("persona"))
// Lo hacemos objeto de nuevo
//console.log(personaLocal)

/* CRUD */
// C - Create - Crear (nuevo producto o servicio)
// R - Read - Leer (mostrar esos productos o servicios)
// U - Update - Actualizar (precio, nombre, stock, no stock (solo para el adm))
// D - Delete - Borrar (dar de baja: logica (de habilitar a desabilitar) y fisica (bloqueo))

// ABM
// Alta
// Baja (logica se hace siempre) - (fisica se hace despues de un cierto tiempo)
// Modificacion

// Preguntamos si hay algo en el local storage (productos), si no tiene nada 
// Hace un array vacío "SIEMPRE USAR ESTA CONDICION"
const productos = JSON.parse(localStorage.getItem("productos")) || []

// CREAR PRODUCTO
const nuevoProducto = () => {
    const nombre = prompt("Ingrese el nombre del producto")
    const precio = prompt("Ingrese el precio del producto")
    const detalle = prompt("Ingresa los detalles del producto")
    const imagen = prompt("Ingrese la URL de la imagen del producto")

    // OBJETO (necesita del id, nombre, precio, detalle e imagen)
    const nuevoProducto = {
        // Si las variables tienen el mismo nombre se pone una (coma)
        // Si son diferentes se la tiene que llamar si o si
        id: productos[productos.length -1]?.id + 1 || 1,
        // En el id (se necesita obtener el ult elemento del array(objetos)), accedemos a la 
        // propiedad id de ese ultimo objeto y a ese id le sumamos 1
        // ? (pregunta si lo de la izquierda existe, si existe pasa a aumentar a la derecha)
        // || (si lo de la izquiera es undefined (si el array está vacio) entonces coloque 1)
        nombre,
        precio,
        detalle,
        imagen
    }
    
    productos.push(nuevoProducto)
    // Para que se guarde en el local storage cuando se crea el producto
    localStorage.setItem(productos)
}

const mostrarProductos = () => {
    console.log(productos)
}

// ACTUALIZAR PRODUCTO: tomamos el objeto nuevo y lo sobrescribimos sobre el viejo
const actualizarProducto = (id) => { // Tomamos por parametro el id
    // buscamos dentro del array (productos.find), y de esos prductos que busque 
    // el producto cuyo id sea igual al id que pasamos por parametro
    const producto = productos.find((prod) => prod.id === id)
    const productoIndex = productos.findIndex((prod) => prod.id === id)    

    // Ingresamos los nuevos valores del producto
    const nombre = prompt("Ingrese el nombre del producto")
    const precio = prompt("Ingrese el precio del producto")
    const detalle = prompt("Ingresa los detalles del producto")
    const imagen = prompt("Ingrese la URL de la imagen del producto")

    const productoActualizado = {
        // el id de un producto no se puede modificar
        id: producto.id,
        // para impedir que el campo vacio sobrescriba los valores anteriores (ternario)
        // si la variable tiene un valor nuevo (?) dejamos lo que tenga, sino (:) tomamos 
        // el valor del objeto viejo = producto.nombre
        nombre: nombre ? nombre : producto.nombre,
        precio: precio ? precio : producto.nombre,
        detalles: detalle ? detalle : producto.nombre,
        imagen: imagen ? imagen : producto.nombre,

    }

    // Para saber la posicion del objeto dentro del array
    // find (devuelve el objeto necesita una condicion (debe ser verdadera))
    // findindex (devuelve la posicion del objeto necesita una condicion (debe ser verdadera))
    // array [index del producto] = nuevo objeto
    productos[productoIndex] = productoActualizado
    console.log(productos)
    localStorage.setItem("productos", JSON.stringify(productos))
}


// BORRAR PRODUCTO
// Tomamos por parametro el id
const borrarProducto = (id) => {
    // Funcion que pregunta si queremos borrar el producto o no
    const confirmDelete = confirm("Seguro quieres borrar el producto?")
    if (confirmDelete){
    // Funcion que me devuelve el id de los productos que son diferentes al id del parametro enviado
    const productosSinBorrar = producto.filter((prod) => prod.id !== id)
    console.log(productosSinBorrar)
    // Actualizar local storage si existe (lo modifica), sino (lo crea) (sobrescribe el array)
    localStorage.setItem("productos", JSON.stringify(productosSinBorrar))
    }
}