// Obtener el id
const id = new URLSearchParams(location.search).get("id")
// Devuelve el producto particular del id
const producto = fetch(`https://fackestoreapi.com/products/${id}`);
// Div donde se arroja el producto
const divProducto = document.getElementById(divProducto)

producto
.then((res) => res.json())
.then(
(data) =>
(divProducto.innerHTML = `
<div class="col col-12 col-md-6">
<img src="${data.image}" alt="">
</div>
<div class="col-12 col-md-6">
<h2>${data.title}</h2>
<p>$${data.price}</p>
<p>${data.description}</p>
</div>
<div>
<buttom class:"btn btn-warning" id-"idCarrito">Añadir al carrito</buttom>
<buttom class:"btn btn-success" id_"idComprar">Comprar</buttom>
</div>
`)
);

const botonCarrito = document.getElementById("idCarrito");
const botonComprar = document.getElementById("idComprar");

const agregarProductoCarrito = (ev) => {
    const usuarioLog = JSON.parse(sessionStorage.get("usuarioSS")) || null
    ev.preventDefault();
    if(!usuarioLog){
        location.href = "../paginas/iniciar-sesion.html";
    }
};

const comprarProducto = (ev) => {
    const usuarioLog = JSON.parse(sessionStorage.get("usuarioSS")) || null
    ev.preventDefault();
    if(!usuarioLog){
        location.href = "../paginas/iniciar-sesion.html";
    }
};

botonCarrito.addEventListener("click", agregarProductoCarrito);
botonComprar.addEventListener("click", comprarProducto);