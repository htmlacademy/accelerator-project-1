import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

export default () => {
  new Swiper('.juri-list .swiper', {
    slidesPerView: 1,
    spaceBetween: 40,
    breakpoints: {
      768: {
        slidesPerView: 2,
        allowTouchMove: false,
      },
      1366: {
        slidesPerView: 4,
        allowTouchMove: false,
      }
    },
    modules: [ Navigation ],
    navigation: {
      nextEl: '.juri-btn--right',
      prevEl: '.juri-btn--left',
    },
    loop: true,
  });
};
