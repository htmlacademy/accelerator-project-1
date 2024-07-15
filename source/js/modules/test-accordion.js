// Глобальный объект для хранения состояний аккордеонов
let accordionStates = {};

// Функция для инициализации вкладок
export const initializeTabs = () => {
  // Находим все элементы с классом .faq-tabs
  const tabs = document.querySelectorAll('.faq-tabs');
  // Для каждого элемента .faq-tabs добавляем обработчик события click
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Получаем идентификатор вкладки из атрибута data-tab-id
      const tabId = tab.getAttribute('data-tab-id');
      // Переключаем вкладку на основе полученного идентификатора
      switchTab(tabId);
    });
  });
};

// Функция для переключения вкладок
export const switchTab = (tabId) => {
  // Находим все элементы с классом .tab-content
  document.querySelectorAll('.tab-content').forEach(tab => {
    // Если id элемента совпадает с переданным tabId, активируем его
    if (tab.id === tabId) {
      tab.classList.add('active');
    } else {
      // Иначе деактивируем элемент
      tab.classList.remove('active');
    }
  });

  // Применяем состояния аккордеонов для выбранной вкладки
  applyAccordionState(tabId);
};

// Функция для применения состояний аккордеонов
export const applyAccordionState = (tabId) => {
  // Находим группу аккордеонов внутри выбранной вкладки
  const groupId = document.getElementById(tabId)?.querySelector('.accordion__group')?.getAttribute('data-group');
  if (!groupId) return; // Если группы аккордеонов нет, выходим из функции

  // Находим все элементы аккордеонов внутри выбранной вкладки
  const accordions = document.querySelectorAll(`#${tabId} [data-accordion="element"]`);
  accordions.forEach(element => {
    // Получаем идентификатор аккордеона
    const accordionId = element.getAttribute('data-accordion-id');
    // Проверяем, есть ли сохраненное состояние для данного аккордеона
    if (accordionStates[groupId] && accordionStates[groupId][accordionId]) {
      const isOpen = accordionStates[groupId][accordionId];
      if (isOpen) {
        // Если аккордеон должен быть открыт, открываем его без анимации
        openAccordion(element, false);
      } else {
        // Если аккордеон должен быть закрыт, закрываем его без анимации
        closeAccordion(element, false);
      }
    }
  });
};

// Функция для открытия аккордеона
export const openAccordion = (element, animate = true) => {
  // Находим контент внутри аккордеона
  const content = element.querySelector('[data-accordion="content"]');
  // Добавляем класс is-active для аккордеона
  element.classList.add('is-active');
  if (animate) {
    // Если анимация включена, устанавливаем максимальную высоту контента
    content.style.maxHeight = `${content.scrollHeight}px`;
  } else {
    // Если анимация выключена, временно отключаем transition
    content.style.transition = 'none';
    content.style.maxHeight = `${content.scrollHeight}px`;
    setTimeout(() => {
      content.style.transition = ''; // Восстанавливаем transition
    }, 0);
  }
};

// Функция для закрытия аккордеона
export const closeAccordion = (element, animate = true) => {
  // Находим контент внутри аккордеона
  const content = element.querySelector('[data-accordion="content"]');
  // Убираем класс is-active для аккордеона
  element.classList.remove('is-active');
  if (animate) {
    // Если анимация включена, сбрасываем максимальную высоту контента
    content.style.maxHeight = null;
  } else {
    // Если анимация выключена, временно отключаем transition
    content.style.transition = 'none';
    content.style.maxHeight = null;
    setTimeout(() => {
      content.style.transition = ''; // Восстанавливаем transition
    }, 0);
  }
};

// Обработчик кликов по аккордеонам
export const accordionClickHandler = (evt) => {
  // Находим кнопку аккордеона, по которой был клик
  const button = evt.target.closest('[data-accordion="button"]');
  if (!button) return; // Если кнопка не найдена, выходим из функции
  evt.preventDefault(); // Предотвращаем стандартное поведение
  // Находим элемент аккордеона, содержащий кнопку
  const element = button.closest('[data-accordion="element"]');
  // Проверяем, открыт ли аккордеон
  const isOpen = element.classList.contains('is-active');
  // Находим группу аккордеонов
  const groupId = element.closest('.accordion__group').getAttribute('data-group');
  // Получаем идентификатор аккордеона
  const accordionId = element.getAttribute('data-accordion-id');
  if (!accordionStates[groupId]) {
    accordionStates[groupId] = {}; // Если группа не существует, создаем ее
  }
  // Инвертируем состояние аккордеона и сохраняем его
  accordionStates[groupId][accordionId] = !isOpen;
  if (isOpen) {
    // Если аккордеон открыт, закрываем его
    closeAccordion(element);
  } else {
    // Если аккордеон закрыт, открываем его
    openAccordion(element);
  }
};
