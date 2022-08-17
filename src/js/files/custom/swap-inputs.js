const swapBtns = document.querySelectorAll('.router__switch');

const checkFilled = (el) => {
  if (el.value.length) {
    el.classList.add('filled');
  } else {
    el.classList.remove('filled');
  }
};

const switchText = (elem1, elem2) => {
  let temp = elem1.value;
  elem1.value = elem2.value;
  elem2.value = temp;
};

swapBtns?.forEach((btn) => {
  const getElem1 = (elem) => elem?.previousElementSibling.querySelector('.router__field');
  const getElem2 = (elem) => elem?.nextElementSibling.querySelector('.router__field');

  btn.addEventListener('click', (e) => {
    switchText(getElem1(e.currentTarget), getElem2(e.currentTarget));
    checkFilled(getElem1(e.currentTarget));
    checkFilled(getElem2(e.currentTarget));
  });
});
