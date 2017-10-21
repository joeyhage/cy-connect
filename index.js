const express = require('express');
const bodyParser = require('body-parser');
const reactViews = require('express-react-views');

const app = express();

let authorized = false;

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
	authorized = req.body.netid;
	res.sendStatus(200);
});

const determinePage = path => {
  switch(path) {
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
   }
};

const getPageProps = page => {
  switch(page) {
    
  }
};

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  	console.log(`App is running on port ${app.get('port')} in ${app.get('env')} mode`);
});

module.exports = app;
