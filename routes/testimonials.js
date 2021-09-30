const express = require('express');
const router = express.Router();
const testimonialController = require('../controllers/testimonialController');

/* POST testimonials listing. */

router.post('/', testimonialController.createTestimonial);
router.delete('/:id', testimonialController.deleteTestimonial);
router.get('/:id', testimonialController.fetchTestimonials);
router.get('/', testimonialController.fetchTestimonials);
router.put('/:id', testimonialController.updateTestimonial);

module.exports = router;