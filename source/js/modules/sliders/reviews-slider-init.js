import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
const reviewsSliderInit = () => {
  if (document.querySelector('[data-slider="reviews-slider"]')) {
    const reviewsSlider = document.querySelector(
      '[data-slider="reviews-slider"]',
    );
    new Swiper(reviewsSlider, {
      modules: [Navigation],
      simulateTouch: false,
      grabCursor: false,
      watchOverflow: true,
      speed: 500,
      loop: false,
      autoHeight: true,
      slidesPerView: 1,
      navigation: {
        nextEl: '.reviews__arrow--next',
        prevEl: '.reviews__arrow--prev',
        lockClass: 'disabled',
      },
    });
  }
};

export { reviewsSliderInit };
