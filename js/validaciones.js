export function valida(input){
	const tipoDeInput = input.dataset.tipo;
	if(validadores[tipoDeInput]){
		validadores[tipoDeInput](input);
	}

  if(input.validity.valid){
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = ""
  }else{
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput,input);
  }
}

const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError"
]

const mensajesDeError = {

  nombre:{
    valueMissing:"El campo Nombre no puede estar vacio"
  },
  elmensaje:{
    valueMissing:"El campo Mensaje no puede estar vacio",
  },
  email: {
    valueMissing: "El campo correo no puede estar vacío",
    typeMismatch: "El correo no es válido",
  },
  password: {
    valueMissing: "El campo contraseña no puede estar vacío",
    patternMismatch:
      "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.",
  },
}

const validadores = "";

function mostrarMensajeDeError(tipoDeInput,input){
  let mensaje = "";
  tipoDeErrores.forEach(error => {
    if(input.validity[error]){

      console.log(tipoDeInput, error);
      console.log(input.validity [error]);
      console.log(mensajesDeError[tipoDeInput] [error]);
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });

  return mensaje;
}


export function validados(textarea) {
  const tipoDeArea = textarea.dataset.tipo;
  if (validadoresdos[tipoDeArea]) {
    validadoresdos[tipoDeArea](textarea);
  }
  if(textarea.validity.valid){
      textarea.parentElement.classList.remove("textarea-container--invalid");
      textarea.parentElement.querySelector(".textarea-message-error").innerHTML = ""
  }else{
    textarea.parentElement.classList.add("textarea-container--invalid");
    textarea.parentElement.querySelector(".textarea-message-error").innerHTML = mostrarMensajeErrordos(tipoDeArea, textarea)
  }
}
const tipoDeErroresdos = [
  "valueMissing",
  "typeMismatch",
];

const mensajesDeErrordos = {
  
  elmensaje:{
    valueMissing: "Este campo mensaje no puede estar vacio noooooo",
  }
}

const validadoresdos = "";

function mostrarMensajeErrordos(tipoDeArea, textarea){
  let mensajedos= ""
  tipoDeErroresdos.forEach(error => {
    if(textarea.validity[error]){
      console.log(tipoDeArea, error);
      console.log(textarea.validity [error]);
      console.log(mensajesDeErrordos[tipoDeArea] [error]);
      mensajedos = mensajesDeErrordos[tipoDeArea][error];
    }
  }
    )
  return mensajedos
}