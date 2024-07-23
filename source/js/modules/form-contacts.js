export default () => {
  const inputNameSelector = '.input-name';
  const inputPhoneSelector = '.input-phone';
  const inputNameErrorSelector = '.input-name + .input-error';
  const inputPhoneErrorSelector = '.input-phone + .input-error';
  const successMessageSelector = '.success-message';
  const inputErrorClass = 'form-input--error';
  const successMessageHiddenClass = 'success-message--hidden';
  const successMessageTimeout = 2000;

  const form = window
    .document
    .querySelector('.form-contacts__sections-list');

  if (form) {
    const inputName = form.querySelector(inputNameSelector);
    const inputPhone = form.querySelector(inputPhoneSelector);
    const inputNameError = form.querySelector(inputNameErrorSelector);
    const inputPhoneError = form.querySelector(inputPhoneErrorSelector);
    const successMessage = form.querySelector(successMessageSelector);

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      // Валидация
      inputName.classList.remove(inputErrorClass);
      inputPhone.classList.remove(inputErrorClass);
      inputNameError.innerHTML = '';
      inputPhoneError.innerHTML = '';
      let valid = true;

      if (! inputName.value) {
        inputName.classList.add(inputErrorClass);
        inputNameError.innerHTML = 'Заполните имя';
        valid = false;
      } // TODO else if

      if (! inputPhone.value) {
        inputPhone.classList.add(inputErrorClass);
        inputPhoneError.innerHTML = 'Заполните телефон';
        valid = false;
      } // TODO else if

      if(! valid) {
        return;
      }

      // Отправка формы
      const formData = new FormData();
      formData.append('name', inputName.value);
      formData.append('phone', inputPhone.value);
      fetch(form.getAttribute('action'), {
        method: form.getAttribute('method'),
        body: formData,
      });

      // Очистка полей
      inputName.value = '';
      inputPhone.value = '';

      successMessage.classList.remove(successMessageHiddenClass);
      setTimeout(() => {
        successMessage.classList.add(successMessageHiddenClass);
      }, successMessageTimeout);
    });
  }
};
