const handleLoginBtn = () => {
  const email = document.getElementsById('login-email');
  const password = document.getElementById('login-passaword');

  if (email === 'tryber@teste.com' && password === 123456) {
    alert = 'Olá, Tryber!';
  } else {
    alert = 'Email ou senha inválidos';
  }
};

handleLoginBtn();

document.getElementById('submit-btn').addEventListener('click', (event) => {
  event.preventDefault();
});

const handleDisabledBtn = () => {
  const btn = document.getElementById('submit-btn');
  const acceptTerm = document.getElementById('agreement');
  acceptTerm.addEventListener('click', () => {
    if (acceptTerm.checked) {
      btn.disabled = false;
    } else {
      btn.disabled = true;
    }
  });
};

handleDisabledBtn();
