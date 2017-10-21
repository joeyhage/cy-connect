const express = require('express');

const app = express();

/**
 * Express configuration.
 */
app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/public/index.html');
});


/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log(`App is running on port ${app.get('port')} in ${app.get('env')} mode`);
});

module.exports = app;
