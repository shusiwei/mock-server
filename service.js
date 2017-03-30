const express = require('express');
const app = express();
const routes = require('./routes');

app.get('/search/get_data_list', routes.search.get_data_list);
app.get('/search/get_keyword_list', routes.search.get_keyword_list);

const server = app.listen(3001, () => {
  console.log('listening on port %d', server.address().port);
});
