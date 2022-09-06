const listaProductos= () => fetch("http://localhost:3000/producto").then(respuesta => respuesta.json());

const crearproducto = (nombre,url,precio,categoria,descripcion) => 
{
    return fetch("http://localhost:3000/producto", {
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
    return fetch(`http://localhost:3000/producto/${id}`).then(respuesta =>
      respuesta.json()
    );
  };

  const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
      method: "DELETE",
    });
  };

  const actualizarProducto = (nombre,url,precio,categoria,descripcion,id) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
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