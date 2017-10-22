const express = require('express'),
	bodyParser = require('body-parser'),
	reactViews = require('express-react-views'),
	app = express(),
	mysql = require('mysql');
require('dotenv').config();

let authorized = undefined, connection = undefined;

/**
 * Express configuration.
 */
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'js');
app.engine('js', reactViews.createEngine());

app.get('/*', (req, res) => {
	if (!connection) {
		connection = mysql.createConnection({
			host: process.env.DB_HOST,
			user: process.env.DB_USER,
			password: process.env.DB_PASS,
			database: process.env.DB_NAME
		});
		connection.connect();
	}
	if (authorized || req.path === '/login') {
		const page = determinePage(req.path);
		const pageProps = getPageProps(page);
		res.render(
			'App',
			{
				path: req.path,
				page: page,
				pageProps
			}
		);
	} else {
		res.redirect('/login');
	}
});

app.post('/authorize', (req, res) => {
	const {netid} = req.body;
	connection.query('SELECT * FROM checkin.Student WHERE netid=?', [netid], (error, results) => {
		if (error) {
			console.error(error);
			return res.sendStatus(500);
		}
		authorized = results[0];
		res.sendStatus(200);
	});
});

const determinePage = path => {
	switch (path) {
		case '/':
			return 'Home';
		case '/stuorgs':
			return 'StuOrgs';
		case '/events':
			return 'Events';
		case '/profile':
			return 'Profile';
		case '/login':
			return 'Login';
		case '/registration':
			return 'Registration';
		case '/checkin':
			return 'CheckIn';
		case '/admin-dashboard':
			return 'AdminDashboard';
	}
};

const getPageProps = page => {
	const props = {user: authorized};
	switch (page) {
	}
	return props;
};

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
	console.log(`App is running on port ${app.get('port')} in ${app.get('env')} mode`);
});

module.exports = app;
