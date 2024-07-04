// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
import { setActiveTab } from "../js/modules/tabs/setActiveTab";
import { initTabs } from "../js/modules/tabs/initTabs";

window.addEventListener('DOMContentLoaded', () => {

  window.addEventListener('load', () => {
    initTabs();
    setActiveTab();
  });
});
