// Validación de formulario de contacto
document.addEventListener("DOMContentLoaded", function () {
  var contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      // Prevenir el envío automático del formulario
      event.preventDefault();

      // Variables para los elementos del formulario
      var nombre = document.getElementById("nombre").value.trim();
      var email = document.getElementById("email").value.trim();
      var mensaje = document.getElementById("mensaje").value.trim();

      // Variables para los mensajes de error
      var errorNombre = document.getElementById("errorNombre");
      var errorEmail = document.getElementById("errorEmail");
      var errorMensaje = document.getElementById("errorMensaje");

      // Limpiar mensajes de error previos
      if (errorNombre) errorNombre.textContent = "";
      if (errorEmail) errorEmail.textContent = "";
      if (errorMensaje) errorMensaje.textContent = "";

      // Variable para determinar si el formulario es válido
      var esValido = true;

      // Validar nombre
      if (nombre === "") {
        if (errorNombre)
          errorNombre.textContent = "Por favor, ingresa tu nombre.";
        esValido = false;
      }

      // Validar correo electrónico
      if (email === "") {
        if (errorEmail)
          errorEmail.textContent = "Por favor, ingresa tu correo electrónico.";
        esValido = false;
      } else if (!email.includes("@") || !email.includes(".")) {
        if (errorEmail)
          errorEmail.textContent =
            "Por favor, ingresa un correo electrónico válido.";
        esValido = false;
      }

      // Validar mensaje
      if (mensaje === "") {
        if (errorMensaje)
          errorMensaje.textContent = "Por favor, escribe un mensaje.";
        esValido = false;
      }

      // Si el formulario es válido, permitir el envío
      if (esValido) {
        alert("Formulario enviado exitosamente.");

        // Limpiar el formulario después de enviar
        contactForm.reset();
      }
    });
  } else {
    console.error('El formulario con id "contactForm" no se encontró.');
  }

  // Lógica para resaltar la pestaña activa en el header
  const navLinks = document.querySelectorAll(".navbar a");

  // Agregar clase activa al enlace correspondiente al hacer clic
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((el) => el.classList.remove("active")); // Limpiar todas las clases activas
      link.classList.add("active"); // Marcar el enlace actual como activo
    });
  });

  // Función para actualizar automáticamente la pestaña activa según el hash o ruta
  const updateActiveLink = () => {
    const hash = window.location.hash; // Obtiene el hash actual (#about, #contact, etc.)
    const currentPath = window.location.pathname; // Obtiene la ruta del archivo actual

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (
        href === hash ||
        (hash === "" && href === "#hero") ||
        currentPath.endsWith(href)
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  };

  // Llama a la función cuando cambia el hash o al cargar la página
  window.addEventListener("hashchange", updateActiveLink);
  updateActiveLink(); // Ejecutar inicialmente
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navbarUl = document.querySelector(".navbar ul");

  menuToggle.addEventListener("click", () => {
    navbarUl.classList.toggle("show");
  });
});
