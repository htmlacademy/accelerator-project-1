const initPriceTabs = () => {
  if (
    document.querySelectorAll('[data-price="tabs-control"]') &&
    document.querySelectorAll('[data-price="tabs-content"]')
  ) {
    const tabsControls = document.querySelectorAll(
      '[data-price="tabs-control"]',
    );
    const tabsElements = document.querySelectorAll(
      '[data-price="tabs-content"]',
    );
    // Обработчик события клика для вкладок
    tabsControls.forEach((tabsControl) => {
      tabsControl.addEventListener('click', (e) => {
        e.preventDefault();
        const activeTabId = e.target.getAttribute('data-tab');

        // Убираем активный класс у всех вкладок, кроме текущей
        tabsControls.forEach((otherTabControl) => {
          if (otherTabControl !== tabsControl) {
            otherTabControl.classList.remove('is-active');
          }
        });

        // Добавляем активный класс текущей вкладке
        tabsControl.classList.add('is-active');

        // Показываем соответствующее содержимое вкладки
        tabsElements.forEach((tabsElement) => {
          const contentId = tabsElement.getAttribute('data-tab-content');
          if (contentId === activeTabId) {
            tabsElement.classList.add('is-active');
          } else {
            tabsElement.classList.remove('is-active');
          }
        });
      });
    });
  }
};

const setActivePriceCard = () => {
  if (
    document.querySelector('[data-price="card"]') &&
    document.querySelector('[data-price="card-btn"]')
  ) {
    // Получаем все элементы с классом .price-card
    const tabs = document.querySelectorAll('[data-price="card"]');

    // Добавляем обработчик события для каждого элемента
    tabs.forEach((tab) => {
      // Добавляем обработчик события focus для кнопки .price-card__btn
      const btn = tab.querySelector('[data-price="card-btn"]');
      btn.addEventListener('focus', () => {
        tab.classList.add('active');
      });

      // Добавляем обработчик события blur для кнопки .price-card__btn
      btn.addEventListener('blur', () => {
        tab.classList.remove('active');
      });

      tab.addEventListener('mouseenter', () => {
        // Проверяем наличием класса .active у элемента и .active у кнопки
        if (
          !tab.classList.contains('active') &&
          !btn.classList.contains('active')
        ) {
          tab.classList.add('active'); // Добавляем класс .active при наведении
          btn.classList.add('active'); // Добавляем класс .active при наведении
        }
      });

      tab.addEventListener('mouseleave', () => {
        // Проверяем наличием класса .active у элемента и .active у кнопки
        if (
          tab.classList.contains('active') &&
          btn.classList.contains('active')
        ) {
          tab.classList.remove('active'); // Удаляем класс .active при уходе курсора
          btn.classList.remove('active'); // Удаляем класс .active при уходе курсора
        }
      });
    });
  }
};

export { initPriceTabs, setActivePriceCard };
