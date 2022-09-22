const listaProductos= () => fetch("https://632cf1980d7928c7d24306e5.mockapi.io/productos").then(respuesta => respuesta.json());

const crearproducto = (nombre,url,precio,categoria,descripcion) => 
{
    return fetch("https://632cf1980d7928c7d24306e5.mockapi.io/productos", {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            nombre,
            url,
            precio,
            categoria,
            descripcion, 
            id: uuid.v4()
        })
    })
    .then(respuesta => {
        if(respuesta.ok){
            return respuesta.body
        }
        throw new Error("No fue posible agregar producto")
    })
}

//esto es para ver el detalle
const detalleProducto = (id) => {
    return fetch(`https://632cf1980d7928c7d24306e5.mockapi.io/productos/${id}`).then(respuesta =>
      respuesta.json()
    );
  };

  const eliminarProducto = (id) => {
    return fetch(`https://632cf1980d7928c7d24306e5.mockapi.io/productos/${id}`, {
      method: "DELETE",
    });
  };

  const actualizarProducto = (nombre,url,precio,categoria,descripcion,id) => {
    return fetch(`https://632cf1980d7928c7d24306e5.mockapi.io/productos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre,url,precio,categoria,descripcion,id }),
    })
      .then((respuesta) => respuesta)
      .catch((err) => console.log(err));
  };

export const productoServices = {
    listaProductos,
    crearproducto,
    detalleProducto,
    eliminarProducto,
    actualizarProducto
};
