const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

/* POST testimonials listing. */

router.post('/', contactController.createContact);


module.exports = router;