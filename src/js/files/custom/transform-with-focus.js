const transformFields = document.querySelectorAll('.transform-field');

const checkFilled = (el) => {
  if (el.value.length) {
    el.classList.add('filled');
  } else {
    el.classList.remove('filled');
  }
};

transformFields?.forEach((field) => {
  field &&
    field.addEventListener('blur', (e) => {
      checkFilled(e.target);
    });
});
