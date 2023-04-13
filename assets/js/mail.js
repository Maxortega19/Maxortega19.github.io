
// Configurar EmailJS con tu User ID
emailjs.init("_a9VNUBkPxFdE3ozg");

var formContact = document.getElementById("form");

var inputs = document.getElementsByTagName("input");
// Manejar el evento input de los inputs para el label
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", function () {
    if (this.value === "") {
      this.setAttribute("aria-invalid", "true");
    } else {
      this.setAttribute("aria-invalid", "false");
    }
  });
}



// Manejar el envío del formulario
formContact.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevenir el envío del formulario

  // Definir las variables del formulario
  var nameInput = document.getElementById("name");
  var nameError = document.getElementById("name-error");

  var lastNameInput = document.getElementById("lastname");
  var lastNameError = document.getElementById("lastname-error");

  var emailInput = document.getElementById("email");
  var emailError = document.getElementById("email-error");

  var messageInput = document.getElementById("message");
  var messageError = document.getElementById("message-error");

  var btnEnviar = document.getElementById("send-btn");


  //Vaciar los errores
  nameError.textContent = ""
  lastNameError.textContent = ""
  emailError.textContent = ""
  messageError.textContent = ""


  //Asignar los valores
  var name = nameInput.value;
  var lastName = lastNameInput.value;
  var email = emailInput.value;
  var message = messageInput.value;


  // Validar que no se dejen campos vacíos
  if (!name || !lastName || !email || !message) {
    if (!name) {
      nameInput.focus();
      nameError.innerHTML = "Please enter your name";
    }
    if (!lastName) {
      lastNameInput.focus();
      lastNameError.innerHTML = "Please enter your last name";
    }
    if (!email) {
      emailInput.focus();
      emailError.innerHTML = "Please enter your email address";
    }
    if (!message) {
      messageInput.focus();
      messageError.innerHTML = "Please enter a message";
    }
    return;
  }


  // Validar el formato del correo electrónico
  if (!validateEmail(email)) {
    emailError.innerHTML = "Please, enter a valid email address";
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
  btnEnviar.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'; 


  // Enviar el correo con EmailJS
  emailjs.send("service_contactFormMaxi", "template_PortfolioForm", params) // Reemplaza TU_SERVICE_ID y TU_TEMPLATE_ID con tus IDs de servicio y plantilla de EmailJS
    .then(function (response) {

      console.log("Mail sent successfully", response);
      btnEnviar.innerHTML = '<i class="fas fa-check"></i> Mail Sent successfully';
      setTimeout(function () {
        btnEnviar.innerHTML = '<i class="fa-solid fa-paper-plane"></i>Send'; 
        formContact.reset();
      }, 3000);

    })
    .catch(function (error) {

      console.error("Error sending mail", error);
      btnEnviar.innerHTML = '<i class="fas fa-exclamation-circle"></i> Error';
      setTimeout(function () {
        btnEnviar.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send'; 
        formContact.reset();
      }, 3000);

    });
});


// Función para validar el formato de correo electrónico
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}



