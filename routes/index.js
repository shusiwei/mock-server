const express = require('express');
const router = express.Router();

const search = require('./search');
const wifi = require('./wifi');
const wireless = require('./wireless');

router.use('/search', search);
router.use('/wifi', wifi);
router.use('/wireless', wireless);

module.exports = router;