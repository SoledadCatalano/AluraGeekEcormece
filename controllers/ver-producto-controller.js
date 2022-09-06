import { productoServices } from "../servicios/productos-servicios.js"

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id === null) {
    alert("Error en este sitio");
  }
  
  const categoria= document.querySelector("[data-categoria]")
  const nombre = document.querySelector("[data-name]")
  const precio= document.querySelector("[data-precio]")
  const descripcion = document.querySelector("[data-descripcion]")
  const foto= document.querySelector("[data-foto]");

  try {
    const producto = await productoServices.detalleProducto(id);
    if (producto.url && producto.categoria && producto.nombre && producto.precio && producto.descripcion) {
      
      categoria.innerHTML = producto.categoria;
      nombre.innerHTML = producto.nombre;
      precio.innerHTML = producto.precio;
      descripcion.innerHTML = producto.descripcion;
      foto.src = producto.url;
      
    } else {
      throw new Error();
    }
  } catch (error) {
  alert("Error aqui");
  }
};

obtenerInformacion();


  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const categoria= document.querySelector("[data-categoria]").value
  const nombre = document.querySelector("[data-name]").value
  const precio= document.querySelector("[data-precio]").value
  const descripcion = document.querySelector("[data-descripcion]").value
  const foto = document.querySelector("[data-foto]").value


  export const nuevoProducto = (nombre, precio, url, descripcion,id, categoria) => {
    const card = document.createElement("div");
    const contenido = `    
    <div>
        <img src="${url}" alt="">
        <h4>${nombre}</h4>
        <p>${precio}</p>
        <a href="screens/ver-producto.html?id=${id}">Ver producto</a>
     </div>
     `;
    card.innerHTML = contenido;
    card.classList.add("card");
    return card;

};



//Capturando la seccion de productos star wars
//const productosStarWars = document.querySelector("[datos-productos]");
//Capturando la seccion de consolas
//const productosConsolas = document.querySelector("[datos-productos-consolas]");
//Capturando la seccion de varios
//const productosDiversos = document.querySelector("[datos-productos-varios]");

//Recorrer los datos traidos del JSON
const categoriaProducto =document.querySelector("[datos-productos]")
const producto = await productoServices.detalleProducto(id);
const categoriaSolicitada = producto.categoria;



productoServices.listaProductos().then(data => {
  const idor = url.searchParams.get("id");
  data.forEach(({nombre,precio,url, descripcion,id,categoria}) => {
    //Imprimir datos en el index

    if(categoria === "Star wars" && categoriaSolicitada === "Star wars" && id != idor){
      const nuevoProductos = nuevoProducto(nombre,precio,url, descripcion,id,categoria);
      categoriaProducto.appendChild(nuevoProductos);
    }else if(categoria === "Consolas" && categoriaSolicitada === "Consolas" && id != idor){
      const nuevoProductos = nuevoProducto(nombre,precio,url, descripcion,id,categoria);
      categoriaProducto.appendChild(nuevoProductos);
    }else if(categoria === "Varios" && categoriaSolicitada === "Varios" && id != idor){
      const nuevoProductos = nuevoProducto(nombre,precio,url, descripcion,id,categoria);
      categoriaProducto.appendChild(nuevoProductos);
    }
  });
})