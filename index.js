const express = require('express'),
	bodyParser = require('body-parser'),
	reactViews = require('express-react-views'),
	app = express(),
	mysql = require('mysql'),
	moment = require('moment');
require('dotenv').config();

let authorized = undefined, connection = undefined;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'js');
app.engine('js', reactViews.createEngine());

app.get('/*', async (req, res) => {
	if (!connection) {
		connection = mysql.createConnection({
			host: process.env.DB_HOST,
			user: process.env.DB_USER,
			password: process.env.DB_PASS,
			database: process.env.DB_NAME
		});
		connection.connect();
	}
	if (req.path === '/logout') {
		authorized = undefined;
	} else if (authorized || req.path === '/login') {
		const page = determinePage(req.path);
		const pageProps = await getPageProps(page);
		res.render(
			'App',
			{
				path: req.path,
				page: page,
				pageProps
			}
		);
		return;
	}
	res.redirect('/login');
});

app.post('/authorize', (req, res) => {
	const {netid} = req.body;
	connection.query(
		'SELECT * FROM checkin.Student WHERE netid=?',
		[netid],
		(error, results) => {
			if (error) {
				console.error(error);
				return res.sendStatus(500);
			}
			if (results && results.length) {
				authorized = {...results[0]};
				connection.query(
					'SELECT * FROM checkin.Membership WHERE role IS NOT NULL AND netId=?',
					[netid],
					(error, results) => {
						if (error) {
							console.error(error);
							return res.sendStatus(500);
						}
						console.dir(results);
						if (results) {
							authorized.adminRoles = results.map(result => result.stuorgId);
						}
						res.sendStatus(200);
					}
				);
			} else {
				res.sendStatus(200);
			}
		}
	);
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

const getPageProps = async page => {
	const props = {user: authorized};
	switch (page) {
		case 'Home':
			const homePageProps = await getHomePageProps();
			if (homePageProps) {
				props.stuorgDetails = homePageProps.stuorgDetails;
				props.stuorgEvents = homePageProps.stuorgEvents;
			}
	}
	return props;
};

const getHomePageProps = () => {
	return new Promise((resolve, reject) => {
		const homePageProps = {
			stuorgDetails: undefined,
			stuorgEvents: undefined
		};
		connection.query(
			'SELECT DISTINCT stuorgId FROM checkin.Membership WHERE netId=?',
			[authorized.netId],
			(error, results) => {
				if (error) {
					console.error(error);
					return reject() ;
				}
				if (results && results.length) {
					const stuorgIds = results.map(result => result.stuorgId);
					const stuorgIdSet = stuorgIds.join(',');
					connection.query(
						`SELECT * FROM checkin.Stuorg WHERE stuorgId IN (${stuorgIdSet})`,
						(error, results) => {
							if (error) {
								console.error(error);
								return reject();
							}
							homePageProps.stuorgDetails = results;
							if (homePageProps.stuorgEvents !== undefined) {
								resolve(homePageProps);
							}
						}
					);
					connection.query(
						'SELECT checkin.Event.*, checkin.Stuorg.stuorgName ' +
						'FROM checkin.Event ' +
						'INNER JOIN checkin.Stuorg ON checkin.Event.stuorgId = checkin.Stuorg.stuorgId ' +
						'WHERE checkin.Event.date>=? AND checkin.Event.stuorgId IN ('+stuorgIdSet+')',
						[moment().format('YYYY-MM-DD')],
						(error, results) => {
							if (error) {
								console.error(error);
								return reject();
							}
							homePageProps.stuorgEvents = results;
							if (homePageProps.stuorgDetails !== undefined) {
								resolve(homePageProps);
							}
						}
					);
				} else {
					resolve();
				}
			}
		);
	});
};

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
	console.log(`App is running on port ${app.get('port')} in ${app.get('env')} mode`);
});

module.exports = app;
