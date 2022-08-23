import SlimSelect from 'slim-select';

const slimPlaceholderEl = document.querySelector('.filters__tagger-placeholder'),
  taggerEl = document.querySelector('.filters__content--tagger'),
  taggerHelpers = document.querySelector('.filters__helpers');

let slimPlaceholder = '';

if (slimPlaceholderEl) {
  slimPlaceholder = slimPlaceholderEl.textContent;
}

const clearElem = (target) => {
  let child = target.lastElementChild;

  while (child) {
    target.removeChild(child);
    child = target.lastElementChild;
  }
};

if (taggerEl && taggerHelpers) {
  const tagger = new SlimSelect({
    select: '.filters__tagger',
    placeholder: slimPlaceholder,
    onChange: (info) => {
      clearElem(taggerHelpers);

      info.forEach((el, i) => {
        const tag = document.createElement('input');
        tag.name = `tag-${i + 1}`;
        tag.type = 'hidden';
        tag.className = 'hide';
        tag.value = el.text;
        taggerHelpers.append(tag);
      });
    },
  });

  tagger.set();
}
