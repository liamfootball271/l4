document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-go]').forEach((button) => {
    button.addEventListener('click', () => {
      window.location.href = button.dataset.go;
    });
  });

  const newsletter = document.querySelector('#newsletter-form');
  if (newsletter) {
    newsletter.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = document.querySelector('#email');
      const message = document.querySelector('#form-message');
      if (!email || !message || !email.checkValidity()) return;
      message.textContent = 'Merci ! Votre inscription est bien prise en compte.';
      message.classList.add('is-success');
      newsletter.reset();
    });
  }
});