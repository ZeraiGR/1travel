const printBtnHandler = () => {
  const printBtn = document.querySelector('.single__share-btn');

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
};

printBtnHandler();
