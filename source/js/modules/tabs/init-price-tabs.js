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

    tabsControls.forEach((tabsControl) => {
      tabsControl.addEventListener('click', (e) => {
        e.preventDefault();
        const activeTabId = e.target.getAttribute('data-tab');

        tabsControls.forEach((otherTabControl) => {
          if (otherTabControl !== tabsControl) {
            otherTabControl.classList.remove('is-active');
          }
        });

        tabsControl.classList.add('is-active');

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
    const tabs = document.querySelectorAll('[data-price="card"]');

    tabs.forEach((tab) => {
      const btn = tab.querySelector('[data-price="card-btn"]');
      btn.addEventListener('focus', () => {
        tab.classList.add('active');
      });

      btn.addEventListener('blur', () => {
        tab.classList.remove('active');
      });

      tab.addEventListener('mouseenter', () => {
        if (
          !tab.classList.contains('active') &&
          !btn.classList.contains('active')
        ) {
          tab.classList.add('active');
          btn.classList.add('active');
        }
      });

      tab.addEventListener('mouseleave', () => {
        if (
          tab.classList.contains('active') &&
          btn.classList.contains('active')
        ) {
          tab.classList.remove('active');
          btn.classList.remove('active');
        }
      });
    });
  }
};

export { initPriceTabs, setActivePriceCard };
