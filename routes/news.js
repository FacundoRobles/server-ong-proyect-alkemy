'use strict';

const express = require('express');
const router = express.Router();
const { saveOne } = require('../controllers/newsController');

router.post('/', saveOne);

module.exports = router;