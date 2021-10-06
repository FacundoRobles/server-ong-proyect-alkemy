const express = require('express');
const router = express.Router();
const { saveActivity,deleteActivity,findActivity } = require('../controllers/activityController')

router.get('/', findActivity)
router.post('/', saveActivity)
router.put('/:id', saveActivity)
router.delete('/:id', deleteActivity)

module.exports = router;