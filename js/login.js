//Llamar validacion de Login usuario
const btnEnviar = document.querySelector("#enviar-login");
btnEnviar.addEventListener("click", (evento) => {
    evento.preventDefault();
    loginUsuario();
})

const loginUsuario = () => {
  const correoIngresado = document.querySelector("[data-form-usuario]").value;
  const contraseñaIngresada = document.querySelector("[data-form-contraseña]").value;
  console.log(correoIngresado);
  console.log(contraseñaIngresada);
  var user = "admin@alura.com";
  var pass = "Admin2468";

  if( correoIngresado === user && contraseñaIngresada === pass ){
   
    
    setTimeout(function(){
      window.location.href = "../screens/admin-productos.html";
    }, 2000);
    
  }else{
    alert("Autentificacion incorrecta")
  }
}