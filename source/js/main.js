// https://swiperjs.com/get-started#installation

import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

// Реализация слайда в разделе "Жюри"
const juriSwiper = document.querySelector('.juri__swiper');
const juriSlider = new Swiper(juriSwiper, {

  modules: [Navigation],

  loop: true,
  speed: 500,
  effect: 'fade',

  breakpoints: {
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
    },

    768: {
      slidesPerView: '2',
      spaceBetween: 40,
    },

    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },

  navigation: {
    nextEl: '.juri__swiper-button--next',
    prevEl: '.juri__swiper-button--prev',
  },
});

juriSlider.update();

// Реализация слайда в разделе "Отзывы"
const reviewsSwiper = document.querySelector('.reviews__swiper');
const reviewsSlider = new Swiper(reviewsSwiper, {

  modules: [Navigation],

  watchOverflow: true,
  speed: 500,
  effect: 'fade',

  breakpoints: {
    slidesPerView: 1,
  },

  navigation: {
    nextEl: '.reviews__swiper-button--next',
    prevEl: '.reviews__swiper-button--prev',
    lockClass: 'disabled',
  },
});

reviewsSlider.update();

// Реализация таба в разделе "Абонементы"
const tabsTitle = document.querySelectorAll('.price__tab-title');
const tabsContent = document.querySelectorAll('.price__tab-content');

tabsTitle.forEach((item) => item.addEventListener('click', (evt) => {
  const tabsTitleTarget = evt.target.getAttribute('data-tab');

  tabsTitle.forEach((element) => element.classList.remove('price__tab-title--current'));
  tabsContent.forEach((element) => element.classList.remove('price__tab-content--current'));

  item.classList.add('price__tab-title--current');

  document.getElementById(tabsTitleTarget).classList.add('price__tab-content--current');
}));

document.querySelector('[data-tab="tab-1"]').classList.add('price__tab-title--current');
document.querySelector('#tab-1').classList.add('price__tab-content--current');

//Реализация таба в разделе "Вопросы и ответы"
const tabsTitle2 = document.querySelectorAll('.faq__tab-title');
const tabsContent2 = document.querySelectorAll('.faq__tab-content');

tabsTitle2.forEach((item) => item.addEventListener('click', (evt) => {
  const tabsTitleTarget = evt.target.getAttribute('data-tab');

  tabsTitle2.forEach((element) => element.classList.remove('faq__tab-title--current'));
  tabsContent2.forEach((element) => element.classList.remove('faq__tab-content--current'));

  item.classList.add('faq__tab-title--current');

  document.getElementById(tabsTitleTarget).classList.add('faq__tab-content--current');
}));

document.querySelector('[data-tab="faq-tab-1"]').classList.add('faq__tab-title--current');
document.querySelector('#faq-tab-1').classList.add('faq__tab-content--current');

//Реализация аккордеона в разделе "Вопросы и ответы"
const toggles = document.querySelectorAll('.faq__toggle');

toggles.forEach((item) => item.addEventListener('click', () => {
  const activeContent = document.querySelector(`#${item.dataset.tab}`);

  if (activeContent.classList.contains('faq__content--active')) {
    activeContent.classList.remove('faq__content--active');
    item.classList.remove('faq__toggle--active');
    activeContent.style.maxHeight = 0;
  } else {
    activeContent.classList.add('faq__content--active');
    item.classList.add('faq__toggle--active');
    activeContent.style.maxHeight = `${activeContent.scrollHeight}px`;

    item.classList.add('faq__toggle--active');
    activeContent.classList.add('faq__content--active');
    activeContent.style.maxHeight = `${activeContent.scrollHeight}px`;
  }
}));

document.querySelector('[data-tab=accordion-tab-1]').classList.add('faq__toggle--active');
document.querySelector('#accordion-tab-1').classList.add('faq__content--active');
document.querySelector('#accordion-tab-1').style.maxHeight = `${document.querySelector('#accordion-tab-1').scrollHeight}px`;

// Загрузка видео-ролика
const video = document.querySelector('.about__video-wrap');
const link = document.querySelector('.about__video-link');
const img = document.querySelector('.about__video-wrap img');

function createIframe() {
  const iframe = document.createElement('iframe');
  iframe.id = 'video';
  iframe.src = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1&mute=1';
  iframe.title = 'Видео-ролик фитнес-центра SUPERGYM';
  iframe.width = '320';
  iframe.height = '170';
  iframe.frameborder = '0';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.referrerpolicy = 'strict-origin-when-cross-origin';
  iframe.allowFullscreen = true;
  return iframe;
}

function onPlayButtonClick() {
  const iframe = createIframe('iframe');

  link.removeAttribute('href');
  link.remove();
  img.remove();
  video.appendChild(iframe);
}

link.addEventListener('click', onPlayButtonClick);

// Валидация формы
const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');

function createError(message, parent) {
  const errorLabel = document.createElement('p');

  errorLabel.className = 'form__error';
  errorLabel.textContent = message;
  parent.appendChild(errorLabel);

  nameInput.classList.add('error');
  phoneInput.classList.add('error');
}

function validateInput(input, message, pattern) {
  if (input.value === '') {
    createError(message, input.parentNode);
    return false;
  }
  if (pattern && !pattern.test(input.value)) {
    createError('Некорректный формат ввода.', input.parentNode);
    return false;
  }
  return true;
}

function onValidateForm (evt) {

  document.querySelectorAll('.form__error').forEach((error) => {
    error.remove();
  });
  nameInput.classList.remove('error');
  phoneInput.classList.remove('error');

  let isValid = true;

  isValid = validateInput(nameInput, 'Пожалуйста, введите ваше имя.', /^[A-Za-zА-Яа-я\s]+$/) && isValid;
  isValid = validateInput(phoneInput, 'Пожалуйста, введите ваш телефон.', /^((\+7|7|8)+([0-9]){10})$/) && isValid;

  if (!isValid) {
    evt.preventDefault();
  }
}

form.addEventListener('submit', onValidateForm);
