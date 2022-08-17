import { declOfNum } from './declanation-of-numbers.js';

const BTN_SELECTOR = '.router__counter',
  POPUP_SELECTOR = '.router__counter-popup',
  COUNTER_SELECTOR = '.router__passengers-total',
  CHANGE_VALUE_BTN_SELECTOR = '.minmax__btn',
  DECLANATION_SELECTOR = '.router__declination',
  FIELD_BOX = '.field-box--passengers',
  FIELD = '.minmax',
  FILED_INPUT = '.minmax__num';

const DECLANATIONS = ['пассажир', 'пассажира', 'пассажиров'];

const initHandleCounter = () => {
  const openCounterBtns = document.querySelectorAll(BTN_SELECTOR),
    changeValueCounterBtns = document.querySelectorAll(CHANGE_VALUE_BTN_SELECTOR);

  let isOpen = false;

  // helpers
  const getPopup = (item) => item.parentNode.querySelector(POPUP_SELECTOR);
  const getTotalCountEl = (item) => item.closest(FIELD_BOX).querySelector(COUNTER_SELECTOR);
  const getTotalLabelEl = (item) => item.closest(FIELD_BOX).querySelector(DECLANATION_SELECTOR);
  const getFieldInputEl = (item) => item.closest(FIELD).querySelector(FILED_INPUT);
  const getFieldInputEls = (item) => {
    let res = [];
    Array.from(item.closest(POPUP_SELECTOR).children).forEach((el) =>
      res.push(el.querySelector(FILED_INPUT)),
    );
    return res;
  };

  const validateNum = (num, min, max) => Math.max(min, Math.min(max, num));

  const validateCounter = (num, type) => {
    if (type === 'adult') {
      return validateNum(num, 1, 10);
    } else {
      return validateNum(num, 0, 10);
    }
  };

  const updateListeners = (state) => {
    if (state) {
      window.addEventListener('click', handleWindowClick);
    } else {
      window.removeEventListener('click', handleWindowClick);
    }
  };

  const handleWindowClick = (e) => {
    const target = e.target;

    const isBtn = Array.from(openCounterBtns)?.some(
      (btn) => btn === target.closest(`.${btn.className.split(' ').join('.')}`),
    )
      ? true
      : false;

    const isPopup = Array.from(openCounterBtns)?.some(
      (btn) => getPopup(btn) === target.closest(`.${getPopup(btn).className.split(' ').join('.')}`),
    )
      ? true
      : false;

    if (!isBtn && !isPopup) {
      openCounterBtns?.forEach((btn) => {
        const popup = getPopup(btn);

        btn.classList.remove('opened');
        popup.classList.remove('opened');

        isOpen = false;
        updateListeners(isOpen);
      });
    }
  };

  // changing popup state
  openCounterBtns?.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const currentTarget = e.currentTarget,
        popup = getPopup(currentTarget);

      currentTarget.classList.toggle('opened');
      popup.classList.toggle('opened');

      isOpen = !isOpen;

      updateListeners(isOpen);
    });
  });

  // changing quantity of passengers
  const handleChange = (e) => {
    let curTarget = e.currentTarget,
      initValue = parseInt(getFieldInputEl(curTarget).value),
      curValue = initValue;

    const totalCountEl = getTotalCountEl(curTarget),
      totalLabelEl = getTotalLabelEl(curTarget),
      passengersType = getFieldInputEl(curTarget).dataset.passenger,
      action = curTarget.dataset.action;

    if (action === 'inc') curValue = validateCounter(initValue + 1, passengersType);
    if (action === 'dec') curValue = validateCounter(initValue - 1, passengersType);

    getFieldInputEl(curTarget).value = curValue;

    const inputs = getFieldInputEls(curTarget),
      total = inputs.reduce((acc, el) => acc + parseInt(el.value), 0);

    totalCountEl.innerHTML = total;
    totalLabelEl.innerHTML = declOfNum(total, DECLANATIONS);
  };

  changeValueCounterBtns?.forEach((btn) => {
    btn.addEventListener('click', handleChange);
  });
};

initHandleCounter();
