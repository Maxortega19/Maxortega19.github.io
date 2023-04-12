
// Configurar EmailJS con tu User ID
emailjs.init("_a9VNUBkPxFdE3ozg");

var formContact = document.getElementById("form");








// Manejar el envío del formulario
formContact.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevenir el envío del formulario

  // Obtener los valores del formulario
  var nameInput = document.getElementById("name");
  var lastNameInput = document.getElementById("lastname");
  var emailInput = document.getElementById("email");
  var messageInput = document.getElementById("message");

  var name = nameInput.value;
  var lastName = lastNameInput.value;
  var email = emailInput.value;
  var message = messageInput.value;

  // Validar que no se dejen campos vacíos
  if (!name || !lastName || !email || !message) {
    // Mostrar mensaje de error en el placeholder
    if (!name) {
      nameInput.focus();
      nameInput.placeholder = "Por favor, ingresa tu nombre";
    }
    if (!lastName) {
      lastNameInput.focus();
      lastNameInput.placeholder = "Por favor, ingresa tu apellido";
    }
    if (!email) {
      emailInput.focus();
      emailInput.placeholder = "Por favor, ingresa tu correo electrónico";
    }
    if (!message) {
      messageInput.focus();
      messageInput.placeholder = "Por favor, ingresa un mensaje";
    }
    return;
  }


  // Validar el formato del correo electrónico
  if (!validateEmail(email)) {
    // Mostrar mensaje de error en el placeholder
    emailInput.placeholder = "Por favor, ingresa un correo electrónico válido";
    return;
  }

  // Configurar los parámetros del correo
  var params = {
    name: name,
    lastname: lastName,
    email: email,
    message: message
  };

  // Actualizar el botón de envío
  var btnEnviar = document.getElementById("send-btn");
  btnEnviar.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...'; // Cambiar el contenido del botón a un icono de carga de FontAwesome

  // Enviar el correo con EmailJS
  emailjs.send("service_contactFormMaxi", "template_PortfolioForm", params) // Reemplaza TU_SERVICE_ID y TU_TEMPLATE_ID con tus IDs de servicio y plantilla de EmailJS
    .then(function (response) {
      console.log("Correo enviado con éxito", response);
      // Actualizar el botón de envío con un mensaje de éxito y un icono de FontAwesome
      btnEnviar.innerHTML = '<i class="fas fa-check"></i> Enviado';


      // Restaurar el formulario y el botón después de 2 segundos
      setTimeout(function () {
        btnEnviar.innerHTML = 'Enviar'; // Restaurar el contenido del botón a su valor original
      }, 2000);
    })
    .catch(function (error) {
      console.error("Error al enviar el correo", error);
      // Actualizar el botón de envío con un mensaje de error y un icono de FontAwesome
      btnEnviar.innerHTML = '<i class="fas fa-exclamation-circle"></i> Error';

      // Restaurar el formulario y el botón después de 2 segundos
      setTimeout(function () {
        btnEnviar.innerHTML = 'Enviar'; // Restaurar el contenido del botón a su valor original
      }, 2000);
    });
});

// Función para validar el formato de correo electrónico
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}



var inputs = document.getElementsByTagName("input");
// Manejar el evento input de los inputs
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", function () {
    if (this.value === "") {
      this.setAttribute("aria-invalid", "true");
    } else {
      this.setAttribute("aria-invalid", "false");
    }
  });
}