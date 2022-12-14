import datepicker from 'js-datepicker';

const datePickers = document.querySelectorAll('.datepicker');
const ROUTER_MOBILE = '.router--mobile';
const pickerIds = [];

if (datePickers) {
  datePickers.forEach((el) => {
    pickerIds.push(`#${el.id}`);
  });
}

const resetBtns = document.querySelectorAll('.router__date-close');
let pickers = [];

export const checkFilled = (el) => {
  if (el.value.length) {
    el.classList.add('filled');
    el.parentNode.classList.add('filled');
  } else {
    el.classList.remove('filled');
    el.parentNode.classList.remove('filled');
  }
};

resetBtns?.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let targetId = e.currentTarget.dataset.id;

    if (pickers.length) {
      const targerPicker = pickers.find((picker) => picker.el.id === targetId);

      if (targerPicker) {
        targerPicker.setDate();
        checkFilled(targerPicker.el);
      }
    }
  });
});

const initPickers = (idArr) => {
  const select = document.querySelector('.resume__select-form');
  // select.click();
  Array.from(select.children).forEach((el) => {
    el.selected = false;
    select.children[2].selected = true;
  });

  if (!idArr.every((id) => document.querySelector(id))) {
    return;
  }

  if (Array.isArray(idArr)) {
    idArr.forEach((id) => {
      const picker = datepicker(id, {
        onSelect: (instance) => {
          checkFilled(instance.el);
        },
        disabledDates: [new Date('2022-10-14'), new Date('2022-10-15'), new Date('2022-10-16')],
        formatter: (input, date) => {
          const value = `${date.getDate()} ${date.toLocaleString('default', {
            month: 'long',
          })},  ${date.toLocaleString('default', { weekday: 'short' })}`;
          input.value = value;
        },
        overlayPlaceholder: new Date().getFullYear().toString(),
        customMonths: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        customDays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        disabler: (date) => date.getTime() <= new Date(Date.now() - 86400000),
      });

      pickers.push(picker);
    });
  }
};

initPickers(pickerIds);
