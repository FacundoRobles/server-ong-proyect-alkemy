const express = require('express');
const activitiesRoutes = require('./activitiesRoutes');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/activities', activitiesRoutes)
module.exports = router;
