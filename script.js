const handleLoginBtn = () => {
  const loginBtn = document.getElementById('login-btn');
  const password = document.getElementById('login-password');
  const email = document.getElementById('login-email');

  loginBtn.addEventListener('click', () => {
    if (password.value === '123456' && email.value === 'tryber@teste.com') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
};

const handleDisabledBtn = () => {
  const submitBtn = document.getElementById('submit-btn');
  const acceptTerm = document.getElementById('agreement');
  acceptTerm.addEventListener('click', () => {
    if (acceptTerm.checked) {
      submitBtn.removeAttribute('disabled');
    }
  });
};

handleLoginBtn();
handleDisabledBtn();
