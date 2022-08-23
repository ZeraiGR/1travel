// Подключение из node_modules
import * as noUiSlider from 'nouislider';
import wNumb from 'wnumb';

// Подключение стилей из scss/base/forms/range.scss
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css';

const currency = document.querySelector('.filters__price-currency')?.textContent;
const priceMin = document.querySelector('.filters__price-min')?.textContent;
const priceMax = document.querySelector('.filters__price-max')?.textContent;

export function rangeInit() {
  const priceSlider = document.querySelector('.filters__range');
  if (priceSlider) {
    let textFrom = priceSlider.getAttribute('data-from');
    let textTo = priceSlider.getAttribute('data-to');
    noUiSlider.create(priceSlider, {
      start: [0, 200000],
      connect: true,
      range: {
        min: +priceMin || 0,
        max: +priceMax || 1000,
      },
      format: wNumb({
        decimals: 0,
        suffix: currency || '€',
      }),
    });

    const priceInputs = [
      document.getElementById('input-price-start'),
      document.getElementById('input-price-end'),
    ];

    const formatValues = [
      document.getElementById('price-start'),
      document.getElementById('price-end'),
    ];

    priceSlider.noUiSlider.on('update', function (values, handle) {
      formatValues[handle].innerHTML = values[handle];
      priceInputs[handle].value = values[handle].replace(currency, '');
    });

    function setPriceValues() {
      let priceStartValue;
      let priceEndValue;
      if (priceStart.value != '') {
        priceStartValue = priceStart.value;
      }
      if (priceEnd.value != '') {
        priceEndValue = priceEnd.value;
      }
      priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
    }
  }
}
rangeInit();
