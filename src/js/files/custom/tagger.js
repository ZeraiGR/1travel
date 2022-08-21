import SlimSelect from 'slim-select';

const slimPlaceholderEl = document.querySelector('.filters__tagger-placeholder');

let slimPlaceholder = '';

if (slimPlaceholderEl) {
  slimPlaceholder = slimPlaceholderEl.textContent;
}

new SlimSelect({
  select: '.filters__tagger',
  placeholder: slimPlaceholder,
});
