const express = require('express');
const reactViews = require('express-react-views');

const app = express();

/**
 * Express configuration.
 */
app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'js');
app.engine('js', reactViews.createEngine());

app.get('/*', (req, res) => {
	res.render(
  		'App',
  		{
  			path: req.path
  		}
	);
});

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  	console.log(`App is running on port ${app.get('port')} in ${app.get('env')} mode`);
});

module.exports = app;
