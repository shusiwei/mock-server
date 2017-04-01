const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');

app.use(bodyParser.urlencoded({extended: false}));
app.post('/search/get_data_list', routes.search.get_data_list);
app.post('/search/get_keyword_list', routes.search.get_keyword_list);

const server = app.listen(3001, () => {
  console.log('listening on port %d', server.address().port);
});
