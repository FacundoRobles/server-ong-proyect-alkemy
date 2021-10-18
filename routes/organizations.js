'use strict';

const express = require('express');
const router = express.Router();
const { fetchOrganization, fetchAllOrganization } = require('../controllers/organizationsController');

router.route('/')
      .get(fetchAllOrganization);

router.route('/:idOrganization')
      .get(fetchOrganization);
      
module.exports = router;
