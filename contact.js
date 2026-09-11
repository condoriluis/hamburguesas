// contact.js – Validación básica del formulario de contacto
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Resetear estados de validación
    Array.from(form.elements).forEach(el => {
      el.classList.remove('is-invalid');
    });

    let valid = true;

    const nombre = document.getElementById('nombre');
    if (nombre.value.trim() === '') {
      nombre.classList.add('is-invalid');
      valid = false;
    }

    const correo = document.getElementById('correo');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(correo.value.trim())) {
      correo.classList.add('is-invalid');
      valid = false;
    }

    const mensaje = document.getElementById('mensaje');
    if (mensaje.value.trim() === '') {
      mensaje.classList.add('is-invalid');
      valid = false;
    }

    if (valid) {
      // Aquí podrías enviar los datos mediante fetch/AJAX.
      // Por ahora, simplemente mostramos una alerta.
      alert('¡Gracias! Tu mensaje ha sido enviado.');
      form.reset();
    }
  });
});
