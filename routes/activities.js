const express = require('express');
const router = express.Router();
const { saveActivity } = require('../controllers/activityController')

router.post('/', saveActivity)
//router.get('/', activityController.getAllActivity)

module.exports = router;