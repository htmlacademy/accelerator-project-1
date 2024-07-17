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
        // Проверяем наличием класса .is-active у элемента и .is-hover у кнопки
        if (
          !tab.classList.contains('is-active') &&
          !btn.classList.contains('is-hover')
        ) {
          tab.classList.add('is-active'); // Добавляем класс .is-active при наведении
          btn.classList.add('is-hover'); // Добавляем класс .is-hover при наведении
        }
      });

      tab.addEventListener('mouseleave', () => {
        // Проверяем наличием класса .is-active у элемента и .is-hover у кнопки
        if (tab.classList.contains('is-active') &&
          btn.classList.contains('is-hover')) {
          tab.classList.remove('is-active'); // Удаляем класс .is-active при уходе курсора
          btn.classList.remove('is-hover'); // Удаляем класс .is-hover при уходе курсора
        }
      });
    });
  }
};

const setActiveSlideInfo = () => {
  if (
    document.querySelector('.juri__inner') &&
    document.querySelector('.juri-slide')
  ) {
    // Получаем все элементы с классом .juri-slide
    const slides = document.querySelectorAll('.juri-slide');

    // Добавляем обработчик события для каждого элемента
    slides.forEach((slide) => {
      // Добавляем обработчик события focus для элемента
      slide.addEventListener('focus', () => {
        slides.forEach((slide) => { slide.classList.remove('is-active'); });
        slide.classList.add('is-active');
      });

      // Добавляем обработчик события blur для элемента
      slide.addEventListener('blur', () => {
        slide.classList.remove('is-active');
      });

      slide.addEventListener('mouseenter', () => {
        slides.forEach((slide) => { slide.classList.remove('is-active'); });
        // Проверяем наличием класса .is-active у элемента
        if (
          !slide.classList.contains('is-active')
        ) {
          slide.classList.add('is-active'); // Добавляем класс .is-active при наведении
        }
      });

      slide.addEventListener('mouseleave', () => {
        // Проверяем наличием класса .is-active у элемента
        if (slide.classList.contains('is-active')) {
          slide.classList.remove('is-active'); // Удаляем класс .is-active при уходе курсора
        }
      });
    });
  }
};

export { setActiveTab, setActiveSlideInfo };
