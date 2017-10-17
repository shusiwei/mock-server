const express = require('express');
const router = express.Router();

const getMain = require('./get_main');
const getArea = require('./get_area');

router.post('/get_main', getMain);
router.post('/get_area', getArea);

module.exports = router;
