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
	if (target.id === 'navBurger') {
		document.getElementById('navBurger').classList.toggle('is-active');
		document.getElementById('navMenu').classList.toggle('is-active');
	}
});
