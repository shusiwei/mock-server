const express = require('express');
const router = express.Router();

const getMainData = require('./get_main_data');
const getAllAreaList = require('./get_all_area_list');
const getWifiList = require('./get_wifi_list');
const getWifiDetail = require('./get_wifi_detail');
const getStoreList = require('./get_store_list');

router.post('/get_main_data', getMainData);
router.post('/get_all_area_list', getAllAreaList);
router.post('/get_wifi_list', getWifiList);
router.post('/get_wifi_detail', getWifiDetail);
router.post('/get_store_list', getStoreList);

module.exports = router;
