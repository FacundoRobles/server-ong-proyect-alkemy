'use strict';

const express = require('express');
const router = express.Router();
const { saveOne, fetchNews, deleteOne } = require('../controllers/newsController');

router.route('/')
      .get(fetchNews)
      .post(saveOne);

router.route('/:id')
      .get(fetchNews)
      .delete(deleteOne)
      .put(saveOne);
      
module.exports = router;
