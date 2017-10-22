document.querySelector('body').addEventListener('submit', event => {
	const {target} = event;
	if (target.id === 'login-form') {
		event.preventDefault();
		const netid = target.elements.namedItem('netid').value;
		$.post({
			url: '/authorize',
			data: JSON.stringify({netid}),
			contentType: 'application/json',
			success: () => {
				window.location.pathname = '/';
			}
		});
	}
});
document.querySelector('body').addEventListener('click', event => {
	const {target} = event;
	if (window.location.pathname === '/') {
		const element = document.querySelector('.card.is-active');
		if (element) {
			event.preventDefault();
			element.classList.toggle('is-active');
			const nodeList = element.querySelectorAll('.event-details');
			for (const eventDetail of nodeList) {
				eventDetail.classList.toggle('is-hidden');
			}
		} else if (target.className === 'card-header-icon' ||
					target.className === 'icon' ||
					target.className === 'fa fa-info-circle') {
			event.preventDefault();
			const parentElement = $(target).closest('.home.card');
			$(parentElement).toggleClass('is-active');
			const nodeList = $(parentElement).find('.event-details');
			for (const eventDetail of nodeList) {
				$(eventDetail).toggleClass('is-hidden');
			}
		}
	}
	if (target.id === 'navBurger') {
		document.getElementById('navBurger').classList.toggle('is-active');
		document.getElementById('navMenu').classList.toggle('is-active');
	}
});
