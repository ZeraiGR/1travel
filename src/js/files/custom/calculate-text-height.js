const getFontSize = (el) => {
	const style = window.getComputedStyle(el, null).getPropertyValue('font-size');
	return parseFloat(style); 
}

const calculateTextHeight = () => {
	const textElems = document.querySelectorAll('.review__title');

	textElems?.forEach(el => {
		const lines = Math.round(el.clientHeight / getFontSize(el));

		if (lines > 1) {
			el.nextElementSibling.classList.add('cut');
		} else {
			el.nextElementSibling.classList.remove('cut');
		}
	});
};

calculateTextHeight();