import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

document.documentElement.classList.remove('no-js');

new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 40,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1366: {
      slidesPerView: 4,
    }
  },
  modules: [ Navigation ],
  navigation: {
    nextEl: '.juri-btn--right',
    prevEl: '.juri-btn--left',
  },
  loop: true,
});
