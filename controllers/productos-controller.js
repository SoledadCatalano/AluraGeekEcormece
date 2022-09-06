import { productoServices } from "../servicios/productos-servicios.js"

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
const productosStarWars = document.querySelector("[datos-productos]");
//Capturando la seccion de consolas
const productosConsolas = document.querySelector("[datos-productos-consolas]");
//Capturando la seccion de varios
const productosDiversos = document.querySelector("[datos-productos-varios]");

//Recorrer los datos traidos del JSON
productoServices.listaProductos().then(data => {
  data.forEach(({nombre,precio,url, descripcion,id,categoria}) => {
    //Imprimir datos en el index
    if(categoria === "Star wars"){
      const nuevoProductos = nuevoProducto(nombre,precio,url, descripcion,id,categoria);
      productosStarWars.appendChild(nuevoProductos);
    }else if(categoria === "Consolas"){
      const nuevoProductos = nuevoProducto(nombre,precio,url, descripcion,id,categoria);
      productosConsolas.appendChild(nuevoProductos);
    }else if(categoria === "Varios"){
      const nuevoProductos = nuevoProducto(nombre,precio,url, descripcion,id,categoria);
      productosDiversos.appendChild(nuevoProductos);
    }
  });
})