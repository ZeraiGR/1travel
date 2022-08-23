const resumeContentEqualizer = () => {
  const titlesArr = document.querySelectorAll('.resume__item--align div');

  const getMaxWidth = (arr) => {
    let titleWidthArr = [];

    arr?.forEach((title) => {
      titleWidthArr.push(title.clientWidth);
    });

    return Math.max(...titleWidthArr);
  };

  const maxWidth = getMaxWidth(titlesArr);

  titlesArr?.forEach((title) => {
    title.style.width = `${maxWidth}px`;
  });
};
