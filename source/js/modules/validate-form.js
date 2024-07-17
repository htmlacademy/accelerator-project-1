// formValidation.js

// Функция для валидации формы
const validateForm = () => {
  if (document.querySelector('form') && document.querySelector('input[type="text"]') && document.querySelector('input[type="tel"]')) {
    // Находим форму на странице
    const form = document.querySelector('form');
    // Находим все инпуты внутри формы
    const inputs = form.querySelectorAll('input');

    // Регулярные выражения для валидации
    const lettersOnlyRegex = /^[a-zA-Zа-яА-ЯёЁ\s]+$/; // Допускает только буквы и пробелы (кириллица и латиница)
    const digitsOnlyRegex = /^\d+$/; // Допускает только цифры

    // Функция для отображения ошибок
    const showError = (input, errorMessage) => {
      // Получаем родительский элемент инпута
      const parent = input.parentElement;
      // Находим элемент для отображения сообщения об ошибке
      const errorText = parent.querySelector('.form__error-text');

      // Добавляем классы ошибки родительскому элементу и инпуту
      parent.classList.add('error');
      input.classList.add('error');
      // Устанавливаем текст ошибки и отображаем его
      errorText.textContent = errorMessage;
      errorText.style.display = 'block';
    };

    // Функция для скрытия ошибок
    const hideError = (input) => {
      // Получаем родительский элемент инпута
      const parent = input.parentElement;
      // Находим элемент для отображения сообщения об ошибке
      const errorText = parent.querySelector('.form__error-text');

      // Удаляем классы ошибки у родительского элемента и инпута
      parent.classList.remove('error');
      input.classList.remove('error');
      // Очищаем текст ошибки и скрываем его
      errorText.textContent = '';
      errorText.style.display = 'none';
    };

    // Функция для проверки валидности поля Имя
    const validateName = (input) => {
      // Получаем значение инпута и убираем лишние пробелы
      const value = input.value.trim();

      // Проверяем, если значение пустое
      if (value === '') {
        // Показываем сообщение об ошибке, если поле пустое
        showError(input, 'Поле Имя обязательно для заполнения');
      } else if (!lettersOnlyRegex.test(value)) {
        // Показываем сообщение об ошибке, если в поле есть недопустимые символы
        showError(input, 'Поле Имя может содержать только буквы и пробелы');
      } else {
        // Скрываем сообщение об ошибке, если всё в порядке
        hideError(input);
      }
    };

    // Функция для проверки валидности поля Телефон
    const validatePhone = (input) => {
      // Получаем значение инпута и убираем лишние пробелы
      const value = input.value.trim();

      // Проверяем, если значение пустое
      if (value === '') {
        // Показываем сообщение об ошибке, если поле пустое
        showError(input, 'Поле Телефон обязательно для заполнения');
      } else if (!digitsOnlyRegex.test(value)) {
        // Показываем сообщение об ошибке, если в поле есть недопустимые символы
        showError(input, 'Поле Телефон должно содержать только цифры');
      } else {
        // Скрываем сообщение об ошибке, если всё в порядке
        hideError(input);
      }
    };

    // Обработчик события отправки формы
    form.addEventListener('submit', (event) => {
      // Предотвращаем отправку формы по умолчанию
      event.preventDefault();

      // Проверяем каждое поле при отправке формы
      inputs.forEach((input) => {
        // Проверяем поле Имя
        if (input.name === 'name') {
          validateName(input);
          // Проверяем поле Телефон
        } else if (input.name === 'phone') {
          validatePhone(input);
        }
      });

      // Проверяем, если все поля валидны (не содержат классы ошибки)
      const isValid = Array.from(inputs).every(
        (input) => !input.classList.contains('error'),
      );
      if (isValid) {
        // Если все поля валидны, отправляем форму
        form.submit();
      }
    });

    // Обработчики событий для удаления класса error при потере фокуса и пустом значении
    inputs.forEach((input) => {
      // Обработчик события потери фокуса
      input.addEventListener('blur', () => {
        // Если значение инпута пустое
        if (input.value.trim() === '') {
          // Удаляем класс ошибки у родительского элемента и инпута
          input.parentElement.classList.remove('error');
          input.classList.remove('error');
        }
      });

      // Обработчик события ввода
      input.addEventListener('input', () => {
        // Если значение инпута пустое
        if (input.value.trim() === '') {
          // Удаляем класс ошибки у родительского элемента и инпута
          input.parentElement.classList.remove('error');
          input.classList.remove('error');
        }
      });
    });
  }
};

// Экспорт функции валидации формы, чтобы её можно было использовать в других модулях
export { validateForm };
