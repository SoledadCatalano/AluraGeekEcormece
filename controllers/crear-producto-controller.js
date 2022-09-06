import { productoServices } from "../servicios/productos-servicios.js";

const form = document.querySelector("[data-form]");



form.addEventListener("submit",(evento) => {
    evento.preventDefault();
    const nombre = document.querySelector("[data-name]").value;
    const url = document.querySelector("[data-url]").value;
    const precio =document.querySelector("[data-precio]").value;
    const categoria =document.querySelector("[data-categoria]").value;
    const descripcion =document.querySelector("[data-descripcion]").value;
    


    
    productoServices
        .crearproducto(nombre, url, precio, categoria,descripcion)
        .then((respuesta) =>{
        window.location.href ="admin-productos.html"
        alert("El producto fue creado")
        
        console.log(respuesta)
    }).catch((err) => {console.log(err);
    })


});

