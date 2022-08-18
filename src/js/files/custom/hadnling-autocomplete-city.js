import { checkFilled } from './date-picker.js';

const handleAutocomplete = () => {
  const FIELD_BOX_SELECTOR = '.router__places';
  const RESULTS_SELECTOR = '.router__results';
  const FIELD_SELECTOR = '.router__field--city';
  const RESULTS_ITEM_SELECTOR = '.results__item';

  const inputs = document.querySelectorAll(FIELD_SELECTOR);
  let isOpen = false;
  const resultsArr = document.querySelectorAll(RESULTS_SELECTOR);

  // helpers
  const getLocalResults = (item) =>
    item.closest(FIELD_BOX_SELECTOR).querySelector(RESULTS_SELECTOR);

  const handleWindowClick = (e) => {
    const target = e.target,
      results = target.closest(RESULTS_SELECTOR),
      isField = target.classList.contains(FIELD_SELECTOR.slice(1));

    if (!results && !isField) {
      resultsArr?.forEach((res) => {
        res.classList.remove('results--show');
      });
      isOpen = false;
      updateWindowListeners(isOpen);
    }
  };

  const updateWindowListeners = (state) => {
    if (state) {
      window.addEventListener('click', handleWindowClick);
    } else {
      window.removeEventListener('click', handleWindowClick);
    }
  };

  const updateItemsListeners = (state, items) => {
    if (state) {
      items?.forEach((item) => {
        item.addEventListener('click', chooseCity);
      });
    } else {
      items?.forEach((item) => {
        item.removeEventListener('click', chooseCity);
      });
    }
  };

  const chooseCity = (e) => {
    const curTarget = e.currentTarget,
      city = curTarget.querySelector('.results__main').innerText,
      field = curTarget.closest(FIELD_BOX_SELECTOR).querySelector(FIELD_SELECTOR),
      results = getLocalResults(curTarget);

    field.value = city;
    checkFilled(field);

    results.classList.remove('results--show');

    isOpen = false;
    updateWindowListeners(isOpen);
    updateItemsListeners(isOpen, inputs);
  };

  inputs?.forEach((inp) => {
    inp.addEventListener('focus', (e) => {
      let curTurget = e.currentTarget;
      const results = getLocalResults(curTurget);
      const items = results.querySelectorAll(RESULTS_ITEM_SELECTOR);

      resultsArr?.forEach((res) => {
        res.classList.remove('results--show');
      });
      results.classList.add('results--show');

      isOpen = true;
      updateWindowListeners(isOpen);
      updateItemsListeners(isOpen, items);
    });
  });
};

handleAutocomplete();
