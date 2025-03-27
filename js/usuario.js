const productosLs = JSON.parse(localStorage.getItem("productos")) || [];
const divCardProductos = document.getElementById("idCardsProductos");
const botonCerrarSesion = document.getElementById(idCerrarSesion);
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

const cerrarSesionUsuario = (ev) => {
    ev.preventDefault()
    const usuariosLs = JSON.parse(localStorage.getItem("usuarios"));
    const usuarioSS = JSON.parse(sessionStorage.getItem("usuarioSS"));
    const usuarioLog = usuariosLs.find((usuario) => usuario.id === usuarioSS.id)

    localStorage.setItem("usuarios", JSON.stringify(usuariosLs));
    sessionStorage.removeItem("usuarioSS");

    setTimeout(() => {
        location.href = "../index.html";
    }, 500);

}

botonCerrarSesion.addEventListener("click", cerrarSesionUsuario);