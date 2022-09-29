const visasMobileHandler = () => {
  const openFilterBtn = document.querySelector('.visas__filter '),
    filters = document.querySelector('.visas__filters '),
    selectContainer = document.querySelector('.visas__lang'),
    select = document.querySelector('.visas__lang-choosen'),
    selectContent = document.querySelector('.visas__lang-choosen-content'),
    options = document.querySelectorAll('.lang__item');

  const updateWindowListeners = (state) => {
    if (state) {
      window.addEventListener('click', handleWindowClick);
    } else {
      window.removeEventListener('click', handleWindowClick);
    }
  };

  const handleWindowClick = (e) => {
    const target = e.target,
      isSelect = target.closest('.visas__lang'),
      isRoot = target.closest('.visas__lang-choosen');

    if (!isSelect && !isRoot) {
      updateWindowListeners(false);
      selectContainer.classList.remove('active');
    }
  };

  if (openFilterBtn && filters) {
    openFilterBtn.addEventListener('click', () => {
      filters.classList.toggle('active');
      openFilterBtn.classList.toggle('active');
      document.documentElement.classList.toggle('lock');
    });
  }

  if (selectContainer && select) {
    select.onclick = () => {
      selectContainer.classList.toggle('active');
      if (selectContainer.classList.contains('active')) {
        updateWindowListeners(true);
      } else {
        updateWindowListeners(false);
      }
    };
  }

  if (options && selectContainer) {
    options.forEach((el) => {
      el.addEventListener('click', (e) => {
        selectContent.innerHTML = e.target.closest('.lang__icon').outerHTML;

        updateWindowListeners(false);
        selectContainer.classList.remove('active');
        options.forEach((opt) => {
          opt.classList.remove('selected');
        });
        el.classList.add('selected');
      });
    });
  }
};

visasMobileHandler();
