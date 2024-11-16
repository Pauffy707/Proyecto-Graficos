document.addEventListener('DOMContentLoaded', function() {
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      // Prevenir el envío automático del formulario
      event.preventDefault();

      // Variables para los elementos del formulario
      var nombre = document.getElementById('nombre').value.trim();
      var email = document.getElementById('email').value.trim();
      var mensaje = document.getElementById('mensaje').value.trim();

      // Variables para los mensajes de error
      var errorNombre = document.getElementById('errorNombre');
      var errorEmail = document.getElementById('errorEmail');
      var errorMensaje = document.getElementById('errorMensaje');

      // Limpiar mensajes de error previos
      errorNombre.textContent = '';
      errorEmail.textContent = '';
      errorMensaje.textContent = '';

      // Variable para determinar si el formulario es válido
      var esValido = true;

      // Validar nombre
      if (nombre === '') {
        errorNombre.textContent = 'Por favor, ingresa tu nombre.';
        esValido = false;
      }

      // Validar correo electrónico
      if (email === '') {
        errorEmail.textContent = 'Por favor, ingresa tu correo electrónico.';
        esValido = false;
      } else if (!email.includes('@') || !email.includes('.')) {
        errorEmail.textContent = 'Por favor, ingresa un correo electrónico válido.';
        esValido = false;
      }

      // Validar mensaje
      if (mensaje === '') {
        errorMensaje.textContent = 'Por favor, escribe un mensaje.';
        esValido = false;
      }

      // Si el formulario es válido, permitir el envío
      if (esValido) {
        alert('Formulario enviado exitosamente.');

        // Limpiar el formulario después de enviar
        contactForm.reset();
      }
    });
  } else {
    console.error('El formulario con id "contactForm" no se encontró.');
  }
});
