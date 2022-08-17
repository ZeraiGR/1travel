import datepicker from 'js-datepicker';

const pickerIds = [
  '#author-date-from',
  '#author-date-back',
  '#charter-date-from',
  '#charter-date-back',
];

const resetBtns = document.querySelectorAll('.router__date-close');
let pickers = [];

const checkFilled = (el) => {
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
  if (Array.isArray(idArr)) {
    idArr.forEach((id) => {
      const picker = datepicker(id, {
        onSelect: (instance) => {
          checkFilled(instance.el);
        },
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
