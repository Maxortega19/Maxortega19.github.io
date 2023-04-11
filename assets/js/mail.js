// contact.js

// Configurar EmailJS con tu Public Key
emailjs.init("_a9VNUBkPxFdE3ozg"); // Reemplaza TU_PUBLIC_KEY con tu Public Key de EmailJS

// Manejar el envío del formulario
document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevenir el envío del formulario

  // Obtener los valores del formulario
  var name = document.getElementById("name").value;
  var lastname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Configurar los parámetros del correo
  var params = {
    name: name,
    lastname: lastname,
    email: email,
    message: message
  };

  // Enviar el correo con EmailJS
  emailjs.send("service_contactFormMaxi", "template_PortfolioForm", params) // Reemplaza TU_SERVICE_ID y TU_TEMPLATE_ID con tus IDs de servicio y plantilla de EmailJS
    .then(function(response) {
      console.log("Correo enviado con éxito", response);
      // Aquí puedes agregar la lógica que deseas después de que se envíe el correo, por ejemplo, mostrar un mensaje de éxito en la página.
    })
    .catch(function(error) {
      console.error("Error al enviar el correo", error);
      // Aquí puedes agregar la lógica para manejar errores en el envío del correo, por ejemplo, mostrar un mensaje de error en la página.
    });
});
