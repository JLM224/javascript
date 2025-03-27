// ES RECOMENDABLE TENER UN HOJA DE JS PARA CADA HOJA DE HTML
// HAY TRES MANERAS DE OBTENER UN ELEMENTO DEL DOM: (iD - CLASS - ETIQUETA(nombre))
// document (le dice al js que a los elementos se los debe buscar en en documento)

// 1) ID
// getElementById (metodo que obtiene un elemento por id) (se le pasa el elemto por string)
// Devuelve un objeto
// const tituloPrincipal = document.getElementById("")

// className (muestra el nombre de las clases)
// classList (un array que enumera las clases que hay en el elemento)
// innerText (funciona solo para texto plano "puede cambiar el contenido")
// innerHTML (envia un elemento html hacia el documento)

// 2) CLASS
// getElementByClassName (se le pasa el nombre de la clase por string)
// Devuelve una coleccion (un array de objetos)
// const tituloPrincipal1 = document.getElementsByClassName


// 3) NOMBRE DE LA ETIQUETA
// getElementByTagName (selecciona la etiqueta entre todas las etiquetas existentes)
// Devuelve una coleccion de objetos
// const tituloPrincipal2 = document.getElementsByTagName

// 4) querySELECTOR
// Por defecto busca por etiqueta, pero puede cambiar: (# id, . clase)
// Con las clases devuelve la primera coincidencia (el primer elemento con esa clase)
// Con las etiquetas pasa lo mismo

// 5) querySELECTORALL
// En las etiquetas y las clases devuelve todos los elementos que coincidan
// Con los id devuelve todos los id que sean iguales


// CREAR ELEMENTO DESDE JS
// createElement (se le pasa el nombre de la etiqueta por string)
// const parrafo = document.createElement("p");
// parrafo.innerText = "Parrafo";
// (usamos el elemento capturado en la funsion para poner lo creado debajo de ese elemento)
// tituloPrincipal3.appendChild(parrafo);
// console.log(parrafo);

// Nodos: Permite posicionar un elemento js en un lugar determinado dentro del documento
// Por defecto se posiciona abajo
// const tituloPrincipal3 = document.getElementById("idH1TituloPrincipal");

// CONSUMIR UNA API
const divCardProductos = document.getElementById("idCardsProductos");
// array de productos (se hace una card por cada producto de ese array)
// (cada card que se imprime es un objeto)
const productosLs = JSON.parse(localStorage.getItem("productos")) || [];
// pregunta si los productos estan en el ls, si no estan me devuelve un array vacio


/* PRIMERA MANERA (no es recomendable por temas de seguridad) */
if(!productosLs.length){
  (
    async() => {
  const productosApi = fetch("https://fakestoreapi.com/products");
  // obtiene los productos por la url
  const data = await productosApi.json();
  localStorage.setItem("productos", JSON.stringify(data));
    } )();
}

divCardProductos.innerHTML = productosLs.map
 ((producto) => 
      `<div class="col-12 col-md-6 col-lg-4 my-3">
                  <div class="card h-100">
                      <img src="${producto.image}" 
                      class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title text-truncate">${producto.title}</h5>
                        <p class="card-text text-truncate">${producto.description}</p>
                        <h5 class="card-title">$${producto.price}</h5>
                        <div class="text-center">
                          <a href="../paginas/detalle-producto.html?${producto.id}" 
                          class="btn btn-primary">Ver Más</a>
                        </div>
                      </div>
                    </div>
              </div>`
).join("");

// productosApi
// .then((res) => res.json())
// .then(
// (data) => // data es un array de los productos
// (divCardProductos.innerHTML) = data.map // map recorre producto por producto
// ((producto) => 
//      `<div class="col-12 col-md-6 col-lg-4 my-3">
//                  <div class="card h-100">
//                      <img src="${producto.image}" 
//                      class="card-img-top" alt="...">
//                      <div class="card-body">
//                        <h5 class="card-title text-truncate">${producto.title}</h5>
//                        <p class="card-text text-truncate">${producto.description}</p>
//                        <h5 class="card-title">$${producto.price}</h5>
//                        <div class="text-center">
//                          <a href="../paginas/detalle-producto.html?${producto.id}" 
//                          class="btn btn-primary">Ver Más</a>
//                        </div>
//                      </div>
//                    </div>
//              </div>`
// ).join("")
// );

/* SEGUNDA MANERA: (es la más recomendable) */
// productosApi
// .then((res) => res.json())
// .then(
// (data) => // data es un array de los productos
// // forEacn recorre elemento por elemento del array
// data.forEach(producto => {
//     // creamos un div (padre)
//     const divPadre = document.createElement("div");
//     // le asignamos sus clases
//     divPadre.classList.add("col-12", "col-md-6", "col-lg-4", "my-3");
//     // creamos otro div (hijo)
//     const divCard = document.createElement("div");
//     // le asignamos sus clases
//     divCard.classList.add("card");
//     // creamos la etiqueta img
//     const image = document.createElement("img");
//     // le asignamos su clase
//     image.classList.add("card-img-top");
//     // sus atributos
//     image.src= producto.image
//     image.alt= producto.title
//     // creamos el body de la card
//     const divCardBody = document.createElement("div");
//     // le asignamos sus clases
//     divCardBody.classList.add("card-body");
//     // creamos la etiqueta h5 para el titulo de la card
//     const h5Title = document.createElement("h5");
//     // le asignamos sus clases
//     h5Title.classList.add("card-title","text-truncate");
//     // le asignamos el texto al titulo
//     h5Title.innerText = producto.title
//     // etiqueta h5 para el precio
//     const h5Price = document.createElement("h5");
//     // le asignamos sus clases
//     h5Price.classList.add("card-title","text-truncate");
//     // le asignamos el texto al precio
//     h5Price.innerText = producto.price
//     // creamos etiqueta p para el parrafo
//     const parrafoDescripcion = document.createElement("p");
//     // le asignamos sus clases
//     parrafoDescripcion.classList.add("card-text", "text-truncate");
//     // le asignamos el texto al parrafo
//     parrafoDescripcion.innerText = producto.description
//     // creamos un div
//     const divButton = document.createElement("div");
//     // le asignamos sus clases
//     divButton.classList.add("text-center");
//     // creamos boton con etiqueta a
//     const button = document.createElement("a");
//     // le asignamos sus clases
//     button.classList.add("btn", "btn-primary");
//     // sus atributos
//     button.href = "#";
//     // le asignamos el texto a la etiqueta a
//     button.innerText = "Ver Más";


//     // Vamos adjuntando cada div con su div(hijo)
//     // divCardProductos (row del html)
//     divCardProductos.appendChild(divPadre)
//     divPadre.appendChild(divCard);
//     divCard.appendChild(image);
//     divCard.appendChild(divCardBody);
//     divCardBody.appendChild(h5Title);
//     divCardBody.appendChild(h5Price);
//     divCardBody.appendChild(parrafoDescripcion);
//     divCardBody.appendChild(divButton);
//     divButton.appendChild(button);
// })
// );