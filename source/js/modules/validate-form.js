const validateForm = () => {
  if (document.querySelector('form') && document.querySelector('input[type="text"]') && document.querySelector('input[type="tel"]')) {
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input');
    const lettersOnlyRegex = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;
    const digitsOnlyRegex = /^\d+$/;

    const showError = (input, errorMessage) => {
      const parent = input.parentElement;
      const errorText = parent.querySelector('.form__error-text');

      parent.classList.add('error');
      input.classList.add('error');

      errorText.textContent = errorMessage;
      errorText.style.display = 'block';
    };

    const hideError = (input) => {
      const parent = input.parentElement;
      const errorText = parent.querySelector('.form__error-text');

      parent.classList.remove('error');
      input.classList.remove('error');

      errorText.textContent = '';
      errorText.style.display = 'none';
    };

    const validateName = (input) => {
      const value = input.value.trim();

      if (value === '') {
        showError(input, 'Поле Имя обязательно для заполнения');
      } else if (!lettersOnlyRegex.test(value)) {
        showError(input, 'Поле Имя может содержать только буквы и пробелы');
      } else {
        hideError(input);
      }
    };

    const validatePhone = (input) => {
      const value = input.value.trim();

      if (value === '') {
        showError(input, 'Поле Телефон обязательно для заполнения');
      } else if (!digitsOnlyRegex.test(value)) {
        showError(input, 'Поле Телефон должно содержать только цифры');
      } else {
        hideError(input);
      }
    };

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      inputs.forEach((input) => {
        if (input.name === 'name') {
          validateName(input);
        } else if (input.name === 'phone') {
          validatePhone(input);
        }
      });

      const isValid = Array.from(inputs).every(
        (input) => !input.classList.contains('error'),
      );
      if (isValid) {
        form.submit();
      }
    });

    inputs.forEach((input) => {
      input.addEventListener('blur', () => {
        if (input.value.trim() === '') {
          input.parentElement.classList.remove('error');
          input.classList.remove('error');
        }
      });

      input.addEventListener('input', () => {
        if (input.value.trim() === '') {
          input.parentElement.classList.remove('error');
          input.classList.remove('error');
        }
      });
    });
  }
};

export { validateForm };
