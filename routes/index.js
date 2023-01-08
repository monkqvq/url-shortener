const express = require('express');
const home = require('./modules/home');

const router = express.Router();

// modules
router.use('/', home);

module.exports = router;
