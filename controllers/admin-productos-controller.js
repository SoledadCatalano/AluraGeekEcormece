import { productoServices } from "../servicios/productos-servicios.js"

const nuevoProducto = (nombre, precio, url, descripcion, id) => {
    const card = document.createElement("div");
    const contenido = `

    <ul>
    <li class="li-imagenes">
        <img class="imagen" src="${url}" alt=""> 
        <button class="img-borrar" type="button" id="${id}"><img src="../assets/imagenes/borrar.png" alt=""></button>       
        <a href="../screens/editar-producto.html?id=${id}"><img class="img-editar" src="../assets/imagenes/editar.png" alt=""></a> 
        
    </li>
    <li> <h4>${nombre}</h4> </li>
    <li> <p>${precio}</p> </li>

     `;
    
    card.innerHTML = contenido;
    card.classList.add("card");

   const btn = card.querySelector("button");
    btn.addEventListener("click", () => {
        const id = btn.id;
        productoServices
          .eliminarProducto(id)
          .then((respuesta) => {
            console.log(respuesta);
          })
          .catch((err) => alert("Ocurrió un error"));
      });
    return card;
    
};

const productos = document.querySelector("[datos-productos-admin]")
const render = async () =>{
    try {
        const listaProductos = await productoServices.listaProductos()
        listaProductos.forEach((elemento) => {
            productos.appendChild(nuevoProducto(elemento.nombre, elemento.precio, elemento.url,  elemento.descripcion, elemento.id,  elemento.categoria,))
            
        });
    }catch(erro){
        console.log(erro);
    }
}

render()

