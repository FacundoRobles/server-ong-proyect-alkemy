'use strict';

const express = require('express');
const router = express.Router();
const { fetchOrganization, fetchAllOrganization, updateOrganizationController, deletedOrganizationController, createOrganizationController } = require('../controllers/organizationsController');

router.route('/')
      .get(fetchAllOrganization)
      .post(createOrganizationController);

router.route('/:idOrganization')
      .get(fetchOrganization)
      .put(updateOrganizationController)
      .delete(deletedOrganizationController);
      
module.exports = router;
