const filterSwitchersHandler = () => {
  const switcherBtns = document.querySelectorAll('.filters__switcher');
  const closeFilterBtns = document.querySelectorAll('.filters__close');

  const handleSwitch = (e) => {
    const curTarget = e.currentTarget;
    const content = curTarget.parentNode.querySelector('.filters__content');

    if (curTarget) curTarget.classList.toggle('active');

    if (content) content.classList.toggle('active');
  };

  switcherBtns?.forEach((btn) => {
    btn.addEventListener('click', handleSwitch);
  });

  closeFilterBtns?.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      let target = e.currentTarget;
      let filters = target.closest('.filters');

      filters.classList.remove('active');
      filters.parentNode.querySelector('.tours__button')?.classList.remove('active');
      document.documentElement.classList.remove('lock');
    });
  });
};

filterSwitchersHandler();
