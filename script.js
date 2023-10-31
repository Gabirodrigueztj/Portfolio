// Agregar la clase de animación cuando la página esté completamente cargada
document.addEventListener("DOMContentLoaded", function() {
  const elContenido = document.querySelector("#elcontenido");
  elContenido.classList.add("animate");
  
  // Agregar efecto de desplazamiento suave a los enlaces de navegación
  const navLinks = document.querySelectorAll('.side-nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(e.target.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
});

// Agregar la clase de animación cuando la página esté completamente cargada
document.addEventListener("DOMContentLoaded", function() {
  const elContenido = document.querySelector("#elcontenido");
  elContenido.classList.add("animate");

  // Ejecutar estilo.css después de que animated.css termine de cargar y se aplique la animación
  elContenido.addEventListener("animationend", function() {
    elContenido.classList.remove("animate"); // Elimina la clase animate para que la animación no se repita al hacer hover
  
    
  });

});

