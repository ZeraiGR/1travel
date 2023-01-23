// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";
import '/node_modules/flag-icons/css/flag-icons.min.css';

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

// review popup handler
import './custom/review-popup-handler.js';

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

// handle autocomplete city
import './custom/hadnling-autocomplete-city.js';

// handle filter's switcher button
import './custom/filters-switcher.js';

// init select pure for the tagger
import './custom/tagger.js';

// init tours mobile logic
import './custom/tours-mobile-handler.js';

// init visas mobile logic
import './custom/visas-mobile-handler.js';

// init resume content fixed
import './custom/resume-content-equalizer.js';

// init print btn handler
import './custom/print-btn-handler.js';

// init cookie handler
import './custom/cookie-handler.js';
