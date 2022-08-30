const toursMobileHandler = () => {
  const openFilterBtn = document.querySelector('.tours__button '),
    submitFilterBtn = document.querySelector('.filters__btn'),
    openHeaderRouterBtn = document.querySelector('.header__open-btn'),
    headerRouter = document.querySelector('.header--router'),
    filters = document.querySelector('.tours__filters'),
    closeRouterBtn = document.querySelector('.router__btn--close'),
    searchRouterBtn = document.querySelector('.router__btn--search'),
    closeSearchResultsBtn = document.querySelector('.header__result-btn'),
    header = document.querySelector('.header');

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

  if (closeSearchResultsBtn) {
    closeSearchResultsBtn.addEventListener('click', () => {
      header.classList.remove('header--result');
    });
  }
};

const routerMobileHandler = () => {
  const routerMobile = document.querySelector('.router--mobile'),
    cityOutElem = document.querySelector('.router--mobile .router__field--from'),
    cityBackElem = document.querySelector('.router--mobile .router__field--back'),
    dateFromElem = document.querySelector('.router--mobile .datepicker--date-from'),
    dateBackElem = document.querySelector('.router--mobile .datepicker--date-back'),
    routerCountElem = document.querySelector('.router__counter'),
    routerPanel = document.querySelector('.router__panel '),
    routerPanelContent = document.querySelector('.panel__content'),
    routerPanelBackBtn = document.querySelector('.panel__btn-back'),
    routerPanelOkBtn = document.querySelector('.panel__btn-ok'),
    routerPanelTitle = document.querySelector('.panel__title'),
    mobileFields = document.querySelectorAll('.mobile-field');

  const checkFilled = (el) => {
    if (el.value.length) {
      el.classList.add('filled');
    } else {
      el.classList.remove('filled');
    }
  };

  if (mobileFields && window.innerWidth <= 972) {
    mobileFields.forEach((el) => {
      el.addEventListener('click', (e) => {
        const curTarget = e.currentTarget;
        const content = curTarget
          .closest('.field-box')
          .querySelector('.field-box__content')
          .cloneNode(true);
        routerPanel.classList.add('show');
        routerMobile.classList.add('panel-is-open');

        routerPanelTitle.textContent = curTarget.dataset.title;
        routerPanelContent.innerHTML = '';
        console.log(content);
        routerPanelContent.append(content);

        if (curTarget === cityOutElem) {
          const btns = content.querySelectorAll('.field-box__btn');

          btns.forEach((btn) => {
            btn.addEventListener('click', (e) => {
              let curTarget = e.currentTarget;
              cityOutElem.value = curTarget.querySelector('span').textContent;
              checkFilled(cityOutElem);
              closePanel();
            });
          });
        }

        if (curTarget === cityBackElem) {
          const searchInput = content.querySelector('.field-box__search-input');
          const btns = content.querySelectorAll('.field-box__btn');
          const items = content.querySelectorAll('.field-box__item');
          const values = Array.from(items).reduce((acc, el) => {
            acc.push(el.querySelector('span').textContent.toUpperCase());
            return acc;
          }, []);

          searchInput.addEventListener('input', (e) => {
            let filterStr = e.currentTarget.value.toUpperCase();

            const filteredValues = values.filter((el) => el.includes(filterStr));

            items.forEach((item) => {
              let testItem = item.querySelector('span').textContent.toUpperCase();

              if (!filteredValues.includes(testItem)) {
                item.classList.add('hide');
              } else {
                item.classList.remove('hide');
              }
            });
          });

          btns.forEach((btn) => {
            btn.addEventListener('click', (e) => {
              let curTarget = e.currentTarget;
              cityBackElem.value = curTarget.querySelector('span').textContent;
              checkFilled(cityBackElem);
              closePanel();
            });
          });
        }
      });
    });
  }

  const closePanel = () => {
    routerPanel.classList.remove('show');
    routerMobile.classList.remove('panel-is-open');
  };

  if (routerPanelOkBtn) {
    routerPanelOkBtn.addEventListener('click', () => {
      closePanel();
    });
  }

  if (routerPanelBackBtn) {
    routerPanelBackBtn.addEventListener('click', () => {
      closePanel();
    });
  }
};

toursMobileHandler();
routerMobileHandler();
