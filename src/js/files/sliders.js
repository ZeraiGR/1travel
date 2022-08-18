/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Autoplay, Keyboard, EffectFade, Pagination, Navigation, Thumbs } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import '../../scss/base/swiper.scss';
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
  //BildSlider
  let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
  if (sliders) {
    sliders.forEach((slider) => {
      slider.parentElement.classList.add('swiper');
      slider.classList.add('swiper-wrapper');
      for (const slide of slider.children) {
        slide.classList.add('swiper-slide');
      }
    });
  }
}
// Инициализация слайдеров
function initSliders() {
  // Добавление классов слайдера
  // при необходимости отключить
  bildSliders();

  if (document.querySelector('.swiper')) {
    new Swiper('.selection__slider', {
      modules: [Navigation, Pagination, EffectFade],
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      observer: true,
      observeParents: true,
      slidesPerView: 'auto',
      spaceBetween: 50,
      speed: 800,
      centeredSlides: true,
      //touchRatio: 0,
      //simulateTouch: false,
      // loop: false,
      //preloadImages: false,
      //lazy: true,
      // Dotts
      pagination: {
        el: '.selection__pagination',
        clickable: true,
      },
      // Arrows
      navigation: {
        nextEl: '.selection__btn--next',
        prevEl: '.selection__btn--prev',
      },
      breakpoints: {
        320: {
          noSwiping: true,
          noSwipingClass: '.selection__slider',
        },
        768: {
          noSwiping: false,
        },
      },

      on: {},
    });
    if (window.innerWidth < 768) {
      new Swiper('.best-offers__slider', {
        modules: [Navigation],
        observer: true,
        observeParents: true,
        slidesPerView: 'auto',
        spaceBetween: 50,
        speed: 800,
        centeredSlides: true,
        //touchRatio: 0,
        //simulateTouch: false,
        // loop: false,
        //preloadImages: false,
        //lazy: true,
        // Dotts
        // Arrows
        navigation: {
          nextEl: '.best-offers__btn--next',
          prevEl: '.best-offers__btn--prev',
        },
        breakpoints: {
          320: {},
          768: {},
        },

        on: {},
      });
    }
    new Swiper('.reviews__slider', {
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 'auto',
      spaceBetween: 30,
      speed: 800,
      //touchRatio: 0,
      //simulateTouch: false,
      // loop: false,
      // Arrows
      navigation: {
        nextEl: '.reviews__btn--next',
        prevEl: '.reviews__btn--prev',
      },
      breakpoints: {
        320: {},
        768: {},
        1024: {},
        1366: {},
      },

      on: {},
    });
  }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  // Добавление классов слайдера
  // при необходимости отключить
  bildSliders();

  let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener('load', function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});
