import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

export default () => {
  new Swiper('.reviews-slyder .swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      768: {
        allowTouchMove: false,
      },
      1366: {
        allowTouchMove: false,
      }
    },
    modules: [ Navigation ],
    navigation: {
      nextEl: '.reviews-btn--right',
      prevEl: '.reviews-btn--left',
    },
  });
};
