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

app.get('/', (req, res) => {
  res.render('App');
});

// app.get('/', (request, response) => {
//   response.sendFile(__dirname + '/public/index.html');
// });

// app.get('/login', (request, response) => {
//   response.sendFile(__dirname + '/public/login.html');
// });

// app.get('/stuorgs', (request, response) => {
//   response.sendFile(__dirname + '/public/stuorgs.html');
// });

// app.get('/events', (request, response) => {
//   response.sendFile(__dirname + '/public/events.html');
// });

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log(`App is running on port ${app.get('port')} in ${app.get('env')} mode`);
});

module.exports = app;
