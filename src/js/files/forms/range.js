// Подключение из node_modules
import * as noUiSlider from 'nouislider';
import wNumb from 'wnumb';

// Подключение стилей из scss/base/forms/range.scss
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css';

export function rangeInit() {
  const rangers = document.querySelectorAll('.filters__range');

  rangers?.forEach((range) => {
    if (range.classList.contains('budget')) {
      const currency = range.parentNode.querySelector('.filters__price-currency')?.textContent,
        valueMin = range.parentNode.querySelector('.filters__value-min')?.textContent,
        valueMax = range.parentNode.querySelector('.filters__value-max')?.textContent;

      const budgetSlider = noUiSlider.create(range, {
        start: [+valueMin || 0, +valueMax || 1000],
        connect: true,
        range: {
          min: +valueMin || 0,
          max: +valueMax || 1000,
        },
        format: wNumb({
          decimals: 0,
          suffix: currency || '€',
        }),
      });

      const priceInputs = [
        range.parentNode.querySelector('#input-price-start'),
        range.parentNode.querySelector('#input-price-end'),
      ];

      const formatValues = [
        range.parentNode.querySelector('#price-start'),
        range.parentNode.querySelector('#price-end'),
      ];

      budgetSlider.on('update', function (values, handle) {
        formatValues[handle].innerHTML = values[handle];
        priceInputs[handle].value = values[handle].replace(currency, '');
      });
    }

    if (range.classList.contains('date')) {
      const valueMin = range.parentNode.querySelector('.filters__value-min')?.textContent,
        valueMax = range.parentNode.querySelector('.filters__value-max')?.textContent,
        inputMin = range.parentNode.querySelector('#input-day-start'),
        inputMax = range.parentNode.querySelector('#input-day-end');

      const inputs = [inputMin, inputMax];

      const dateSlider = noUiSlider.create(range, {
        start: [+valueMin || 0, +valueMax || 10],
        connect: true,
        range: {
          min: +valueMin || 0,
          max: +valueMax || 10,
        },
      });

      dateSlider.on('update', function (values, handle) {
        inputs[handle].value = parseInt(values[handle]);
      });

      const handle = (e) => {
        if (e.code === 'Enter') {
          e.preventDefault();
          e.currentTarget.blur();
        }
      };

      inputs?.forEach((inp, i) => {
        inp.addEventListener('change', function () {
          if (i === 0) {
            dateSlider.set([this.value, null]);
          } else {
            dateSlider.set([null, this.value]);
          }
        });

        inp.onkeypress = handle;
        inp.onkeyup = handle;
        inp.onkeypress = handle;
      });
    }
  });
}

rangeInit();
