export default (tabsContainer, buttonsClass = 'tabs-btn', contentsClass = 'tabs-content', activeButtonClass = 'tabs-btn-active', activeContentClass = 'tabs-content-active') => {
  const buttons = window
    .document
    .querySelector(tabsContainer)
    ?.querySelectorAll(`.${buttonsClass}`) ?? [];

  const contents = window
    .document
    .querySelector(tabsContainer)
    ?.querySelectorAll(`.${contentsClass}`) ?? [];

  buttons.forEach((clickButton) => {
    clickButton.addEventListener('click', () => {
      const tabId = clickButton.getAttribute('data-tab-id');

      buttons.forEach((button) => {
        button.classList.remove(activeButtonClass);
      });
      clickButton.classList.add(activeButtonClass);

      contents.forEach((content) => {
        if (tabId === content.getAttribute('data-tab-id')) {
          content.classList.add(activeContentClass);
        } else {
          content.classList.remove(activeContentClass);
        }
      });
    });
  });
};
