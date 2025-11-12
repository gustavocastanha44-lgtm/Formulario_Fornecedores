// script.js
const scriptURL = 'https://script.google.com/macros/s/AKfycbyq8MjO5refx2UIhH87n7xTHmlGGivuJVfx6m77T1e-kctUfYWZS8EavJUQMmtmTOth3g/exec'; // <-- substitua pelo link do Google Apps Script

const form = document.getElementById('formulario');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);

  fetch(scriptURL, {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(result => {
    if (result && result.status === 'ok') {
      alert('Formulário enviado com sucesso!');
      form.reset();
    } else {
      alert('Houve um problema ao enviar. Tente novamente.');
    }
  })
  .catch(err => {
    console.error('Erro:', err);
    alert('Erro ao enviar o formulário.');
  });
});
