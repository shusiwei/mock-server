const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');

app.use(bodyParser.urlencoded({extended: false}));
app.use('/', routes);

const server = app.listen(3001, () => {
  console.log('listening on port %d', server.address().port);
});
