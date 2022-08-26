const visasMobileHandler = () => {
  const openFilterBtn = document.querySelector('.visas__filter '),
    filters = document.querySelector('.visas__filters ');

  if (openFilterBtn && filters) {
    openFilterBtn.addEventListener('click', () => {
      filters.classList.toggle('active');
      openFilterBtn.classList.toggle('active');
      document.documentElement.classList.toggle('lock');
    });
  }
};

visasMobileHandler();
