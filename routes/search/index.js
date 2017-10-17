const express = require('express');
const router = express.Router();

const getDataList = require('./get_data_list');
const getKeywordList = require('./get_keyword_list');

router.post('/get_data_list', getDataList);
router.post('/get_data_list', getKeywordList);

module.exports = router;
