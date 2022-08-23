const cookieHandler = () => {
  const cookieBtn = document.querySelector('.cookie__button'),
    cookieBox = document.querySelector('.cookie');

  if (cookieBox && !localStorage.getItem('isVisited')) {
    cookieBox.classList.add('show');
  }

  if (cookieBtn) {
    cookieBtn.addEventListener('click', () => {
      localStorage.setItem('isVisited', true);
      cookieBox.classList.remove('show');
    });
  }
};

cookieHandler();
