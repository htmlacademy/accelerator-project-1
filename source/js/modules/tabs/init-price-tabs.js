const initPriceTabs = () => {
  if (document.querySelectorAll('[data-price="tabs-control"]') && document.querySelectorAll('[data-price="tabs-content"]')) {
    const tabsControls = document.querySelectorAll('[data-price="tabs-control"]');
    const tabsElements = document.querySelectorAll('[data-price="tabs-content"]');
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
        tab.classList.add('is-active');
      });

      // Добавляем обработчик события blur для кнопки .price-card__btn
      btn.addEventListener('blur', () => {
        tab.classList.remove('is-active');
      });

      tab.addEventListener('mouseenter', () => {
        // Проверяем наличием класса .is-active у элемента и .is-active у кнопки
        if (
          !tab.classList.contains('is-active') &&
          !btn.classList.contains('is-active')
        ) {
          tab.classList.add('is-active'); // Добавляем класс .is-active при наведении
          btn.classList.add('is-active'); // Добавляем класс .is-active при наведении
        }
      });

      tab.addEventListener('mouseleave', () => {
        // Проверяем наличием класса .is-active у элемента и .is-active у кнопки
        if (tab.classList.contains('is-active') &&
          btn.classList.contains('is-active')) {
          tab.classList.remove('is-active'); // Удаляем класс .is-active при уходе курсора
          btn.classList.remove('is-active'); // Удаляем класс .is-active при уходе курсора
        }
      });
    });
  }
};

export { initPriceTabs, setActivePriceCard };
