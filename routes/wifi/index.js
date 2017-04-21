const getMainData = require('./get_main_data');
const getAllAreaList = require('./get_all_area_list');
const getWifiList = require('./get_wifi_list');
const getWifiDetail = require('./get_wifi_detail');
const getStoreList = require('./get_store_list');

module.exports = {
  get_main_data: getMainData,
  get_all_area_list: getAllAreaList,
  get_wifi_list: getWifiList,
  get_wifi_detail: getWifiDetail,
  get_store_list: getStoreList
};
