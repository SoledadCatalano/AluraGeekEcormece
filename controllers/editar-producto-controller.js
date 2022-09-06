import { productoServices } from "../servicios/productos-servicios.js"

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id === null) {
    alert("Error en este sitio");
  }
  const imagen= document.querySelector("[data-url]")
  const categoria= document.querySelector("[data-categoria]")
  const nombre = document.querySelector("[data-name]")
  const precio= document.querySelector("[data-precio]")
  const descripcion = document.querySelector("[data-descripcion]")
  const foto= document.querySelector("[data-foto]");

  try {
    const producto = await productoServices.detalleProducto(id);
    if (producto.url && producto.categoria && producto.nombre && producto.precio && producto.descripcion) {
      imagen.value = producto.url
      categoria.value = producto.categoria;
      nombre.value = producto.nombre;
      precio.value = producto.precio;
      descripcion.value = producto.descripcion;
      foto.src = producto.url;
      
    } else {
      throw new Error();
    }
  } catch (error) {
  alert("Error aqui");
  }
};

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const imagen= document.querySelector("[data-url]").value
  const categoria= document.querySelector("[data-categoria]").value
  const nombre = document.querySelector("[data-name]").value
  const precio= document.querySelector("[data-precio]").value
  const descripcion = document.querySelector("[data-descripcion]").value
  const foto = document.querySelector("[data-foto]").value



  productoServices.actualizarProducto(nombre,imagen, precio,categoria, descripcion, id).then(() => {
    alert("Exitoso")
    
  });window.location.href = `../screens/admin-productos.html`;
});
