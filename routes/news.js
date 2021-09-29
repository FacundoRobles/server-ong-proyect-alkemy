'use strict';

const express = require('express');
const router = express.Router();
const { saveOne, fetchAll } = require('../controllers/newsController');

router.route('/')
      .get(fetchAll)
      .post(saveOne);

module.exports = router;
