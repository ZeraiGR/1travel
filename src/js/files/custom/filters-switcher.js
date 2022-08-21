const filterSwitchersHandler = () => {
  const switcherBtns = document.querySelectorAll('.filters__switcher');

  const handleSwitch = (e) => {
    const curTarget = e.currentTarget;
    const content = curTarget.parentNode.querySelector('.filters__content');

    if (curTarget) curTarget.classList.toggle('active');

    if (content) content.classList.toggle('active');
  };

  switcherBtns?.forEach((btn) => {
    btn.addEventListener('click', handleSwitch);
  });
};

filterSwitchersHandler();
