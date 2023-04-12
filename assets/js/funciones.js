document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const usuario = document.getElementById("usuario");
  const email = document.getElementById("email");
  const mensaje = document.getElementById("mensaje");
  const checkbox = document.getElementById("checkbox");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    var error = false;


    if (usuario.value === "" || email.value === "" || mensaje.value === "" || !checkbox.checked) {
      var errorMessage = "Por favor complete los siguientes campos:";
    }

    if (usuario.value === "") {
      usuario.classList.add("is-invalid");
      error = true;
      errorMessage += "\n- Usuario";
    } else {
      usuario.classList.remove("is-invalid");
    }

    if (email.value === "" || !validarEmail()) {
      email.classList.add("is-invalid");
      error = true;
      errorMessage += "\n- Correo electrónico";
    } else {
    if (validarEmail()) {
        email.classList.remove("is-invalid");}}
      
    

    if (mensaje.value === "") {
      mensaje.classList.add("is-invalid");
      error = true;
      errorMessage += "\n- Mensaje";
    } else {
      mensaje.classList.remove("is-invalid");
    }

    if (!checkbox.checked) {
      checkbox.classList.add("is-invalid");
      error = true;
      errorMessage += "\n- Acepte los términos y condiciones";
    } else {
      checkbox.classList.remove("is-invalid");
    }

    if (!error) {
      // Aquí puedes enviar el formulario o hacer lo que necesites con los datos ingresados
      alert("Formulario enviado con éxito!");
      form.reset(); // Opcionalmente, puedes reiniciar el formulario después del envío exitoso
    } else {
      alert(errorMessage);  // Despliega alerta con campos vacíos en el formulario
    }

  });
});

function resetForm() {
  const usuario = document.getElementById("usuario");
  const email = document.getElementById("email");
  const mensaje = document.getElementById("mensaje");
  const checkbox = document.getElementById("checkbox");

  // Remueve mensaje de error de correo ingresado si es que ahora es válido o se limpió
  //el formulario 
  var errorSpan = document.getElementById("email-error");
  errorSpan.innerHTML = "";

  //La clase is-invalid de Bootstrap puede tener campos vacíos marcados en rojo, por lo que 
  //"removemos dichas marcas"
  usuario.classList.remove("is-invalid");     
  email.classList.remove("is-invalid");
  mensaje.classList.remove("is-invalid");
  checkbox.classList.remove("is-invalid");
  //Fin del bloque "removemos dichas marcas"
  
  //Limpia los datos del formulario
  document.getElementById("myForm").reset();  
}


function validarEmail() {
  // Obtiene el valor del campo de entrada de correo electrónico
  var email = document.getElementById("email").value;
  var errorSpan = document.getElementById("email-error");
  errorSpan.innerHTML = "";

  // Expresión regular para validar un correo electrónico
  var re = /\S+@\S+\.\S+/;

  // Comprueba si el correo electrónico tiene un formato válido
  if (re.test(email)) {
    return true;
  } else {
    // Si el correo electrónico no es válido, muestra un mensaje de error en un elemento span
    var errorSpan = document.getElementById("email-error");
    errorSpan.innerHTML = "Por favor, ingrese una dirección de correo electrónico válida.";
    return false;
  }
}

