const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');

app.use(bodyParser.urlencoded({extended: false}));
app.post('/search/get_data_list', routes.search.get_data_list);
app.post('/search/get_keyword_list', routes.search.get_keyword_list);

app.post('/wifi/get_main_data', routes.wifi.get_main_data);
app.post('/wifi/get_all_area_list', routes.wifi.get_all_area_list);
app.post('/wifi/get_wifi_list', routes.wifi.get_wifi_list);
app.post('/wifi/get_wifi_detail', routes.wifi.get_wifi_detail);
app.post('/wifi/get_store_list', routes.wifi.get_store_list);

const server = app.listen(3001, () => {
  console.log('listening on port %d', server.address().port);
});
