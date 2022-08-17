const scrollbarWidth = () => {
		let div = document.createElement('div');

		div.style.overflowY = 'scroll';
		div.style.width = '50px';
		div.style.height = '50px';

		document.body.append(div);
		let scrollWidth = div.offsetWidth - div.clientWidth;
		div.remove();

		return scrollWidth;
};

const calcPaddingSliders = () => {
		const histories = document.querySelector('.reviews__slider');
		
		const calcPadding = (section) => {
				if (section) {
						const windowWidth =
								(window.innerWidth - 1620 - scrollbarWidth()) / 2;

						section.style['margin-left'] = windowWidth + 'px';
				}
		};

		calcPadding(histories);
};

calcPaddingSliders();