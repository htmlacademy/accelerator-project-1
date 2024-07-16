const initFaqTabs = () => {
  if (
    document.querySelectorAll('[data-faq="tabs-control"]') &&
    document.querySelectorAll('[data-faq="tabs-content"]')
  ) {
    const tabsControls = document.querySelectorAll('[data-faq="tabs-control"]');
    const tabsElements = document.querySelectorAll('[data-faq="tabs-content"]');
    // Обработчик события клика для вкладок
    tabsControls.forEach((tabsControl) => {
      tabsControl.addEventListener("click", (e) => {
        e.preventDefault();
        const activeTabId = e.target.getAttribute("data-tab");

        // Убираем активный класс у всех вкладок, кроме текущей
        tabsControls.forEach((otherTabControl) => {
          if (otherTabControl !== tabsControl) {
            otherTabControl.classList.remove("is-active");
          }
        });

        // Добавляем активный класс текущей вкладке
        tabsControl.classList.add("is-active");

        // Показываем соответствующее содержимое вкладки
        tabsElements.forEach((tabsElement) => {
          const contentId = tabsElement.getAttribute("data-tab-content");
          if (contentId === activeTabId) {
            tabsElement.classList.add("is-active");
          } else {
            tabsElement.classList.remove("is-active");
          }
        });
      });
    });
  }
};

export { initFaqTabs };
