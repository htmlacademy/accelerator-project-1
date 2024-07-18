const setActiveJuriSlideInfo = () => {
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
        slides.forEach((slideItem) => {
          slideItem.classList.remove('is-active');
        });
        slide.classList.add('is-active');
      });

      // Добавляем обработчик события blur для элемента
      slide.addEventListener('blur', () => {
        slide.classList.remove('is-active');
      });

      slide.addEventListener('mouseenter', () => {
        slides.forEach((slideItem) => {
          slideItem.classList.remove('is-active');
        });
        // Проверяем наличием класса .is-active у элемента
        if (!slide.classList.contains('is-active')) {
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

const lazyLoadImages = () => {
  const images = document.querySelectorAll('img');
  const screenWidth = window.innerWidth;

  if (screenWidth < 768) {
    images.forEach((img, index) => {
      if (index !== 0 && index !== 2) {
        img.setAttribute('loading', 'lazy');
      }
    });
  } else {
    images.forEach((img, index) => {
      if (index !== 0 && index !== 1) {
        img.setAttribute('loading', 'lazy');
      }
    });
  }
};

export { setActiveJuriSlideInfo, lazyLoadImages };
