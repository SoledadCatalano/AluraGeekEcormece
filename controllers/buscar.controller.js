import { productoServices } from "../servicios/productos-servicios.js";
const resultados = document.querySelector("[data-productos-busqueda]");
const tituloBusqueda = document.querySelector("[data-titulo-busqueda]");

const mostrarResultadoBuscado = async () => {
  const url = new URL(window.location);
  const nombreBuscado = url.searchParams.get("texto");
  
  if(nombreBuscado === null){
    console.log("Hubo un error al momento de buscar el producto");
  }
  const nombreBuscar = nombreBuscado.toLowerCase();

  let cantidadResultados = 0;
  //Resultados busqueda
  productoServices.listaProductos().then(data => {
    data.forEach(({nombre,url, precio, categoria,descripcion, id}) => {
      const nombreProducto = nombre.toLowerCase();
      const nombreCategoria = categoria.toLowerCase();
      const validar = nombreProducto.includes(nombreBuscar);
      const validarCategoria = nombreCategoria.includes(nombreBuscado);
console.log(validar)
console.log(validarCategoria)
      if(validar || validarCategoria){
        const mostrarResultadoBuscado = nuevoProducto(nombre,url, precio, categoria,descripcion, id);
        resultados.appendChild(mostrarResultadoBuscado);
        cantidadResultados++;
        console.log(cantidadResultados)
      }
    });
    //Mostrar mensajes cuando no haya resultados
    if(cantidadResultados == 0){
      const textoInformativo = `
      <h2 class="productos__resultados_mensaje">No se encontraron resultados para esta busqueda</h2>
      `
      tituloBusqueda.innerHTML = textoInformativo;
    }
  }).catch( error => alert("Ocurrio un error en producto buscado"));
}
mostrarResultadoBuscado();

//Nueva busqueda
const buscador = document.querySelector("[data-buscador]");
let cantResultNuevaBusqueda = 0;

//Enviando nombre de la busqueda a pagina resultados busqueda
buscador.addEventListener("keypress", evento => {
  let texto = evento.target.value;
    if (evento.key === 'Enter') {
      texto = texto.toLowerCase();
      buscador.value = "";
      const limpiarContenido = ``;
      resultados.innerHTML = limpiarContenido;
      
      clientServices.listaProductos().then(data => {
        data.forEach(({nombre,url, precio, categoria,descripcion, id}) => {
          const nombreProducto = nombre.toLowerCase();
          const validar = nombreProducto.includes(texto);

          if(validar){
            const mostrarProductoBuscado = nuevoProducto(nombre,url, precio, categoria,descripcion, id);
            resultados.appendChild(mostrarProductoBuscado);
            cantResultNuevaBusqueda++;
          }
          if(cantResultNuevaBusqueda > 0){
            const tituloProductosexistente = `
            <h1 class="productos__head__titulo-principal">Resultados de busqueda</h1>
            `
            tituloBusqueda.innerHTML = tituloProductosexistente;
          }else if (cantResultNuevaBusqueda <= 0){
            const textoInformativo = `
            <h2 class="productos__resultados_mensaje">No se encontraron resultados para esta busqueda</h2>
            `
            tituloBusqueda.innerHTML = textoInformativo;
          }
        });
      });
    }
});

const nuevoProducto = (nombre,url, precio, categoria,descripcion, id) => {
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