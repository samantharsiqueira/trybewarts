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
