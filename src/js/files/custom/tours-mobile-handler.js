const toursMobileHandler = () => {
  const openFilterBtn = document.querySelector('.tours__button '),
    submitFilterBtn = document.querySelector('.filters__btn'),
    openHeaderRouterBtn = document.querySelector('.header__open-btn'),
    headerRouter = document.querySelector('.header--router'),
    filters = document.querySelector('.tours__filters'),
    closeRouterBtn = document.querySelector('.router__btn--close'),
    searchRouterBtn = document.querySelector('.router__btn--search');

  if (openFilterBtn && filters) {
    openFilterBtn.addEventListener('click', () => {
      filters.classList.toggle('active');
      openFilterBtn.classList.toggle('active');
      document.documentElement.classList.toggle('lock');

      if (
        !openFilterBtn.classList.contains('active') &&
        !openFilterBtn.classList.contains('no-submit')
      ) {
        submitFilterBtn.click();
      }
    });
  }

  if (openHeaderRouterBtn && headerRouter && closeRouterBtn && searchRouterBtn) {
    openHeaderRouterBtn.addEventListener('click', () => {
      headerRouter.classList.add('active');
      document.documentElement.classList.add('lock');
    });

    closeRouterBtn.addEventListener('click', () => {
      headerRouter.classList.remove('active');
      document.documentElement.classList.remove('lock');
    });
  }
};

toursMobileHandler();
