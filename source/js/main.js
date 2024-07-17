import { initTabs } from "../js/modules/tabs/initTabs";
import { setActiveTab, setActiveSlideInfo } from "../js/modules/utils/utils";
import { juriSliderInit } from "../js/modules/sliders/juriSliderInit";
import { reviewsSliderInit } from "../js/modules/sliders/reviewsSliderInit";

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
