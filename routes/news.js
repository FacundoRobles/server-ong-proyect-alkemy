'use strict';

const express = require('express');
const router = express.Router();
const { saveOne, fetchNews } = require('../controllers/newsController');

router.route('/')
      .get(fetchNews)
      .post(saveOne);

router.route('/:id')
      .get(fetchNews)

module.exports = router;
