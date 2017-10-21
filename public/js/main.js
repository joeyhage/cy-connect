document.getElementById('login-form').addEventListener('submit', event => {
	event.preventDefault();
	const netid = event.target.elements.namedItem('netid').value;
	console.log(netid);
	$.post({
		url: '/authorize',
		data: JSON.stringify({netid}),
		contentType: 'application/json',
		success: () => {
			window.location.pathname = '/';
		}
	});
});