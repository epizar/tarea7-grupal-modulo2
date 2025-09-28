document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");
  const usuario = document.getElementById("usuario");
  const email = document.getElementById("email");
  const mensaje = document.getElementById("mensaje");
  const checkbox = document.getElementById("checkbox");
  const emailError = document.getElementById("email-error");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevenir envío por defecto
    let error = false;
    let errorMessage = "Por favor complete los siguientes campos:";

    // Validar campo usuario
    if (usuario.value.trim() === "") {
      usuario.classList.add("is-invalid");
      errorMessage += "\n- Usuario";
      error = true;
    } else {
      usuario.classList.remove("is-invalid");
    }

    // Validar correo
    if (email.value.trim() === "") {
      email.classList.add("is-invalid");
      emailError.textContent = "El campo de correo no puede estar vacío.";
      errorMessage += "\n- Correo electrónico";
      error = true;
    } else if (!validarEmail(email.value)) {
      email.classList.add("is-invalid");
      emailError.textContent = "Por favor, ingrese una dirección válida.";
      errorMessage += "\n- Correo electrónico inválido";
      error = true;
    } else {
      email.classList.remove("is-invalid");
      emailError.textContent = "";
    }

    // Validar mensaje
    if (mensaje.value.trim() === "") {
      mensaje.classList.add("is-invalid");
      errorMessage += "\n- Mensaje";
      error = true;
    } else {
      mensaje.classList.remove("is-invalid");
    }

    // Validar checkbox
    if (!checkbox.checked) {
      checkbox.classList.add("is-invalid");
      errorMessage += "\n- Acepte los términos y condiciones";
      error = true;
    } else {
      checkbox.classList.remove("is-invalid");
    }

    // Resultado final
    if (error) {
      alert(errorMessage);
    } else {
      alert("Formulario enviado con éxito!");
      form.reset();
      resetForm(); // Limpieza visual
    }
  });
});

// Limpia marcas y mensajes de error
function resetForm() {
  ["usuario", "email", "mensaje", "checkbox"].forEach((id) => {
    const el = document.getElementById(id);
    el.classList.remove("is-invalid");
  });

  document.getElementById("email-error").textContent = "";
  document.getElementById("myForm").reset();
}

// Validar formato de correo
function validarEmail(valor) {
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(valor);
}
