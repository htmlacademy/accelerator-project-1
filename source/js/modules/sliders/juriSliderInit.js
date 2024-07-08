// https://swiperjs.com/get-started#installation
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
// import Swiper and modules styles
import 'swiper/css';
const juriSliderInit = () => {
  if (document.querySelector('.juri__slider')) {
    const juriSlider = document.querySelector('.juri__slider');
    const swiper = new Swiper(juriSlider, {
      // Install modules
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
          slidesPerView: 1
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 40,
          initialSlide: 2,
          simulateTouch: false,
        },

        1366: {
          slidesPerView: 4,
          spaceBetween: 40,
        }
      },
    });
  }
};

export { juriSliderInit };
