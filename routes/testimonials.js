const express = require('express');
const router = express.Router();
const testimonialController = require('../controllers/testimonialController');

/* POST testimonials listing. */

router.post('/', testimonialController.createTestimonial);

module.exports = router;