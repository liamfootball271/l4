document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-go]').forEach((button) => {
    button.addEventListener('click', () => {
      window.location.href = button.dataset.go;
    });
  });

  const form = document.querySelector('#newsletter-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = document.querySelector('#email');
      const message = document.querySelector('#form-note');
      if (!email || !message || !email.checkValidity()) return;
      message.textContent = 'Merci ! Votre inscription de démonstration est confirmée.';
      message.classList.add('is-success');
      form.reset();
    });
  }
});