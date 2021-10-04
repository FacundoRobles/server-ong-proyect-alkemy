'use strict';

const express = require('express');
const router = express.Router();
const { fetchOrganization } = require('../controllers/organizationsController');

router.route('/:id/public')
      .get(fetchOrganization);
      
module.exports = router;
