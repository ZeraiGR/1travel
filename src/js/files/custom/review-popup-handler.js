function reviewPopupHandler () {
	const btns = document.querySelectorAll('.review__readmore');
	const reviewPopup = document.querySelector('#review');

	if (btns.length && reviewPopup) {
		function comebackDetail (review, details) {
			review.append(details);
			console.log(review, details);
			document.removeEventListener('afterPopupClose', comebackDetail);
		}

		btns.forEach(btn => {
			btn.addEventListener('click', (e) => {
				const review = e.currentTarget.closest('.review');
				const details = review.querySelector('.review__details');
				
				reviewPopup.querySelector('.popup__content').append(details);

				document.addEventListener('afterPopupClose', comebackDetail.bind(this, review, details));
			});
		});
	}
}

reviewPopupHandler();