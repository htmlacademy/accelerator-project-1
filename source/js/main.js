// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
import {initTabs} from "../js/modules/init-tabs";
import {setActiveTab} from "../js/modules/setActiveTab";

window.addEventListener('DOMContentLoaded', () => {

  window.addEventListener('load', () => {

    initTabs();
    setActiveTab();
  });
});
