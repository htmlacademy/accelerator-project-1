import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
const juriSliderInit = () => {
  if (document.querySelector('[data-slider="juri-slider"]')) {
    const juriSlider = document.querySelector('[data-slider="juri-slider"]');
    new Swiper(juriSlider, {
      modules: [Navigation],
      grabCursor: false,
      watchOverflow: true,
      speed: 500,
      loop: true,
      navigation: {
        nextEl: '.juri__arrow--next',
        prevEl: '.juri__arrow--prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          initialSlide: 0,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 40,
          simulateTouch: false,
        },
        1366: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });
  }
};

export { juriSliderInit };
