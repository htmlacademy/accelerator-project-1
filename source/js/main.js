import {
  initPriceTabs,
  setActivePriceCard,
} from "../js/modules/tabs/init-price-tabs";
import { initFaqTabs } from "../js/modules/tabs/init-faq-tabs";
import { setActiveJuriSlideInfo } from "../js/modules/utils/utils";
import { juriSliderInit } from "../js/modules/sliders/juri-slider-init";
import { reviewsSliderInit } from "../js/modules/sliders/reviews-slider-init";
import { play } from "../js/modules/video-player";
import { initFaqAccordions } from "../js/modules/accordions/faq-accordion";
import { validateForm } from "../js/modules/validate-form";

window.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("load", () => {
    play();
    initPriceTabs();
    setActivePriceCard();
    juriSliderInit();
    setActiveJuriSlideInfo();
    initFaqTabs();
    initFaqAccordions();
    reviewsSliderInit();

    validateForm();
  });
});
