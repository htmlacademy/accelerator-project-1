export default () => {
  const inputNameSelector = '.input-name';
  const inputPhoneSelector = '.input-phone';
  const inputNameErrorSelector = '.input-name + .input-error';
  const inputPhoneErrorSelector = '.input-phone + .input-error';
  const inputErrorClass = 'form-input--error';
  const successMessageSelector = '.success-message';
  const successMessageHiddenClass = 'success-message--hidden';
  const successMessageTimeout = 2000;
  const nameRegex = /^[a-zA-Za-яёА-ЯË\s]+$/;
  const phoneRegex = /^[0-9-+()\s]+$/;

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
      const name = inputName.value.trim();
      const phone = inputPhone.value.trim();
      inputName.classList.remove(inputErrorClass);
      inputPhone.classList.remove(inputErrorClass);
      inputNameError.innerHTML = '';
      inputPhoneError.innerHTML = '';
      let valid = true;

      if (! name) {
        inputName.classList.add(inputErrorClass);
        inputNameError.innerHTML = 'Заполните имя';
        valid = false;
      } else if (! nameRegex.test(name)) {
        inputName.classList.add(inputErrorClass);
        inputNameError.innerHTML = 'Введите правильное имя';
        valid = false;
      }

      if (! phone) {
        inputPhone.classList.add(inputErrorClass);
        inputPhoneError.innerHTML = 'Заполните телефон';
        valid = false;
      } else if (! phoneRegex.test(phone)) {
        inputPhone.classList.add(inputErrorClass);
        inputPhoneError.innerHTML = 'Введите правильный телефон';
        valid = false;
      }

      if(! valid) {
        return;
      }

      // Отправка формы
      const formData = new FormData();
      formData.append('name', name);
      formData.append('phone', phone);
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
