// https://swiperjs.com/get-started#installation
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
// import Swiper and modules styles
import 'swiper/css';
const reviewsSliderInit = () => {
  if (document.querySelector('.reviews__slider')) {
    const reviewsSlider = document.querySelector('.reviews__slider');
    const swiper = new Swiper(reviewsSlider, {
      // Install modules
      modules: [Navigation],
      simulateTouch: false,
      grabCursor: false,
      watchOverflow: true,
      speed: 500,
      loop: true,
      autoHeight: true,
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
};

export { reviewsSliderInit };
