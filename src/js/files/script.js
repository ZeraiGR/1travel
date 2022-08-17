// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

export function headerFixed() {
  const header = document.querySelector('.header'),
    windowHeight = document.documentElement.clientHeight;
  // arrowTopBtn = document.querySelector('.arrow-top');

  window.addEventListener('scroll', function () {
    if (window.scrollY > windowHeight) {
      header.classList.add('fixed');
      // arrowTopBtn.classList.add('active');
    } else {
      header.classList.remove('fixed');
      // arrowTopBtn.classList.remove('active');
    }
  });
}

// transforming when elems were focused
import './custom/transform-with-focus.js';

// swaping city's names when button was clicked
import './custom/swap-inputs.js';

// date picker
import './custom/date-picker.js';

// passengers counter
import './custom/passengers-counter.js';

// calc padding for sliders
import './custom/slider-margin-calc.js';

// calc quantity of lines of text
import './custom/calculate-text-height.js';