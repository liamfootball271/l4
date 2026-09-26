document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-go]').forEach((button) => {
    button.addEventListener('click', () => {
      window.location.href = button.dataset.go;
    });
  });

  const form = document.querySelector('#message-form');
  const input = document.querySelector('#message-input');
  const history = document.querySelector('#message-history');

  if (form && input && history) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const text = input.value.trim();
      if (!text) return;

      const row = document.createElement('div');
      row.className = 'message-row sent';
      const bubble = document.createElement('div');
      bubble.className = 'message-bubble';
      bubble.textContent = text;
      row.append(bubble);
      history.append(row);
      input.value = '';
      history.scrollTop = history.scrollHeight;
      input.focus();
    });
  }

  const search = document.querySelector('.search-box input');
  if (search) {
    search.addEventListener('input', () => {
      const query = search.value.trim().toLocaleLowerCase('fr');
      document.querySelectorAll('.contact-card').forEach((contact) => {
        contact.hidden = !contact.textContent.toLocaleLowerCase('fr').includes(query);
      });
    });
  }

  document.querySelectorAll('.filter-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip').forEach((item) => item.classList.remove('is-selected'));
      chip.classList.add('is-selected');
    });
  });
});