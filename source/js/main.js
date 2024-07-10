import { initTabs } from '../js/modules/tabs/init-tabs';
import { setActiveTab, setActiveSlideInfo } from '../js/modules/utils/utils';
import { juriSliderInit } from '../js/modules/sliders/juri-slider-init';
import { reviewsSliderInit } from '../js/modules/sliders/reviews-slider-init';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initTabs();
    setActiveTab();
    juriSliderInit();
    setActiveSlideInfo();
    juriSliderInit();
    reviewsSliderInit();
  });
});
