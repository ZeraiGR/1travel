import datepicker from 'js-datepicker';

const datePickers = document.querySelectorAll('.datepicker');
const ROUTER_MOBILE = '.router--mobile';
const pickerIds = [];

const datePickerWithRange = (pickerId, startDate = null, finishDate = null) => {
	let firstDate = startDate;
	let secondDate = finishDate;

	const updateWatcher = (status) => {
		if (status) {
			window.addEventListener('click', watcher);
		} else {
			window.removeEventListener('click', watcher);
		}
	}

	const getDays = (instance) => {
		return instance.calendarContainer.querySelectorAll('.qs-square[data-direction="0"]');
	}

	const closePicker = () => {
		dateFromPicker.alwaysShow = false;
		dateFromPicker.hide();
		updateWatcher(false);
	}

	const watcher = (e) => {
		let target = e.target;

		if (!target.closest('.qs-datepicker-container') && target !== document.getElementById(pickerId.slice(1)) && !target.classList.contains('qs-arrow') && !target.classList.contains('qs-overlay-month') && !target.classList.contains('qs-submit')) {
			closePicker();
		}
	};

	const checkFilled = (el) => {
		if (el.value.length) {
			el.classList.add('filled');
			el.parentNode.classList.add('filled');
		} else {
			el.classList.remove('filled');
			el.parentNode.classList.remove('filled');
		}
	};

	const setRange = (instance) => {
		const days = getDays(instance);

		if (firstDate < secondDate) {
			days.forEach((d, i) => {
				if (firstDate.getMonth() === secondDate.getMonth()) {
					if (i + 1 >= firstDate.getDate() && i + 1 < secondDate.getDate()) {
						d.classList.add('qs-active');
					}
				} else {
					if (i + 1 < secondDate.getDate()) {
						d.classList.add('qs-active');
					}
				}
			});
		} else {
			days.forEach((d, i) => {
				if (firstDate.getMonth() === secondDate.getMonth()) {
					if (i + 1 <= firstDate.getDate() && i + 1 > secondDate.getDate()) {
						d.classList.add('qs-active');
					}
				} else {
					if (i + 1 > secondDate.getDate()) {
						d.classList.add('qs-active');
					}
				}
			});
		}

		closePicker();

		// use firstDate and secondDate data js objects for farther logic here
		// ...
	};

	const updateRange = (instance) => {
		const days = getDays(instance);

		if (secondDate && firstDate < secondDate) {
			if (instance.currentYear === secondDate.getFullYear() && instance.currentYear === firstDate.getFullYear()) {

				if (firstDate.getMonth() < instance.currentMonth && instance.currentMonth < secondDate.getMonth()) {
					days.forEach((day, i) => {
						if (!day.classList.contains('qs-disabled')) {
							day.classList.add('qs-active');
						}
					});
				} else if (firstDate.getMonth() === instance.currentMonth && secondDate.getMonth() === instance.currentMonth) {
					days.forEach((day, i) => {
						if (!day.classList.contains('qs-disabled') && firstDate.getDate() <= i + 1 && i + 1 <= secondDate.getDate()) {
							day.classList.add('qs-active');
						}
					});
				} else if (firstDate.getMonth() === instance.currentMonth) {
					days.forEach((day, i) => {
						if (!day.classList.contains('qs-disabled') && firstDate.getDate() <= i + 1) {
							day.classList.add('qs-active');
						}
					});
				} else if (secondDate.getMonth() === instance.currentMonth) {
					days.forEach((day, i) => {
						if (!day.classList.contains('qs-disabled') && secondDate.getDate() >= i + 1) {
							day.classList.add('qs-active');
						}
					});
				}
			}

			if (instance.currentYear === secondDate.getFullYear() && instance.currentYear > firstDate.getFullYear()) {
				if (instance.currentMonth < secondDate.getMonth()) {
					days.forEach((day, i) => {
						if (!day.classList.contains('qs-disabled')) {
							day.classList.add('qs-active');
						}
					});
				} else if (secondDate.getMonth() === instance.currentMonth) {
					days.forEach((day, i) => {
						if (!day.classList.contains('qs-disabled') && secondDate.getDate() >= i + 1) {
							day.classList.add('qs-active');
						}
					});
				}
			}

			if (instance.currentYear < secondDate.getFullYear() && instance.currentYear === firstDate.getFullYear()) {
				if (instance.currentMonth > firstDate.getMonth()) {
					days.forEach((day, i) => {
						if (!day.classList.contains('qs-disabled')) {
							day.classList.add('qs-active');
						}
					});
				} else if (firstDate.getMonth() === instance.currentMonth) {
					days.forEach((day, i) => {
						if (!day.classList.contains('qs-disabled') && firstDate.getDate() <= i + 1) {
							day.classList.add('qs-active');
						}
					});
				}
			}

		} else if (secondDate) {
			if (instance.currentYear === secondDate.getFullYear() && instance.currentYear === firstDate.getFullYear()) {

				if (firstDate.getMonth() > instance.currentMonth && instance.currentMonth > secondDate.getMonth()) {
					days.forEach((day, i) => {
						if (!day.classList.contains('qs-disabled')) {
							day.classList.add('qs-active');
						}
					});
				} else if (firstDate.getMonth() === instance.currentMonth && secondDate.getMonth() === instance.currentMonth) {
					days.forEach((day, i) => {
						if (!day.classList.contains('qs-disabled') && firstDate.getDate() >= i + 1 && i + 1 >= secondDate.getDate()) {
							day.classList.add('qs-active');
						}
					});
				} else if (secondDate.getMonth() === instance.currentMonth) {
					days.forEach((day, i) => {
						if (!day.classList.contains('qs-disabled') && secondDate.getDate() <= i + 1) {
							day.classList.add('qs-active');
						}
					});
				} else if (firstDate.getMonth() === instance.currentMonth) {
					days.forEach((day, i) => {
						if (!day.classList.contains('qs-disabled') && firstDate.getDate() >= i + 1) {
							day.classList.add('qs-active');
						}
					});
				}
			}

			if (instance.currentYear === firstDate.getFullYear() && instance.currentYear > secondDate.getFullYear()) {
				if (instance.currentMonth < firstDate.getMonth()) {
					days.forEach((day, i) => {
						if (!day.classList.contains('qs-disabled')) {
							day.classList.add('qs-active');
						}
					});
				} else if (firstDate.getMonth() === instance.currentMonth) {
					days.forEach((day, i) => {
						if (!day.classList.contains('qs-disabled') && firstDate.getDate() >= i + 1) {
							day.classList.add('qs-active');
						}
					});
				}
			}

			if (instance.currentYear < firstDate.getFullYear() && instance.currentYear === secondDate.getFullYear()) {
				if (instance.currentMonth > secondDate.getMonth()) {
					days.forEach((day, i) => {
						if (!day.classList.contains('qs-disabled')) {
							day.classList.add('qs-active');
						}
					});
				} else if (secondDate.getMonth() === instance.currentMonth) {
					days.forEach((day, i) => {
						if (!day.classList.contains('qs-disabled') && secondDate.getDate() <= i + 1) {
							day.classList.add('qs-active');
						}
					});
				}
			}
		}
	};

	const resetRange = (instance) => {
		const days = getDays(instance);

		days.forEach((d, i) => {
			if (!instance.dateSelected || i + 1 !== instance.dateSelected.getDate()) {
				d.classList.remove('qs-active');
			}
		});
	}

	const fillFigures = (input, date) => {
		let value = '';

		if (secondDate && !finishDate) {
			value = '';
		} else if (firstDate && date) {
			const dayF = firstDate.getDate(),
				monthF = firstDate.getMonth() > 8 ? firstDate.getMonth() + 1 : `0${firstDate.getMonth() + 1}`,
				yearF = firstDate.getFullYear().toString().slice(-2),
				dayS = date.getDate(),
				monthS = date.getMonth() > 8 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`,
				yearS = date.getFullYear().toString().slice(-2);

			if (firstDate < date) {
				if (firstDate.getFullYear() !== date.getFullYear()) {
					value = dayF + '.' + monthF + '.' + yearF + ' - ' + dayS + '.' + monthS + '.' + yearS;
				} else {
					value = dayF + '.' + monthF + ' - ' + dayS + '.' + monthS;
				}
			} else {
				if (firstDate.getFullYear() !== date.getFullYear()) {
					value = dayS + '.' + monthS + '.' + yearS + ' - ' + dayF + '.' + monthF + '.' + yearF;
				} else {
					value = dayS + '.' + monthS + ' - ' + dayF + '.' + monthF;
				}
			}
		} else if (firstDate) {
			value = `${firstDate.getDate()}.${firstDate.getMonth() > 8 ? firstDate.getMonth() + 1 : `0${firstDate.getMonth() + 1}`}`;
		} else {
			value = `${date.getDate()}.${date.getMonth() > 8 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`}`;
		}

		input.value = value;
	};

	const nameOfMonths = document.querySelector(pickerId).dataset?.months?.split(',');
	const nameOfDays = document.querySelector(pickerId).dataset?.days?.split(',');

	const dateFromPicker = datepicker(pickerId, {
		onShow: instance => {
			instance.alwaysShow = true;
			updateWatcher(true);
		},
		onSelect: (instance, date) => {
			if (firstDate && secondDate) {
				firstDate = null;
				secondDate = null;
				resetRange(instance);
			}

			if (firstDate && !secondDate && date) {
				secondDate = date;
				setRange(instance);
			}

			if (!firstDate) {
				firstDate = date;
			}

			if (firstDate && !date) {
				firstDate = null;
			}

			checkFilled(instance.el);
		},
		onMonthChange: instance => {
			updateRange(instance);
		},
		formatter: (input, date) => {
			fillFigures(input, date);
		},
		overlayPlaceholder: new Date().getFullYear().toString(),
		customMonths: nameOfMonths || ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
		customDays: nameOfDays || ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
		startDay: 1,
		events: [
			new Date(2022, 10, 20),
		],
		disabledDates: [
			new Date(2099, 0, 5),
			new Date(2099, 0, 6),
			new Date(2099, 0, 7),
		],
		disabler: (date) => date.getTime() <= new Date(Date.now() - 86400000),
	});

	if (startDate && finishDate) {
		dateFromPicker.setDate(startDate);
		dateFromPicker.navigate(secondDate, true);
		fillFigures(dateFromPicker.el, finishDate);
		checkFilled(dateFromPicker.el);
	}

	return dateFromPicker;
};

if (datePickers) {
  datePickers.forEach((el) => {
    pickerIds.push(`#${el.id}`);
  });
}

const resetBtns = document.querySelectorAll('.router__date-close');
let pickers = [];

export const checkFilled = (el) => {
  if (el.value.length) {
    el.classList.add('filled');
    el.parentNode.classList.add('filled');
  } else {
    el.classList.remove('filled');
    el.parentNode.classList.remove('filled');
  }
};

resetBtns?.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let targetId = e.currentTarget.dataset.id;

    if (pickers.length) {
      const targerPicker = pickers.find((picker) => picker.el.id === targetId);

      if (targerPicker) {
        targerPicker.setDate();
        checkFilled(targerPicker.el);
      }
    }
  });
});

const initPickers = (idArr) => {
  const select = document.querySelector('.resume__select-form');
  // select.click();
  Array.from(select.children).forEach((el) => {
    el.selected = false;
    select.children[2].selected = true;
  });

  if (!idArr.every((id) => document.querySelector(id))) {
    return;
  }

  if (Array.isArray(idArr)) {
    idArr.forEach((id) => {
      const picker = datePickerWithRange(id);
      pickers.push(picker);
    });
  }
};

initPickers(pickerIds);


