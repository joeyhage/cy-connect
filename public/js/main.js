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

var data = [{
  x: ['Attendance', 'Freshman', 'Sophomore','Junior','Senior'],
  y: [350,15,75,25,50,50],
  marker:{
    color: ['rgba(222,45,38,0.8)', 'rgba(204,204,204,1)', 'rgba(204,204,204,1)', 'rgba(204,204,204,1)', 'rgba(204,204,204,1)']
  },
  type: 'bar'
}];

Plotly.newPlot('myDiv', data);
