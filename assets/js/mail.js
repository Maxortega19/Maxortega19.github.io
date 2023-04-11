// // Este es solo un ejemplo de cómo puedes utilizar FormSubmit con JavaScript

// document.querySelector('form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevenir el envío del formulario
  
//     // Realizar cualquier validación o manipulación de datos aquí
  
//     // Enviar el formulario a FormSubmit usando Fetch API
//     fetch('https://formsubmit.co/maximilianocjortega@gmail.com', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ nombre: document.getElementById('name').value, apellido: document.getElementById('lastname').value, email: document.getElementById('email').value, mensaje: document.getElementById('message').value })
//     })
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(data) {
//       console.log(data); // Manejar la respuesta de FormSubmit
//     })
//     .catch(function(error) {
//       console.error(error); // Manejar errores
//     });
//   });
  