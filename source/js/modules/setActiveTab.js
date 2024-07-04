const setActiveTab = () => {
  if (
    document.querySelector('[data-tabs="element"]') &&
    document.querySelector('.price-card') &&
    document.querySelector('.price-card__btn')
  ) {
    // Получаем все элементы с классом .price-card
    const tabs = document.querySelectorAll('.price-card');

    // Добавляем обработчик события для каждого элемента
    tabs.forEach((tab) => {
      // Добавляем обработчик события focus для кнопки .price-card__btn
      const btn = tab.querySelector('.price-card__btn');
      btn.addEventListener('focus', () => {
        tab.classList.add('is-active');
      });

      // Добавляем обработчик события blur для кнопки .price-card__btn
      btn.addEventListener('blur', () => {
        tab.classList.remove('is-active');
      });

      tab.addEventListener('mouseenter', () => {
        // Проверяем наличием класса .is-active у элемента
        if (
          !tab.classList.contains('is-active') &&
          !btn.classList.contains('is-active')
        ) {
          tab.classList.add('is-active'); // Добавляем класс .is-active при наведении
          btn.classList.add('is-active'); // Добавляем класс .is-active при наведении
        }
      });

      tab.addEventListener('mouseleave', () => {
        // Проверяем наличием класса .is-active у элемента
        if (tab.classList.contains('is-active') &&
          btn.classList.contains('is-active')) {
          tab.classList.remove('is-active'); // Удаляем класс .is-active при уходе курсора
          btn.classList.remove('is-active'); // Удаляем класс .is-active при уходе курсора
        }
      });
    });

    // Получаем все элементы .price-card
    // const tabs = document.querySelectorAll(".price-card");

    // Добавляем обработчик события focus для кнопки .price-card__btn
    // tabs.forEach((tab) => {
    //   const btn = tab.querySelector(".price-card__btn");
    //   btn.addEventListener("focus", () => {
    //     tab.classList.add('is-active');
    //   });

    //   // Добавляем обработчик события blur для кнопки .price-card__btn
    //   btn.addEventListener("blur", () => {
    //     tab.classList.remove('is-active');
    //   });
    // });
  }
};

export { setActiveTab };
